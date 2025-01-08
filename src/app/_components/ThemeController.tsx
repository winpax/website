'use client';

import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { themes } from '$/lib/themes';

export function ThemeController({ defaultTheme }: { defaultTheme: string }) {
	const [theme, setTheme] = useState(defaultTheme);

	const updateTheme = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			if (event.target.checked) {
				setTheme(event.target.value);
			}
		},
		[setTheme]
	);

	useEffect(() => {
		console.log(theme);
	}, [theme]);

	return (
		<div className="dropdown absolute right-5 top-5 mb-72">
			<div tabIndex={0} role="button" className="btn m-1">
				Theme
				<svg
					width="12px"
					height="12px"
					className="inline-block h-2 w-2 fill-current opacity-60"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
				>
					<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
				</svg>
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl"
			>
				{(themes as string[]).map((themeName) => (
					<li key={themeName}>
						<input
							checked={theme === themeName}
							type="radio"
							name="theme-dropdown"
							className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
							aria-label={themeName.charAt(0).toUpperCase() + themeName.slice(1)}
							value={themeName}
							onChange={updateTheme}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
