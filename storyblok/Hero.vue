<script setup lang="ts">
	const props = defineProps<{
		blok: {
			title: string;
			description: string;
			illustration: {
				filename: string;
				alt: string;
			};
		};
	}>();
</script>

<template>
	<section v-editable="blok" class="hero">
		<div class="presentation">
			<h1 class="presentation__title">
				Salut ! <br />
				Je suis <span class="accent">Rubén</span>
			</h1>
			<p class="presentation__description">{{ blok.description }}</p>
		</div>

		<div class="decoration">
			<div class="blob-container">
				<div class="first blob" />
				<div class="second blob" />
				<div class="third blob"></div>
			</div>
		</div>

		<NuxtImg
			:src="blok.illustration.filename"
			:alt="blok.illustration.alt"
			class="illustration"
		/>
	</section>
</template>

<style lang="scss" scoped>
	.hero {
		position: relative;
		display: flex;

		width: 100%;
	}

	.presentation {
		z-index: 1000;
		display: flex;
		flex-direction: column;

		gap: 50px;

		&__title {
			font-size: 64px;
			font-weight: 800;

			.accent {
				color: $accent;
			}
		}
	}

	.decoration {
		position: absolute;
		top: -100px;
		right: 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		max-width: 500px;
		width: 100%;
		height: 100%;
	}

	.blob-container {
		position: absolute;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 500px;
		max-width: 500px;
		width: 100%;
		opacity: 0.5;

		.blob {
			border-radius: 100px;
			filter: blur(60px);

			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.first {
			position: absolute;
			top: 300px;
			height: 250px;

			height: 200px;
			width: 200px;

			background-color: $accent;

			animation: first 8s infinite linear;
		}
		.second {
			position: absolute;
			top: 80px;
			right: -20px;

			height: 250px;
			width: 200px;

			background-color: #988602;

			animation: second 8s infinite ease;
		}
		.third {
			position: absolute;
			top: 80px;
			right: -20px;

			height: 200px;
			width: 250px;

			background-color: #3e039d;

			animation: second 8s infinite ease;
		}
	}

	.illustration {
		aspect-ratio: 1/1;
		width: 250px;
		height: 250px;

		transform: rotate(5deg);
		transition: all 0.15s cubic-bezier(0.85, 0.85, 0, 1.57);

		&:hover {
			transform: rotate(-2deg) scale(1.05);
			transition: all 0.3s cubic-bezier(0.82, -1.27, 0, 1.57);
		}
	}

	@media screen and (max-width: 700px) {
		.illustration {
			display: none;
		}

		.decoration {
			display: none;
		}
	}
</style>
