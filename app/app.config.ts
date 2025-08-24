export default defineAppConfig({
  ui: {
    colors: {
      primary: 'vernaillen',
      neutral: 'zinc'
    },
    button: {
      slots: {
        base: 'group gap-1',
        trailingIcon: 'transition-all scale-70 opacity-80 group-hover:scale-80 group-hover:opacity-100 group-hover:translate-x-1'
      },
      variants: {
        size: {
          xl: {
            base: 'gap-1'
          }
        }
      }
    },
    navigationMenu: {
      slots: {
        root: '!p-0 top-0',
        link: 'border-transparent border-b-4 gap-0 !p-0 text-[16px] before:!bg-transparent'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'items-start h-full',
            item: 'py-0'
          }
        }
      }
    },
    accordion: {
      slots: {
        item: 'rounded-lg my-3 z-10 opacity-0 scale-95',
        header: 'rounded-lg px-4 text-gray-700 bg-gray-100/50 shadow-lg hover:bg-primary-300 hover:bg-opacity-40 disabled:bg-gray-50',
        trigger: 'cursor-pointer items-center flex justify-center'
      }
    },
    header: {
      slots: {
        container: 'items-start',
        left: 'items-start',
        center: 'my-auto items-start',
        right: 'my-auto',
        header: 'items-start'
      }
    },
    footer: {
      slots: {
        container: 'mb-14',
        left: 'text-center lg:text-left',
        center: 'my-7 lg:my-0',
        right: ''
      }
    },
    contentNavigation: {
      slots: {
        root: 'mobileMenu',
        item: '',
        link: 'justify-center p-0 text-xl gap-0 items-center text-center'
      }
    },
    contentToc: {
      slots: {
        trigger: 'cursor-pointer'
      }
    },
    pageHero: {
      slots: {
        container: 'py-12 sm:py-24 md:py-24 lg:py-24',
        headline: 'mb-6 sm:mb-10 mx-auto w-fit px-3 py-1 text-lg bg-primary-50/20 dark:bg-primary-400/10 text-primary-500 dark:text-primary-400 rounded-lg',
        title: 'mb-12',
        description: 'text-gray-400 dark:text-gray-300 text-lg font-semibold',
        links: 'mt-24'
      }
    },
    pageHeader: {
      slots: {
        root: 'border-b-0 pb-3',
        headline: 'font-normal text-gray-500 dark:text-gray-400',
        title: 'text-3xl sm:text-4xl text-primary-500 text-pretty font-bold mt-5',
        description: 'text-gray-500 dark:text-gray-400 text-lg font-normal mb-3',
        links: 'flex flex-nowrap flex-row lg:flex-col lg:items-end gap-1.5'
      }
    },
    pageSection: {
      slots: {
        container: 'lg:items-start',
        description: 'flex gap-4'
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:items-start'
          },
          vertical: {
            description: 'flex-col'
          }
        },
        reverse: {
          false: {
            wrapper: 'text-left lg:text-right',
            links: 'lg:justify-end'
          },
          true: {
            wrapper: 'lg:order-last text-left'
          }
        }
      }
    },
    pageCard: {
      slots: {
        wrapper: 'p-4 sm:p-6'
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:items-start'
          }
        }
      }
    },
    blogPost: {
      slots: {
        header: 'aspect-[2.5]',
        image: 'object-center',
        footer: 'flex justify-end -mt-3 pr-4 sm:pr-6 pb-4'
      }
    },
    prose: {
      h1: {
        slots: {
          base: 'mb-0'
        }
      },
      h2: {
        slots: {
          base: 'scroll-mt-70 lg:scroll-mt-28'
        }
      }
    }
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/vernaillen/',
      icon: 'i-simple-icons-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/woutervernaillen/',
      icon: 'i-simple-icons-linkedin'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/woutervernaillen/',
      icon: 'i-simple-icons-instagram'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/vernaillen',
      icon: 'i-simple-icons-twitter'
    },
    {
      name: 'Mastodon',
      url: 'https://fosstodon.org/@vernaillen',
      icon: 'i-simple-icons-mastodon'
    }
  ]
})
