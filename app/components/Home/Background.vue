<script setup lang="ts">
import gsap from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

const svgRight = ref<HTMLDivElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    const drawCircles = gsap.utils.toArray('.draw-circle')
    drawCircles.forEach((circle) => {
      gsap.to(circle as HTMLElement, { duration: 2, opacity: 0.3 })
    })

    const drawLines = gsap.utils.toArray('.draw-line')
    drawLines.forEach((line) => {
      gsap.set(line as HTMLElement, { opacity: 0.5 })
      gsap.from(line as HTMLElement, {
        duration: 1,
        delay: 0.2,
        opacity: 0,
        drawSVG: 0
      })
    })
  }, 100)
  gsap.to(svgRight.value as HTMLElement, {
    scrollTrigger: {
      trigger: 'body',
      start: 'top -40%',
      end: 'top -40%',
      toggleActions: 'play none reverse none'
    },
    duration: 1,
    opacity: 0.4
  })
})
</script>

<template>
  <div class="svg-right fixed top-0 right-0 pl-8 sm:pl-14 z-[-1] overflow-hidden">
    <div ref="svgRight">
      <svg
        width="450"
        height="556"
        viewBox="0 0 450 556"
        fill="none"
        initial="hidden"
        animate="visible"
      >
        <circle
          class="draw-circle"
          opacity="0"
          cx="277"
          cy="63"
          r="225"
          fill="url(#paint0_linear_25:217)"
        />
        <circle
          v-gsap.to="{ r: 18, delay: 0.3 }"
          cx="17.9997"
          cy="182"
          fill="url(#paint1_radial_25:217)"
        />
        <circle
          v-gsap.to="{ r: 35, delay: 0.3 }"
          cx="76.9997"
          cy="288"
          fill="url(#paint1_radial_25:217)"
        />
        <circle
          class="draw-circle"
          opacity="0"
          cx="325.486"
          cy="302.87"
          r="180"
          transform="rotate(-37.6852 325.486 302.87)"
          fill="url(#paint3_linear_25:217)"
        />
        <circle
          class="draw-line"
          opacity="0"
          cx="184.521"
          cy="315.521"
          r="132.862"
          transform="rotate(114.874 184.521 315.521)"
          stroke="url(#paint4_linear_25:217)"
        />
        <circle
          class="draw-line"
          opacity="0"
          cx="356"
          cy="290"
          r="179.5"
          transform="rotate(-30 356 290)"
          stroke="url(#paint5_linear_25:217)"
        />
        <circle
          class="draw-circle"
          opacity="0"
          cx="191.659"
          cy="302.659"
          r="133.362"
          transform="rotate(133.319 191.659 302.659)"
          fill="url(#paint6_linear_25:217)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_25:217"
            x1="-54.5003"
            y1="-178"
            x2="222"
            y2="288"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="var(--color-primary-500)" />
            <stop
              offset="1"
              stop-color="var(--color-primary-500)"
              stop-opacity="0"
            />
          </linearGradient>
          <radialGradient
            id="paint1_radial_25:217"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
          >
            <stop
              offset="0.145833"
              stop-color="var(--color-primary-500)"
              stop-opacity="0"
            />
            <stop
              offset="1"
              stop-color="var(--color-primary-500)"
              stop-opacity="0.08"
            />
          </radialGradient>
          <radialGradient
            id="paint2_radial_25:217"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
          >
            <stop
              offset="0.145833"
              stop-color="var(--color-primary-500)"
              stop-opacity="0"
            />
            <stop
              offset="1"
              stop-color="var(--color-primary-500)"
              stop-opacity="0.08"
            />
          </radialGradient>
          <linearGradient
            id="paint3_linear_25:217"
            x1="226.775"
            y1="-66.1548"
            x2="292.157"
            y2="351.421"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="var(--color-primary-500)" />
            <stop
              offset="1"
              stop-color="var(--color-primary-500)"
              stop-opacity="0"
            />
          </linearGradient>
          <linearGradient
            id="paint4_linear_25:217"
            x1="184.521"
            y1="182.159"
            x2="184.521"
            y2="448.882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="var(--color-primary-500)" />
            <stop
              offset="1"
              stop-color="white"
              stop-opacity="0"
            />
          </linearGradient>
          <linearGradient
            id="paint5_linear_25:217"
            x1="356"
            y1="110"
            x2="356"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="var(--color-primary-500)" />
            <stop
              offset="1"
              stop-color="white"
              stop-opacity="0"
            />
          </linearGradient>
          <linearGradient
            id="paint6_linear_25:217"
            x1="118.524"
            y1="29.2497"
            x2="166.965"
            y2="338.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="var(--color-primary-500)" />
            <stop
              offset="1"
              stop-color="var(--color-primary-500)"
              stop-opacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
  <div
    class="svg-left absolute
        top-[470px] -left-30 scale-75
        sm:-left-20 sm:scale-90
        md:left-0 md:scale-100
        z-[-1] opacity-50 block overflow-hidden"
  >
    <svg
      width="364"
      height="201"
      viewBox="0 0 364 201"
      fill="none"
    >
      <circle
        class="draw-line"
        opacity="0"
        cx="214.505"
        cy="60.5054"
        r="49.7205"
        transform="rotate(-13.421 214.505 60.5054)"
        stroke="url(#paint4_linear_25:218)"
      />
      <circle
        v-gsap.to="{ r: 43 }"
        cx="220"
        cy="63"
        fill="url(#paint5_radial_25:218)"
      />
      <defs>
        <linearGradient
          id="paint4_linear_25:218"
          x1="214.505"
          y1="10.2849"
          x2="212.684"
          y2="99.5816"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--color-primary-500)" />
          <stop
            offset="1"
            stop-color="var(--color-primary-500)"
            stop-opacity="0"
          />
        </linearGradient>
        <radialGradient
          id="paint5_radial_25:218"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(220 63) rotate(90) scale(43)"
        >
          <stop
            offset="0.145833"
            stop-color="var(--color-primary-500)"
            stop-opacity="0"
          />
          <stop
            offset="1"
            stop-color="var(--color-primary-500)"
            stop-opacity="0.15"
          />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>
