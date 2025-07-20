<script setup lang="ts">
import type { BlogPost } from '~~/types'
import { revealInView } from '~/utils/gsap'
import gsap from 'gsap'

const props = defineProps<{
  post: BlogPost
  orientation: 'vertical' | 'horizontal'
  isProject?: boolean
  index: number
}>()

const blogPost = ref<HTMLDivElement>()
const badge = ref<HTMLElement>()
const date = ref<HTMLElement>()
onMounted(() => {
  if (blogPost.value) {
    revealInView(blogPost.value, props.index)
  }
  if (badge.value) {
    gsap.to(badge.value, {
      opacity: 1,
      scaleY: 1,
      duration: 0.5,
      ease: 'power1.inOut'
    })
  }
  if (date.value) {
    gsap.to(date.value, {
      opacity: 1,
      scaleY: 1,
      duration: 0.5,
      ease: 'power1.inOut'
    })
  }
})
</script>

<template>
  <div
    ref="blogPost"
    class="opacity-20 translate-y-5"
  >
    <UBlogPost
      v-bind="post"
      variant="subtle"
      :to="post.path"
      :orientation="orientation"
      :ui="{
        root: 'shadow-md',
        header: orientation === 'horizontal' ? 'lg:aspect-[2]' : ''
      }"
    >
      <template #badge>
        <div
          ref="badge"
          class="opacity-0 scale-y-0"
        >
          <UBadge
            v-if="post.badge"
            variant="subtle"
          >
            {{ post.badge }}
          </UBadge>
        </div>
      </template>
      <template #date>
        <div
          ref="date"
          class="opacity-0 scale-y-0"
        >
          <Date
            v-if="post.date"
            :date="post.date"
          />
        </div>
      </template>
    </UBlogPost>
  </div>
</template>
