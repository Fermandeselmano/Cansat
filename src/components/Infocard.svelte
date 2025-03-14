<script lang="ts">
    import { Card, P } from "flowbite-svelte";

    export let title: string = "Default";
    export let value: string = "0.00";
    export let href: string = "#";
</script>

<Card class="flex flex-col align-middle justify-center gap-2" href={href}>
    <P class="font-semibold text-4xl text-center">{value}</P>
    <P class="font-bold text-xl text-center">{title}</P>
</Card>