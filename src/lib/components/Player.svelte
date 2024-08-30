<script lang="ts">
	import { PlayerMapping } from '$lib/mappings/PlayerMappings';
	import { Tooltip } from 'flowbite-svelte';

	export let type: keyof typeof PlayerMapping;
	export let team: 'A' | 'B' | null = null;
</script>

<div
	class="
  flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-full
  {team === 'A' ? 'bg-blue-100' : ''}
  {team === 'B' ? 'bg-green-100' : ''}
  {team === null ? 'bg-gray-400' : ''}
  "
>
	<p
		class="text-center text-xs
    {team === null ? 'text-white' : ''}
  "
	>
		{type}
	</p>
</div>
<Tooltip>{PlayerMapping[type]}</Tooltip>
