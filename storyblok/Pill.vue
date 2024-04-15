<script setup lang="ts">
	const props = defineProps<{
		blok: {
			icon: string;
			name: string;
		};
	}>();
</script>

<template>
	<div class="pill">
		<div class="pill__icon">
			<Icon :name="blok.icon" size="32px" />
		</div>

		<h3 class="pill__name">{{ blok.name }}</h3>
	</div>
</template>

<style lang="scss" scoped>
	.pill {
		display: flex;
		align-items: center;
		gap: 10px;

		max-width: 100%;
		padding: 5px;
		border-radius: 10px;

		transition: background 0.15s ease;
		user-select: none;

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

		&__name {
			font-weight: 400;
			font-size: 13px;
		}
	}
</style>
