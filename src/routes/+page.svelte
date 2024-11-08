<script lang="ts">
	import Project from '$lib/components/Project.svelte';

	import { projects } from '$lib/projects';
</script>

<main class="column">
	<div class="column mb-4 mt-12 gap-4">
		<enhanced:img src="$lib/assets/icon/icon.png" alt="Winpax Icon" width="150" height="150" />
		<h1 class="text-[2.5rem]">Welcome to Winpax</h1>
	</div>

	<desc>Creating blazing fast, package management solutions for the Windows platform.</desc>

	{#each projects as project, index}
		<Project {...project} alternate={index % 2 === 1} />
	{/each}
</main>
