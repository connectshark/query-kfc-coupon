<template>
  <footer class="py-20 bg-neutral-200">
    <div class="w-11/12 mx-auto max-w-6xl grid gap-6 xl:grid-cols-2 text-md">
      <div>
        <h4 class="mb-4">
          <NuxtLink to="/">2023<i class='bx bx-copyright'></i> {{ config.title }}</NuxtLink>
        </h4>
      </div>
      <div>
        <p class="flex space-x-3 mb-4">
          <a class=" hover:text-[#4267B2]" href="https://www.facebook.com/profile.php?id=100079569469057" target="_blank" rel="noopener noreferrer">
            <i class='bx bxl-facebook-square bx-md' ></i>
          </a>
          <a class="hover:text-[#815fb9]" href="https://portaly.cc/fireBoss" target="_blank" rel="noopener noreferrer">
            <svg class=" w-9 h-9" viewBox="0 0 54.87 54.87" focusable="false" aria-hidden="true"><defs><linearGradient id="Yr6Phz-a" x1="-2.64" y1="28.4" x2="40.51" y2="28.4" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="currentColor" stop-opacity="0"></stop><stop offset="1" stop-color="currentColor"></stop></linearGradient><linearGradient id="Yr6Phz-b" x1="31.91" y1="25.11" x2="12.22" y2="-3.02" xlink:href="#Yr6Phz-a"></linearGradient><linearGradient id="Yr6Phz-c" x1="48.16" y1="59.21" x2="28.47" y2="31.08" xlink:href="#Yr6Phz-a"></linearGradient></defs><g><path d="M50.64,25.14a8,8,0,0,1-1,4,8.63,8.63,0,0,1-2.9,3,15,15,0,0,1-4.65,1.95,25,25,0,0,1-6.24.71H20.14v6.68H10.89V28.11H36.76a5.92,5.92,0,0,0,3.35-.82,2.54,2.54,0,0,0,1.18-2.19,2.5,2.5,0,0,0-1.18-2.17,6,6,0,0,0-3.35-.8H10.89l-3.4-6.8H35.91a24.65,24.65,0,0,1,6.24.72,15,15,0,0,1,4.62,2,9,9,0,0,1,2.88,3.08A8.14,8.14,0,0,1,50.64,25.14Z" fill="url(#Yr6Phz-a)"></path><g><path d="M33.51,47.16c3.46,1.38,4.25-2.69,3.1-1.68-3.25,2.86-13.06-5.6-18.45-21C18.16,24.47,22.93,42.92,33.51,47.16Z" fill="none"></path><path d="M21.88,11.5a1.66,1.66,0,0,0-1,1.33c.84-.39,3.05.12,5.53,2.33h.95C25.28,12.38,23,11,21.88,11.5Z" fill="url(#Yr6Phz-b)"></path><path d="M19,31.55C24.94,44.52,33.35,52.7,37.13,51a3.31,3.31,0,0,0,1.49-1.57.05.05,0,0,0,0,0c2.78-4.09,1.54-10.39.2-14.57l-.53,0c.69,3,1.19,6.25.6,7.39-.18-2-.39-4.17-1.12-5.33l0,.07c.24,3.83-.45,6.6-1.88,7.25-2.8,1.28-8.63-5.47-13-15.08S17.16,10.68,20,9.4c1.45-.66,4.05.67,6.82,3.43l0,0c-2.63-3.83-5.23-6.66-7.44-8a.1.1,0,0,0-.05,0,5.46,5.46,0,0,0-.78-.43,5.19,5.19,0,0,0-1.14-.4c-1.39-.38-3.07-.38-4,.84A4.49,4.49,0,0,0,12.62,6C8.68,15.05,15.54,26,15.54,26c-2.57-7.92-2.65-11.62-2-13.8A59.63,59.63,0,0,0,19,31.55ZM36.61,45.48c1.15-1,.36,3.06-3.1,1.68C22.93,42.92,18.16,24.47,18.16,24.47,23.55,39.88,33.36,48.34,36.61,45.48Z" fill="url(#Yr6Phz-c)"></path></g></g></svg>
          </a>
        </p>
        <p class="mb-2" v-for="link in links">
          <a class="hover:underline" :href="link.url" target="_blank">{{ link.name }}<i class='bx bx-link-external'></i></a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useAppConfig()
const links = [
  {
    url: 'https://blog.justlikeboss.com/',
    name: '小資族FIRE攻略'
  },
  {
    url: 'https://tinyurl.com/2qlfw5bk',
    name: '肯德基官網'
  },
  {
    url: 'https://tinyurl.com/2m9w7slb',
    name: '外帶自取'
  }
]
</script>
