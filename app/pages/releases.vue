<script setup lang="ts">
import { formatTimeAgo } from '@vueuse/core'
import { useFetch } from 'nuxt/app'
import type { ReleaseInfo } from '../../types'

const { data: page } = await useAsyncData('releases', () => queryContent('/releases').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data = [] } = await useFetch<ReleaseInfo[]>('/api/releases')

definePageMeta({
  colorMode: 'dark'
})
</script>

<template>
  <div>
    <UPageHeader v-bind="page" />
    <UPage>
      <UPageBody class="max-w-[500px] mx-auto">
        <div class="mb-3 max-w-[600px] mx-auto text-center slid-enter">
          GitHub releases by
          <a
            href="https://github.com/vernaillen"
            target="_blank"
          >
            Wouter Vernaillen
          </a>
        </div>
        <div class="mb-10 opacity-50 text-sm max-w-[600px] mx-auto text-center">
          Only the latest release of each repo is shown
        </div>

        <div
          v-for="item, index of data"
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
              >
                <span class="opacity-50">{{ item.repo.split('/')[0] }} /</span> {{ item.repo.split('/')[1] }}
              </a>
            </div>
            <div class="opacity-50 text-sm">
              <a
                :href="item.commit"
                target="_blank"
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
      </UPageBody>
    </UPage>
  </div>
</template>
