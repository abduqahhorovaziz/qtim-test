<template>
  <header
    class="w-full h-[121px] flex items-center px-4 md:px-10 pt-[35px] pb-[34px]"
  >
    <div
      class="w-full max-w-[1360px] mx-auto flex items-center justify-between"
    >
      <NuxtLink to="/">
        <img src="/images/logo.svg" alt="logo" />
      </NuxtLink>
      <div class="flex items-center gap-x-10 md:gap-x-[91px]">
        <nav class="h-full hidden md:block">
          <ul class="flex items-center gap-x-5 md:gap-x-[58px]">
            <li v-for="(i, idx) in navbar" :key="idx">
              <NuxtLink
                :to="i.url"
                class="text-xl leading-5 text-dark-100 transition-all hover:text-gray-100"
                >{{ i.page }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-x-4">
          <button
            class="w-[52px] h-[52px] border border-2 border-black/10 rounded-full flex items-center justify-center transition-all hover:bg-gray-200"
          >
            <img src="/images/uk.svg" alt="flag" />
          </button>
          <button
            class="hidden md:block px-8 py-4 bg-dark-100 text-white rounded-full text-xl leading-5 transition-all hover:bg-dark-100/80"
          >
            Let’s work
          </button>
        </div>
        <button
          class="md:hidden w-8 h-9 flex flex-col justify-between py-2"
          @click="showMenu = !showMenu"
        >
          <span
            class="w-full h-[1px] bg-dark-100 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-[9px]': showMenu }"
          ></span>
          <span
            class="w-full h-[1px] bg-dark-100 transition-all duration-300"
            :class="{ 'opacity-0 translate-x-5': showMenu }"
          ></span>
          <span
            class="w-full h-[1px] bg-dark-100 transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-[9px]': showMenu }"
          ></span>
        </button>
      </div>

      <Transition
        @before-enter="onMenuBeforeEnter"
        @enter="onMenuEnter"
        @leave="onMenuLeave"
      >
        <div
          v-if="showMenu"
          class="fixed top-[121px] right-0 w-full h-[calc(100vh-121px)] z-50 flex justify-end"
        >
          <div
            class="absolute bg-black/50 backdrop-blur-md w-full top-0 left-0 h-full z-0 menu-back-layer"
            @click="showMenu = false"
          ></div>
          <div
            class="w-full h-full max-w-[380px] bg-white shadow-xl menuEl z-40"
          >
            <ul class="pt-5">
              <li v-for="(i, idx) in navbar" :key="idx" class="menu-el-item">
                <a :href="i.url" class="m-link">{{ i.page }}</a>
              </li>
              <li class="p-5 menu-el-item block uxs:hidden">
                <button
                  class="px-8 py-4 bg-dark-100 text-white rounded-full text-xl leading-5 transition-all hover:bg-dark-100/80"
                >
                  Let’s work
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ref, watch } from 'vue'

const showMenu = ref(false)

const navbar: {
  page: string
  url: string
}[] = [
  {
    page: 'Works',
    url: '/',
  },
  {
    page: 'About',
    url: '/about',
  },
]

watch(
  () => showMenu.value,
  () => {
    const body = document.body
    if (showMenu.value) {
      body.classList.add('!overflow-y-hidden', '!h-screen')
      body.classList.remove('!overflow-y-auto')
    } else {
      body.classList.remove('!overflow-y-hidden', '!h-screen')
      body.classList.add('!overflow-y-auto')
    }
  },
)

function onMenuBeforeEnter(el: HTMLElement) {
  const menuEl = el.querySelector('.menuEl')
  const menuBack = el.querySelector('.menu-back-layer')
  gsap.set(menuEl, {
    x: '100%',
  })
  gsap.set(menuBack, {
    opacity: 0,
  })
}

function onMenuEnter(el: HTMLElement, done: () => void) {
  const menuEl = el.querySelector('.menuEl')
  const menuBack = el.querySelector('.menu-back-layer')
  const menuItems = el.querySelectorAll('li.menu-el-item')
  gsap.to(menuBack, {
    opacity: 1,
    duration: 0.4,
  })
  const tl = gsap.timeline()
  tl.to(menuEl, {
    x: 0,
    duration: 0.4,
    ease: 'power1.out',
  })
  tl.from(menuItems, {
    x: '30%',
    opacity: 0,
    duration: 0.4,
    stagger: 0.07,
    ease: 'sine.out',
    onComplete: () => done(),
  })
}

function onMenuLeave(el: HTMLDivElement, done: () => void) {
  const menuEl = el.querySelector('.menuEl')
  const menuBack = el.querySelector('.menu-back-layer')
  const menuItems = el.querySelectorAll('li.menu-el-item')
  gsap.to(menuBack, {
    opacity: 0,
    duration: 0.5,
  })
  gsap.to(menuItems, {
    x: '30%',
    opacity: 0,
    duration: 0.4,
    stagger: 0.07,
    ease: 'sine.out',
    onComplete: () => done(),
  })
  gsap.to(menuEl, {
    x: '100%',
    duration: 0.5,
    ease: 'power1.out',
  })
}
</script>

<style scoped>
.menu-el-item .m-link {
  @apply text-dark-100 transition-all duration-200 hover:bg-slate-100 text-xl px-6 py-4 inline-block w-full border-b;
}
</style>
