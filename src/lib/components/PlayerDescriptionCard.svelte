<script lang="ts">
  import { base } from '$app/paths'
  import { PlayerMapping } from '$lib/mappings/PlayerMappings'
  import Player from './Player.svelte'
  import PlayerEtc from './PlayerEtc.svelte'

  export let type: keyof typeof PlayerMapping

  let hovered = false
</script>

<a
  on:mouseenter={() => {
    hovered = true
  }}
  on:mouseleave={() => {
    hovered = false
  }}
  class="rounded-md border border-transparent p-4 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:border-sky-400"
  href={base}
>
  <p class="mb-2 text-lg font-medium">{PlayerMapping[type]}</p>

  <div class="mb-6 border-l-4 border-sky-400 pl-2 text-sm">
    <slot name="description"></slot>
  </div>

  <div class="mb-6 border-sky-400 pl-4">
    <p class="mb-2 text-sm">Icon</p>
    <Player {type} />
  </div>

  <div class="mb-6 border-sky-400 pl-4">
    {#if type !== 'C'}
      <p class="mb-2 text-sm">Team variants</p>
      <div class="flex flex-row gap-6">
        <Player
          {type}
          team={1}
        />
        <Player
          {type}
          team={2}
        />
        <PlayerEtc />
      </div>
    {/if}
  </div>

  <div class="mb-6 border-sky-400 pl-4">
    {#if $$slots['role variants']}
      <p class="mb-2 text-sm">Role variants</p>
    {/if}
    <div class="flex flex-row gap-6">
      <slot name="role variants"></slot>
    </div>
  </div>

  <div
    class="absolute bottom-0 right-0 rounded-ee-md rounded-ss-md bg-sky-400 p-2 font-bold text-white duration-500 dark:text-black
    {hovered ? ' opacity-100' : ' opacity-0'}
    "
  >
    Read more
  </div>
</a>

<style>
</style>
