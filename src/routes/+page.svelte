<script lang="ts">
    import { infoRows } from "./global";
    import Infocard from "../components/Infocard.svelte";
    import MapInfocard from "../components/MapInfocard.svelte";
    import Graphcard from "../components/Graphcard.svelte";7
    import CanCard from "../components/CanCard.svelte";
</script>

<div class="h-full w-full grid grid-cols-4 p-8 gap-8 justify-items-center">
    <Graphcard title="Temperatura" value={$infoRows[0].temperatura + "°C"} href="/temperatura" y_key="temperatura" />
    <Graphcard title="Humidade" value={$infoRows[0].humidade + "%"} href="/humidade" y_key="humidade" />
    <Graphcard title="Pressão" value={$infoRows[0].presssao + "hPa"} href="/pressao" y_key="presssao" />
    <Graphcard title="Velocidade" value={$infoRows[0].velocidade + "m/s"} href="/velocidade" y_key="velocidade" />
    <Graphcard title="Voltimetro" value={$infoRows[0].voltagem + "V"} href="/voltimetro" y_key="voltagem" />
    <MapInfocard coordinates={[$infoRows[0].latitude, $infoRows[0].longitude]} zoom={13} />
    <CanCard pitch={$infoRows[0].pich} yaw={$infoRows[0].yaw} roll={$infoRows[0].roll} href="/rotacao" />
</div>