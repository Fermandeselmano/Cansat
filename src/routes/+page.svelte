<script lang="ts">
    import { onDestroy } from "svelte";
    import { infoRows } from "./global";
    import Infocard from "../components/Infocard.svelte";
    import MapInfocard from "../components/MapInfocard.svelte";
</script>

<div class="h-full w-full grid grid-cols-4 p-8 gap-8 justify-items-center">
    <Infocard title="Temperatura" value={$infoRows[0].temperatura + "°C"} />
    <Infocard title="Humidade" value={$infoRows[0].humidade + "%"} />
    <Infocard title="Pressão" value={$infoRows[0].presssao + "hPa"} />
    <Infocard title="Velocidade" value={$infoRows[0].velocidade + "m/s"} />
    <Infocard title="Voltimetro" value={$infoRows[0].voltagem + "V"} />
    <MapInfocard />
    <Infocard title="Longitude" value={$infoRows[0].longitude + ""} />
</div>