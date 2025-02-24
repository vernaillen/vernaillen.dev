<script setup lang="ts">
import type { PropType } from 'vue'
import { twMerge } from 'tailwind-merge'
import type { AsideLink } from '#ui-pro/types'

const router = useRouter()
const route = useRoute()
const appConfig = useAppConfig()
const { isHeaderDialogOpen } = useUIState()

const config = computed(() => ({
  wrapper: 'space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0',
  base: 'flex items-center gap-1.5 lg:gap-2 group',
  active: 'text-primary font-semibold',
  inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium',
  icon: {
    wrapper: 'rounded-md p-1 inline-flex ring-inset ring-1',
    base: 'w-4 h-4 flex-shrink-0',
    active: 'bg-primary ring-primary text-background',
    inactive: 'bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background'
  },
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  label: 'text-sm/6 relative'
}))

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  links: {
    type: Array as PropType<AsideLink[]>,
    default: () => []
  }
})

const { ui, attrs } = useUI('aside.links', toRef(props, 'ui'), config, toRef(props, 'class'), true)

const hoveredPath = useState('hoveredPath', () => '')
const setHoveredPath = (path: unknown) => {
  hoveredPath.value = path as string
}
function openLink(link: AsideLink) {
  setTimeout(() => {
    router.push(link.to as string)
  }, 300)
  setTimeout(() => {
    isHeaderDialogOpen.value = false
  }, 400)
}
onMounted(() => {
  hoveredPath.value = route.path
})
</script>

<template>
  <div
    v-if="links?.length"
    :class="ui.wrapper"
    v-bind="attrs"
  >
    <ULink
      v-for="(link, index) in links"
      :key="index"
      v-slot="{ isActive }"
      :class="ui.base"
      class="relative"
      :active-class="ui.active"
      :inactive-class="ui.inactive"
      @click="openLink(link)"
      @mouseover="setHoveredPath(link.to)"
      @mouseleave="setHoveredPath(route.path)"
    >
      <div
        v-if="link.icon"
        :class="[ui.icon.wrapper, link.active || isActive ? ui.icon.active : ui.icon.inactive]"
      >
        <UIcon
          :name="link.icon"
          :class="twMerge(ui.icon.base, link.iconClass)"
        />
      </div>

      <span :class="ui.label">
        {{ link.label }}

        <UIcon
          v-if="link.target === '_blank'"
          :name="ui.externalIcon.name"
          :class="ui.externalIcon.base"
        />
      </span>

      <Motion
        v-if="link.to === hoveredPath"
        as="div"
        class="
          absolute top-0 left-0 right-0
          w-full h-full
          border-l-2 border-r-2 border-vernaillen-500
          bg-primary-500 bg-opacity-10 dark:bg-opacity-5
          -z-10"
        layout-id="navbar"
        aria-hidden="true"
        :style="{
          width: '100%'
        }"
        :transition="{
          type: 'spring',
          bounce: 0.2,
          stiffness: 50
        }"
      />
    </ULink>
  </div>
</template>
