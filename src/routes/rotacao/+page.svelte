<script lang="ts">
    import Graphcard from "../../components/Graphcard.svelte";
    import { infoRows } from "../global";
    import { P } from "flowbite-svelte";
</script>

<div class="h-full w-full p-8">
    <P>{$infoRows[0].pich + "\n" + $infoRows[0].yaw + "\n" + $infoRows[0].roll}</P>
</div>