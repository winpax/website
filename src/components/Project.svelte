<script lang="ts">
	interface Props {
		title: string;
		description: string;
		link: Link;
	}

	interface Link {
		label: string;
		href: string;
		image: string;
	}

	const { title, description, link }: Props = $props();
</script>

<div
	class="mx-20 mt-12 flex min-w-[calc(100vw-10rem)] justify-between rounded-xl bg-[rgb(220,220,220)] p-4 shadow-lg"
>
	<div class="flex min-h-full flex-col items-center justify-center text-center">
		<h1 class="text-4xl font-extrabold">{title}</h1>
		<p>{description}</p>
	</div>

	<a
		class="max-w-[50vw]"
		href={link.href}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={link.label}
	>
		<img src={link.image} alt={link.label} />
	</a>
</div>
