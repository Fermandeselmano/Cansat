<script lang="ts">
    import Graphcard from "../../components/Graphcard.svelte";
    import { infoRows } from "../global";

    
</script>

<div class="h-full w-full p-8">
    <Graphcard title="Temperatura" value={$infoRows[0].temperatura + "°C"} href="/temperatura" y_key="temperatura" />
</div>