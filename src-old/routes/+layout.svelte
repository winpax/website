<script lang="ts">
	import '@fontsource/roboto';

	import '../app.scss';

	let { children } = $props();
</script>

{@render children()}

<style lang="scss">
	/* main {
		padding: 1rem;
		margin: none;
		width: 100%;
		height: 100%;
	} */
</style>
