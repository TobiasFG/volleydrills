<script>
  import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte'
  import logo from '$lib/images/logo.png'
  import { LinkHandler } from '$lib/utility/LinkHandler'
  import SidebarButton from './sidebar/SidebarButton.svelte'
</script>

<div
  class="mx-auto flex h-16 w-full flex-wrap items-center justify-between divide-gray-100 border-b border-gray-200 px-2 py-2.5 sm:px-4 dark:divide-gray-700 dark:border-gray-700"
>
  <div class="flex flex-row gap-2">
    <SidebarButton />
    <a
      href={LinkHandler('/')}
      class="flex flex-row items-center justify-start"
    >
      <img
        src={logo}
        class="me-4 h-9 w-9"
        alt="Flowbite Logo"
      />
      <span class="text-xl font-semibold dark:text-white"
        >Volleyball Drills</span
      >
    </a>
  </div>
  <ThemeSwitcher />
</div>
