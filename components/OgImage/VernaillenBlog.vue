<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})
defineProps<{
  title: string
  subTitle?: string
  description: string
  img?: string
}>()
</script>

<template>
  <div class="w-full h-full bg-[#0c0c0d] pt-0 mt-0">
    <div class="mx-6 mb-6 flex columns-2 justify-between w-full pt-0 mt-0">
      <div class="w-1/3 flex justify-start pt-0 mt-0">
        <svg
          class="pt-0 mt-0"
          viewBox="0 0 754 276"
          width="100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            opacity="transparent"
          >
            <path
              class="fill-[#9c8e1b]"
              d="M0 0 H92 V184 H172 V0 H264 V184 H344 V0 H436 V276 H0 Z"
            />
            <path
              class="fill-white"
              d="M490 0 H582 V184 H662 V0 H754 V276 H490 Z"
            />
          </g>
        </svg>
      </div>
      <div class="w-2/3 text-gray-200 text-2xl flex justify-end mt-3 mx-12">
        Wouter Vernaillen: Freelance Full Stack Developer
      </div>
    </div>
    <div
      v-if="img"
      class="w-[1200px] h-[250px]"
    >
      <img
        :src="img"
        :width="1200"
        :height="250"
        class="object-cover"
      >
    </div>
    <div class="relative mx-6 mt-5">
      <h1 class="text-5xl my-4 text-white">
        {{ title }}
      </h1>
      <h2
        v-if="subTitle"
        class="text-4xl my-4 text-[#9c8e1b]"
      >
        {{ subTitle }}
      </h2>
      <p class="text-3xl text-gray-200 leading-tight">
        {{ description }}
      </p>
    </div>
  </div>
</template>
