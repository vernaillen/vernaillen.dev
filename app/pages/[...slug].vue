<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('pages', route.path)
    .where('isblogpost', '=', true)
    .order('id', 'ASC')
)

defineOgImageComponent('Vernaillen', {
  title: page.value.title,
  description: page.value.description,
  author: 'Wouter Vernaillen'
})
useSeoMeta({
  title: page.value?.title + ' - Wouter Vernaillen',
  description: page.value?.description,
  ogTitle: page.value?.title + ' - Wouter Vernaillen',
  ogDescription: page.value?.description
})
definePageMeta({
  layout: 'default',
  colorMode: 'light'
})
const tocOpen = ref(false)

watch(router.currentRoute, () => {
  tocOpen.value = false
})
</script>

<template>
  <div v-if="page">
    <PageHeader :page="page" />
    <UPage>
      <UPageBody>
        <ContentRenderer
          v-if="page"
          :value="page"
          class="pageContent"
        />
        <UContentSurround :surround="surround" />
      </UPageBody>
      <template
        v-if="page?.body?.toc?.links.length"
        #right
      >
        <UContentToc
          v-model:open="tocOpen"
          :links="page.body.toc.links"
          highlight
          class="z-[2]"
        >
          <template #bottom>
            <hr
              v-if="page.social"
              class="opacity-20 mt-5"
            >
            <SocialComments
              v-if="page.social"
              :page="page"
            />
          </template>
        </UContentToc>
      </template>
    </UPage>
    <AppTextAnimations />
  </div>
</template>
