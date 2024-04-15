<script setup lang="ts">
	const story = await useStoryblok('meta', { version: 'draft' });

	const meta = ref('');
	if (story) {
		// console.log(story._rawValue.content);
		meta.value = story._rawValue.content;

		// console.log(meta.value);
	}

	useSeoMeta({
		title: meta.value.title,
		description: meta.value.description,

		ogUrl: 'https://rubendc.fr',
		ogType: 'website',
		ogTitle: meta.value.title,
		ogDescription: meta.value.description,
		ogImage: meta.value.seoImage.filename,
		ogImageAlt: meta.value.seoImage.alt,

		twitterCard: meta.value.twitterCard,
		twitterTitle: meta.value.title,
		twitterDescription: meta.value.description,
		twitterImage: meta.value.seoImage.filename,
		twitterImageAlt: meta.value.seoImage.alt,
	});

	useHeadSafe({
		link: [
			{
				rel: 'icon',
				type: `image/png`,
				href: `${meta.value.favicon.filename}`,
			},
		],
	});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
