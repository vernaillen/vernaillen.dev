<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'

const props = defineProps<{
  src: string
  alt: string
  width?: number
  height?: number
  showRing?: boolean
}>()
const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>

<template>
  <LazyImage
    v-bind="$attrs"
    :src="refinedSrc"
    :alt
    :width
    :height
    :show-ring="showRing"
  />
</template>
