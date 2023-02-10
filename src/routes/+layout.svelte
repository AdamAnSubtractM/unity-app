<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	console.log({ data });
</script>

<main>
	<slot />
</main>

<style>
	@import '../styles/global.css';

	main {
		padding: var(--gutter);
	}
</style>
