<script>
  import { base } from '$app/paths'
  import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte'
  import logo from '$lib/images/logo.png'
</script>

<div
  class="mx-auto flex h-16 w-full flex-wrap items-center justify-between divide-gray-100 border-b border-gray-200 px-2 py-2.5 sm:px-4 dark:divide-gray-700 dark:border-gray-700"
>
  <a
    href="{base}/"
    class="flex flex-row justify-start"
  >
    <img
      src={logo}
      class="me-3 h-9"
      alt="Flowbite Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Volleyball Drills</span
    >
  </a>
  <ThemeSwitcher />
</div>
