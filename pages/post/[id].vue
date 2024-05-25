<template>
  <div class="container pt-16 md:pt-[120px] pb-16 md:pb-[80px]">
    <h1 class="text-[44px] md:text-[84px] leading-[100%] mb-8">
      {{ singleData.title }}
    </h1>
    <div class="pt-10">
      <img
        :src="singleData.image"
        alt="image"
        class="w-full md:h-[700px] object-cover mb-20"
        @error="imageError"
      />
      <div class="w-full max-w-[695px] text-dark-100">
        <p class="mb-8">About</p>
        <p class="text-2xl md:text-[36px] md:leading-[44px]">
          {{ singleData.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { useApi } from '~/composables/useApi'
import type { IArticle } from '~/types/articles'

const route = useRoute()

const id = route.params.id

const singleData = ref({})

const fallbackImage = '/images/not-found.png'
const imageError = (event: any) => {
  event.target.src = fallbackImage
}

async function fetchSingleArticle() {
  const data = await useApi().$get<IArticle>(`/posts/${id}`)
  singleData.value = data
  return data
}

fetchSingleArticle()
</script>
