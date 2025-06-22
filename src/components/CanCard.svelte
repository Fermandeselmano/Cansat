<script lang="ts">
  import { Card, P } from "flowbite-svelte";
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { onMount } from 'svelte';

  export let title: string = "Rotação";
  export let pitch: number;
  export let yaw: number;
  export let roll: number;
  export let href: string = "#";

  let container: HTMLDivElement;
  let model: THREE.Object3D;
  let scene: THREE.Scene;

  const targetRotation = new THREE.Euler();
  const lerpFactor = 0.1;

  onMount(() => {
    scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const hemi = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.4);
    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(5, 10, 7.5);
    scene.add(ambient, hemi, directional);

    const loader = new GLTFLoader();
    loader.load('/coca_cola_soda_can.glb', (gltf) => {
      const rawModel = gltf.scene;

      rawModel.traverse((child) => {
        if (child.isMesh && child.material) {
          const mat = child.material as THREE.MeshStandardMaterial;
          if (mat.metalness !== undefined) mat.metalness = 0.3;
          if (mat.roughness !== undefined) mat.roughness = 0.1;
          mat.needsUpdate = true;
        }
      });

      const box = new THREE.Box3().setFromObject(rawModel);
      const center = new THREE.Vector3();
      box.getCenter(center);
      rawModel.position.sub(center);

      const pivot = new THREE.Group();
      pivot.add(rawModel);
      pivot.scale.set(2, 2, 2);
      scene.add(pivot);
      model = pivot;
    });

    const animate = () => {
      requestAnimationFrame(animate);

      targetRotation.x = pitch * (Math.PI / 180);
      targetRotation.y = yaw * (Math.PI / 180);
      targetRotation.z = roll * (Math.PI / 180);

      if (model) {
        model.rotation.x += (targetRotation.x - model.rotation.x) * lerpFactor;
        model.rotation.y += (targetRotation.y - model.rotation.y) * lerpFactor;
        model.rotation.z += (targetRotation.z - model.rotation.z) * lerpFactor;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  });
</script>

<style>
  .canvas-container {
    width: 100%;
    height: 250px;
  }
</style>

<Card
  href={href}
  class="relative flex flex-col items-center justify-center gap-4  w-full !max-w-full h-full"
>
  <div bind:this={container} class="canvas-container z-0"></div>

  <div class="relative z-10 text-center space-y-1">
    <P class="">{pitch + "\n" + yaw + "\n" + roll}</P>
    <P class="font-bold text-xl mt-2">{title}</P>
  </div>
</Card>
