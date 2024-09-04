<script lang="ts">
  import SidebarNotification from './sidebar/SidebarNotification.svelte'
  import SidebarCredit from './sidebar/SidebarCredit.svelte'
  import SidebarItem from './sidebar/SidebarItem.svelte'
  import SidebarItemDropdown from './sidebar/SidebarItemDropdown.svelte'
  import TagSkill from './TagSkill.svelte'
  import TagSize from './TagSize.svelte'
  import { base } from '$app/paths'
</script>

<div
  class=" flex h-full min-w-52 max-w-52 flex-col justify-between overflow-y-auto border-r border-gray-200 px-3 py-4 dark:border-gray-700"
>
  <div class="flex w-full flex-col gap-1">
    <SidebarItem
      href={base}
      text="Home"
    />
    <SidebarItemDropdown text="Roles">
      <svelte:fragment slot="DropdownSidebarItems">
        <SidebarItem
          href={base}
          text="Setter"
        />
        <SidebarItem
          href={base}
          text="Attacker"
        />
        <SidebarItem
          href={base}
          text="Middle"
        />
        <SidebarItem
          href={base}
          text="Opposite"
        />
        <SidebarItem
          href={base}
          text="Libero"
        />
        <SidebarItem
          href={base}
          text="Coach"
        />
      </svelte:fragment>
    </SidebarItemDropdown>
    <SidebarItem
      href={base}
      text="5:1 Rotations"
    />
    <SidebarItem
      href="{base}/court"
      text="The court"
    />
    <SidebarItemDropdown text="Pepper">
      <svelte:fragment slot="DropdownSidebarItems">
        <SidebarItem
          href={base}
          text="Traditional"
        >
          <svelte:fragment slot="tags">
            <TagSkill difficulty="easy" />
            <TagSize min={2} />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem
          href={base}
          text="Running"
        >
          <svelte:fragment slot="tags">
            <TagSkill difficulty="medium" />
            <TagSize
              min={3}
              canVary
            />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem
          href={base}
          text="Focused"
        >
          <svelte:fragment slot="tags">
            <TagSkill difficulty="medium" />
            <TagSize min={3} />
          </svelte:fragment>
        </SidebarItem>
      </svelte:fragment>
    </SidebarItemDropdown>
  </div>

  <div class="flex flex-col">
    <SidebarNotification></SidebarNotification>
    <SidebarCredit />
  </div>
</div>

<style>
</style>
