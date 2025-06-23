<script setup lang="ts">
import gsap from 'gsap'

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
          v-gsap.timeline.whenVisible
          class="my-64"
        >
          <h1
            v-gsap.add.from="{ y: -100 }"
            class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted my-10"
          >
            Wouter Vernaillen
          </h1>
          <h2
            v-gsap.add.from="{ y: 50, opacity: 0, stagger: 0.2 }"
            class="text-4xl sm:text-6xl text-pretty tracking-tight font-bold text-highlighted my-10"
          >
            Freelance Full Stack Developer
          </h2>
          <h2
            v-gsap.delay(5).add.from="{ y: 50, opacity: 0, stagger: 0.2 }"
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
