<script lang="ts">
  import { Card, P } from "flowbite-svelte";
  export let title: string = "Rotação";
  export let pitch: number;
  export let yaw: number;
  export let roll: number;
  export let href: string = "#";
</script>

<Card
  href={href}
  class="relative flex flex-col items-center justify-center gap-4 p-6 bg-[url('/redcan.png')] bg-contain bg-no-repeat bg-center"
>
  <!-- Overlay for better text visibility (optional) -->

  <!-- Content Layer -->
  <div class="relative z-10 text-center space-y-1">
    <P class="text-lg font-medium">Pitch: {pitch.toFixed(2)}°</P>
    <P class="text-lg font-medium">Yaw: {yaw.toFixed(2)}°</P>
    <P class="text-lg font-medium">Roll: {roll.toFixed(2)}°</P>
    <P class="font-bold text-xl mt-2">{title}</P>
  </div>
</Card>
