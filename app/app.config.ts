export default defineAppConfig({
  longDateFormat: 'DD MMMM YYYY',
  shortDateFormat: 'DD MMM YYYY',
  meta: {
    titleSuffix: ' | Wouter Vernaillen: Freelance Full Stack Developer'
  },
  navigation: [
    {
      label: 'Expertise',
      to: '/expertise'
    },
    {
      label: 'Career',
      to: '/career'
    },
    {
      label: 'Projects',
      to: '/projects'
    },
    {
      label: 'Blog',
      to: '/blog'
    },
    {
      label: 'About',
      to: '/about'
    }
  ],
  projects: [
    {
      label: 'WPNuxt',
      to: 'https://wpnuxt.com',
      target: '_blank'
    },
    {
      label: 'Nuxt Audiomotion Analyzer',
      to: 'https://nuxt-audiomotion-analyzer.vercel.app/',
      target: '_blank'
    },
    {
      label: 'Radio App',
      to: 'https://radio.vernaillen.dev/',
      target: '_blank'
    },
    {
      label: 'Test',
      to: 'https://radio.vernaillen.dev/',
      target: '_blank'
    }
  ],
  otherWebsites: [
    {
      label: 'Harmonics.be',
      to: 'https://harmonics.be',
      target: '_blank'
    },
    {
      label: 'My Links App',
      to: 'https://links.vernaillen.dev',
      target: '_blank'
    }
  ],
  ui: {
    primary: 'vernaillen',
    gray: 'neutral',
    variables: {
      light: {
        background: '255 255 255',
        foreground: 'var(--color-gray-700)'
      },
      dark: {
        background: '12 12 13',
        foreground: 'var(--color-gray-200)'
      }
    },
    button: {
      variant: {
        outline: 'ring-{color}-500/70',
        subtle: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-transparent dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400'
      }
    },
    main: {
      wrapper: 'slide-enter-content'
    },
    header: {
      logo: 'absolute top-0',
      links: {
        base: 'h-16 px-1'
      }
    },
    aside: {
      links: {
        wrapper: 'space-y-0 pt-5 sm:px-32 md:px-48',
        base: 'px-5 py-3 my-0 block w-full mx-auto text-center'
      }
    },
    landing: {
      hero: {
        wrapper: 'py-20 sm:py-24 md:py-36 relative',
        headline: 'mt-0 mb-12 font-normal',
        title: 'text-3xl sm:text-5xl md:text-6xl',
        description: 'my-16 md:my-24 slide-enter slide-enter-stage5'
      }
    },
    page: {
      header: {
        wrapper: 'py-[40px] ',
        title: 'title-enter transition-all transform duration-300'
      }
    },
    blog: {
      post: {
        wrapper: 'lg:items-start gap-y-3',
        title: 'text-ellipsis overflow-hidden',
        image: {
          wrapper: 'aspect-[21/10]'
        }
      },
      list: {
        wrapper: 'md:grid md:grid-cols-2'
      }
    }
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/vernaillen/',
      icon: 'i-mdi-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/woutervernaillen/',
      icon: 'i-mdi-linkedin'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/woutervernaillen/',
      icon: 'i-mdi-instagram'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vernaillen',
      icon: 'i-mdi-twitter'
    },
    {
      name: 'Mastodon',
      url: 'https://fosstodon.org/@vernaillen',
      icon: 'i-mdi-mastodon'
    }
  ]
})
