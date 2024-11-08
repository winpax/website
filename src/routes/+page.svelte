<script lang="ts">
	import Project from '../components/Project.svelte';
	import sfsuIcon from '$lib/assets/sfsu-logo.png';
</script>

<main>
	<h1>
		<enhanced:img src="$lib/assets/icon/icon.png" alt="Winpax Icon" width="150" height="150" />
		Welcome to Winpax
	</h1>
	<desc>Creating blazing fast, package management solutions for the Windows platform.</desc>

	<Project
		title="SFSU"
		description="Super fast replacements and additions to Scoop commands written in Rust"
		link={{
			label: 'SFSU Website',
			href: 'https://www.cordor.dev/projects/sfsu',
			image: sfsuIcon
		}}
	/>
</main>

<style lang="scss">
	h1 {
		font-size: 2.5em;
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 1rem;

		margin-top: 3rem;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
