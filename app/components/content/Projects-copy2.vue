<script setup lang="ts">
import { gsap } from 'gsap'
import Observer from 'gsap/Observer'

defineProps<{
  projects: {
    title: string
    description: string
    to: string
    target: string
    categories: string[]
    image: {
      src: string
      alt: string
    }
  }[]
}>()

const handleClick = (url: string) => {
  window.open(url, '_blank')
}
const currentIndex = ref(0)

const sections = ref<HTMLElement[]>([])
const outerWrappers = ref<HTMLElement[]>([])
const count = ref<HTMLElement | null>(null)
const animating = ref<boolean>(false)

function gotoSection(index: number, direction: number) {
  animating.value = true
  const wrap = gsap.utils.wrap(0, sections.value.length)
  index = wrap(index)
  console.log('index:', index)

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: 'expo.inOut' },
    onComplete: () => {
      animating.value = false
    }
  })

  gsap.set([sections.value], { zIndex: 0, autoAlpha: 0 })
  gsap.set([sections.value[currentIndex.value]], { zIndex: 1, autoAlpha: 1 })
  gsap.set([sections.value[index]], { zIndex: 2, autoAlpha: 1 })

  tl
    .set(count.value, { text: 'project ' + (index + 1) }, 0.32)
    .fromTo(
      outerWrappers.value[index] as gsap.TweenTarget,
      {
        xPercent: 100 * direction,
        visibility: 'hidden'
      },
      { xPercent: 0, visibility: 'visible' },
      0
    )
    .fromTo(
      outerWrappers.value[currentIndex.value] as gsap.TweenTarget,
      { xPercent: 0, visibility: 'visible' },
      {
        xPercent: -100 * direction,
        visibility: 'visible'
      },
      0
    )
  /* .fromTo(
        innerWrappers[index],
        {
          xPercent: -100 * direction
        },
        { xPercent: 0 },
        0
      )
      .to(
        heading,
        {
          '--width': 800,
          'xPercent': 30 * direction
        },
        0
      )
      .fromTo(
        nextHeading,
        {
          '--width': 800,
          'xPercent': -30 * direction
        },
        {
          '--width': 200,
          'xPercent': 0
        },
        0
      )
      .fromTo(
        images[index],
        {
          xPercent: 125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
        0
      )
      .fromTo(
        images[currentIndex.value],
        { xPercent: 0, scaleX: 1, scaleY: 1 },
        {
          xPercent: -125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        0
      )
      .fromTo(
        slideImages[index],
        {
          scale: 2
        },
        { scale: 1 },
        0
      ) */
    .timeScale(0.8)

  currentIndex.value = index
}

onMounted(() => {
  sections.value = gsap.utils.toArray('.project-card')
  outerWrappers.value = gsap.utils.toArray('.project__outer')
  // const innerWrappers = gsap.utils.toArray('.project__inner')
  // wrap.value = gsap.utils.wrap(0, sections.value.length)

  gsap.set(outerWrappers.value, { xPercent: 100, visibility: 'hidden' })
  // gsap.set(innerWrappers, { xPercent: -100 });
  gsap.set(outerWrappers.value[0] as gsap.TweenTarget, { xPercent: 0, visibility: 'visible' })
  // gsap.set('.project-card:nth-of-type(1) .project__inner', { xPercent: 0 })

  Observer.create({
    type: 'wheel,touch,pointer',
    preventDefault: true,
    wheelSpeed: -1,
    onUp: () => {
      console.log('down')
      if (animating.value) return
      gotoSection(currentIndex.value + 1, +1)
    },
    onDown: () => {
      console.log('up')
      if (animating.value) return
      gotoSection(currentIndex.value - 1, -1)
    },
    tolerance: 10
  })

  document.addEventListener('keydown', (e) => {
    console.log('key:', e.code)
    if ((e.code === 'ArrowUp' || e.code === 'ArrowLeft') && !animating.value) {
      gotoSection(currentIndex.value - 1, -1)
    }
    if (
      (e.code === 'ArrowDown'
        || e.code === 'ArrowRight'
        || e.code === 'Space'
        || e.code === 'Enter')
      && !animating.value
    ) {
      gotoSection(currentIndex.value + 1, 1)
    }
  })
})
</script>

<template>
  <UPageSection
    :ui="{
      container: '!p-0 pageContent relative overflow-hidden h-[560px] lg:h-[330px]'
    }"
  >
    <div class="flex items-center justify-between">
      <span>
        <UButton
          icon="i-lucide-arrow-left"
          variant="soft"
          class="cursor-pointer"
          @click="gotoSection(currentIndex - 1, -1)"
        />
      </span>
      <span ref="count">
        1
      </span>
      <span>
        <UButton
          icon="i-lucide-arrow-right"
          variant="soft"
          class="cursor-pointer"
          @click="gotoSection(currentIndex + 1, 1)"
        />
      </span>
    </div>
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="project-card"
    >
      <UPageCard
        :description="project.description"
        :to="project.url"
        orientation="horizontal"
        variant="soft"
        class="group project__outer"
        :ui="{
          root: 'bg-elevated',
          container: 'gap-x-0 cursor-pointer p-0 sm:p-0',
          wrapper: 'max-sm:order-last',
          title: 'text-xl my-2',
          description: 'text-base my-2'
        }"
        @click="handleClick(project.to)"
      >
        <template #leading>
          <UBadge
            v-for="category in project.categories"
            :key="category"
            :label="category"
            variant="subtle"
            class="mr-2 mb-2"
            size="sm"
          />
        </template>
        <template #title>
          <h2 class="text-2xl font-bold">
            {{ project.title }}
          </h2>
        </template>
        <template #description>
          <p class="mt-4">
            {{ project.description }}
          </p>
        </template>
        <template #footer>
          <UButton
            v-if="project.to"
            :to="project.to"
            target="_blank"
            class="text-primary flex items-center"
            color="neutral"
            variant="soft"
          >
            View website
            <UIcon
              name="i-lucide-external-link"
              class="size-4 text-primary transition-all opacity-40 group-hover:opacity-100"
            />
          </UButton>
        </template>
        <div
          class="relative overflow-hidden rounded-r-lg"
        >
          <NuxtImg
            :src="project.image.src"
            :alt="project.image.alt"

            class="object-cover w-full h-72 group-hover:scale-105 transition-all duration-300"
          />
        </div>
      </UPageCard>
    </div>
  </UPageSection>
</template>

<style scoped>
.project-card {
  @apply max-w-(--ui-container);
 height: 100%;
 width: 100%;
 top: 400px;
 position: absolute;
 left: 0;
 right: 0;
 top: 40px;
 visibility: hidden;

 &__outer,
 &__inner {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
 }
}
</style>
