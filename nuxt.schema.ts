import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: 'UI',
      description: 'UI Customization.',
      icon: 'i-mdi-palette-outline',
      fields: {
        icons: group({
          title: 'Icons',
          description: 'Manage icons used in UI Pro.',
          icon: 'i-mdi-application-settings-outline',
          fields: {
            search: field({
              type: 'icon',
              title: 'Search Bar',
              description: 'Icon to display in the search bar.',
              icon: 'i-mdi-magnify',
              default: 'i-heroicons-magnifying-glass-20-solid',
            }),
            dark: field({
              type: 'icon',
              title: 'Dark mode',
              description: 'Icon of color mode button for dark mode.',
              icon: 'i-mdi-moon-waning-crescent',
              default: 'i-heroicons-moon-20-solid',
            }),
            light: field({
              type: 'icon',
              title: 'Light mode',
              description: 'Icon of color mode button for light mode.',
              icon: 'i-mdi-white-balance-sunny',
              default: 'i-heroicons-sun-20-solid',
            }),
            external: field({
              type: 'icon',
              title: 'External Link',
              description: 'Icon for external link.',
              icon: 'i-mdi-arrow-top-right',
              default: 'i-heroicons-arrow-up-right-20-solid',
            }),
            chevron: field({
              type: 'icon',
              title: 'Chevron',
              description: 'Icon for chevron.',
              icon: 'i-mdi-chevron-down',
              default: 'i-heroicons-chevron-down-20-solid',
            }),
            hash: field({
              type: 'icon',
              title: 'Hash',
              description: 'Icon for hash anchors.',
              icon: 'i-ph-hash',
              default: 'i-heroicons-hashtag-20-solid',
            }),
          },
        }),
        primary: field({
          type: 'string',
          title: 'Primary',
          description: 'Primary color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'green',
          required: ['sky', 'mint', 'rose', 'amber', 'violet', 'emerald', 'fuchsia', 'indigo', 'lime', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow', 'green', 'blue', 'cyan', 'gray', 'white', 'black'],
        }),
        gray: field({
          type: 'string',
          title: 'Gray',
          description: 'Gray color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'slate',
          required: ['slate', 'cool', 'zinc', 'neutral', 'stone'],
        }),
      },
    }),
  },
})
