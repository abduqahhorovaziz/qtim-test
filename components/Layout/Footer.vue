<template>
  <div class="bg-violet pt-[140px] pb-[30px] overflow-hidden">
    <div class="container">
      <div class="flex flex-col md:flex-row mb-10 md:mb-[273px]">
        <div class="text-dark-100 md:mr-[368px]">
          <p class="leading-5 mb-[56px]">Is there a project?</p>
          <h2
            class="text-[84px] md:text-[112px] md:max-w-[464px] leading-[100%] udrln"
          >
            Let’s work together
          </h2>
        </div>
        <div
          class="max-w-[152px] mt-[75px] text-dark-100 flex flex-col items-start gap-9"
        >
          <div class="flex flex-col items-start gap-2 leading-5">
            <p class="mb-2">For all questions</p>
            <a href="tel:+79202780068" class="transition-all hover:underline">{{
              contactData.phone
            }}</a>
            <a
              :href="`mailto:${contactData.email}`"
              class="transition-all hover:underline"
              >{{ contactData.email }}</a
            >
          </div>
          <div class="flex flex-col items-start gap-2 leading-5">
            <p class="mb-2">Office in Russia</p>
            <p>{{ contactData.address_ru }}</p>
            <a
              :href="contactData.link_ru"
              target="_blank"
              class="flex items-center justify-center w-8 h-8 bg-dark-100 rounded-full transition-all hover:bg-dark-100/80"
              ><img src="/images/link.svg" alt="link"
            /></a>
          </div>
          <div class="flex flex-col items-start gap-2 leading-5">
            <p class="mb-2">Office in Dubai</p>
            <p>{{ contactData.address_baa }}</p>
            <a
              :href="contactData.link_baa"
              target="_blank"
              class="flex items-center justify-center w-8 h-8 bg-dark-100 rounded-full transition-all hover:bg-dark-100/80"
              ><img src="/images/link.svg" alt="link"
            /></a>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between relative gap-8">
        <ul class="flex flex-col md:flex-row items-center gap-8 text-dark-100">
          <li>
            <a
              :href="socials.facebook"
              class="udrln transition-all hover:text-dark-100/80"
              >Facebook</a
            >
          </li>
          <li>
            <a
              :href="socials.instagram"
              class="udrln transition-all hover:text-dark-100/80"
              >Instagram</a
            >
          </li>
          <li>
            <a
              :href="socials.telegram"
              class="udrln transition-all hover:text-dark-100/80"
              >Telegram</a
            >
          </li>
        </ul>
        <ul class="flex flex-col md:flex-row items-center gap-8 text-dark-100">
          <li>
            <a
              :href="socials.behance"
              class="udrln transition-all hover:text-dark-100/80"
              >Behance</a
            >
          </li>
          <li>
            <a
              :href="socials.linkedin"
              class="udrln transition-all hover:text-dark-100/80"
              >Linkedin</a
            >
          </li>
          <li>
            <a
              :href="socials.privacy"
              class="udrln transition-all hover:text-dark-100/80"
              >Privacy policy</a
            >
          </li>
        </ul>
        <button
          class="absolute hidden md:flex items-start justify-center left-1/2 -translate-x-1/2 -bottom-[179px] w-[358px] h-[358px] bg-dark-100 rounded-full text-white transition-all hover:w-[368px] hover:h-[368px] text-gray-200 text-[32px] leading-[100%]"
        >
          <span class="mt-[122px] inline-block">Go</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactData: {
  phone: string
  email: string
  address_ru: string
  link_ru: string
  address_baa: string
  link_baa: string
} = {
  phone: '+7 (920) 278—00—68',
  email: 'qtim@agency.com',
  address_ru: '139 Ruben Station Lake Drew, NM 52678',
  link_ru: 'https://google.com',
  address_baa: '139 Ruben Station Lake Drew, NM 52678',
  link_baa: 'https://google.com',
}

const socials: {
  facebook: string
  instagram: string
  telegram: string
  behance: string
  linkedin: string
  privacy: string
} = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  telegram: 'https://google.com',
  behance: 'https://google.com',
  linkedin: 'https://google.com',
  privacy: 'https://google.com',
}
</script>

<style scoped>
.udrln {
  -webkit-text-decoration: #101010 solid underline;
  text-decoration: #101010 solid underline;
  -webkit-text-underline-position: auto;
  text-underline-position: auto;
  text-decoration-thickness: 1px;
  text-underline-offset: 10px;
}
</style>
