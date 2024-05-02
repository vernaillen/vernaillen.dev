<script setup lang="ts">
const img = useImage()
export interface Props {
  src: string
  alt: string
  width: number
  height: number
  imgClass?: string
  placeholder?: string
  fit?: string
  format?: string
  modifiers?: object
  finalOpacity?: number
}
const props = withDefaults(defineProps<Props>(), {
  imgClass: '',
  placeholder: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
  fit: 'cover',
  format: 'webp',
  finalOpacity: 1,
})
const imgUrlBig = img(props.src, {
  width: props.width,
  height: props.height,
  fit: props.fit,
  format: props.format,
  ...props.modifiers,
})
const imgUrlSmaller = img(props.src, {
  width: 558,
  height: 352,
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
  <div class="max-w-full">
    <img
      v-lazy="imgUrlBig"
      :src="imgSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :class="imgClass"
      class="hidden sm:block lg:hidden object-cover opacity-0 transform transition-all duration-100 max-w-full"
    >
    <img
      v-lazy="imgUrlSmaller"
      :src="imgSrc"
      :alt="alt"
      :width="558"
      :height="352"
      :class="imgClass"
      class="block sm:hidden lg:block object-cover opacity-0 transform transition-all duration-100 max-w-full"
    >
  </div>
</template>

<style>
img[lazy=loading] {
  opacity: 0;
}

img[lazy=loaded] {
  opacity: v-bind(finalOpacity);
}
</style>
