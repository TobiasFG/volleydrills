<script>
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarBrand,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { HomeOutline } from 'flowbite-svelte-icons';
	import logo from '$lib/images/logo.png';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
	$: activeUrl = $page.url.pathname;

	let site = {
		name: 'Volleyball Drills',
		href: '/',
		img: logo
	};
</script>

<Sidebar {activeUrl}>
	<SidebarWrapper>
		<SidebarGroup>
			<SidebarBrand {site} />
			<SidebarItem label="Home">
				<svelte:fragment slot="icon">
					<HomeOutline
						class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
