<script setup lang="ts">
	const props = defineProps<{
		blok: {
			title: string;
			description: string;
			illustration: {
				filename: string;
				alt: string;
			};
			state: string;
			link: {
				url: URL;
				target: string;
			};
		};
	}>();

	const stateClass = (state: string) => {
		if (state === 'En développement') {
			return 'progress';
		} else if (state === 'Déployé') {
			return 'deployed';
		} else {
			return 'repo';
		}
	};
</script>

<template>
	<div class="project" v-editable="blok">
		<NuxtImg
			:src="blok.illustration.filename"
			:alt="blok.illustration.alt"
			class="illustration"
		/>

		<div class="infos">
			<h3 class="title">
				{{ blok.title }}

				<NuxtLink
					:to="blok.link.url"
					v-if="blok.link.url"
					:target="blok.link.target"
					class="state"
					:class="stateClass(blok.state)"
				>
					{{ blok.state }}

					<Icon name="tabler:external-link" />
				</NuxtLink>

				<span class="state" :class="stateClass(blok.state)" v-else>
					{{ blok.state }}
				</span>
			</h3>

			<p class="description">
				{{ blok.description }}
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.project {
		display: flex;
		gap: 10px;

		width: 100%;

		border-radius: 10px;
		padding: 5px;
		transition: background 0.15s ease;

		&:hover {
			background: $bg-pill;
		}
	}

	.illustration {
		aspect-ratio: 1;
		width: 60px;
		height: 60px;
	}

	.infos {
		width: 100%;

		.title {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			width: 100%;

			margin-bottom: 5px;
		}

		.description {
			display: -webkit-box;
			-webkit-line-clamp: 2; /* Limite le paragraphe à 3 lignes */
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}

	.state {
		display: flex;
		gap: 5px;
		align-items: center;

		font-size: 14px;
		font-weight: 400;
		padding: 3px 10px 2px;

		border-radius: 30px;

		&.progress {
			background: #ffcc0019;
			color: #ffcc00;
		}

		&.deployed {
			background: #003a00;
			color: #03e403;
		}

		&.repo {
			background: #001a3a;
			color: #0060d5;
		}
	}
</style>
