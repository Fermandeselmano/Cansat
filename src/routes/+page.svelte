<script lang="ts">
    import { infoRows } from "./global";
    import Infocard from "../components/Infocard.svelte";
    import MapInfocard from "../components/MapInfocard.svelte";
</script>

<div class="h-full w-full grid grid-cols-4 p-8 gap-8 justify-items-center">
    <Infocard title="Temperatura" value={$infoRows[0].temperatura + "°C"} href="/temperatura" y_key="temperatura" />
    <Infocard title="Humidade" value={$infoRows[0].humidade + "%"} href="/humidade" y_key="humidade" />
    <Infocard title="Pressão" value={$infoRows[0].presssao + "hPa"} href="/pressao" y_key="presssao" />
    <Infocard title="Velocidade" value={$infoRows[0].velocidade + "m/s"} href="/velocidade" y_key="velocidade" />
    <Infocard title="Voltimetro" value={$infoRows[0].voltagem + "V"} href="/voltimetro" y_key="voltagem" />
    <MapInfocard />
    <Infocard title="Longitude" value={$infoRows[0].longitude + ""} href="/longitude" y_key="longitude" />
</div>