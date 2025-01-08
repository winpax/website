import { favicons, type FaviconOptions } from 'favicons';
import { join } from 'path';
import ProgressBar from 'progress';
import { title, description } from '$/lib/winpax';

const srcDir = join(__dirname, '../src');

const source = join(__dirname, '../public/icon.png');

const configuration: FaviconOptions = {
	path: '/', // Path for overriding default icons path. `string`
	appName: title, // Your application's name. `string`
	appDescription: description, // Your application's description. `string`
	developerName: 'Juliette Cordor', // Your (or your developer's) name. `string`
	developerURL: 'https://github.com/jewlexx', // Your (or your developer's) URL. `string`
	lang: 'en-US', // Primary language for name and short_name
	background: '#fff', // Background colour for flattened icons. `string`
	theme_color: '#fff', // Theme color user for example in Android's task switcher. `string`
	appleStatusBarStyle: 'black-translucent', // Style for Apple status bar: "black-translucent", "default", "black". `string`
	display: 'browser', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
	orientation: 'any', // Default orientation: "any", "natural", "portrait" or "landscape". `string`
	scope: '/', // set of URLs that the browser considers within your app
	start_url: '/?homescreen=1', // Start URL when launching the application from a device. `string`
	preferRelatedApplications: false, // Should the browser prompt the user to install the native companion app. `boolean`
	relatedApplications: undefined, // Information about the native companion apps. This will only be used if `preferRelatedApplications` is `true`. `Array<{ id: string, url: string, platform: string }>`
	version: '1.0', // Your application's version string. `string`
	pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
	loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
	manifestMaskable: false, // Maskable source image(s) for manifest.json. "true" to use default source. More information at https://web.dev/maskable-icon/. `boolean`, `string`, `buffer` or array of `string`
	icons: {
		// Platform Options:
		// - offset - offset in percentage
		// - background:
		//   * false - use default
		//   * true - force use default, e.g. set background for Android icons
		//   * color - set background for the specified icons
		//
		android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }` or an array of sources
		appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }` or an array of sources
		appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }` or an array of sources
		favicons: true, // Create regular favicons. `boolean` or `{ offset, background }` or an array of sources
		windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background }` or an array of sources
		yandex: true // Create Yandex browser icon. `boolean` or `{ offset, background }` or an array of sources
	},
	shortcuts: [
		// Your applications's Shortcuts (see: https://developer.mozilla.org/docs/Web/Manifest/shortcuts)
		// Array of shortcut objects:
		// {
		// 	name: 'View your Inbox', // The name of the shortcut. `string`
		// 	short_name: 'inbox', // optionally, falls back to name. `string`
		// 	description: 'View your inbox messages', // optionally, not used in any implemention yet. `string`
		// 	url: '/inbox', // The URL this shortcut should lead to. `string`
		// 	icon: 'test/inbox_shortcut.png' // source image(s) for that shortcut. `string`, `buffer` or array of `string`
		// }
		// more shortcuts objects
	]
};

try {
	const response = await favicons(source, configuration);

	const destDir = join(srcDir, 'lib', 'icons');

	const imagesProgress = new ProgressBar('Writing images [:bar] :percent :etas', {
		complete: '=',
		incomplete: ' ',
		width: 20,
		total: response.images.length
	});

	await Promise.all(
		response.images.map(async ({ name, contents }) => {
			const file = Bun.file(join(__dirname, '../public', name));

			await Bun.write(file, contents);
			imagesProgress.tick();
		})
	);

	const compiledHTML = response.html.join('\n').replaceAll('>', '/>');
	const compiledJSX = `export function Icons() {
        return (
            <>
                ${compiledHTML}
            </>
        );
    }`;

	const file = Bun.file(join(destDir, 'icons.tsx'));

	await Bun.write(file, compiledJSX);

	const filesProgress = new ProgressBar('Writing files [:bar] :percent :etas', {
		complete: '=',
		incomplete: ' ',
		width: 20,
		total: response.files.length
	});

	await Promise.all(
		response.files.map(async ({ name, contents }) => {
			const file = Bun.file(join(__dirname, '../public', name));

			await Bun.write(file, contents);
			filesProgress.tick();
		})
	);
} catch (error: unknown) {
	console.log(error);
}
