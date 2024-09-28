<script lang="ts">
  import { Drawer } from 'flowbite-svelte'
  import { Sidebar_Open } from './SidebarStore'
  import { sineIn } from 'svelte/easing'

  let innerWidth: number
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }
</script>

<svelte:window bind:innerWidth />

<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={$Sidebar_Open}
>
  <div class="flex h-full flex-col justify-between">
    <div class="flex flex-col gap-4">
      <slot name="header"></slot>
      <div class=" overflow-y-scroll">
        <slot name="main"></slot>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
</Drawer>

{#if innerWidth >= 1280}
  <div
    class=" flex h-full min-w-52 max-w-52 flex-col justify-between overflow-y-auto border-r border-gray-200 px-3 py-4 dark:border-gray-700"
  >
    <div class="flex flex-col gap-4">
      <slot name="header"></slot>
      <div class=" overflow-y-scroll">
        <slot name="main"></slot>
      </div>
    </div>
    <slot name="footer"></slot>
  </div>
{/if}

<style>
</style>
