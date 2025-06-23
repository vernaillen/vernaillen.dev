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
  class?: string
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: '/placeholder.svg',
  fit: 'cover',
  format: 'webp',
  opacity: 0.9,
  showRing: false
})
const optimisedImg = img(props.src, {
  width: props.width,
  height: props.height,
  fit: props.fit,
  format: props.format,
  ...props.modifiers
})
const placeholder = ref(props.placeholder)
watch(() => props.src, (newUrl) => {
  placeholder.value = newUrl
})
const svgPlaceholder = ref<SVGElement | null>(null)
const imageLifecycle = {
  loaded: (_el: HTMLImageElement) => {
    setTimeout(() => {
      svgPlaceholder.value?.classList.add('opacity-50')
    }, 100)
  },
  error: (_el: HTMLImageElement) => {
    svgPlaceholder.value?.classList.add('opacity-100')
  }
}
</script>

<template>
  <ClientOnly>
    <div
      v-bind="$attrs"
      :class="showRing ? props.class + ' rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 p-2 align-top content-start' : props.class + ' p-0'"
    >
      <div class="overflow-hidden rounded-lg relative">
        <USkeleton class="absolute inset-0 h-full w-full opacity-10" />
        <svg
          ref="svgPlaceholder"
          class="absolute inset-0 h-full w-full opacity-0 stroke-gray-950/10 dark:stroke-white/10 transform transition-opacity duration-300"
          fill="none"
          data-v-15931d44=""
        >
          <defs data-v-15931d44="">
            <pattern
              id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              data-v-15931d44=""
            >
              <path
                d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"
                data-v-15931d44=""
              />
            </pattern>
          </defs>
          <rect
            stroke="none"
            fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
            width="100%"
            height="100%"
            data-v-15931d44=""
          />
        </svg>
        <img
          v-lazy="{ src: optimisedImg, lifecycle: imageLifecycle }"
          :src="placeholder"
          :alt
          :width
          :height
          class="lazyImg m-0 object-cover opacity-0 rounded-lg transform transition-all duration-100 delay-75 w-full h-full hover:opacity-100 group-hover:opacity-100 hover:scale-[103%] group-hover:scale-[103%]"
        >
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.lazyImg[lazy=loading] {
  opacity: 0;
}
.lazyImg[lazy=loaded] {
  opacity: v-bind(opacity);
}
</style>
