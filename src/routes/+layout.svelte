<script lang="ts">
    import { onDestroy } from 'svelte';
	import '../app.css';
    import { infoRows } from './global';
    import Sidemenu from '../components/Sidemenu.svelte';
	let { children } = $props();

	async function fetchRows() {
		console.log('fetching');

        const response = await fetch(
            '/api/get-telemetry?rows=10',
            {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
        );

        infoRows.set(await response.json());
    }
	
	const updateInterval = setInterval(fetchRows, 1000);
    
    onDestroy(() => {
        clearInterval(updateInterval);
    });
</script>

<main class="h-screen w-screen min-w-[800px] flex bg-gray-200 dark:bg-gray-900">
	<Sidemenu />
	<div class="h-full w-6/7 min-w-[600px]">
		{@render children()}
	</div>
</main>