<script setup lang="ts">
import type { PropType } from 'vue'
import { getULinkProps } from '#ui/utils'
import type { HeaderLink } from '#ui-pro/types'

const appConfig = useAppConfig()

const config = computed(() => ({
  wrapper: 'flex items-center gap-x-8',
  base: 'text-sm/6 font-semibold flex items-center gap-1',
  active: 'text-primary',
  inactive: 'hover:text-primary',
  trailingIcon: {
    name: appConfig.ui.icons.chevron,
    base: 'w-5 h-5 transform transition-transform duration-200 flex-shrink-0',
    active: 'rotate-180',
    inactive: ''
  },
  externalIcon: {
    name: appConfig.ui.icons.external,
    base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
  },
  default: {
    popover: {
      mode: 'hover' as 'click' | 'hover',
      openDelay: 0,
      ui: {
        width: 'max-w-[16rem]'
      }
    }
  }
}))

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  links: {
    type: Array as PropType<HeaderLink[]>,
    default: () => []
  }
})

const { ui, attrs } = useUI('header.links', toRef(props, 'ui'), config, toRef(props, 'class'), true)

const hoveredPath = useState('hoveredPath', () => '')
const setHoveredPath = (path: unknown) => {
  hoveredPath.value = path as string
}
const route = useRoute()
onMounted(() => {
  hoveredPath.value = route.path
})
</script>

<template>
  <ul
    v-if="links?.length"
    class="items-center gap-x-0 hidden lg:flex"
    v-bind="attrs"
  >
    <li
      v-for="(link, index) of links"
      :key="index"
      class="relative w-full"
    >
      <UPopover
        v-if="link.children?.length"
        v-bind="ui.default.popover"
      >
        <template #default="{ open }">
          <ULink
            v-bind="getULinkProps(link)"
            :class="ui.base"
            :active-class="ui.active"
            :inactive-class="ui.inactive"
            @click="link.click"
          >
            <slot
              name="label"
              :link="link"
            >
              {{ link.label }}
            </slot>

            <UIcon
              :name="ui.trailingIcon.name"
              :class="[ui.trailingIcon.base, open ? ui.trailingIcon.active : ui.trailingIcon.inactive]"
            />
          </ULink>
        </template>

        <template #panel="{ close }">
          <slot
            name="panel"
            :link="link"
            :close="close"
          >
            <UHeaderPopoverLinks
              :links="link.children"
              @click="close"
            />
          </slot>
        </template>
      </UPopover>
      <ULink
        v-else
        v-bind="getULinkProps(link)"
        class="text-sm/6 font-semibold flex items-center justify-center h-16 px-5"
        :active-class="ui.active"
        :inactive-class="ui.inactive"
        @click="link.click"
        @mouseover="setHoveredPath(link.to)"
        @mouseleave="setHoveredPath(route.path)"
      >
        <slot
          name="label"
          :link="link"
        >
          {{ link.label }}
        </slot>

        <UIcon
          v-if="link.target === '_blank'"
          :name="ui.externalIcon.name"
          :class="ui.externalIcon.base"
        />
        <Motion
          v-if="link.to === hoveredPath"
          as="div"
          class="absolute w-full h-full
          bg-primary-500 bg-opacity-10 dark:bg-opacity-5
          border-t-[3px] border-vernaillen-500/90 -z-10"
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
    </li>
  </ul>
</template>
