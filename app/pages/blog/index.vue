<script setup lang="ts">
const img = useImage()

const { data: page } = await useAsyncData('blog', () => queryCollection('pages').path('/blog').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
const { data: posts } = await useAsyncData('posts', () => queryCollection('blog')
  .order('id', 'ASC')
  .all())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title + useAppConfig().meta.titleSuffix,
  description: page.value.description,
  ogDescription: page.value.description
})
defineOgImageComponent('Vernaillen', {
  title: page.value.title,
  description: page.value.description,
  author: 'Wouter Vernaillen'
})
definePageMeta({
  colorMode: 'dark'
})
</script>

<template>
  <div>
    <UPageHeader v-bind="page" />
    <UPageBody>
      <UBlogList>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
          :authors="post.authors"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'lg:col-span-full']"
          :ui="{
            image: { base: '', wrapper: 'aspect-[21/9]' },
            description: 'line-clamp-2'
          }"
          class="slide-enter"
          :style="'--enter-stage:' + (index * 3) + ';'"
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
            <TheLazyImage
              v-if="post.image?.src"
              :src="post.image.src"
              :alt="post.image?.alt ? post.image?.alt : post.title"
              :width="index === 0 ? 592 : 384"
              :height="index === 0 ? 247 : 170"
              fit="cover"
              class="object-top w-full h-full"
            />
          </template>
          <template #authors>
            <UAvatarGroup v-if="post.authors?.length">
              <UAvatar
                v-for="(author, index2) in post.authors"
                :key="index2"
                :src="img(author.avatar.src, { width: 24, height: 24, fit: 'cover', format: 'webp' })"
                :alt="`Avatar of ${author.name}`"
                size="xs"
                class="relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-400 transition-transform"
              >
                <NuxtLink
                  v-if="author.to"
                  :to="author.to"
                  :alt="`Twitter profile of ${author.name}`"
                  :aria-label="`Twitter profile of ${author.name}`"
                  target="_blank"
                  class="focus:outline-none"
                  tabindex="-1"
                >
                  <span
                    class="absolute inset-0"
                    aria-hidden="true"
                  />
                </NuxtLink>
              </UAvatar>
            </UAvatarGroup>
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
    </UPageBody>
  </div>
</template>
