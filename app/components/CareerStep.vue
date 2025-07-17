<script setup lang="ts">
import type { CareerStep } from '~~/types'

defineProps<{
  careerStep: CareerStep
  index: number
}>()
const cStep = ref<HTMLDivElement>()

onMounted(() => {
  console.log(cStep.value)
  if (cStep.value) {
    console.log(cStep.value)
    revealInView(cStep.value)
  }
})
</script>

<template>
  <div
    ref="cStep"
    class="opacity-0 translate-y-50"
  >
    <div
      :id="`careerStep-${careerStep.id}`"
      class="flex flex-start items-center prose pt-28 -mt-28"
    >
      <div
        class="company-img bg-primary-500 drop-shadow-md hover:drop-shadow-lg shadow-light-400 flex items-center justify-center rounded-full overflow-hidden"
      >
        <TheLazyImage
          v-if="careerStep.imageUrl"
          :src="careerStep.imageUrl"
          :alt="careerStep.project"
          format="webp"
          :width="34"
          :height="34"
          class="rounded-full"
        />
      </div>
      <h2 class="text-gray-800 text-2xl dark:text-white font-semibold -mt-2">
        {{ careerStep.text }}
      </h2>
    </div>
    <div class="ml-4 border-l-2 border-primary-500 slide-enter">
      <div
        class="ml-6 mb-6 pt-2 pb-2 font-medium text-base text-body-color"
      >
        <div
          class="ml-1 mb-2 text-primary-500 text-sm slide-enter"
          :style="'--enter-stage:' + (index + 2) + ';--enter-step:10ms;'"
        >
          {{ careerStep.date }}
        </div>
        <div
          class="ml-2 mt-1 mb-1 flex flex-wrap slide-enter"
          :style="'--enter-stage:' + (index + 3) + ';--enter-step:10ms;'"
        >
          <div class="w-full sm:w-1/5 md:w-1/6 xl:w-1/12">
            project:
          </div>
          <div
            class="w-full ml-6 sm:ml-0 sm:w-4/5 md:w-5/6 xl:w-11/12"
          >
            <NuxtLink
              v-if="careerStep.projectUrl"
              :href="careerStep.projectUrl"
              target="_blank"
              class="text-primary-500"
            >
              {{ careerStep.project }}
            </NuxtLink>
            <span v-else>{{ careerStep.project }}</span>
          </div>
        </div>
        <div
          class="ml-2 mt-1 mb-1 flex flex-wrap slide-enter"
          :style="'--enter-stage:' + (index + 4) + ';--enter-step:10ms;'"
        >
          <div class="w-full sm:w-1/5 md:w-1/6 xl:w-1/12">
            role:
          </div>
          <div
            class="w-full ml-6 sm:ml-0 sm:w-4/5 md:w-5/6 xl:w-11/12"
          >
            {{ careerStep.role }}
          </div>
        </div>
        <div
          class="ml-2 mt-1 mb-1 flex flex-wrap slide-enter"
          :style="'--enter-stage:' + (index + 5) + ';--enter-step:10ms;'"
        >
          <div class="w-full sm:w-1/5 md:w-1/6 xl:w-1/12">
            stack:
          </div>
          <div
            class="w-full ml-6 sm:ml-0 sm:w-4/5 md:w-5/6 xl:w-11/12"
          >
            {{ careerStep.stack }}
          </div>
        </div>
        <div
          class="ml-2 mt-1 mb-1 flex flex-wrap slide-enter"
          :style="'--enter-stage:' + (index + 6) + ';--enter-step:10ms;'"
        >
          <div class="w-full sm:w-1/5 md:w-1/6 xl:w-1/12">
            contract:
          </div>
          <div
            class="w-full ml-6 sm:ml-0 sm:w-4/5 md:w-5/6 xl:w-11/12"
          >
            {{ careerStep.contract }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-img {
  position: relative;
  height: 34px;
  width: 34px;
  min-width: 34px;
  margin-left: 0;
  margin-top: -7px;
  margin-right: 12px;
}
.company-img img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 34px;
  width: 34px;
  background: currentColor;
  border-radius: 50%;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
