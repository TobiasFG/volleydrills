<script lang="ts">
  import { page } from '$app/stores'
  $: activeUrl = $page.url.pathname
  export let link: string
  export let text: string
</script>

<a
  class=" flex flex-row justify-between rounded-md px-4 py-1.5 transition-all first-letter:uppercase hover:bg-gray-200/50 dark:hover:bg-gray-700
  {activeUrl === link ? 'bg-sky-400 text-white hover:bg-sky-400/80' : ''}
  "
  href={link}
>
  <p>{text}</p>

  <div class="flex flex-row items-center gap-2">
    <slot name="tags"></slot>
  </div>
</a>

<style>
</style>
