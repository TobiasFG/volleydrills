<script>
	import SidebarNotification from './sidebar/SidebarNotification.svelte';
	import SidebarCredit from './sidebar/SidebarCredit.svelte';
	import SidebarItem from './sidebar/SidebarItem.svelte';
	import SidebarItemDropdown from './sidebar/SidebarItemDropdown.svelte';
	import TagSkill from './TagSkill.svelte';
	import TagSize from './TagSize.svelte';
</script>

<div
	class=" flex h-full min-w-52 max-w-52 flex-col justify-between overflow-y-auto border-r border-gray-200 px-3 py-4 dark:border-gray-700"
>
	<div class="flex w-full flex-col gap-1">
		<SidebarItem href="/" text="Home" />
		<SidebarItemDropdown text="Roles">
			<svelte:fragment slot="DropdownSidebarItems">
				<SidebarItem href="/roles/setter" text="Setter" />
				<SidebarItem href="/roles/attacker" text="Attacker" />
				<SidebarItem href="/roles/middle" text="Middle" />
				<SidebarItem href="/roles/opposite" text="Opposite" />
				<SidebarItem href="/roles/libero" text="Libero" />
				<SidebarItem href="/roles/coach" text="Coach" />
			</svelte:fragment>
		</SidebarItemDropdown>
		<SidebarItem href="/rotations" text="5:1 Rotations" />
		<SidebarItem href="/court" text="The court" />
		<SidebarItemDropdown text="Pepper">
			<svelte:fragment slot="DropdownSidebarItems">
				<SidebarItem href="/pepper/traditional" text="Traditional">
					<svelte:fragment slot="tags">
						<TagSkill difficulty="easy" />
						<TagSize min={2} />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem href="/pepper/running" text="Running">
					<svelte:fragment slot="tags">
						<TagSkill difficulty="medium" />
						<TagSize min={3} canVary />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem href="/pepper/focused" text="Focused">
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
