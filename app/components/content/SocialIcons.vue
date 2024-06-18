<template>
  <UButton
    v-for="social, index in useAppConfig().socials"
    :key="index"
    :to="social.url"
    :icon="social.icon"
    :title="social.name"
    :aria-label="social.name"
    size="xs"
    variant="soft"
    target="_blank"
    rel="me"
    class="slide-enter mr-1 md:mr-2"
    :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
  />
</template>
