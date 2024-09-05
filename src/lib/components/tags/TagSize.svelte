<script lang="ts">
  import { Tooltip } from 'flowbite-svelte'

  export let size: 'small' | 'large' = 'small'
  export let min: number
  export let max: number | null = null
</script>

<div
  class="select-none bg-gray-600 px-2 text-center text-white
  {size === 'large' ? 'h-5 rounded-md text-sm leading-5' : ''}
  {size === 'small' ? 'h-3 rounded text-xs leading-3' : ''}
"
>
  <p class="">
    {#if max === null}
      {min}
    {:else}
      {min}-{max}
    {/if}
  </p>
</div>
<Tooltip class="max-w-52">
  {#if max === null}
    Requires {min} players.
  {:else}
    Requires {min}-{max} players.
  {/if}
</Tooltip>
