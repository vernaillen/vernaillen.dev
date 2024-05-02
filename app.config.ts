export default defineAppConfig({
  longDateFormat: 'DD MMMM YYYY',
  shortDateFormat: 'DD MMM YYYY',
  meta: {
    titleSuffix: ' | Wouter Vernaillen: Freelance Full Stack Developer',
  },
  navigation: [
    {
      label: 'Career',
      to: '/career',
    },
    {
      label: 'Expertise',
      to: '/expertise',
    },
    {
      label: 'Projects',
      to: '/projects',
    },
    {
      label: 'Blog',
      to: '/blog',
    },
    {
      label: 'About',
      to: '/about',
    },
  ],
  ui: {
    primary: 'vernaillen',
    gray: 'neutral',
    variables: {
      light: {
        background: '255 255 255',
      },
      dark: {
        background: '12 12 13',
      },
    },
    button: {
      variant: {
        outline: 'ring-{color}-500/70',
        subtle: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-transparent dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
      },
    },
    header: {
      logo: 'absolute top-0',
      links: {
        base: 'border-t-[3px] h-16 px-1',
        inactive: 'border-transparent',
        active: 'border-vernaillen-500',
      },
    },
    navigation: {
      tree: {
        wrapper: 'space-y-2',
      },
      accordion: {
        wrapper: 'px-5 py-2 space-y-2',
        button: {
          trailingIcon: {
            active: 'text-vernaillen-500 dark:text-vernaillen-400',
            inactive: 'text-vernaillen-500 dark:text-vernaillen-400',
          },
        },
      },
      links: {
        base: 'px-5 py-2 gap-1 bg-primary-500 bg-opacity-0 border-l-2 border-r-2 border-transparent hover:border-vernaillen-500 hover:bg-opacity-5',
        inactive: '',
        active: 'border-vernaillen-500 bg-opacity-10 dark:bg-opacity-5',
      },
    },
    landing: {
      hero: {
        wrapper: 'py-20 sm:py-24 md:py-36 relative',
        headline: 'mt-0 mb-12',
        title: 'text-3xl sm:text-5xl md:text-6xl animate__animated animate__pulse',
        description: 'my-16 md:my-24',
      },
    },
    page: {
      header: {
        title: 'animate__animated animate__pulse',
      },
    },
    blog: {
      post: {
        wrapper: 'lg:items-start gap-y-3',
        title: 'text-ellipsis overflow-hidden',
        image: {
          wrapper: 'aspect-[21/10]',
        },
      },
      list: {
        wrapper: 'md:grid md:grid-cols-2',
      },
    },
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/vernaillen/',
      icon: 'i-mdi-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/woutervernaillen/',
      icon: 'i-mdi-linkedin',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/woutervernaillen/',
      icon: 'i-mdi-instagram',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vernaillen',
      icon: 'i-mdi-twitter',
    },
    {
      name: 'Mastodon',
      url: 'https://fosstodon.org/@vernaillen',
      icon: 'i-mdi-mastodon',
    },
  ],
})
