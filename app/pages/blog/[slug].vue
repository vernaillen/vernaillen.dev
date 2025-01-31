<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const route = useRoute()
const img = useImage()

const { data: post } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surroundData } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('blog', route.path)
    .order('id', 'ASC')
)
const surround: Pick<ParsedContent, string>[] = surroundData.value?.map((item) => {
  if (item) {
    item._path = item.path as string
  }
  return item
}) || []
const title = post.value.title
const description = post.value.description

useSeoMeta({
  title,
  ogTitle: title + useAppConfig().meta.titleSuffix,
  description,
  ogDescription: description
})
defineOgImageComponent('Vernaillen', {
  title,
  description,
  author: post.value.authors[0]?.name || 'Wouter Vernaillen'
})
definePageMeta({
  colorMode: 'dark'
})
</script>

<template>
  <div v-if="post">
    <UPageHeader
      :title="post.title"
      :description="post.description"
    >
      <template #headline>
        <NuxtTime
          locale="en-GB"
          :datetime="post.date"
          date-style="long"
          class="text-gray-500 dark:text-gray-400"
        />
        <span class="text-gray-500 dark:text-gray-400">&middot;</span>
        <UBadge
          v-if="post.badge"
          v-bind="post.badge"
          variant="subtle"
        />
        <UIcon
          v-if="post.location"
          size="xs"
          name="i-mdi-location"
          class="mx-0 px-0 w-4 h-4"
        /><span class="text-sm">{{ post.location }}</span>
      </template>

      <div class="flex flex-wrap items-center gap-3 mt-4">
        <UButton
          v-for="(author, index) in post.authors"
          :key="index"
          :to="author.to"
          :alt="`Twitter profile of ${author.name}`"
          :aria-label="`Twitter profile of ${author.name}`"
          color="white"
          target="_blank"
          size="sm"
        >
          <UAvatar
            :src="img(author.avatar.src, { width: 24, height: 24, fit: 'cover', format: 'webp' })"
            :alt="`Avatar of ${author.name}`"
            size="2xs"
          />

          {{ author.name }}
        </UButton>
      </div>
    </UPageHeader>

    <UPage>
      <UPageBody prose>
        <ContentRenderer
          v-if="post && post.body"
          :value="post"
        />

        <hr v-if="surround?.length">

        <UContentSurround :surround="surround" />
      </UPageBody>

      <template #right>
        <UContentToc
          v-if="post.body && post.body.toc"
          :links="post.body.toc.links"
        >
          <template #bottom>
            <hr v-if="post.social">
            <SocialComments
              v-if="post.social"
              :page="post"
            />
          </template>
        </UContentToc>
      </template>
    </UPage>
  </div>
</template>
