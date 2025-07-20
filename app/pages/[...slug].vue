<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 639px)')
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
const pageContent = ref<HTMLElement>()

onMounted(() => {
  if (pageContent.value && !page.value?.disableRevealInview) {
    revealInView(pageContent.value, isMobile.value ? 3 : 0)
  }
})
watch(router.currentRoute, () => {
  tocOpen.value = false
})
</script>

<template>
  <div v-if="page">
    <PageHeader :page="page" />
    <UPage>
      <UPageBody>
        <div
          v-if="page"
          ref="pageContent"
          class="pageContent"
          :class="page.disableRevealInview ? '' : 'opacity-20 translate-y-5'"
        >
          <ContentRenderer
            :value="page"
          />
        </div>
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
  </div>
</template>
