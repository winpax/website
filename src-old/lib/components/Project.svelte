<script lang="ts" module>
	export interface Props {
		title: string;
		description: string;
		link: Link;
		alternate?: boolean;
	}

	interface Link {
		label: string;
		href: string;
		image: string;
	}
</script>

<script lang="ts">
	const { title, description, link, alternate = false }: Props = $props();
</script>

{#snippet header()}
	<div class="flex min-h-full flex-col items-center justify-center text-center">
		<h1 class="text-4xl font-extrabold">{title}</h1>
		<p>{description}</p>
	</div>
{/snippet}

{#snippet image()}
	<img class="max-w-[50vw]" src={link.image} alt={link.label} />
{/snippet}

<a
	class="transition-button mx-20 mt-12 flex min-w-[calc(100vw-10rem)] justify-between rounded-xl bg-[rgb(220,220,220)] p-8 shadow-lg hover:scale-105 hover:bg-white"
	href={link.href}
	target="_blank"
	rel="noopener noreferrer"
	aria-label={link.label}
>
	{#if alternate}
		{@render image()}
		{@render header()}
	{:else}
		{@render header()}
		{@render image()}
	{/if}
</a>
