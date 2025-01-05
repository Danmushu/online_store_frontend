<template>
  <main
      class="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
    <div class="px-4 py-6 sm:px-6 lg:hidden">
      <div class="mx-auto flex max-w-lg">
        <a href="#">
          <span class="sr-only">Your Company</span>
          <img src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" class="h-8 w-auto" />
        </a>
      </div>
    </div>

    <h1 class="sr-only">Checkout</h1>

    <!-- Mobile order summary -->
    <section aria-labelledby="order-heading" class="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
      <Disclosure as="div" class="mx-auto max-w-lg" v-slot="{ open }">
        <div class="flex items-center justify-between">
          <h2 id="order-heading" class="text-lg font-medium text-gray-900">Your Order</h2>
          <DisclosureButton class="font-medium text-indigo-600 hover:text-indigo-500">
            <span v-if="open">Hide full summary</span>
            <span v-if="!open">Show full summary</span>
          </DisclosureButton>
        </div>

        <DisclosurePanel>
          <ul role="list" class="divide-y divide-gray-200 border-b border-gray-200">
            <li v-for="product in orderData.products" :key="product.id" class="flex space-x-6 py-6">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="size-40 flex-none rounded-md bg-gray-200 object-cover" />
              <div class="flex flex-col justify-between space-y-4">
                <div class="space-y-1 text-sm font-medium">
                  <h3 class="text-gray-900">{{ product.name }}</h3>
                  <p class="text-gray-900">{{ product.price }}</p>
                  <p class="text-gray-500">{{ product.color }}</p>
                  <p class="text-gray-500">{{ product.size }}</p>
                </div>
                <div class="flex space-x-4">
                  <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
                  <div class="flex border-l border-gray-300 pl-4">
                    <button type="button" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <form class="mt-10">
            <label for="discount-code-mobile" class="block text-sm font-medium text-gray-700">Discount code</label>
            <div class="mt-1 flex space-x-4">
              <input type="text" id="discount-code-mobile" name="discount-code-mobile" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              <button type="submit" class="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Apply</button>
            </div>
          </form>

          <dl class="mt-10 space-y-6 text-sm font-medium text-gray-500">
            <div class="flex justify-between">
              <dt>Subtotal</dt>
              <dd class="text-gray-900">{{  orderData.totalCost }}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="flex">
                Discount
                <span class="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">{{ discount.code }}</span>
              </dt>
              <dd class="text-gray-900">-{{ discount.amount }}</dd>
            </div>
            <div class="flex justify-between">
              <dt>Taxes</dt>
              <dd class="text-gray-900">{{ taxes }}</dd>
            </div>
            <div class="flex justify-between">
              <dt>Shipping</dt>
              <dd class="text-gray-900">{{ shipping.string }}</dd>
            </div>
          </dl>
        </DisclosurePanel>

        <p class="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
          <span class="text-base">Total</span>
          <span class="text-base">{{ total }}</span>
        </p>
      </Disclosure>
    </section>

    <!-- Order summary -->
    <section aria-labelledby="summary-heading" class="hidden w-full max-w-md flex-col bg-gray-50 lg:flex">
      <h2 id="summary-heading" class="sr-only">购物清单</h2>

      <ul role="list" class="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
        <li v-for="product in orderData.products" :key="product.id" class="flex space-x-6 py-6">
          <img :src="product.imageSrc" :alt="product.imageAlt" class="size-40 flex-none rounded-md bg-gray-200 object-cover" />
          <div class="flex flex-col justify-between space-y-4">
            <div class="space-y-1 text-sm font-medium">
              <h3 class="text-gray-900">{{ product.name }}</h3>
              <p class="text-gray-900">{{ product.price }}</p>
              <p class="text-gray-500">{{ product.color }}</p>
              <p class="text-gray-500">{{ product.size }}</p>
            </div>
            <div class="flex space-x-4">
              <div class="flex border-l border-gray-300 pl-4">
                <button type="button" @click="delFromOrder(product.id)" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">删除</button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">

        <dl class="mt-10 space-y-6 text-sm font-medium text-gray-500">
          <div class="flex justify-between">
            <dt>小计</dt>
            <dd class="text-gray-900">￥ {{ orderData.totalCost }}</dd>
          </div>
          <div class="flex justify-between">
            <dt class="flex">
              折扣
              <span class="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">{{ discount.code }}</span>
            </dt>
            <dd class="text-gray-900">-{{ discount.amount }}</dd>
          </div>
          <div class="flex justify-between">
            <dt>运费</dt>
            <dd class="text-gray-900">{{ shipping.string }}</dd>
          </div>
          <div class="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
            <dt class="text-base">总计</dt>
            <dd class="text-base">￥{{ orderData.totalCost - discount.val + shipping.val }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Checkout form -->
    <section aria-labelledby="payment-heading" class="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0">
      <div class="mx-auto max-w-lg">
        <div class="hidden pb-16 pt-10 lg:flex">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" class="h-8 w-auto" />
          </a>
        </div>

        <button type="button"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-black/25 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
          <span class="sr-only">通过</span>
<!--          <svg class="h-5 w-auto" fill="currentColor" viewBox="0 0 50 20">-->
<!--            <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />-->
<!--            <path d=""/>-->
<!--          </svg>-->
          <svg b="1736070830673" class="icon" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg" p-id="1611" width="20" height="20">
            <path d="M404.511405 600.865957c-4.042059 2.043542-8.602935 3.223415-13.447267 3.223415-11.197016 0-20.934798-6.169513-26.045189-15.278985l-1.959631-4.296863-81.56569-178.973184c-0.880043-1.954515-1.430582-4.14746-1.430582-6.285147 0-8.251941 6.686283-14.944364 14.938224-14.944364 3.351328 0 6.441713 1.108241 8.94165 2.966565l96.242971 68.521606c7.037277 4.609994 15.433504 7.305383 24.464181 7.305383 5.40101 0 10.533914-1.00284 15.328104-2.75167l452.645171-201.459315C811.496653 163.274644 677.866167 100.777241 526.648117 100.777241c-247.448742 0-448.035176 167.158091-448.035176 373.361453 0 112.511493 60.353576 213.775828 154.808832 282.214547 7.582699 5.405103 12.537548 14.292518 12.537548 24.325012 0 3.312442-0.712221 6.358825-1.569752 9.515724-7.544837 28.15013-19.62599 73.202209-20.188808 75.314313-0.940418 3.529383-2.416026 7.220449-2.416026 10.917654 0 8.245801 6.692423 14.933107 14.944364 14.933107 3.251044 0 5.89015-1.202385 8.629541-2.7793l98.085946-56.621579c7.377014-4.266164 15.188934-6.89913 23.790846-6.89913 4.577249 0 9.003048 0.703011 13.174044 1.978051 45.75509 13.159718 95.123474 20.476357 146.239666 20.476357 247.438509 0 448.042339-167.162184 448.042339-373.372709 0-62.451354-18.502399-121.275087-51.033303-173.009356L407.778822 598.977957 404.511405 600.865957z" fill="#00C800" p-id="1612"/>
          </svg>
        </button>

        <div class="relative mt-8">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-200" />
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-4 text-sm font-medium text-gray-500">或者</span>
          </div>
        </div>

        <form class="mt-6">
          <div class="grid grid-cols-12 gap-x-4 gap-y-6">
<!--            <div class="col-span-full">-->
<!--              <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>-->
<!--              <div class="mt-1">-->
<!--                <input type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />-->
<!--              </div>-->
<!--            </div>-->

            <div class="col-span-full">
              <label for="name-on-card" class="block text-sm font-medium text-gray-700">收件人</label>
              <div class="mt-1">
                <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-full">
              <label for="card-number" class="block text-sm font-medium text-gray-700">电话号码</label>
              <div class="mt-1">
                <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div class="col-span-full">
              <label for="address" class="block text-sm font-medium text-gray-700">地址</label>
              <div class="mt-1">
                <input type="text" id="address" name="address" autocomplete="street-address" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>

          </div>

          <div class="mt-6 flex space-x-2">
            <div class="flex h-5 items-center">
              <input id="same-as-shipping" name="same-as-shipping" type="checkbox" checked="" class="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            </div>
            <label for="same-as-shipping" class="text-sm font-medium text-gray-900">帐单地址与送货地址相同</label>
          </div>

          <button type="submit" @click="tryPostOrder();"
                  class="mt-6 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            支付 {{ orderData.totalCost }}
          </button>

          <p class="mt-6 flex justify-center text-sm font-medium text-gray-500">
            <LockClosedIcon class="mr-1.5 size-5 text-gray-400" aria-hidden="true" />
            以纯文本形式存储的支付细节
          </p>
        </form>
      </div>
    </section>

  </main>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,

} from '@headlessui/vue'
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {cleanCartItems, delCartItem, listCartItems, postOrder} from "@/api/auth.js";

const open = ref(true)
const subtotal = '￥210.00'
const discount = { code: 'CHEAPSKATE', amount: '￥10.00' , val : 10}
const taxes = '￥23.68'
const shipping = {string:'￥22.00', val:22}
const total = '￥341.68'
const payed = ref(true)
const router = useRouter()
const orderData = ref({})
onMounted(()=>{
  orderData.value = JSON.parse(localStorage.getItem('orderData'))
  console.log("check")
  console.log(orderData)
})

// 下订单
function tryPostOrder() {
  console.log(payed.value)
  payed.value = false
  alert("下单成功")
  postOrder(listCartItems()).then(res => res.json().then(data =>{
    if (data["data"]) {
      console.log("下单成功")
      cleanCartItems()
    }
  }))
}
function delFromOrder(productId) {
  // 找到产品在数组中的索引
  const index = orderData.value.products.findIndex(product => product.id === productId);
  // 如果找到了，就移除它
  if (index !== -1) {
    orderData.value.products.splice(index, 1);
  }
}
</script>

<style scoped>

</style>