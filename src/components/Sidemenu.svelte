<script lang="ts">
    import { page } from '$app/stores';
    import { DarkMode, P, Sidebar, SidebarBrand, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    import { HomeSolid, PlaySolid } from 'flowbite-svelte-icons';

    let site = {
        name: 'Cansat',
        href: '/',
        img: '/logo.png'
    }

    $: activeUrl = $page.url.pathname;
</script>

<Sidebar class="h-full w-1/7 min-w-[200px] shadow-2xl relative" {activeUrl}>
    <SidebarWrapper class="h-full bg-white">
        <SidebarGroup>
            <SidebarBrand href="/" {site} />
        </SidebarGroup>
        
        <SidebarGroup border>
            <SidebarItem label="Dashboard" href="/" class="font-medium">
                <svelte:fragment slot="icon">
                    <HomeSolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>
        </SidebarGroup>

        <SidebarGroup border>
            <SidebarItem label="Altitude" href="/altitude" class="font-medium">
                <svelte:fragment slot="icon">
                    <PlaySolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>

            <SidebarItem label="Temperatura" href="/temperatura" class="font-medium">
                <svelte:fragment slot="icon">
                    <PlaySolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>

            <SidebarItem label="Humidade" href="/humidade" class="font-medium">
                <svelte:fragment slot="icon">
                    <PlaySolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>

            <SidebarItem label="Pressão" href="/pressao" class="font-medium">
                <svelte:fragment slot="icon">
                    <PlaySolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>

            <SidebarItem label="Velocidade" href="/velocidade" class="font-medium">
                <svelte:fragment slot="icon">
                    <PlaySolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>

            <SidebarItem label="Voltimetro" href="/voltimetro" class="font-medium">
                <svelte:fragment slot="icon">
                    <PlaySolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>

            <SidebarItem label="Posição" href="/posicao" class="font-medium">
                <svelte:fragment slot="icon">
                    <PlaySolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>

            <SidebarItem label="Rotação" href="/rotacao" class="font-medium">
                <svelte:fragment slot="icon">
                    <PlaySolid class="w-5 h-5" />
                </svelte:fragment>
            </SidebarItem>
        </SidebarGroup>
    </SidebarWrapper>

    <div class="absolute top-2 right-2">
        <DarkMode />
    </div>

    <P class="absolute bottom-2 left-2 text-xs">PAP realizada por Elmano Fernandes</P>
</Sidebar>
