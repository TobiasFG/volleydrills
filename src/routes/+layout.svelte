<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'
	import { i18n } from '$lib/i18n'

  import '../app.css'
  import Navbar from '$lib/components/Navbar.svelte'
  import SidebarController from '$lib/components/sidebar/SidebarController.svelte'
  import SidebarItemDropdown from '$lib/components/sidebar/SidebarItemDropdown.svelte'
  import { LinkHandler } from '$lib/utility/LinkHandler'
  import TagSkill from '$lib/components/tags/TagSkill.svelte'
  import TagSize from '$lib/components/tags/TagSize.svelte'
  import SidebarNotification from '$lib/components/sidebar/SidebarNotification.svelte'
  import SidebarCredit from '$lib/components/sidebar/SidebarCredit.svelte'
  import SidebarItem from '$lib/components/sidebar/SidebarItem.svelte'
</script>
<ParaglideJS {i18n}>


<div class=" h-screen overflow-hidden antialiased">
  <Navbar />
  <main class="flex h-[calc(100%-4rem)] flex-row">
    <SidebarController>
      <svelte:fragment slot="header"></svelte:fragment>
      <svelte:fragment slot="main"
        ><div class="flex w-full flex-col gap-1">
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
        </div></svelte:fragment
      >
      <svelte:fragment slot="footer">
        <div class="flex flex-col">
          <SidebarNotification></SidebarNotification>
          <SidebarCredit />
        </div>
      </svelte:fragment>
    </SidebarController>
    <div class="h-full w-full overflow-y-scroll px-16 py-8">
      <slot />
    </div>
  </main>
</div>

</ParaglideJS>