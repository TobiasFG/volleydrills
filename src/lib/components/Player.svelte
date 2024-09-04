<script lang="ts">
  import { PlayerMapping } from '$lib/mappings/PlayerMappings'
  import { Badge, Tooltip } from 'flowbite-svelte'

  export let type: keyof typeof PlayerMapping
  export let team: 1 | 2 | 3 | 4 | null = null
</script>

<div
  class=" relative flex h-12 w-12 cursor-pointer select-none items-center justify-center rounded-full bg-gray-600 text-white outline outline-2
  {team === 1 ? 'outline-red-400' : ''}
  {team === 2 ? 'outline-green-400' : ''}
  {team === 3 ? 'outline-teal-400' : ''}
  {team === 4 ? 'outline-violet-400' : ''}
  {team === null ? 'outline-gray-600' : ''}
  {type === 'C' ? ' bg-sky-400 !outline-sky-400' : ''}
  "
>
  {#if team !== null}
    <Badge
      rounded
      class="absolute -right-2 -top-2 h-6 w-6 p-0 font-black text-white dark:text-white
      {team === 1 ? '!bg-red-400' : ''}
      {team === 2 ? '!bg-green-400' : ''}
      {team === 3 ? '!bg-teal-400' : ''}
      {team === 4 ? '!bg-violet-400' : ''}
      ">{team}</Badge
    >
  {/if}
  <div class="flex flex-col items-center">
    <p class="text-center font-black leading-3">
      {type}
    </p>
    <!-- {#if team !== null}
			<p class="text-center text-xs font-black leading-3 text-black">{team}</p>
		{/if} -->
  </div>
</div>
<Tooltip
  >{PlayerMapping[type]}
  {#if team !== null}
    team {team}
  {/if}</Tooltip
>
