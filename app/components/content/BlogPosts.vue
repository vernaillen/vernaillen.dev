<script setup lang="ts">
const route = useRoute()
const { data: posts } = await useAsyncData('blogposts-' + route.path, () =>
  queryCollection('pages')
    .where('isblogpost', '=', true)
    .order('id', 'ASC')
    .all()
)
const latestPost = computed(() => posts.value?.[0])
const otherPosts = computed(() => posts.value?.slice(1))
</script>

<template>
  <UBlogPosts>
    <div
      v-if="latestPost"
      class="lg:col-span-3"
    >
      <BlogPost
        :post="latestPost"
        :index="0"
        orientation="horizontal"
      />
    </div>
    <div
      v-for="(post, index) in otherPosts"
      :key="index"
    >
      <BlogPost
        :post="post"
        :index="index"
      />
    </div>
  </UBlogPosts>
</template>
