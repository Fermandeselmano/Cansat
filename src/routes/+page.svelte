<script lang="ts">
    import { onDestroy } from "svelte";
    import { infoRows } from "./global";
</script>

{#each $infoRows as row }
    <p>{row.temperatura}</p>
{/each}