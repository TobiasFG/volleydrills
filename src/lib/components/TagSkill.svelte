<script lang="ts">
	import { Tooltip } from 'flowbite-svelte';

	export let size: 'small' | 'large' = 'small';
	export let difficulty: 'easy' | 'medium' | 'hard'; // Default difficulty level
</script>

<div
	class="
  {size === 'large' ? 'h-5 w-5 rounded-md' : ''}
  {size === 'small' ? 'h-3 w-3 rounded' : ''}
  {difficulty === 'easy' ? 'bg-green-400' : ''}
  {difficulty === 'medium' ? 'bg-yellow-200' : ''}
  {difficulty === 'hard' ? 'bg-red-400' : ''}
"
></div>
<Tooltip><p class="first-letter:uppercase">{difficulty}</p></Tooltip>
