<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { tv } from '~/utils/tv'
import { useMenuState, setHoveredItem, clearHoveredItem } from '~/composables/headerMenu'
import theme from '#build/ui-pro/header'

import type { NavigationMenuItem } from '#ui/types'

const appConfig = useAppConfig() as Header['AppConfig']
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.uiPro?.header || {}) })())

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()
const router = useRouter()
const navLinks = computed<NavigationMenuItem[]>(() => [
  ...(navigation?.value || []).map<NavigationMenuItem>(item => ({
    label: item.title,
    to: item.path,
    active: item.path === route.path || (item.path === '/blog' && route.path.startsWith('/blog/'))
  }))
])

const highlight = ref<HTMLElement | null>(null)
const menuState = useMenuState()

function clickedLink(to: string) {
  if (to === route.path) {
    reloadNuxtApp({ path: to, ttl: 100 })
  } else {
    router.push(to)
  }
}
function openMenu(open: boolean) {
  if (open) {
    useMobileNav().isMobileNavOpen.value = true
    updateHighlight()
  } else {
    // do not close menu here, it's too early
    // let the pageHook close the menu upon page:finish
  }
}
function toggleMenu() {
  useMobileNav().isMobileNavOpen.value = !useMobileNav().isMobileNavOpen.value
  setTimeout(() => {
    updateHighlight()
  }, 100)
}

function isActive(item: NavigationMenuItem) {
  if (item.to !== '/') {
    return menuState.hoveredPath.startsWith(item.to as string)
  } else {
    return menuState.hoveredPath === item.to
  }
}
const headerClass = ref('border-transparent')

const logo = ref<HTMLElement>()

function updateHighlight() {
  if (highlight.value) {
    const navItems = gsap.utils.toArray<HTMLElement>('.nav-item')
    const state = Flip.getState('.nav-item, .nav-highlight')

    if (menuState.hoveredPath) {
      navItems.forEach((item: HTMLElement) => {
        if (item.dataset.path === menuState.hoveredPath && highlight.value) {
          highlight.value.classList.remove('hidden')
          highlight.value.classList.add('block')
          item.parentElement?.appendChild(highlight.value)
        }
      })
      Flip.from(state, {
        duration: 0.7,
        ease: 'back.inOut(2)'
      })
    }
  }
}

onMounted(() => {
  gsap.registerPlugin(Flip)
  gsap.to('.logo', {
    scrollTrigger: {
      start: 'top -70',
      toggleActions: 'play resume resume reverse',
      scrub: true
    },
    scale: 0.8,
    x: -10,
    y: -4
  })

  /* scroll((progress, info) => {
    headerClass.value += ` bg-(--ui-bg)/${info.y.current < 80 ? Math.round(info.y.current) : 80}`
    headerClass.value += ` backdrop-blur-[${info.y.current < 80 ? Math.round(info.y.current / 10) : 8}px]`
    highlightClass.value = info.y.current > 40
      ? 'bg-primary-500/10 dark:bg-primary-500/10'
      : 'bg-transparent'
  }) */

  setActiveItem(navLinks.value)
  updateHighlight()
})
watch(menuState, () => {
  updateHighlight()
})

watch(route, () => {
  setActiveItem(navLinks.value)
}, { deep: true, immediate: true })
</script>

<template>
  <UHeader
    mode="drawer"
    :open="useMobileNav().isMobileNavOpen.value"
    :ui="{
      root: headerClass + ' myHeader transition-all duration-500',
      center: 'mt-0'
    }"
    @update:open="openMenu"
  >
    <template #title>
      <SvgoLogo
        ref="logo"
        class="cursor-pointer w-full logo"
        @click="$route.path == '/' ? reloadNuxtApp({ path: '/', ttl: 100 }) : $router.push('/')"
      />
    </template>

    <template #right>
      <AppSocialIcons />
    </template>

    <template #body>
      <ul class="isolate -mt-1.5 max-w-[400px] py-10 mx-auto">
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          class="p-0 h-full w-full relative"
          @mouseover="setHoveredItem(link)"
          @mouseleave="clearHoveredItem()"
          @click="clickedLink(link.to as string)"
        >
          <div
            class="
            cursor-pointer group relative w-full before:inset-y-px before:inset-x-0
            flex before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)]
            focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset
            focus-visible:before:ring-2 justify-center
            p-4 text-xl gap-0 items-center text-center
            focus-visible:before:ring-(--ui-primary) font-normal nav-item"
            :data-path="link.to"
            :class="{
              'text-(--ui-primary)': isActive(link),
              'text-black/50 dark:text-white hover:text-(--ui-primary)': !isActive(link)
            }"
          >
            {{ link.label }}
          </div>
        </li>
      </ul>
    </template>
    <template #toggle>
      <UButton
        color="neutral"
        variant="ghost"
        :aria-label="useMobileNav().isMobileNavOpen.value ? 'close' : 'open'"
        :icon="useMobileNav().isMobileNavOpen.value ? appConfig.ui.icons.close : appConfig.ui.icons.menu"
        v-bind="useMobileNav().isMobileNavOpen.value"
        :class="ui.toggle()"
        @click="toggleMenu"
      />
    </template>
    <UNavigationMenu :items="navLinks">
      <template #item="{ item }">
        <div
          class="py-[20px] px-4 nav-item"
          :data-path="item.to"
          @mouseover="setHoveredItem(item)"
          @mouseleave="clearHoveredItem()"
        >
          {{ item.label }}
        </div>
      </template>
    </UNavigationMenu>

    <div
      ref="highlight"
      class="absolute top-0 left-0 h-[64px] bg-primary-500/5 border-x-2 lg:border-x-0 lg:border-t-2 border-primary-500 w-full hidden z-[-10] nav-highlight"
      layout-id="navbar"
    />
  </UHeader>
</template>
