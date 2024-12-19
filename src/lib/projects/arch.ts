import { match } from 'ts-pattern';

export enum Arch {
	x64 = 'x86_64',
	x86 = 'i686',
	arm64 = 'aarch64'
}

export function parseArch(arch: string): Arch | null {
	return match(arch)
		.with('x64', () => Arch.x64)
		.with('x86_64', () => Arch.x64)
		.with('x86', () => Arch.x86)
		.with('i686', () => Arch.x86)
		.with('arm64', () => Arch.arm64)
		.with('aarch64', () => Arch.arm64)
		.otherwise(() => null);
}

export function getArchName(arch: Arch): string {
	return match(arch)
		.with(Arch.x64, () => 'x64')
		.with(Arch.x86, () => 'x86')
		.with(Arch.arm64, () => 'arm64')
		.exhaustive();
}

export enum Os {
	Windows = 'windows',
	Linux = 'linux',
	MacOS = 'macos'
}

export function parseOs(os: string): Os | null {
	return match(os)
		.with('windows', () => Os.Windows)
		.with('linux', () => Os.Linux)
		.with('macos', () => Os.MacOS)
		.otherwise(() => null);
}

export function getOsName(os: Os): string {
	return match(os)
		.with(Os.Windows, () => 'Windows')
		.with(Os.Linux, () => 'Linux')
		.with(Os.MacOS, () => 'MacOS')
		.exhaustive();
}
