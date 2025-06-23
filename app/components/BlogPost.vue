<script setup lang="ts">
import type { BlogPost } from '~~/types'

const props = defineProps<{
  post: BlogPost
  orientation: 'vertical' | 'horizontal'
  index: number
}>()

const blogPost = ref<HTMLDivElement | null>(null)
onMounted(() => {
  if (blogPost.value) {
    revealInView(blogPost.value, props.index)
  }
})
</script>

<template>
  <div ref="blogPost">
    <UBlogPost
      v-bind="post"
      variant="subtle"
      :to="post.path"
      :orientation="orientation"
      :ui="{
        header: orientation === 'horizontal' ? 'lg:aspect-[2]' : ''
      }"
    >
      <template #badge>
        <UBadge
          v-if="post.badge"
          variant="subtle"
        >
          {{ post.badge }}
        </UBadge>
      </template>
      <template #date>
        <Date
          v-if="post.date"
          :date="post.date"
        />
      </template>
    </UBlogPost>
  </div>
</template>
