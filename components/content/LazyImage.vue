<script setup lang="ts">
const img = useImage()
export interface Props {
  src: string
  alt: string
  width?: number
  height?: number
  imgClass?: string
  placeholder?: string
  fit?: string
  format?: string
  modifiers?: object
  opacity?: number
  showRing?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  imgClass: '',
  placeholder: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  fit: 'cover',
  format: 'webp',
  opacity: 0.9,
  showRing: true,
})
const imgUrlSmaller = img(props.src, {
  width: props.width,
  height: props.height,
  fit: props.fit,
  format: props.format,
  ...props.modifiers,
})
const imgSrc = ref(props.placeholder)
watch(() => props.src, (newUrl) => {
  imgSrc.value = newUrl
})
</script>

<template>
  <div
    :class="showRing ? 'ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl p-2 align-top content-start' : 'p-0 m-0'"
  >
    <div :class="showRing ? 'rounded-lg relative overflow-hidden h-full w-full border border-dashed border-gray-900/10 dark:border-white/10' : 'p-0 m-0 rounded-lg'">
      <img
        v-lazy="imgUrlSmaller"
        :src="imgSrc"
        :alt
        :width
        :height
        :class="imgClass"
        class="p-0 m-0 object-cover opacity-0 transform transition-all duration-500 max-w-full hover:opacity-100 group-hover:opacity-100 hover:scale-[102%] group-hover:scale-[102%]"
      >
    </div>
  </div>
</template>

<style>
img[lazy=loading] {
  opacity: 0;
}

img[lazy=loaded] {
  opacity: v-bind(opacity);
}
</style>
