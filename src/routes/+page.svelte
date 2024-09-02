<script lang="ts">
	import Player from '$lib/components/Player.svelte';
	import PlayerDescriptionCard from '$lib/components/PlayerDescriptionCard.svelte';
	import { Button, Gallery } from 'flowbite-svelte';

	const yearOfBirth = 1998;
	const myAge = new Date().getFullYear() - yearOfBirth;
	const yearsOfPlaying = myAge - 7;
</script>

<div class=" mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
	<div>
		<h1 class="mb-4 text-3xl font-bold">About</h1>

		<p class=" mb-2">
			Volleyball Drills is your one-stop hub for all things volleyball. I’ve gathered a wide range
			of drills in one easy-to-access place, perfect for coaches, players, and enthusiasts. Whether
			you’re planning your next practice or just looking to sharpen your skills, you’ll hopefully
			find detailed explanations and animations to help you along the way.
		</p>

		<p class="mb-2">
			My main focus is on the 5-1 volleyball formation and rotation system, but stay tuned — other
			systems might make an appearance in the future.
		</p>

		<p class="mb-12">
			Feel free to contact me on the social networks, or contribute directly on GitHub, if you have
			feedback or improvements.
		</p>

		<h1 class="mb-4 text-3xl font-bold">Disclaimer</h1>
		<p>
			This website is my volleyball playground — a hobby project where I share my personal take on
			practicing and coaching the game. Expect a few creative spins, possibly a rogue term or two,
			and opinions that might not match everyone else's. Consider yourself warned!
		</p>
	</div>
	<div>
		<h1 class="mb-4 text-3xl font-bold">About Me</h1>

		<p class="mb-6">
			Volleyball has been my game since I was 7. Fast forward to now, at {myAge} years old, and that's
			{yearsOfPlaying}
			amazing years on the court. Over the years, I've thrown myself into many aspects of the sport.
		</p>

		<h3 class="mb-1 text-sm font-bold">Playing Experience</h3>
		<p class="mb-6">
			I’ve played different levels in Volleyball Danmark, starting on the kids level and moving
			through U15, U17, U20, Jyllandsserien, and both the 2nd and 1st divisions. My main gig?
			Setting up plays as a setter in the 1st division since I was 15. But I've also moonlighted as
			a libero and outside hitter in the youth leagues for some extra fun.
		</p>

		<h3 class="mb-1 text-sm font-bold">Coaching Experience</h3>
		<p>
			My coaching journey kicked off in 2012 with U15s. Since then, I’ve been the head coach for the
			Jyllandsserie team for about 4 years, and in 2023, I took the leap to coach the 1st division
			women’s team. It's been a challenging and rewarding experience!
		</p>
	</div>
</div>

<h1 class="mb-4 text-3xl font-bold">Terminology</h1>

<div class=" mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
	<p>
		Before diving into the drills and strategies, let's make sure we're all speaking the same
		language. The terms below are your playbook for navigating the site. They might seem a bit dry,
		but trust me — knowing this stuff will make everything else way easier (and more fun) to master.
		So, let’s get on the same page and jump into my rouge volleyball vocab!
	</p>
	<div class="flex flex-row flex-wrap">
		<p>If you’re not familiar with the following things consider giving them a look as well</p>
		<div class="">
			<Button color="dark">The court</Button>
		</div>
	</div>
</div>

<h2 class="mb-4 text-xl font-bold">Positions</h2>

<Gallery class=" grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 xl:grid-cols-3">
	<PlayerDescriptionCard type="S">
		<svelte:fragment slot="description">
			The setter is the team’s playmaker, setting up the ball for attackers and orchestrating the
			offense. They master the art of precise, finely-tuned movements and they’re always convinced
			they could’ve ace that last failed serve reception.
		</svelte:fragment>
	</PlayerDescriptionCard>

	<PlayerDescriptionCard type="A">
		<svelte:fragment slot="description">
			The attacker is your team’s ace at smashing the ball from the left antenna, turning every set
			into a chance for a jaw-dropping spike. Just a heads-up: they always feel like the setter
			could give them a bit more sets in the play-calling!
		</svelte:fragment>
		<svelte:fragment slot="role variants">
			<Player type="AC" />
			<Player type="AF" />
		</svelte:fragment>
	</PlayerDescriptionCard>

	<PlayerDescriptionCard type="M">
		<svelte:fragment slot="description">
			The middle blocker is the team’s personal bouncer—tall and hard-hitting, blocking every attack
			from the left, middle, or right side of the net to keep the balls away. Though they usually
			leave the defensive work to the libero, but let’s face it, their job is tough enough already!
		</svelte:fragment>
		<svelte:fragment slot="role variants">
			<Player type="MC" />
			<Player type="MF" />
		</svelte:fragment>
	</PlayerDescriptionCard>

	<PlayerDescriptionCard type="O">
		<svelte:fragment slot="description">
			The opposite, or diagonal, is your team’s left-hand offensive at the right antenna, playing
			the ultimate “opposite” role from the setter. They're usually the go-to player for those
			thrilling out-of-system plays—when they remember where the 3-meter line is.
		</svelte:fragment>
	</PlayerDescriptionCard>

	<PlayerDescriptionCard type="L">
		<svelte:fragment slot="description">
			The libero is the team’s defensive wizard—expert at digging and passing, and always swooping
			in to save the day while the rest of are trying to figure out how to block or attack.
		</svelte:fragment>
	</PlayerDescriptionCard>

	<PlayerDescriptionCard type="C">
		<svelte:fragment slot="description">
			The coach is the team's resident "genius"—part strategist, part motivational speaker, and a
			full-time expert at yelling "Focus!" and "Timeout!" at the most random moments, convinced it
			makes all the difference.
		</svelte:fragment>
	</PlayerDescriptionCard>
</Gallery>
