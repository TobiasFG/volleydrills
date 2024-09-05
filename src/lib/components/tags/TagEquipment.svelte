<script lang="ts">
  import { Tooltip } from 'flowbite-svelte'

  export let size: 'small' | 'large' = 'small'
  export let name: string | null = null
</script>

<div
  class="select-none bg-orange-400 px-2 text-center text-white
  {size === 'large' ? 'h-5 min-w-5 rounded-md text-sm leading-5' : ''}
  {size === 'small' ? 'h-3 min-w-3 rounded text-xs leading-3' : ''}
"
>
  {#if name !== null}
    <p>{name}</p>
  {/if}
</div>
<Tooltip class="max-w-52">
  {#if name === null}
    Equipment needed.
  {:else}
    {name} needed.
  {/if}
</Tooltip>
