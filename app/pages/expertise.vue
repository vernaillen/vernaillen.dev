<script setup lang="ts">
const { data: page } = await useAsyncData('expertise', () => queryContent('/expertise').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title + useAppConfig().meta.titleSuffix,
  description: page.value.description,
  ogDescription: page.value.description
})
defineOgImageComponent('Vernaillen', {
  title: page.value.title,
  description: page.value.description
})
definePageMeta({
  colorMode: 'dark'
})
</script>

<template>
  <div>
    <UPageHeader v-bind="page" />
    <UPage>
      <UPageBody>
        <UDashboardCard
          :description="page?.cardDescription"
          icon="i-ic-baseline-code"
        >
          <template #title>
            <h2 class="text-gray-900 dark:text-white font-semibold">
              {{ page?.cardTitle }}
            </h2>
          </template>
          <div class="space-y-2">
            <UMeter
              v-for="(technology, index) in page?.technologies"
              :id="'technology-' + index"
              :key="index"
              :value="0"
              :label="technology.label"
              :color="technology.color"
              :icon="technology.icon"
              size="lg"
              :ui="{
                wrapper: `progress flex-row-reverse items-center slide-enter slide-enter-stage${index+2}`,
                meter: { base: 'flex-1 text-opacity-90 dark:text-opacity-90 hover:text-opacity-100' }
              }"
            >
              <template #label="{ percent, value }">
                <slot
                  name="label"
                  v-bind="{ percent, value }"
                >
                  <div class="flex gap-2 items-center flex-shrink-0 h-6 font-semibold truncate text-sm relative">
                    <span class="w-5">
                      <UIcon
                        v-if="technology.icon"
                        :name="technology.icon"
                        :class="technology.class ? technology.class : 'w-5 h-5'"
                      />
                    </span>
                    <span
                      class="w-20"
                      :class="'text-'+ technology.color + '-500 text-opacity-100'"
                    >
                      {{ technology.label }}
                    </span>
                  </div>
                </slot>
              </template>
            </UMeter>
          </div>
        </UDashboardCard>
      </UPageBody>
    </UPage>
  </div>
</template>
