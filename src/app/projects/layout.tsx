import { Back } from './../_components/Back';

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Back />
			{children}
		</>
	);
}
