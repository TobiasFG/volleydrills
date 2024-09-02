<script>
	import { page } from '$app/stores';
	import SidebarNotification from './SidebarNotification.svelte';
	import Credit from './Credit.svelte';
	import { base } from '$app/paths';
	$: activeUrl = $page.url.pathname;
</script>

<div
	class=" flex h-full min-w-52 flex-col justify-between overflow-y-auto border-r border-gray-200 px-3 py-4 dark:border-gray-700"
>
	<div>
		<a href="{base}/">Home</a>
		<p>Roles</p>
		<p>Setter</p>
		<p>Attacker</p>
		<p>Middle</p>
		<p>Opposite</p>
		<p>Libero</p>
		<p>Rotations 5:1</p>
		<p>The court</p>
		<p>Pepper</p>
	</div>

	<div class="flex flex-col">
		<SidebarNotification></SidebarNotification>
		<Credit />
	</div>
</div>

<style>
</style>
