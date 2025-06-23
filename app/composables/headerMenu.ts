import type { MenuState } from '../types'
import type { NavigationMenuItem } from '#ui/types'

export function setHoveredItem(item: NavigationMenuItem) {
  useMenuState().hoveredPath = item.to as string
}

export function clearHoveredItem() {
  useMenuState().hoveredPath = useRoute().path
}

export function setActiveItem(navLinks: NavItem[]) {
  const route = useRoute()
  if (route.path === '/') {
    useMenuState().activePath = '/'
    setHoveredItem({ to: route.path })
    return
  }
  navLinks.forEach((link) => {
    if (link.to === route.path || route.path.startsWith(link.to as string)) {
      useMenuState().activePath = link.to as string
      setHoveredItem(link)
    }
  })
}

export function useMenuState() {
  const menuState = useState<MenuState>('menuState')
  if (!menuState.value) {
    menuState.value = {
      hoveredPath: '',
      activePath: ''
    }
  }
  return menuState.value
}
