<script lang="ts">
	import Player from '$lib/components/Player.svelte';

	const yearOfBirth = 1998;
	const myAge = new Date().getFullYear() - yearOfBirth;
	const yearsOfPlaying = myAge - 7;
</script>

<h1 class="mb-4 mt-8 text-3xl font-bold">About</h1>

<p class="mb-2">
	Volleyball Drills is an attempt at curating and consolidating volleyball drills on a single
	accssible webpage with the goal of providing a place for volleyball coaches, players, or
	enthusiasts to discover and explore drills, with details and animations, to plan their practices
	or study the game.
</p>

<h1 class="mb-4 mt-8 text-3xl font-bold">About Me</h1>

<p>
	I started playing volleyball at the age of 7 and have been playing since then, which at the age of {myAge}
	years old, mounts up to a total of {yearsOfPlaying} fantastic years of volleyball. During these years
	I have been taking part in various aspects of the sport;
</p>

<h3>Playing experience</h3>
<p>
	During these {yearsOfPlaying} I've played at various levels in Volleyball Danmark. I started at the
	kids level and have since then palyed in U15, U17, U20, Jyllandsserien, the second-, and the first
	division. Most of my experience has been as setter, almost entirely in the first division, since the
	age of 15. Although, I have also played as Libero and Outside Hitter on the side in the youth leagues.
</p>

<h3>Coaching experience</h3>
<p>
	I have been coaching on and off since 2012, starting as a coach at the U15 level. Since then I
	have been the main coach for the Jyllandsserie team for roughly 4 years until i recently in 2023
	begang coaching the first division womens team.
</p>

<h1 class="mb-4 mt-8 text-3xl font-bold">Disclaimer</h1>
<p class="mb-2">
	The website is developed as a hobby project and the content is my personal take on practicing and
	coaching the game. The content might deviate from correct volleyball terminology and other persons
	opinions.
</p>

<h1 class="mb-4 mt-8 text-xl font-bold">Terminology</h1>
<p>The following terminology is what I will be using throughout the site:</p>

<h3>Positions</h3>

<div class="">
	<p class=" text-lg font-medium italic">Setter</p>
	<p class=" max-w-48 border-l-4 border-blue-900 pl-2">
		The setter serves as the team's playmaker, setting up the ball for attackers and directing the
		offense.
	</p>
	<Player type="S" />
</div>

<Player type="A" />
<Player type="AC" />
<Player type="AF" />

<Player type="L" />

<Player type="M" />
<Player type="MC" />
<Player type="MF" />

<Player type="O" />

<Player type="C" />

<div>
	<ul>
		<li>
			Middle <div>M</div>
		</li>
		<li>Outside Hitter</li>
		<li>Setter (S)</li>
		<li>Opposite Hitter</li>
		<li>Libero</li>
	</ul>
</div>
