<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'
import type { BlogPost } from '~/types'

const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => queryContent<BlogPost>(route.path).findOne())
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/blog')
  .where({ _extension: 'md' })
  .without(['body', 'excerpt'])
  .sort({ date: -1 })
  .findSurround(withoutTrailingSlash(route.path))
, { default: () => [] })

const title = post.value.head?.title || post.value.title
const description = post.value.head?.description || post.value.description

useSeoMeta({
  title,
  ogTitle: title + ' - Wouter Vernaillen - Freelance Full Stack Developer',
  description,
  ogDescription: description,
})

defineOgImageComponent('VernaillenBlog', {
  title,
  description,
  img: post.value.image?.src,
})
</script>

<template>
  <UContainer v-if="post">
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
        /> <UIcon
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
          color="white"
          target="_blank"
          size="sm"
        >
          <UAvatar
            v-bind="author.avatar"
            :alt="author.name"
            size="2xs"
          />

          {{ author.name }}
        </UButton>
      </div>
    </UPageHeader>

    <UPage>
      <UPageBody
        prose
        class="slide-enter-content"
      >
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
        />
        <hr v-if="post.mastodonPost || post.twitterPost">
        <SocialComments
          v-if="post.mastodonPost || post.twitterPost"
          :page="post"
        />
      </template>
    </UPage>
  </UContainer>
</template>
