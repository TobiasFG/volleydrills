<script lang="ts">
  import { base } from '$app/paths'
  import { Button } from 'flowbite-svelte'
</script>

<div
  class=" my-1.5 rounded px-2.5 py-2 shadow outline outline-1 outline-red-400"
>
  <p class="mb-3 font-black">Beta 0.3</p>
  <p class="mb-3 text-sm">
    Volleyball drills is currently in beta. The website might contain errors or
    incomplete content for the time being.
  </p>
  <Button
    href="{base}/changelog"
    class="inline-block rounded px-1.5 py-0.5">Changelog</Button
  >
</div>

<style>
</style>
