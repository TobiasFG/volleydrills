<script lang="ts">
	import Player from '$lib/components/Player.svelte';
	import PlayerDescriptionCard from '$lib/components/PlayerDescriptionCard.svelte';
	import TagEquipment from '$lib/components/TagEquipment.svelte';
	import TagSize from '$lib/components/TagSize.svelte';
	import TagSkill from '$lib/components/TagSkill.svelte';
	import { Gallery } from 'flowbite-svelte';

	const yearOfBirth = 1998;
	const myAge = new Date().getFullYear() - yearOfBirth;
	const yearsOfPlaying = myAge - 7;
</script>

<div class=" mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
	<div>
		<h1>About</h1>

		<p class="mb-6">
			Volleyball Drills is your one-stop hub for all things volleyball. I’ve gathered a wide range
			of drills in one easy-to-access place, perfect for coaches, players, and enthusiasts. Whether
			you’re planning your next practice or just looking to sharpen your skills, you’ll hopefully
			find detailed explanations and animations to help you along the way.
		</p>

		<p class="mb-6">
			My main focus is on the 5-1 volleyball formation and rotation system, but stay tuned — other
			systems might make an appearance in the future.
		</p>

		<p class="mb-12">
			Feel free to contact me on the social networks, or contribute directly on GitHub, if you have
			feedback or improvements.
		</p>

		<h1>Disclaimer</h1>
		<p>
			This website is my volleyball playground — a hobby project where I share my personal take on
			practicing and coaching the game. Expect a few creative spins, possibly a rogue term or two,
			and opinions that might not match everyone else's. Consider yourself warned!
		</p>
	</div>
	<div>
		<h1>About Me</h1>

		<p class="mb-6">
			Volleyball has been my game since I was 7. Fast forward to now, at {myAge} years old, and that's
			{yearsOfPlaying}
			amazing years on the court. Over the years, I've thrown myself into many aspects of the sport.
		</p>

		<h3>Playing Experience</h3>
		<p class="mb-6">
			I’ve played different levels in Volleyball Danmark, starting on the kids level and moving
			through U15, U17, U20, Jyllandsserien, and both the 2nd and 1st divisions. My main gig?
			Setting up plays as a setter in the 1st division since I was 15. But I've also moonlighted as
			a libero and outside hitter in the youth leagues for some extra fun.
		</p>

		<h3>Coaching Experience</h3>
		<p>
			My coaching journey kicked off in 2012 with U15s. Since then, I’ve been the head coach for the
			Jyllandsserie team for about 4 years, and in 2023, I took the leap to coach the 1st division
			women’s team. It's been a challenging and rewarding experience!
		</p>
	</div>
</div>

<h1>Terminology</h1>

<div class=" mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
	<p>
		Before diving into the drills and strategies, let's make sure we're all speaking the same
		language. The terms below are your playbook for navigating the site. They might seem a bit dry,
		but trust me — knowing this stuff will make everything else way easier (and more fun) to master.
		So, let’s get on the same page and jump into my rouge volleyball vocab!
	</p>
</div>

<div class=" mb-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
	<div>
		<h2>Tags</h2>
		<p class="mb-4">
			The pages use tags to simplify navigation and provide a clear overview. There are three types
			of tags, each highlighting key details: skill level, team size, and the equipment needed to
			run the drill effectively.
		</p>
		<div class="mb-4 flex flex-row items-center justify-evenly">
			<div class="flex flex-col items-center">
				<p class="mb-1 text-sm">Skill tags</p>
				<div class="flex flex-row gap-2">
					<TagSkill difficulty="easy" size="large" />
					<TagSkill difficulty="medium" size="large" />
					<TagSkill difficulty="hard" size="large" />
				</div>
			</div>
			<div class="flex flex-col items-center">
				<p class="mb-1 text-sm">Team size tags</p>
				<div class="flex flex-row gap-2">
					<TagSize min={4} size="large" />
					<TagSize min={8} canVary size="large" />
					<TagSize min={12} max={14} size="large" />
				</div>
			</div>
			<div class="flex flex-col items-center">
				<p class="mb-1 text-sm">Equipment tag</p>
				<div class="flex flex-row gap-2">
					<TagEquipment size="large" />
					<TagEquipment name="Precision net" size="large" />
				</div>
			</div>
		</div>
		<p class="mb-4">
			The team size tag indicates the number of players needed to run the drill. Many drills can be
			performed simultaneously by multiple groups. For example, a drill requiring 3 players could
			involve 12 people split into 4 groups of 3.
		</p>
	</div>
</div>

<h2>Positions</h2>

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
