<template>
  <NuxtLink :to="`/post/${article.id}`">
    <div class="w-full transition-all hover:-translate-y-5 group">
      <div class="w-full mb-6">
        <img
          :src="article.image"
          alt="card"
          class="aspect-square object-cover w-full"
          @error="imageError"
        />
      </div>
      <p class="line-clamp-3 mb-3 text-xl leading-6 text-dark-100">
        {{ article.preview }}
      </p>
      <NuxtLink
        to="/"
        class="text-xl leading-6 text-violet invisible transition-all opacity-0 group-hover:visible group-hover:opacity-100"
      >
        Read more
      </NuxtLink>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import type { IArticle } from '~/types/articles'

interface Props {
  article: IArticle
}
defineProps<Props>()

const fallbackImage = '/images/not-found.png'
const imageError = (event: any) => {
  event.target.src = fallbackImage
}
</script>
