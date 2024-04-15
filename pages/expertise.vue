<script setup lang="ts">
const { data: page } = await useAsyncData('expertise', () => queryContent('/expertise').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div>
    <UPageHeader
      v-bind="page"
      class="py-[50px]"
    />
    <UPage>
      <UPageBody class="slide-enter-content">
        <UDashboardCard
          title="Technologies"
          description="We are experts in the following technologies"
          icon="i-ic-baseline-code"
        >
          <div class="space-y-2 slide-enter">
            <UMeter
              v-for="(country, index) in page?.technologies"
              :key="index"
              :value="country.value"
              :label="country.label"
              :color="country.color"
              size="lg"
              class="flex-row-reverse items-center slide-enter"
              :style="'--enter-stage:' + index + ';--enter-step:20ms;'"
              :ui="{ label: { base: 'flex-shrink-0 w-24' }, meter: { base: 'flex-1' } }"
            />
          </div>
        </UDashboardCard>
      </UPageBody>
    </UPage>
  </div>
</template>
