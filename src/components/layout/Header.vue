<template>
  <header class="relative z-10">
    <nav aria-label="Top">
      <link rel="stylesheet" href="test.css">
      <!-- Top navigation -->
      <div class="bg-red-900">
        <div class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 bg-blue-500">
          <!-- Currency selector -->
          <form>
            <div>
              <label for="desktop-currency" class="sr-only">Currency</label>
              <div class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                <select id="desktop-currency" name="currency" class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100">
                  <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronDownIcon class="size-5 text-gray-300" aria-hidden="true" />
                </div>
              </div>
            </div>
          </form>
          <div class="flex items-center space-x-6">
            <a href="/login" class="text-sm font-medium text-white hover:text-gray-100">登录</a>
            <a href="/registration" class="text-sm font-medium text-white hover:text-gray-100">创建账户</a>
          </div>
        </div>
      </div>

      <!-- Secondary navigation -->
      <div class="bg-red-500/40 backdrop-blur-md backdrop-filter" id="ba">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div class="flex h-16 items-center justify-between">
              <!-- Logo (lg+) -->
              <div class="hidden lg:flex lg:flex-1 lg:items-center" >
                <a href="#">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=white" alt="" />
                </a>
              </div>

              <div class="hidden h-full lg:flex">
                <!-- Flyout menus -->
                <PopoverGroup class="inset-x-0 bottom-0 px-4">
                  <div class="flex h-full justify-center space-x-8">
                    <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                      <div class="relative flex">
                        <PopoverButton class="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                          {{ category.name }}
                          <span :class="[open ? 'bg-white' : '', 'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out']" aria-hidden="true" />
                        </PopoverButton>
                      </div>

                      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500">
                          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                          <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                          <div class="relative bg-white">
                            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                              <div class="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                <div v-for="item in category.featured" :key="item.name" class="group relative">
                                  <img :src="item.imageSrc" :alt="item.imageAlt" class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75" />
                                  <a :href="item.href" class="mt-4 block font-medium text-gray-900">
                                    <span class="absolute inset-0 z-10" aria-hidden="true" />
                                    {{ item.name }}
                                  </a>
                                  <p aria-hidden="true" class="mt-1">Shop now</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverPanel>
                      </transition>
                    </Popover>

                    <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-white">{{ page.name }}</a>
                  </div>
                </PopoverGroup>
              </div>

              <!-- Mobile menu and search (lg-) -->
              <div class="flex flex-1 items-center lg:hidden">
                <button type="button" class="-ml-2 p-2 text-white" @click="mobileMenuOpen = true">
                  <span class="sr-only">Open menu</span>
                  <Bars3Icon class="size-6" aria-hidden="true" />
                </button>

                <!-- Search -->
                <a href="#" class="ml-2 p-2 text-white">
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon class="size-6" aria-hidden="true" />
                </a>
              </div>

              <!-- Logo (lg-) -->
              <a href="#" class="lg:hidden">
                <span class="sr-only">Your Company</span>
                <img src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=white" alt="" class="h-8 w-auto" />
              </a>

              <div class="flex flex-1 items-center justify-end">
                <a href="#" class="hidden text-sm font-medium text-white lg:block">Search</a>

                <div class="flex items-center lg:ml-8">
                  <!-- Help -->
                  <a href="#" class="p-2 text-white lg:hidden">
                    <span class="sr-only">Help</span>
                    <QuestionMarkCircleIcon class="size-6" aria-hidden="true" />
                  </a>
                  <a href="#" class="hidden text-sm font-medium text-white lg:block">Help</a>

                  <!-- Cart -->
                  <div class="ml-4 flow-root lg:ml-8">
                    <a href="#" class="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon class="size-6 shrink-0 text-white" aria-hidden="true" />
                      <span class="ml-2 text-sm font-medium text-white">0</span>
                      <span class="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>

import {Popover, PopoverButton, PopoverGroup, PopoverPanel} from "@headlessui/vue";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon
} from "@heroicons/vue/24/outline/index.js";
import {ChevronDownIcon} from "@heroicons/vue/20/solid/index.js";
import {ref} from "vue";

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
              'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const mobileMenuOpen = ref(false)
</script>
<style scoped>

</style>