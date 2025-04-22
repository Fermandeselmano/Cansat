<script lang="ts">
    import { infoRows } from "../global";
    import MapInfocard from "../../components/MapInfocard.svelte";
</script>

<div class="h-full w-full p-8">
    <MapInfocard coordinates={[$infoRows[0].latitude, $infoRows[0].longitude]} zoom={13} />
</div>

