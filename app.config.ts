export default defineAppConfig({
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
  ],
  ui: {
    primary: 'vernaillen',
    gray: 'neutral',
    variables: {
      light: {
        background: '255 255 255'
      },
      dark: {
        background: '12 12 13'
      }
    },
    header: {
      logo: 'absolute top-0',
      links: {
        base: 'border-t-2 h-16 px-1',
        inactive: 'border-transparent',
        active: 'border-vernaillen-500',
      },
    },
    aside: {
      links: {
        base: 'border-l-2 border-r-2 border-transparent hover:border-vernaillen-500',
        inactive: '',
        active: 'border-vernaillen-500',
      },
    },
    landing: {
      hero: {
        wrapper: 'py-20 sm:py-24 md:py-32 relative',
        headline: 'mt-0 mb-10',
        title: 'text-3xl sm:text-5xl md:text-6xl animate__animated animate__pulse',
        description: 'my-16 md:my-24',
      },
    },
    page: {
      header: {
        title: 'animate__animated animate__pulse'
      }
    },
    blog: {
      post: {
        wrapper: 'lg:items-start',
        title: 'text-ellipsis overflow-hidden',
        image: {
          wrapper: 'aspect-[21/8]',
        }
      },
      list: {
        wrapper: 'md:grid md:grid-cols-2'
      }
    },
  },
})
