<script lang="ts">
  import { ChevronDownOutline } from 'flowbite-svelte-icons'
  import { quintOut } from 'svelte/easing'
  import { slide } from 'svelte/transition'
  export let text: string
  let open = false
</script>

<button
  on:click={() => {
    open = !open
  }}
  class=" flex cursor-pointer flex-row justify-between rounded-md px-4 py-1.5 transition-all first-letter:uppercase hover:bg-gray-200/50 dark:hover:bg-gray-700"
>
  <p>{text}</p>
  <div class="flex flex-row items-center justify-end gap-2">
    <slot name="tags"></slot>
    <ChevronDownOutline></ChevronDownOutline>
  </div>
</button>

{#if open}
  <div
    class="flex flex-col gap-1 *:ml-2"
    transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
  >
    <slot name="DropdownSidebarItems"></slot>
  </div>
{/if}

<style>
</style>
