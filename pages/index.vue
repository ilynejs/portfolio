<script setup>
	const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production';

	const { data: story, pending } = await useAsyncData(`home`, async () => {
		const { data } = await useStoryblokApi().get(`cdn/stories/home`, {
			version: isPreview ? 'draft' : 'published',
		});
		return data?.story;
	});

	if (!isPreview) {
		if (!story.value) {
			showError({ statusCode: 404, statusMessage: 'Page Not Found' });
		}
	}

	onMounted(() => {
		if (isPreview && story.value && story.value.id) {
			useStoryblokBridge(
				story.value.id,
				(evStory) => (story.value = evStory)
			);
		}
	});

	const { data: storyMeta, pendingMeta } = await useAsyncData(
		`meta`,
		async () => {
			const { data } = await useStoryblokApi().get(`cdn/stories/meta`, {
				version: isPreview ? 'draft' : 'published',
			});
			return data?.story;
		}
	);

	const meta = ref('');
	if (storyMeta) {
		meta.value = storyMeta._rawValue.content;

		useSeoMeta({
			title: meta.value.title,
			description: meta.value.description,

			ogUrl: meta.value.ogUrl,
			ogType: meta.value.ogType,
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
	}

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
	<StoryblokComponent
		v-if="pending === false && story"
		:blok="story.content"
	/>
</template>
