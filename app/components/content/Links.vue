<script setup lang="ts">
import gsap from 'gsap'
import type { AccordionItem } from '#ui/types'

defineProps<{
  links: AccordionItem[]
}>()

const active = ref<string | string[] | undefined>(undefined)
const content = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.utils.toArray('[data-state]').forEach((element, index: number) => {
    gsap.to(element as HTMLElement, {
      opacity: 1,
      scale: 1,
      delay: index * 0.03
    })
  })
})
</script>

<template>
  <UAccordion
    v-model="active"
    :items="links"
    class="max-w-lg mx-auto"
  >
    <template #leading="{ item }">
      <UIcon
        v-if="item.icon"
        :name="item.icon"
        class="mr-1"
        :class="item.iconClass"
      />
      <NuxtImg
        v-if="item.image"
        :src="item.image"
        :alt="item.imageAlt ? item.imageAlt : item.label"
        :width="21"
        :height="20"
        format="webp"
        class="mr-1"
        :class="item.imageClass"
      />
    </template>
    <template #content="{ item }">
      <div
        ref="content"
        class="overflow-hidden z-40
          shadow-lg rounded-md
          bg-gray-50/40
          prose dark:prose-invert
          text-center "
      >
        <div class="overflow-hidden px-2 pt-5 pb-3 text-sm text-dark dark:text-gray-200">
          <component
            :is="item.svgComponent"
            v-if="item.svgComponent"
          />
          <div v-sanitize="item.subTitle" />
          <div v-sanitize="item.content" />
          <UButton
            :to="item.url"
            :label="item.urlDisplay ? item.urlDisplay : item.url"
            class="mt-2"
            variant="subtle"
            trailing-icon="i-uil-external-link-alt"
            target="_blank"
          >
            <template #trailing>
              <UIcon
                name="i-uil-external-link-alt"
                size="1em"
              />
            </template>
          </UButton>
        </div>
      </div>
    </template>
  </UAccordion>
</template>
