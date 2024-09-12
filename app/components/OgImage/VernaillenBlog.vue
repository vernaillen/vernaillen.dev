<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})
defineProps<{
  title: string
  subTitle?: string
  description: string
  img?: string
}>()
</script>

<template>
  <div class="w-full h-full bg-[#0c0c0d] pt-0 mt-0">
    <div class="mx-24 mb-8 flex columns-2 justify-between w-full pt-0 mt-0">
      <div class="w-1/3 flex justify-start pt-0 mt-0">
        <svg
          class="pt-0 mt-0"
          viewBox="0 0 754 276"
          width="160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            opacity="transparent"
          >
            <path
              class="fill-[#9c8e1b]"
              d="M0 0 H92 V184 H172 V0 H264 V184 H344 V0 H436 V276 H0 Z"
            />
            <path
              class="fill-white"
              d="M490 0 H582 V184 H662 V0 H754 V276 H490 Z"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="relative mx-24">
      <h1 class="text-5xl w-full mt-20 text-white">
        {{ title }}
      </h1>
      <h3 class="text-2xl w-full my-10 text-gray-200 font-light">
        {{ description }}
      </h3>
      <h1 class="text-4xl w-full text-right items-end justify-end flex my-20 text-gray-100">
        by Wouter Vernailen
      </h1>
    </div>
  </div>
  <div class="flex absolute top-0 right-0 z-[-1] overflow-hidden">
    <svg
      width="450"
      height="556"
      viewBox="0 0 450 556"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="277"
        cy="63"
        r="225"
        fill="url(#paint0_linear_25:217)"
      />
      <circle
        cx="17.9997"
        cy="182"
        r="18"
        fill="url(#paint1_radial_25:217)"
      />
      <circle
        cx="76.9997"
        cy="288"
        r="34"
        fill="url(#paint2_radial_25:217)"
      />
      <circle
        cx="325.486"
        cy="302.87"
        r="180"
        transform="rotate(-37.6852 325.486 302.87)"
        fill="url(#paint3_linear_25:217)"
      />
      <circle
        opacity="0.8"
        cx="184.521"
        cy="315.521"
        r="132.862"
        transform="rotate(114.874 184.521 315.521)"
        stroke="url(#paint4_linear_25:217)"
      />
      <circle
        opacity="0.8"
        cx="356"
        cy="290"
        r="179.5"
        transform="rotate(-30 356 290)"
        stroke="url(#paint5_linear_25:217)"
      />
      <circle
        opacity="0.8"
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
          <stop stop-color="#9c8e1b" />
          <stop
            offset="1"
            stop-color="#9c8e1b"
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
            stop-color="#9c8e1b"
            stop-opacity="0"
          />
          <stop
            offset="1"
            stop-color="#9c8e1b"
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
            stop-color="#9c8e1b"
            stop-opacity="0"
          />
          <stop
            offset="1"
            stop-color="#9c8e1b"
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
          <stop stop-color="#9c8e1b" />
          <stop
            offset="1"
            stop-color="#9c8e1b"
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
          <stop stop-color="#9c8e1b" />
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
          <stop stop-color="#9c8e1b" />
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
          <stop stop-color="#9c8e1b" />
          <stop
            offset="1"
            stop-color="#9c8e1b"
            stop-opacity="0"
          />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
