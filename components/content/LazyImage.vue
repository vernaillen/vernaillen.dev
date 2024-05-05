<script setup lang="ts">
const img = useImage()
export interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  placeholder?: string
  fit?: string
  format?: string
  modifiers?: object
  opacity?: number
  showRing?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  fit: 'cover',
  format: 'webp',
  opacity: 0.9,
  showRing: false,
})
const optimisedImg = img(props.src, {
  width: props.width,
  height: props.height,
  fit: props.fit,
  format: props.format,
  ...props.modifiers,
})
const placeholder = ref(props.placeholder)
watch(() => props.src, (newUrl) => {
  placeholder.value = newUrl
})
</script>

<template>
  <ClientOnly>
    <div
      v-bind="$attrs"
      :class="showRing ? 'rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 p-2 align-top content-start' : 'p-0'"
    >
      <div class="overflow-hidden rounded-xl">
        <img
          v-lazy="optimisedImg"
          :src="placeholder"
          :alt
          :width
          :height
          class="m-0 object-cover opacity-0 rounded-lg transform transition-opacity duration-500 max-w-full hover:opacity-100 group-hover:opacity-100 hover:scale-[102%] group-hover:scale-[102%]"
        >
      </div>
    </div>
  </ClientOnly>
</template>

<style>
img[lazy=loading] {
  opacity: 0;
}

img[lazy=loaded] {
  opacity: v-bind(opacity);
}
</style>
