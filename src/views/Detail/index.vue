<template>
  <div class="bg-white">

    <main class="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
        <div class="lg:col-span-5 lg:col-start-8">
          <div class="flex justify-between">
            <h1 class="text-xl font-medium text-gray-900">{{ product.name }}</h1>
            <p class="text-xl font-medium text-gray-900">{{ "￥" + product.price }}</p>
          </div>
          <!-- Reviews -->
          <div class="mt-4">
            <h2 class="sr-only">评分</h2>
            <div class="flex items-center">
              <p class="text-sm text-gray-700">
                {{ reviews.average }}
                <span class="sr-only"> 5</span>
              </p>
              <div class="ml-1 flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[reviews.average > rating ? 'text-yellow-400' : 'text-gray-200', 'size-5 shrink-0']" aria-hidden="true" />
              </div>
              <div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>

            </div>
          </div>
        </div>

        <!-- Image gallery -->
        <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
          <h2 class="sr-only">Images</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8">
            <img v-for="image in product.images" :key="image.id" :src="image.imageSrc" :alt="image.imageAlt" :class="['hidden lg:block', 'rounded-lg']" />
          </div>
        </div>

        <div class="mt-8 lg:col-span-5">


          <div>
            <button @click="existInCart?delCartItem(product.id):addCartItem(product.id);existInCart?counter.set(counter.count -1):counter.set(counter.count + 1);existInCart = !existInCart;" :class="['mt-8 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium focus:outline-none focus:ring-0 focus:ring-offset-2 duration-150', existInCart?'bg-white border-red-600 text-red-600  hover:bg-red-50':'bg-green-600 hover:bg-green-700 text-white ']">
              {{existInCart? '从购物车移除':'加入购物车'}}</button>
          </div>

          <!-- Product details -->
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">描述</h2>

            <div class="mt-4 space-y-4 text-sm/6 text-gray-500" v-html="product.desc" />
          </div>

          <div class="mt-8 border-t border-gray-200 pt-8">
            <h2 class="text-sm font-medium text-gray-900">商品条款</h2>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
                <li v-for="item in product.details" :key="item" class="pl-2">{{ item }}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <!-- Reviews -->
      <section aria-labelledby="reviews-heading" class="mt-5">

        <div class="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          <div v-for="review in reviews.featured" :key="review.id" class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div class="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
              <div class="flex items-center xl:col-span-1">
                <div class="flex items-center">
                  <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[review.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'size-5 shrink-0']" aria-hidden="true" />
                </div>
                <p class="ml-3 text-sm text-gray-700">{{ review.rating }}<span class="sr-only"> out of 5 stars</span></p>
              </div>

              <div class="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                <h3 class="text-sm font-medium text-gray-900">{{ review.title }}</h3>

                <div class="mt-3 space-y-6 text-sm text-gray-500" v-html="review.content" />
              </div>
            </div>

            <div class="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
              <p class="font-medium text-gray-900">{{ review.author }}</p>
              <time :datetime="review.datetime" class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">{{ review.date }}</time>
            </div>
          </div>
        </div>
      </section>

      <!-- Related products -->
      <section aria-labelledby="related-heading" class="mt-16 sm:mt-24">
        <h2 id="related-heading" class="text-lg font-medium text-gray-900">对此商品感兴趣的人们还购买了</h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="group relative">
            <img :src="relatedProduct.imageSrc" :alt="relatedProduct.imageAlt" class="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="relatedProduct.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ relatedProduct.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ relatedProduct.color }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900">{{ relatedProduct.price }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

import {

  CurrencyDollarIcon,
  GlobeAmericasIcon,

} from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/20/solid'
import {addCartItem, delCartItem, getProduct, listCartItems} from "@/api/auth.js";
import {useRouter} from "vue-router";
import {useCounterStore} from "../../../store/cart.js";

const product = ref({
  name: 'Basic Tee',
  price: '$35',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      id: 1,
      imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
})
const reviews = {
  average: 5,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "说不完的好话",
      rating: 5,
      content: `
        <p>我对整个购物体验感到非常满意。我的订单甚至包括一个小的个人，手写的说明，这使我高兴！</p>
        <p>产品质量是惊人的，它的外观和感觉甚至比我预期的更好。太棒了！我很乐意向我的朋友们推荐这家商店。现在我想起来了，我真的做过很多次！</p>
      `,
      author: 'Risako',
      date: '2021.5.15',
      datetime: '2021-01-06',
    },
    // More reviews...
  ],
}
const relatedProducts = [
  {
    id: 1,
    name: 'T恤',
    href: '#',
    imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '￥35',
    color: '米白色',
  },
  // More products...
]

const counter = useCounterStore()
const router = useRouter()

const existInCart = ref(false)
onMounted(()=>{


  console.log(router.currentRoute.value)
  const id = router.currentRoute.value.query.id
  getProduct({id: id}).then(res => res.json().then(data=>{
    data = data["data"]

    data.images = [{primary: true,
      imageSrc: data.imageSrc,
      imageAlt:'1',
    }]
    product.value = data
    existInCart.value = listCartItems().indexOf(product.value.id) !== -1
    console.log(data)
  }))

})

</script>

<style scoped>

</style>