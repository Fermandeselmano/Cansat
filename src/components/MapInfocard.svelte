<!-- src/components/MapInfocard.svelte -->
<script lang="ts">
    import { Card } from 'flowbite-svelte';
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
  
    export let coordinates: [number, number] | [number, number, number] = [0, 0];
    export let zoom: number = 13;
  
    let mapContainer: HTMLDivElement;
    let map: any;
    let marker: any;
    let updateInterval: ReturnType<typeof setInterval>;
  
    onMount(async () => {
      if (!browser) return;
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');
  
      const [lat, lng] = coordinates;
      map = L.map(mapContainer).setView([lat, lng], zoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
  
      marker = L.marker([lat, lng]).addTo(map);
  
      updateInterval = setInterval(() => {
        const [newLat, newLng] = coordinates;
        marker.setLatLng([newLat, newLng]);
        map.panTo([newLat, newLng]);
      }, 1000);
    });
  
    onDestroy(() => {
      clearInterval(updateInterval);
      if (map) map.remove();
    });
  </script>
  
  <Card class="p-0 col-span-2 w-full h-full">
    <div bind:this={mapContainer} class="h-full w-full"></div>
  </Card>
  