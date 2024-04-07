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
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Vernaillen',
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <UContainer>
    <UPageHeader v-bind="page" class="py-[50px]" />

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
          :ui="{
            description: 'line-clamp-2'
          }"
          class="slide-enter"
          :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
        />
      </UBlogList>
      <span class="absolute top-10 left-0 z-[-1] overflow-hidden">
        <SvgoBackgroundLeft1 class="w-full" />
      </span>
    </UPageBody>
  </UContainer>
</template>
