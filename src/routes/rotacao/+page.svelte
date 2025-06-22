<script lang="ts">
    import CanCard from "../../components/CanCard.svelte";
    import Graphcard from "../../components/Graphcard.svelte";
    import { infoRows } from "../global";
    import { P } from "flowbite-svelte";
</script>

<div class="h-full w-full p-8">
    <CanCard pitch={$infoRows[0].pich} yaw={$infoRows[0].yaw} roll={$infoRows[0].roll} href="/rotacao" />
    <P class="text-center mt-4 text-2xl">{$infoRows[0].pich + "\n" + $infoRows[0].yaw + "\n" + $infoRows[0].roll}</P>
</div>