<script lang="ts">
  import { PlayerMapping } from '$lib/mappings/PlayerMappings'
  import { Tooltip } from 'flowbite-svelte'

  export let type: keyof typeof PlayerMapping = 'P'
  export let team: 1 | 2 | 3 | 4 | null = null
  export let size: number = 400
  export let x: number = 0
  export let y: number = 0
  export let opacity: number = 1
  export let scale: number = 1

  const uniqueId = crypto.randomUUID()
</script>

<!-- prettier-ignore-start -->
<svg {...$$restProps} x={x} y={y} opacity={opacity} scale={scale} width={size} height={size} viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id={"Player-"+uniqueId} clip-path="url(#{"clip0_0_1-"+uniqueId})">
    <!-- Player Circle -->
    <circle id={"PlayerCircle-"+uniqueId} class="
    fill-gray-600 stroke-gray-600
    {team === 1 ? 'stroke-red-400' : ''}
    {team === 2 ? 'stroke-green-400' : ''}
    {team === 3 ? 'stroke-teal-400' : ''}
    {team === 4 ? 'stroke-violet-400' : ''}
    {team === null ? 'stroke-gray-600' : ''}
    {type === 'C' ? ' fill-sky-400 stroke-sky-400' : ''}
    " cx="500" cy="700" r="490" stroke-width="70" clip-path="url(#{"PlayerCircleClip-"+uniqueId})"/>

    <!-- Player Type Text (Centered in the Player Circle) -->
    <text id={"PlayerType-"+uniqueId} class="fill-white select-none" x="500" y="740" text-anchor="middle" dominant-baseline="middle" font-family="Inter" font-size="450" font-weight="bold" letter-spacing="0em">
      <tspan>{type}</tspan>
    </text>

    {#if team !== null}
      <!-- Team Number Circle -->
      <circle id={"TeamNumberCircle-"+uniqueId} class="
        {team === 1 ? 'fill-red-400' : ''}
        {team === 2 ? 'fill-green-400' : ''}
        {team === 3 ? 'fill-teal-400' : ''}
        {team === 4 ? 'fill-violet-400' : ''}
      " cx="974.5" cy="225.5" r="225.5" />

      <!-- Team Number Text (Centered in the Team Circle) -->
      <text id={"TeamNumber-"+uniqueId} class="fill-white select-none" x="974.5" y="245.5" text-anchor="middle" dominant-baseline="middle" font-family="Inter" font-size="300" font-weight="bold" letter-spacing="0em">
        <tspan>{team}</tspan>
      </text>
    {/if}
    <rect class="cursor-pointer fill-transparent" width="1200" height="1200"/>
  </g>
  <defs>
    <clipPath id={"PlayerCircleClip-"+uniqueId}>
		  <use xlink:href={"#PlayerCircle-"+uniqueId}/>
	  </clipPath>
    <clipPath id={"clip0_0_1-"+uniqueId}>
      <rect width="1200" height="1200" fill="white"/>
    </clipPath>
  </defs>
</svg>
<!-- prettier-ignore-end -->
<Tooltip
  class="z-50"
  reference={'#PlayerCircle-' + uniqueId}
  triggeredBy={'#Player-' + uniqueId}
>
  {PlayerMapping[type]}
  {#if team !== null}
    team {team}
  {/if}
</Tooltip>
