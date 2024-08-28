<script lang="ts">
	import { AppBar, AppLayout, NavItem } from 'svelte-ux';
	import '../app.css';
	import { page } from '$app/stores';
	import Instagram from '$lib/icons/Instagram.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	const SocialMediaIcons: HTMLAnchorElement[] = [];

	onMount(() => {
		anime({
			targets: SocialMediaIcons,
			scale: 1.2,
			duration: 600,
			easing: 'easeInOutQuad'
		});
	});

	// Anime.js hover animation
	const handleMouseEnter = (index: number) => {
		anime({
			targets: SocialMediaIcons[index],
			scale: 1,
			duration: 200,
			easing: 'easeInOutQuad'
		});
	};

	const handleMouseLeave = (index: number) => {
		anime({
			targets: SocialMediaIcons[index],
			scale: 1.2,
			duration: 200,
			easing: 'easeInOutQuad'
		});
	};
</script>

<AppLayout areas="'header header' 'aside main'">
	<svelte:fragment slot="nav">
		<div class="px-4">
			<NavItem
				text="Home"
				currentUrl={$page.url}
				path="/"
				classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
			/>
			<NavItem
				text="Pepper"
				currentUrl={$page.url}
				path="/pepper"
				classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
			/>
			<NavItem
				text="USA"
				currentUrl={$page.url}
				path="/usa"
				classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
			/>
			<NavItem
				text="Si's"
				currentUrl={$page.url}
				path="/sis"
				classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
			/>
			<NavItem
				text="M-Drill"
				currentUrl={$page.url}
				path="/mdrill"
				classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
			/>
			<NavItem
				text="Side out"
				currentUrl={$page.url}
				path="/sideout"
				classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
			/>
			<NavItem
				text="Burn out"
				currentUrl={$page.url}
				path="/burnout"
				classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
			/>
			<NavItem
				text="Side-to-side"
				currentUrl={$page.url}
				path="/sidetoside"
				classes={{ root: 'pl-3', active: 'bg-primary/10 text-primary' }}
			/>
		</div>
	</svelte:fragment>

	<AppBar title="Volleyball Drills">
		<div slot="actions"></div>
	</AppBar>

	<main>
		<slot />
		<div class="absolute bottom-5 right-5 text-right">
			Created by,
			<br />
			Tobias Fabrin Gade
			<div class="flex flex-row gap-1">
				<a
					bind:this={SocialMediaIcons[0]}
					on:mouseenter={() => handleMouseEnter(0)}
					on:mouseleave={() => handleMouseLeave(0)}
					href="https://www.linkedin.com/in/tobiasgade/"
					target="_blank"
					class="text-blue-500"
				>
					<LinkedIn width={32} height={32} />
				</a>

				<a
					bind:this={SocialMediaIcons[1]}
					on:mouseenter={() => handleMouseEnter(1)}
					on:mouseleave={() => handleMouseLeave(1)}
					href="https://www.instagram.com/tobiasfg"
					target="_blank"
					class="text-blue-500"
				>
					<Instagram width={32} height={32} />
				</a>
				<a
					bind:this={SocialMediaIcons[2]}
					on:mouseenter={() => handleMouseEnter(2)}
					on:mouseleave={() => handleMouseLeave(2)}
					href="https://www.facebook.com/Tobias.Fabrin.Gade/"
					target="_blank"
					class="text-blue-500"
				>
					<Facebook width={32} height={32} />
				</a>
				<a
					bind:this={SocialMediaIcons[3]}
					on:mouseenter={() => handleMouseEnter(3)}
					on:mouseleave={() => handleMouseLeave(3)}
					href="https://github.com/TobiasFG/"
					target="_blank"
					class="text-blue-500"
				>
					<GitHub width={32} height={32} />
				</a>
			</div>
		</div>
	</main>
</AppLayout>
