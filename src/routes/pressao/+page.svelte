<script lang="ts">
    import Graphcard from "../../components/Graphcard.svelte";
    import { infoRows } from "../global";
</script>

<div class="h-full w-full p-8">
    <Graphcard title="Pressão" value={$infoRows[0].presssao + "hPa"} href="/pressao" y_key="presssao" />
</div>