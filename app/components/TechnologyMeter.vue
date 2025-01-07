<script setup lang="ts">
import { animate, spring } from 'motion'

const props = defineProps<{
  technology: object
  index: number
}>()

const tech = ref({ expertisePercentage: 0 })
onMounted(() => {
  animate(
    tech.value,
    { expertisePercentage: props.technology.value },
    { type: spring, bounce: 0.4, duration: 0.6 }
  )
})
</script>

<template>
  <UMeter
    :id="'technology-' + index"
    :value="tech.expertisePercentage"
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
</template>
