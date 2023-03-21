<template>
<header class="py-10 sticky top-0 bg-neutral-50/80 backdrop-blur">
  <div class="w-11/12 mx-auto max-w-6xl flex items-center justify-between">
    <div>
      <NuxtLink to="/" class=" block">
        <img class="h-6 w-6 object-fill inline-block align-middle mr-2" src="../assets/svg/favicon.svg" alt="site logo">
        <span class="inline-block align-middle text-xl">{{ config.title }}</span>
      </NuxtLink>
    </div>
    <nav>
      <h2 class=" hidden">{{ '導覽列 | ' + config.title }}</h2>
      <ul class=" space-x-3">
        <li class=" inline-block" v-for="link in navItems">
          <a class=" hover:underline" :href="link.link" target="_blank" rel="noopener noreferrer">{{ link.title }}<i class='bx bx-link-external'></i></a>
        </li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script setup>
const navItems = [
  {
    title: '外帶自取',
    link: 'https://tinyurl.com/2m9w7slb'
  }
]
const config = useAppConfig()
</script>