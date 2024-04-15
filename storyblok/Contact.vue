<script setup lang="ts">
	const props = defineProps<{
		blok: {
			icon: string;
			label: string;
			link: {
				url: URL;
				target: string;
			};
		};
	}>();
</script>

<template>
	<NuxtLink class="contact" :to="blok.link.url" :target="blok.link?.target">
		<div class="contact__icon">
			<Icon :name="blok.icon" size="32px" />
		</div>

		<h3 class="contact__label">{{ blok.label }}</h3>
	</NuxtLink>
</template>

<style lang="scss" scoped>
	.contact {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: nowrap;
		gap: 10px;

		width: fit-content;
		padding: 5px 30px 5px 5px;
		border-radius: 10px;

		transition: background 0.25s ease;
		// user-select: none;

		&:hover {
			background: $bg-pill;
		}

		&__icon {
			display: flex;
			align-items: center;
			justify-content: center;

			aspect-ratio: 1;
			width: 30px;
			height: 30px;

			padding: 5px;
			border-radius: 5px;

			background: $bg-icon;
		}

		&__label {
			font-weight: 400;
			font-size: 13px;
		}
	}
</style>
