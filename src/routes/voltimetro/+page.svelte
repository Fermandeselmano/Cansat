<script lang="ts">
    import Graphcard from "../../components/Graphcard.svelte";
    import { infoRows } from "../global";
</script>

<div class="h-full w-full p-8">
    <Graphcard title="Voltimetro" value={$infoRows[0].voltagem + "V"} href="/voltimetro" y_key="voltagem" />
</div>