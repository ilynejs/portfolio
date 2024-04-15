<script setup lang="ts">
	defineProps({ blok: Object });
</script>

<template>
	<div class="page" v-editable="blok">
		<StoryblokComponent
			v-for="blok in blok.body"
			:key="blok._uid"
			:blok="blok"
		/>
	</div>
</template>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		gap: 120px;

		margin: 120px 0;
	}
</style>
