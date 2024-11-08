<script lang="ts">
	import Project from '../components/Project.svelte';
	import sfsuIcon from '$lib/assets/sfsu-logo.png';
</script>

<main class="column">
	<div class="column mb-4 mt-12 gap-4">
		<enhanced:img src="$lib/assets/icon/icon.png" alt="Winpax Icon" width="150" height="150" />
		<h1 class="text-[2.5rem]">Welcome to Winpax</h1>
	</div>

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
