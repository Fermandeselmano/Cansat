<script lang="ts">
    import { onDestroy } from 'svelte';
	import '../app.css';
    import { infoRows } from './global';
	let { children } = $props();

	async function fetchRows() {
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

{@render children()}