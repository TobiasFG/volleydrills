<script lang="ts">
  import { LinkHandler } from '$lib/utility/LinkHandler'
  import { Button } from 'flowbite-svelte'
</script>

<div
  class=" my-1.5 rounded px-2.5 py-2 shadow outline outline-1 outline-red-400"
>
  <div class="mb-3 flex flex-row items-baseline justify-between">
    <p class="font-black">Beta 0.3</p>
    <Button
      href={LinkHandler('/changelog')}
      class="inline-block rounded bg-white px-2 py-1 text-xs text-black hover:bg-sky-400/80 hover:text-white"
      >Changelog</Button
    >
  </div>
  <p class="mb-3 text-sm">
    Volleyball drills is currently in beta. The website might contain errors or
    incomplete content for the time being.
  </p>
</div>

<style>
</style>
