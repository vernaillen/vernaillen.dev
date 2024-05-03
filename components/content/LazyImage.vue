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
}
const props = withDefaults(defineProps<Props>(), {
  imgClass: '',
  placeholder: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  fit: 'cover',
  format: 'webp',
  opacity: 1,
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
  <img
    v-lazy="imgUrlSmaller"
    :src="imgSrc"
    :alt
    :width
    :height
    :class="imgClass"
    class="object-cover opacity-0 transform transition-all duration-200 max-w-full group-hover:opacity-100 group-hover:scale-[102%]"
  >
</template>

<style>
img[lazy=loading] {
  opacity: 0;
}

img[lazy=loaded] {
  opacity: v-bind(opacity);
}
</style>
