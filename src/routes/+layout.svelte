<script lang="ts">
	import '../app.scss';
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style lang="scss">
	main {
		padding: 1rem;
		margin: none;
		width: 100%;
		height: 100%;
	}
</style>
