<script lang="ts">
	import type { LayoutData } from './$types';

	// export let data: LayoutData;
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
