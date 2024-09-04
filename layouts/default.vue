<script setup lang="ts"></script>

<template>
	<header>
		<NuxtLink to="/">ilyne.me</NuxtLink>

		<NuxtLink to="mailto:rubendecarvalho@protonmail.com">
			me contacter
		</NuxtLink>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<NuxtLink to="/">ilyne.me</NuxtLink>

		<p>
			designé avec Figma <Icon name="ph:dot-bold" /> développé avec NuxtJS
		</p>
	</footer>
</template>

<style lang="scss" scoped>
	header {
		position: sticky;

		display: flex;
		justify-content: space-between;

		padding: 30px 50px;

		font-size: 14px;
		color: #2a2a2a;

		:hover {
			transition: color 0.2s ease;
			color: $text;
		}
	}

	main {
		margin: 0 auto;
		max-width: 875px;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;

		border-top: solid 1px $strokes;
		max-width: 875px;
		padding: 30px 0;
		margin: 0 auto;

		font-size: 14px;
		color: #2a2a2a;

		user-select: none;

		:hover {
			transition: color 0.2s ease-in-out;
			color: $accent;
		}
	}

	@media screen and (max-width: 1024px) {
		header {
			padding: 30px 0;
		}

		main,
		footer {
			margin: 0;
			width: 100%;
		}
	}

	@media screen and (max-width: 700px) {
		footer {
			flex-direction: column;
			// display: none;
		}
	}
</style>
