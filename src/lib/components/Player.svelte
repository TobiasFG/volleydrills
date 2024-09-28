<script lang="ts">
  import { PlayerMapping } from '$lib/mappings/PlayerMappings'
  import { Tooltip } from 'flowbite-svelte'

  export let type: keyof typeof PlayerMapping = 'P'
  export let team: 1 | 2 | 3 | 4 | null = null
  export let size: number = 300
  export let x: number = 0
  export let y: number = 0
  export let opacity: number = 1
  export let scale: number = 1

  const uniqueId = crypto.randomUUID()
</script>

<Tooltip
  reference={'#Player-' + uniqueId}
  triggeredBy={'#Player-' + uniqueId}
>
  {PlayerMapping[type]}
  {#if team !== null}
    team {team}
  {/if}
</Tooltip>

<!-- prettier-ignore-start -->
<svg class="fill-transparent" {...$$restProps} {x} {y} opacity={opacity} scale={scale} width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="100" height="100" class="fill-transparent"/>
    <circle id={"Player-Ring-"+uniqueId} class="
    fill-gray-600
    {team === 1 ? 'fill-red-400' : ''}
    {team === 2 ? 'fill-green-400' : ''}
    {team === 3 ? 'fill-teal-400' : ''}
    {team === 4 ? 'fill-violet-400' : ''}
    {team === null ? 'fill-gray-600' : ''}
    {type === 'C' ? ' fill-sky-400' : ''}
    " cx="50" cy="44" r="44"/>
    <circle id={"Player-Type-Circle-"+uniqueId} class="
      fill-gray-600
      {type === 'C' ? ' fill-sky-400' : ''}
    "
    cx="50" cy="44" r="38.1333"/>
    <text id={"Player-Type-Text-"+uniqueId} class="fill-white select-none" x="50" y="55" text-anchor="middle" dominant-baseline="center" font-family="Inter" font-size="28" font-weight="800" letter-spacing="0em"><tspan>{type}</tspan></text>
    {#if team !== null}
    <circle id={"Player-Team-Circle-"+uniqueId} class="
        {team === 1 ? 'fill-red-400' : ''}
        {team === 2 ? 'fill-green-400' : ''}
        {team === 3 ? 'fill-teal-400' : ''}
        {team === 4 ? 'fill-violet-400' : ''}
      " cx="50" cy="82.1332" r="17.6"/>
    <text id={"Player-Team-Text-"+uniqueId} class="fill-white select-none" x="50" y="88" text-anchor="middle" dominant-baseline="center" font-family="Inter" font-size="18" font-weight="800" letter-spacing="0em"><tspan>{team}</tspan></text>
    {/if}
  </g>
  <rect id={"Player-"+uniqueId} class="fill-transparent" width="100" height="100"/>
</svg>
<!-- prettier-ignore-end -->
