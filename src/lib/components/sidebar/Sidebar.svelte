<script lang="ts">
  import SidebarNotification from './SidebarNotification.svelte'
  import SidebarCredit from './SidebarCredit.svelte'
  import SidebarItem from './SidebarItem.svelte'
  import SidebarItemDropdown from './SidebarItemDropdown.svelte'
  import { LinkHandler } from '$lib/utility/LinkHandler'
  import TagSkill from '../tags/TagSkill.svelte'
  import TagSize from '../tags/TagSize.svelte'
  import { CloseButton, Drawer } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing'

  let innerWidth: number
  let sidebarHidden = true
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
  bind:hidden={sidebarHidden}
>
  <div class="flex items-center">
    <CloseButton
      on:click={() => (sidebarHidden = true)}
      class="mb-4 dark:text-white"
    />
    <div
      class=" flex h-full min-w-52 max-w-52 flex-col justify-between overflow-y-auto border-r border-gray-200 px-3 py-4 dark:border-gray-700"
    >
      <div class="flex w-full flex-col gap-1">
        <SidebarItem
          link={LinkHandler('/')}
          text="Home"
        />
        <SidebarItemDropdown text="Roles">
          <svelte:fragment slot="DropdownSidebarItems">
            <SidebarItem
              link={LinkHandler('/')}
              text="Setter"
            />
            <SidebarItem
              link={LinkHandler('/')}
              text="Attacker"
            />
            <SidebarItem
              link={LinkHandler('/')}
              text="Middle"
            />
            <SidebarItem
              link={LinkHandler('/')}
              text="Opposite"
            />
            <SidebarItem
              link={LinkHandler('/')}
              text="Libero"
            />
            <SidebarItem
              link={LinkHandler('/')}
              text="Coach"
            />
          </svelte:fragment>
        </SidebarItemDropdown>
        <SidebarItem
          link={LinkHandler('/')}
          text="5:1 Rotations"
        />
        <SidebarItem
          link={LinkHandler('/court')}
          text="The court"
        />
        <SidebarItemDropdown text="Pepper">
          <svelte:fragment slot="DropdownSidebarItems">
            <SidebarItem
              link={LinkHandler('/pepper/traditional')}
              text="Traditional"
            >
              <svelte:fragment slot="tags">
                <TagSkill difficulty="easy" />
                <TagSize min={2} />
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem
              link={LinkHandler('/')}
              text="Running"
            >
              <svelte:fragment slot="tags">
                <TagSkill difficulty="medium" />
                <TagSize
                  min={3}
                  max={5}
                />
              </svelte:fragment>
            </SidebarItem>
            <SidebarItem
              link={LinkHandler('/')}
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
  </div>
</Drawer>

{#if innerWidth >= 1280}
  <div
    class=" flex h-full min-w-52 max-w-52 flex-col justify-between overflow-y-auto border-r border-gray-200 px-3 py-4 dark:border-gray-700"
  >
    <div class="flex w-full flex-col gap-1">
      <SidebarItem
        link={LinkHandler('/')}
        text="Home"
      />
      <SidebarItemDropdown text="Roles">
        <svelte:fragment slot="DropdownSidebarItems">
          <SidebarItem
            link={LinkHandler('/')}
            text="Setter"
          />
          <SidebarItem
            link={LinkHandler('/')}
            text="Attacker"
          />
          <SidebarItem
            link={LinkHandler('/')}
            text="Middle"
          />
          <SidebarItem
            link={LinkHandler('/')}
            text="Opposite"
          />
          <SidebarItem
            link={LinkHandler('/')}
            text="Libero"
          />
          <SidebarItem
            link={LinkHandler('/')}
            text="Coach"
          />
        </svelte:fragment>
      </SidebarItemDropdown>
      <SidebarItem
        link={LinkHandler('/')}
        text="5:1 Rotations"
      />
      <SidebarItem
        link={LinkHandler('/court')}
        text="The court"
      />
      <SidebarItemDropdown text="Pepper">
        <svelte:fragment slot="DropdownSidebarItems">
          <SidebarItem
            link={LinkHandler('/pepper/traditional')}
            text="Traditional"
          >
            <svelte:fragment slot="tags">
              <TagSkill difficulty="easy" />
              <TagSize min={2} />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem
            link={LinkHandler('/')}
            text="Running"
          >
            <svelte:fragment slot="tags">
              <TagSkill difficulty="medium" />
              <TagSize
                min={3}
                max={5}
              />
            </svelte:fragment>
          </SidebarItem>
          <SidebarItem
            link={LinkHandler('/')}
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
{/if}
