<script setup lang="ts">
import gsap from 'gsap'

const { data: home } = await useAsyncData(() => queryCollection('pages').path('/').first())

useSeoMeta({
  title: 'Home - Wouter Vernaillen',
  description: home.value?.description,
  ogTitle: 'Home - Wouter Vernaillen',
  ogDescription: home.value?.description
})

defineOgImageComponent('Vernaillen', {
  title: 'Wouter Vernaillen',
  description: home.value?.description
})
definePageMeta({
  layout: 'home',
  colorMode: 'light'
})

onMounted(() => {
  const sections = gsap.utils.toArray('.homepageSection > div > div:nth-child(1)')

  sections.forEach((section) => {
    gsap.from(section as HTMLElement, {
      scrollTrigger: {
        trigger: section as HTMLElement,
        start: 'top bottom',
        end: 'top 20%',
        scrub: true
      },
      // x: section.classList.contains('lg:order-last') ? 50 : -50,
      scale: 0.8,
      ease: 'sine'
    })
  })

  const pictureSections = gsap.utils.toArray('.homepageSection > div > .homepageSectionPicture')

  pictureSections.forEach((section) => {
    gsap.from(section as HTMLElement, {
      scrollTrigger: {
        trigger: section as HTMLElement,
        start: 'top bottom',
        end: 'top 20%',
        scrub: true
      },
      scale: 0.8,
      ease: 'sine'
    })
  })
})
</script>

<template>
  <UPage>
    <UPageBody>
      <UContainer>
        <div class="w-full text-center my-10">
          <ContentRenderer
            v-if="home"
            :value="home"
          />
          <div v-else>
            Home not found
          </div>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>
