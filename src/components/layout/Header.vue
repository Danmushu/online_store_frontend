<template>
  <header class="relative z-10">
    <nav aria-label="Top">
      <!-- Top navigation -->
      <div class="bg-gray-900">
        <div class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <!-- Currency selector -->
          <div @click="$router.push({path:'/'})">
            <div>
              <div class="group relative -ml-2 rounded-md border-transparent bg-gray-900 text-white focus-within:ring-2 focus-within:ring-white">
                LOGO 首页
              </div>
            </div>
          </div>



          <!-- 登录状态相关 -->
          <div class="flex items-center space-x-6">
            <a v-if="!user.name" href="/login" class="text-sm font-medium text-white hover:text-gray-100">登录</a>
            <a v-if="!user.name"  href="/registration" class="text-sm font-medium text-white hover:text-gray-100">创建账户</a>

            <span v-if="user.name" class="text-sm font-medium text-white hover:text-gray-100">{{user.name}}</span>


            <button v-if="user.name"  @click="cleanLoginStatus()" class="text-sm font-medium text-white hover:text-gray-100">退出登录</button>

            <button @click="$router.push({path:'/cart.js'})" class="flex items-center space-x-1">
              <ShoppingBagIcon class="size-6 shrink-0 text-white" aria-hidden="true" />
              <span class="ml-2 text-sm font-medium text-white">{{cartCounter.count}}</span>
              <span class="sr-only">items in cart, view bag</span>
            </button>

          </div>
        </div>
      </div>

<!--      &lt;!&ndash; Secondary navigation &ndash;&gt;-->
<!--      <div class="bg-white/10 backdrop-blur-md backdrop-filter">-->
<!--        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">-->
<!--          <div>-->
<!--            <div class="flex h-16 items-center justify-between">-->
<!--              &lt;!&ndash; Logo (lg+) &ndash;&gt;-->
<!--              <div class="hidden lg:flex lg:flex-1 lg:items-center">-->
<!--                <a href="#">-->
<!--                  <span class="sr-only">Your Company</span>-->
<!--                  <img class="h-8 w-auto" src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=white" alt="" />-->
<!--                </a>-->
<!--              </div>-->

<!--              <div class="hidden h-full lg:flex">-->
<!--                &lt;!&ndash; Flyout menus &ndash;&gt;-->
<!--                <PopoverGroup class="inset-x-0 bottom-0 px-4">-->
<!--                  <div class="flex h-full justify-center space-x-8">-->
<!--                    <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">-->
<!--                      <div class="relative flex">-->
<!--                        <PopoverButton class="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">-->
<!--                          {{ category.name }}-->
<!--                          <span :class="[open ? 'bg-white' : '', 'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out']" aria-hidden="true" />-->
<!--                        </PopoverButton>-->
<!--                      </div>-->

<!--                      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">-->
<!--                        <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500">-->
<!--                          &lt;!&ndash; Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow &ndash;&gt;-->
<!--                          <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />-->

<!--                          <div class="relative bg-white">-->
<!--                            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">-->
<!--                              <div class="grid grid-cols-4 gap-x-8 gap-y-10 py-16">-->
<!--                                <div v-for="item in category.featured" :key="item.name" class="group relative">-->
<!--                                  <img :src="item.imageSrc" :alt="item.imageAlt" class="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75" />-->
<!--                                  <a :href="item.href" class="mt-4 block font-medium text-gray-900">-->
<!--                                    <span class="absolute inset-0 z-10" aria-hidden="true" />-->
<!--                                    {{ item.name }}-->
<!--                                  </a>-->
<!--                                  <p aria-hidden="true" class="mt-1">Shop now</p>-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </PopoverPanel>-->
<!--                      </transition>-->
<!--                    </Popover>-->

<!--                    <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-white">{{ page.name }}</a>-->
<!--                  </div>-->
<!--                </PopoverGroup>-->
<!--              </div>-->

<!--              &lt;!&ndash; Mobile menu and search (lg-) &ndash;&gt;-->
<!--              <div class="flex flex-1 items-center lg:hidden">-->
<!--                <button type="button" class="-ml-2 p-2 text-white" @click="mobileMenuOpen = true">-->
<!--                  <span class="sr-only">Open menu</span>-->
<!--                  <Bars3Icon class="size-6" aria-hidden="true" />-->
<!--                </button>-->

<!--                &lt;!&ndash; Search &ndash;&gt;-->
<!--                <a href="#" class="ml-2 p-2 text-white">-->
<!--                  <span class="sr-only">Search</span>-->
<!--                  <MagnifyingGlassIcon class="size-6" aria-hidden="true" />-->
<!--                </a>-->
<!--              </div>-->


<!--              <div class="flex flex-1 items-center justify-end">-->
<!--                <a href="#" class="hidden text-sm font-medium text-white lg:block">Search</a>-->

<!--                <div class="flex items-center lg:ml-8">-->
<!--                  &lt;!&ndash; Help &ndash;&gt;-->
<!--                  <a href="#" class="p-2 text-white lg:hidden">-->
<!--                    <span class="sr-only">Help</span>-->
<!--                    <QuestionMarkCircleIcon class="size-6" aria-hidden="true" />-->
<!--                  </a>-->
<!--                  <a href="#" class="hidden text-sm font-medium text-white lg:block">Help</a>-->

<!--                  &lt;!&ndash; Cart &ndash;&gt;-->
<!--                  <div class="ml-4 flow-root lg:ml-8">-->
<!--                    <a href="/cart.js" class="group -m-2 flex items-center p-2">-->
<!--                      <ShoppingBagIcon class="size-6 shrink-0 text-white" aria-hidden="true" />-->
<!--                      <span class="ml-2 text-sm font-medium text-white">{{listCartItems().length}}</span>-->
<!--                      <span class="sr-only">items in cart.js, view bag</span>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </nav>
  </header>
</template>
<script setup>

import {
  ShoppingBagIcon
} from "@heroicons/vue/24/outline/index.js";
import {onMounted, ref} from "vue";
import {listCartItems, loginUser} from "@/api/auth.js";
import {useCounterStore} from "../../../store/cart.js";


const cartCounter = useCounterStore()
const user = ref({
  name: localStorage.getItem('name'),
  username: localStorage.getItem('username'),
  password: localStorage.getItem('password'),
  token: localStorage.getItem('token'),
})


function cleanLoginStatus(){
  localStorage.removeItem('token')
  localStorage.removeItem('password')
  localStorage.removeItem('username')
  user.value = {}
}
onMounted(async ()=>{
  cartCounter.set(listCartItems().length)

  loginUser({"password": user.value.password, "username": localStorage.getItem("username")}).then(res => res.json().then(data => {
    if (data['token']){
      // ok 自动登录成功
    }else {

      user.value = {}
      localStorage.setItem('name', null)
      localStorage.setItem('username', null)
      localStorage.setItem('password', null)
    }
  }))
})
</script>
<style scoped>

</style>