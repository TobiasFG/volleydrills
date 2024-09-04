<script lang="ts">
	export let size: 'small' | 'large' = 'small';
	export let min: number;
	export let max: number | null = null;
	export let canVary: boolean = false;
</script>

<div
	class="select-none bg-gray-600 px-2 text-center text-white
  {size === 'large' ? 'h-5 rounded-md text-sm leading-5' : ''}
  {size === 'small' ? 'h-3 rounded text-xs leading-3' : ''}
"
>
	<p class="">
		{#if max === null}
			{canVary ? '~' : ''}{min}
		{:else}
			{canVary ? '~' : ''}{min}-{max}
		{/if}
	</p>
</div>
