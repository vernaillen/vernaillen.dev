<script setup lang="ts">
import gsap from 'gsap'

const timelineSection = ref<HTMLElement | null>(null)
const h1Timeline = ref<HTMLElement | null>(null)
const h2Timeline1 = ref<HTMLElement | null>(null)
const h2Timeline2 = ref<HTMLElement | null>(null)

onMounted(() => {
  const boxes = gsap.utils.toArray('.box')

  boxes.forEach((box, _i) => {
    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        scrub: true,
        end: '+=300'
      },
      x: 200
    })
  })

  // Timeline animation
  if (timelineSection.value && h1Timeline.value && h2Timeline1.value && h2Timeline2.value) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineSection.value,
        start: 'top center',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from(h1Timeline.value, { y: -100 })
      .from(h2Timeline1.value, { y: 50, opacity: 0, stagger: 0.2 })
      .from(h2Timeline2.value, { y: 50, opacity: 0, stagger: 0.2 }, '+=5')
  }
})
definePageMeta({
  layout: 'default',
  colorMode: 'light'
})
</script>

<template>
  <UPage>
    <UPageBody>
      <UContainer>
        <div class="w-full text-center my-20">
          <h1 class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-highlighted ">
            <TextAnim>
              Wouter Vernaillen
            </TextAnim>
          </h1>
        </div>
        <section
          ref="timelineSection"
          class="my-64"
        >
          <h1
            ref="h1Timeline"
            class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted my-10"
          >
            Wouter Vernaillen
          </h1>
          <h2
            ref="h2Timeline1"
            class="text-4xl sm:text-6xl text-pretty tracking-tight font-bold text-highlighted my-10"
          >
            Freelance Full Stack Developer
          </h2>
          <h2
            ref="h2Timeline2"
            class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-highlighted my-10"
          >
            Java, Spring, Nuxt, DevOps
          </h2>
        </section>
        <div class="w-full text-center my-20">
          <h1 class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-highlighted ">
            <TextAnim>
              Wouter Vernaillen
            </TextAnim>
          </h1>
        </div>
        <div class="relative pt-20">
          <div class="box a">
            a
          </div>
          <div class="box b">
            b
          </div>
          <!-- <div class="box ghost">c</div> -->
          <div class="box c">
            c
          </div>
        </div>
        <div class="w-full text-center my-20">
          <h1 class="text-3xl sm:text-5xl text-pretty tracking-tight font-bold text-highlighted ">
            <TextAnim>
              Wouter Vernaillen
            </TextAnim>
          </h1>
        </div>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<style scoped>
.box.active {
  background-color: blue;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #28a92b;
  margin-top: 300px;
  z-index: 100;
  line-height: 100px;
  font-size: 50px;
  text-align: center;
}

.a {
  top: 100px;
  background-color: #8d3dae;
}

.b {
  top: 500px;
}

.c {
  top: 900px;
  background-color: #e26c16;
}

.ghost {
  top: 900px;
  background-color: #444;
}

.line {
  width: 2px;
  height: 3000px;
  position: absolute;
  left: 600px;
  top: 0px;
/*   visibility: hidden; */
  background-color: #777;
}
</style>
