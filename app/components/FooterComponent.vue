<script setup lang="ts">
import type { CommitResponse } from '~/types/github'

const config = useRuntimeConfig()

const links = [{
  label: 'Pages',
  children: useAppConfig().navigation
},
{
  label: 'Projects',
  children: useAppConfig().projects
},
{
  label: 'Other Websites',
  children: useAppConfig().otherWebsites
}]
const { data: commits } = await useFetch<CommitResponse[]>('/api/commits')
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
          class="bg-red-500 mx-1"
        />
        by <NuxtLink
          href="https://vernaillen.dev"
          target="_blank"
        >
          <UAvatar
            src="https://avatars.githubusercontent.com/u/102268?s=40&v=4"
            alt="Avatar"
            size="3xs"
            class="-mb-[20px] mx-1"
          />
        </NuxtLink>
        using <NuxtLink
          href="https://nuxt.com"
          target="_blank"
        >
          <UIcon
            class="mx-1 w-4 h-3"
            name="i-logos-nuxt-icon"
          /> Nuxt {{ config.public.nuxtVersion }}
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <span
        v-if="commits?.length"
        class="text-xs text-gray-500 dark:text-gray-400"
      >
        website last updated on <NuxtLink
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
    </template>
  </UFooter>
</template>
