<script lang="ts">
	import '../app.css';
	import FloatingCredit from '$lib/components/FloatingCredit.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<Sidebar />

<body class="p-1.5 antialiased">
	<ThemeSwitcher />
	<main>
		<slot />
	</main>
	<FloatingCredit />
</body>
