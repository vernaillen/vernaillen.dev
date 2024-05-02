<script setup lang="ts">
import type { BlogPost } from '~/types'

const { data: page } = await useAsyncData('blog', () => queryContent('/blog').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: posts } = await useAsyncData('posts', () => queryContent<BlogPost>('/blog')
  .where({ _extension: 'md' })
  .sort({ date: -1 })
  .find())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title + useAppConfig().meta.titleSuffix,
  description: page.value.description,
  ogDescription: page.value.description,
})
defineOgImageComponent('Vernaillen', {
  title: page.value.title,
  description: page.value.description,
})
</script>

<template>
  <div>
    <UPageHeader
      v-bind="page"
      class="py-[50px]"
    />

    <UPageBody class="slide-enter-content">
      <UBlogList>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :to="post._path"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
          :authors="post.authors"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'lg:col-span-full']"
          :ui="{ image: { wrapper: 'aspect-[21/9]' }, description: 'line-clamp-2' }"
          class="slide-enter"
          :style="'--enter-stage:' + (index + 1) + ';'"
        >
          <template #badge>
            <div
              v-if="post?.categories"
              class="mb-2"
            >
              <UButton
                v-for="(cat, catIndex) in post.categories"
                :key="catIndex"
                :label="cat"
                size="2xs"
                color="primary"
                variant="outline"
                class="ml-1"
              />
            </div>
          </template>
          <template #image>
            <NuxtImg
              :src="post.thumbnail_dark ? post.thumbnail_dark : post.image?.src"
              :alt="post.image?.alt"
              width="384"
              height="160"
              format="webp"
              fit="cover"
              class="object-cover object-top w-full h-full group-hover:scale-[103%] opacity-100 dark:opacity-0 dark:h-0 transform transition-transform duration-200"
            />
            <NuxtImg
              :src="post.thumbnail_light ? post.thumbnail_light : post.image?.src"
              :alt="post.image?.alt"
              width="384"
              height="160"
              format="webp"
              fit="cover"
              class="object-cover object-top w-full h-0 group-hover:scale-[103%] opacity-0 dark:opacity-100 dark:h-full transform transition-transform duration-200"
            />
          </template>
          <template #date>
            <NuxtTime
              locale="en-GB"
              :datetime="post.date"
              date-style="long"
              class="text-sm"
            />
            <span
              v-if="post.location"
              class="text-sm"
            >
              <UIcon
                size="xs"
                name="i-mdi-location"
                class="-mb-[2px] mx-1 w-4 h-4"
              /> {{ post.location }}
            </span>
          </template>
        </UBlogPost>
      </UBlogList>
      <span class="absolute top-10 left-0 z-[-1] overflow-hidden">
        <SvgoBackgroundLeft1 class="w-full" />
      </span>
    </UPageBody>
  </div>
</template>
