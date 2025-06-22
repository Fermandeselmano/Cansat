<script lang="ts">
    import Graphcard from "../../components/Graphcard.svelte";
    import { infoRows } from "../global";

    
</script>

<div class="h-full w-full p-8">
    <Graphcard title="Humidade" value={$infoRows[0].humidade + "%"} href="/humidade" y_key="humidade" />
</div>