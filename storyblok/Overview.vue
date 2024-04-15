<script setup lang="ts">
	const props = defineProps<{
		blok: object;
	}>();
</script>

<template>
	<section v-editable="blok" class="overview">
		<div class="overview__left projects">
			<h3 class="title">Projets</h3>

			<StoryblokComponent
				v-for="projet in blok.projets"
				:key="projet._uid"
				:blok="projet"
			/>
		</div>

		<div class="overview__right">
			<div class="skills">
				<h3 class="title">Compétences</h3>

				<StoryblokComponent
					v-for="competence in blok.competences"
					:key="competence._uid"
					:blok="competence"
				/>
			</div>

			<div class="separator" />

			<div class="utils">
				<h3 class="title">Autres</h3>

				<StoryblokComponent
					v-for="outil in blok.outils"
					:key="outil._uid"
					:blok="outil"
				/>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.overview {
		z-index: 1000;
		display: grid;
		grid-template-columns: 3fr 2fr;

		background: $bg-overview;
		border: solid 1px $strokes;
		border-radius: 20px;

		.title {
			margin-bottom: 10px;
		}

		&__left {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			border-right: solid 1px $strokes;
			padding: 20px;
		}

		&__right {
			display: flex;
			flex-direction: column;
			gap: 10px;

			padding: 20px;

			.separator {
				width: 100%;
				height: 1px;
				background: $strokes;
			}
		}
	}

	@media screen and (max-width: 1024px) {
		.overview {
			display: flex;
			flex-direction: column;

			&__left {
				gap: 10px;
				border-right: none;
			}

			&__right {
				border-top: solid 1px $strokes;
			}
		}
	}
</style>
