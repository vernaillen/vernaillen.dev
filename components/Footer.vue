<script setup lang="ts">
const links = [{
  label: 'Pages',
  children: [
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
      label: 'Feed',
      to: '/feed'
    },
    {
      label: 'About',
      to: '/about'
    }
  ]
},
{
  label: 'Projects',
  children: [
    {
      label: 'WPnuxt',
      to: 'https://wpnuxt.com',
      target: '_blank'
    },
    {
      label: 'Vue Audiomotion Analyzer',
      to: 'https://vue-audiomotion-analyzer.dev/',
      target: '_blank'
    },
    {
      label: 'Radio App',
      to: 'https://radio.vernaillen.dev/',
      target: '_blank'
    }
  ]
},
{
  label: 'Other Websites',
  children: [
    {
      label: 'Harmonics.be',
      to: 'https://harmonics.be',
      target: '_blank'
    },
    {
      label: 'bio.wouter.net',
      to: 'https://bio.wouter.net',
      target: '_blank'
    }
  ]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit () {
  loading.value = true

  setTimeout(() => {
    toast.add({
      title: 'Subscribed!',
      description: 'You\'ve been subscribed to our newsletter.'
    })

    loading.value = false
  }, 1000)
}
</script>

<template>
  <UFooter>
    <template #top>
      <UFooterColumns :links="links">
        <template #right>
          <WhatsAppLink nr="+32473344656" />
          <br><br>
          <SocialIcons />
        </template>
      </UFooterColumns>
    </template>

    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © {{ new Date().getFullYear() }}. All rights reserved.
      </p>
    </template>

    <template #right>
      <UColorModeButton size="sm" />

      <UButton to="https://github.com/vernaillen/vernaillen.dev" target="_blank" icon="i-simple-icons-github" aria-label="GitHub" color="gray" variant="ghost" />
    </template>
  </UFooter>
</template>
