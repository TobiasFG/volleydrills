<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class=" h-screen overflow-hidden antialiased">
	<Navbar />
	<main class="flex h-[calc(100%-4rem)] flex-row">
		<Sidebar />
		<div class="h-full w-full overflow-y-scroll px-16 py-8">
			<slot />
		</div>
	</main>
</div>
