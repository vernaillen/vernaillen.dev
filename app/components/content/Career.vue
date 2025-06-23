<script setup lang="ts">
import type { CareerStep } from '~~/types'

defineProps<{
  steps: CareerStep[]
}>()
</script>

<template>
  <ol v-if="steps">
    <li
      v-for="(careerStep, index) in steps"
      :key="index"
    >
      <career-step
        :career-step="careerStep"
        :index="index"
      />
    </li>
  </ol>
</template>
