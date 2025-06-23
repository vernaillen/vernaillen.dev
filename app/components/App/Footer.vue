<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
  <div>
    <Separator />
    <UFooter>
      <template #left>
        <p class="text-sm text-(--ui-text-muted)">
          Copyright © {{ new Date().getFullYear() }} - Harmonics BV<br>BE 0503.971.022
        </p>
      </template>

      <template #default>
        <p class="text-sm text-center">
          built with <UIcon
            name="i-mdi-heart"
            class="bg-red-500 -mb-[2px]"
          />
          using <NuxtLink
            href="https://nuxt.com"
            target="_blank"
          >
            <UIcon
              class="w-4 h-3"
              name="i-logos-nuxt-icon"
            /> Nuxt {{ config.public.nuxtVersion }}
          </NuxtLink>
        </p>
      </template>
      <template #right>
        <AppSocialIcons />
      </template>
    </UFooter>
  </div>
</template>
