<script lang="ts">
  import { Button } from 'flowbite-svelte'
  import { BarsOutline } from 'flowbite-svelte-icons'
  import { Sidebar_Open } from './SidebarStore'

  let innerWidth: number
</script>

<svelte:window bind:innerWidth />

{#if innerWidth < 1280}
  <button
    class="rounded-md p-2 transition-all duration-150 hover:bg-gray-300 dark:hover:bg-gray-600"
    {...$$restProps}
    on:click={() => Sidebar_Open.update((state) => !state)}
  >
    <BarsOutline class="h-6 w-6" />
  </button>
{/if}

<style>
</style>
