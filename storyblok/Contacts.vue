<script setup lang="ts">
	const props = defineProps<{
		blok: object;
	}>();
</script>

<template>
	<section v-editable="blok" class="contact">
		<h2 class="title">Me contacter</h2>

		<div class="contact__links">
			<StoryblokComponent
				v-for="contact in blok.contacts"
				:key="contact._uid"
				:blok="contact"
			/>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.title {
		font-size: 24px;
	}

	.contact {
		display: flex;
		flex-direction: column;
		gap: 35px;

		width: 100%;

		&__links {
			display: flex;
			flex-wrap: wrap;
			gap: 40px;

			width: 100%;
		}
	}
</style>
