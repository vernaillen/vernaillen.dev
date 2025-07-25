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
    <UPageHeader
      v-if="page"
      :ui="{
        headline: 'justify-center',
        description: 'text-center'
      }"
    >
      <template #headline>
        <div class="flex justify-center text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-highlighted">
          <div v-gsap.stagger.from="{ x: -25 }">
            <TextAnimHeader :delay="0.4">
              wouter
            </TextAnimHeader>
          </div>
          <div v-gsap.stagger.from="{ scale: 1.4, y: -5 }">
            <TextAnimHeader
              :delay="0"
              class="text-primary-500 font-semibold px-1"
            >
              on the
            </TextAnimHeader>
          </div>
          <div v-gsap.stagger.from="{ x: 25 }">
            <TextAnimHeader :delay="0.8">
              net
            </TextAnimHeader>
          </div>
        </div>
      </template>
      <Separator class="mt-10 mb-4" />

      <template #description>
        <Reveal class="opacity-50 translate-y-2 text-sm mt-5">
          <div>
            ecstatic dance dj & trancedance facilitator
          </div>
          <div>
            freelance full stack developer (java & nuxt)
          </div>
          <div
            class="mt-2"
          >
            ... forever exploring & learning ...
          </div>
        </Reveal>
      </template>
    </UPageHeader>
    <UPage>
      <UPageBody class="mt-0">
        <div
          v-if="page"
          ref="pageContent"
          class="pageContent"
          :class="page.disableRevealInview ? '' : 'opacity-20 translate-y-5'"
        >
          <div class="flex justify-center">
            <div
              v-for="logo, index in page.logos"
              :key="index"
              class="pt-2 pb-4"
            >
              <UButton
                :icon="logo.icon"
                :to="logo.url"
                :aria-label="logo.label"
                variant="ghost"
                target="_blank"
              />
            </div>
          </div>
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
