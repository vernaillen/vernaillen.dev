<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import { useFetch } from 'nuxt/app'
import type { ReleaseInfo, Contributions } from '../../types'

const { data: page } = await useAsyncData('releases', () => queryContent('/releases').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: releases = [] } = await useFetch<ReleaseInfo[]>('/api/releases')
const { data: contributions = [] } = await useFetch<Contributions>('/api/contributions')
const { prs } = contributions.value

definePageMeta({
  colorMode: 'dark'
})
</script>

<template>
  <div>
    <UPageHeader v-bind="page" />
    <UPage>
      <UPageBody class="max-w-[600px] mx-auto">
        <div class="mb-3 max-w-[600px] mx-auto text-center slid-enter">
          GitHub releases by
          <a
            href="https://github.com/vernaillen"
            target="_blank"
            class="hover:underline"
          >
            Wouter Vernaillen
          </a>
        </div>
        <div class="mb-10 opacity-50 text-sm max-w-[600px] mx-auto text-center">
          Only the latest release of each repo is shown
        </div>

        <div
          v-for="item, index of releases"
          :key="index"
          class="grid grid-cols-12 gap-4 mb-10 max-w-[600px] mx-auto slide-enter"
          :style="'--enter-stage:' + (index * 3) + ';'"
        >
          <div class="col-span-2">
            <a
              :href="`https://github.com/${item.repo}`"
              target="_blank"
              class="flex-none"
            >
              <img
                :src="`https://github.com/${item.repo.split('/')[0]}.png`"
                class="h-12 w-12"
                :alt="item.repo"
                :class="item.repo.startsWith('vernaillen/') ? 'rounded-full' : 'rounded'"
              >
            </a>
          </div>
          <div class="col-span-7">
            <div class="mb-2">
              <a
                :href="`https://github.com/${item.repo}`"
                target="_blank"
                class="hover:underline"
              >
                <span class="opacity-50">{{ item.repo.split('/')[0] }} /</span> {{ item.repo.split('/')[1] }}
              </a>
            </div>
            <div class="opacity-50 text-sm">
              <a
                :href="item.commit"
                target="_blank"
                class="hover:underline"
              >
                <UIcon
                  name="i-ph-git-commit-duotone"
                  class="rotate-90 -ml-[1px] -mb-[1px]"
                />
                {{ item.title }}
              </a>
            </div>
          </div>
          <div class="col-span-3">
            <div class="text-end mb-2">
              <a
                font-mono
                :href="`https://github.com/${item.repo}/releases/tag/v${item.version}`"
                target="_blank"
                class="hover:underline"
              >

                v{{ item.version }}
              </a>
            </div>
            <div class="text-end opacity-50 text-sm">
              <time
                :datatime="item.created_at"
              >{{ formatTimeAgo(new Date(item.created_at)) }}</time>
            </div>
          </div>
        </div>
        <div class="mt-32 mb-10 max-w-[600px] mx-auto text-center slid-enter">
          GitHub Pull Requests by
          <a
            href="https://github.com/vernaillen"
            target="_blank"
            class="hover:underline"
          >
            Wouter Vernaillen
          </a>
        </div>
        <div
          v-for="item, index of prs"
          :key="index"
          class="grid grid-cols-12 gap-4 mb-10 max-w-[600px] mx-auto slide-enter"
          :style="'--enter-stage:' + (index * 3) + ';'"
        >
          <div class="col-span-2">
            <a
              :href="`https://github.com/${item.repo}`"
              target="_blank"
              class="flex-none"
            >
              <img
                :src="`https://github.com/${item.repo.split('/')[0]}.png`"
                class="h-12 w-12"
                :alt="item.repo"
                :class="item.repo.startsWith('vernaillen/') ? 'rounded-full' : 'rounded'"
              >
            </a>
          </div>
          <div class="col-span-7">
            <div class="mb-2">
              <a
                :href="item.commit"
                target="_blank"
                class="flex items-center gap-1 hover:underline"
              >
                <UIcon
                  name="i-ph-git-pull-request-duotone"
                  :class="{
                    'text-green-500 dark:text-green-400': item.state === 'open',
                    'text-purple-500 dark:text-purple-400': item.state === 'merged'
                  }"
                  class="size-5 shrink-0"
                />
                <span class="truncate">{{ item.title }}</span>
              </a>
            </div>
            <div class="opacity-50 text-sm">
              <a
                :href="`https://github.com/${item.repo}`"
                target="_blank"
                class="hover:underline"
              >
                <span class="opacity-50">{{ item.repo.split('/')[0] }} /</span> {{ item.repo.split('/')[1] }}
              </a>
            </div>
          </div>
          <div class="col-span-3">
            <div class="text-end mb-2">
              <a
                :href="item.url"
                target="_blank"
                class="hover:underline"
              >
                #{{ item.number }}
              </a>
            </div>
            <div class="text-end opacity-50 text-sm">
              <time
                :datatime="item.created_at"
              >{{ formatTimeAgo(new Date(item.created_at)) }}</time>
            </div>
          </div>
        </div>
      </UPageBody>
    </UPage>
  </div>
</template>
