<script lang="ts">
    import { Card, P } from "flowbite-svelte";
    export let title: string = "Card Title";
    export let value: string = "Some info…";
    export let href: string = "#";
  </script>
  
  <Card href={href} class="flex flex-col items-center justify-center gap-2 p-4">
      <P class="font-semibold text-4xl text-center">{value}</P>
      <P class="font-bold text-xl text-center">{title}</P>
  </Card>
  