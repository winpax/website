<main>
	<h1>
		<enhanced:img src="$lib/assets/icon/icon.png" alt="Winpax Icon" width="150" height="150" />
		Welcome to Winpax
	</h1>
	<desc>Creating blazing fast, package management solutions for the Windows platform.</desc>

	<div class="item-box">
		<div class="item-text">
			<h1>SFSU</h1>
			<p>Super fast replacements and additions to Scoop commands written in Rust</p>
			<p>Super fast replacements and additions to Scoop commands written in Rust</p>
		</div>

		<a
			href="https://www.cordor.dev/projects/sfsu"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="SFSU Website"
		>
			<enhanced:img src="$lib/assets/sfsu-logo.png" />
		</a>
	</div>
	<div class="item-box">
		<div class="item-text">
			<h1>SFSU</h1>
			<p>Super fast replacements and additions to Scoop commands written in Rust</p>
			<p>Super fast replacements and additions to Scoop commands written in Rust</p>
		</div>

		<a
			href="https://www.cordor.dev/projects/sfsu"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="SFSU Website"
		>
			<enhanced:img src="$lib/assets/sfsu-logo.png" />
		</a>
	</div>
</main>

<style lang="scss">
	h1 {
		font-size: 2.5em;
		display: flex;
		flex-direction: column;
		align-items: center;

		gap: 1rem;

		margin-top: 3rem;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.item-box {
		display: flex;
		justify-content: space-between;

		min-width: calc(100vw - 10rem);

		margin-left: 5rem;
		margin-right: 5rem;
		margin-top: 3rem;

		border-radius: 1rem;

		* {
			margin: 1rem;
		}

		.item-text {
			min-height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		a {
			max-width: 50vw;
		}

		box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.75);
		background-color: rgb(220, 220, 220);
	}
</style>
