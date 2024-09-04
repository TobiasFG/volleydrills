<script lang="ts">
	import Facebook from '$lib/images/social-media-logos/Facebook.png?enhanced';
	import GitHubBlack from '$lib/images/social-media-logos/GitHub Black.png?enhanced';
	import GitHubWhite from '$lib/images/social-media-logos/GitHub White.png?enhanced';
	import Instagram from '$lib/images/social-media-logos/Instagram.png?enhanced';
	import LinkedIn from '$lib/images/social-media-logos/LinkedIn.png?enhanced';
	import SnapChat from '$lib/images/social-media-logos/Snapchat.png?enhanced';
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

<div class=" my-1.5 rounded px-2.5 py-2 shadow outline outline-1 outline-sky-400">
	<p class="text-xs">Created by</p>
	<p class="text-md mb-3">Tobias Fabrin Gade</p>
	<div class="flex flex-row justify-between">
		<a
			bind:this={SocialMediaIcons[0]}
			on:mouseenter={() => handleMouseEnter(0)}
			on:mouseleave={() => handleMouseLeave(0)}
			href="https://www.linkedin.com/in/tobiasgade/"
			target="_blank"
			class="text-blue-500"
		>
			<enhanced:img class="h-6 w-6" src={LinkedIn} alt="Instagram link" />
		</a>

		<a
			bind:this={SocialMediaIcons[1]}
			on:mouseenter={() => handleMouseEnter(1)}
			on:mouseleave={() => handleMouseLeave(1)}
			href="https://www.instagram.com/tobiasfg"
			target="_blank"
			class="text-blue-500"
		>
			<enhanced:img class="h-6 w-6" src={Instagram} alt="Instagram link" />
		</a>
		<a
			bind:this={SocialMediaIcons[2]}
			on:mouseenter={() => handleMouseEnter(2)}
			on:mouseleave={() => handleMouseLeave(2)}
			href="https://www.facebook.com/Tobias.Fabrin.Gade/"
			target="_blank"
			class="text-blue-500"
		>
			<enhanced:img class="h-6 w-6" src={Facebook} alt="Facebook link" />
		</a>
		<a
			bind:this={SocialMediaIcons[3]}
			on:mouseenter={() => handleMouseEnter(3)}
			on:mouseleave={() => handleMouseLeave(3)}
			href="https://github.com/TobiasFG/"
			target="_blank"
			class="rounded-full bg-white text-blue-500"
		>
			<enhanced:img class="h-6 w-6" src={GitHubBlack} alt="GitHub link" />
		</a>
		<a
			bind:this={SocialMediaIcons[4]}
			on:mouseenter={() => handleMouseEnter(4)}
			on:mouseleave={() => handleMouseLeave(4)}
			href="https://snapchat.com/t/bZElaXvy"
			target="_blank"
			class="text-blue-500"
		>
			<enhanced:img class="h-6 w-6" src={SnapChat} alt="Snapchat link" />
		</a>
	</div>
</div>
