import sfsuIcon from '$/lib/assets/sfsu-logo.png';
import Project from '$/app/_components/Project';

export const projects: React.ComponentProps<typeof Project>[] = [
	{
		title: 'SFSU',
		description: 'Super fast replacements and additions to Scoop commands written in Rust',
		link: {
			label: 'SFSU Website',
			href: 'https://www.cordor.dev/projects/sfsu',
			image: sfsuIcon
		}
	},
	{
		title: 'Sprinkles',
		description: 'A Rust based abstraction layer for Scoop.',
		link: {
			label: 'Sprinkles Website',
			href: 'https://www.cordor.dev/projects/sprinkles',
			image:
				'https://cordor.dev/api/og?title=Sprinkles&image=https%3A%2F%2Fcordor.dev%2Femojis%2Fsparkles.svg&backgroundColor=rgba(0%2C0%2C0%2C0)&fontColor=black'
		}
	}
];
