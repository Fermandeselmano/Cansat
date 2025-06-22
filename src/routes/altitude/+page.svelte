<script lang="ts">
    import Graphcard from "../../components/Graphcard.svelte";
    import { infoRows } from "../global";

    
</script>

<div class="h-full w-full p-8">
    <Graphcard title="Altitude" value={$infoRows[0].altitude + "m"} href="/altitude" y_key="altitude" />
</div>