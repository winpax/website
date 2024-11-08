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
	<div class="item-text">
		<h1>{title}</h1>
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

<style lang="scss">
	.item-text {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
