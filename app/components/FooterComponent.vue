<script setup lang="ts">
import type { CommitResponse } from '~/types/github'

const config = useRuntimeConfig()

const links = [{
  label: 'Pages',
  children: useAppConfig().navigation
},
{
  label: 'Projects',
  children: [
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
      label: 'My Links App',
      to: 'https://links.vernaillen.dev',
      target: '_blank'
    }
  ]
}]

const apiUrl = computed(() => 'https://api.github.com/repos/vernaillen/vernaillen.dev/commits')
const { data: commits } = useLazyAsyncData<CommitResponse[]>('commits', () =>
  $fetch(apiUrl.value)
)
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
    <template #center>
      <p class="text-sm text-center">
        built with <UIcon
          name="i-mdi-heart"
          class="bg-red-500 -mb-[2px] mx-1"
        />
        using <NuxtLink
          href="https://nuxt.com"
          target="_blank"
        >
          <UIcon
            class="-mb-[2px] mx-1 w-4 h-3"
            name="i-logos-nuxt-icon"
          /> Nuxt {{ config.public.nuxtVersion }}
        </NuxtLink>
        <br><br>
        <span
          v-if="commits"
          class="text-xs text-gray-500 dark:text-gray-400"
        >
          last updated on <NuxtLink
            :href="commits[0].html_url"
            target="_blank"
          >
            <NuxtTime
              :datetime="commits[0].commit.committer.date"
              month="short"
              day="numeric"
              year="numeric"
              locale="en-GB"
            /> <UIcon
              name="i-mdi-github"
              class="-mb-[2px]"
            />
          </NuxtLink>
        </span>
      </p>
    </template>

    <template #right>
      <UButton
        to="https://github.com/vernaillen/vernaillen.dev"
        target="_blank"
        icon="i-mdi-github"
        aria-label="GitHub"
        color="gray"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
