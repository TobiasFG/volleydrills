<script>
	import { page } from '$app/stores';
	import Missing from '$lib/images/404.png?enhanced';
</script>

{#if $page.status === 404}
	<div class="flex h-full w-full items-center justify-center">
		<div class="block">
			<enhanced:img class="mx-auto w-40" src={Missing} alt="Instagram link" />
			<h1 class="text-center">Oh..</h1>
			<p class="block text-center">
				You found a missing page. It might still be under creation or maybe you visisted a broken
				link.
			</p>
		</div>
	</div>
{/if}
