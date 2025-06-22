<script lang="ts">
    import Graphcard from "../../components/Graphcard.svelte";
    import { infoRows } from "../global";

    
</script>

<div class="h-full w-full p-8">
    <Graphcard title="Velocidade" value={$infoRows[0].velocidade + "m/s"} href="/velocidade" y_key="velocidade" />
</div>