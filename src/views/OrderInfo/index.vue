<template>
  <div class="bg-gray-50">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="size-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                      <button :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900', 'flex-1 border-b-2 px-1 py-4 text-base font-medium whitespace-nowrap']">{{ category.name }}</button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel v-for="(category, categoryIdx) in navigation.categories" :key="category.name" class="space-y-12 px-4 pt-10 pb-6">
                    <div class="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p :id="`mobile-featured-heading-${categoryIdx}`" class="font-medium text-gray-900">Featured</p>
                          <ul role="list" :aria-labelledby="`mobile-featured-heading-${categoryIdx}`" class="mt-6 space-y-6">
                            <li v-for="item in category.featured" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p id="mobile-categories-heading" class="font-medium text-gray-900">Categories</p>
                          <ul role="list" aria-labelledby="mobile-categories-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.categories" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p id="mobile-collection-heading" class="font-medium text-gray-900">Collection</p>
                          <ul role="list" aria-labelledby="mobile-collection-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.collection" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p id="mobile-brand-heading" class="font-medium text-gray-900">Brands</p>
                          <ul role="list" aria-labelledby="mobile-brand-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.brands" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create an account</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <!-- Currency selector -->
                <form>
                  <div class="-ml-2 inline-grid grid-cols-1">
                    <select id="mobile-currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pr-7 pl-2 text-base font-medium text-gray-700 group-hover:text-gray-800 focus:outline-2 sm:text-sm/6">
                      <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                    </select>
                    <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500" aria-hidden="true" />
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <main class="mx-auto max-w-2xl pt-8 pb-24 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8">
      <div class="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
        <div class="flex sm:items-baseline sm:space-x-4">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order #54879</h1>
          <a href="#" class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block">
            View invoice
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <p class="text-sm text-gray-600">Order placed <time datetime="2021-03-22" class="font-medium text-gray-900">March 22, 2021</time></p>
        <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden">
          View invoice
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <!-- Products -->
      <section aria-labelledby="products-heading" class="mt-6">
        <h2 id="products-heading" class="sr-only">Products purchased</h2>

        <div class="space-y-8">
          <div v-for="product in products" :key="product.id" class="border-t border-b border-gray-200 bg-white shadow-xs sm:rounded-lg sm:border">
            <div class="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
              <div class="sm:flex lg:col-span-7">
                <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full shrink-0 rounded-lg object-cover sm:size-40" />

                <div class="mt-6 sm:mt-0 sm:ml-6">
                  <h3 class="text-base font-medium text-gray-900">
                    <a :href="product.href">{{ product.name }}</a>
                  </h3>
                  <p class="mt-2 text-sm font-medium text-gray-900">${{ product.price }}</p>
                  <p class="mt-3 text-sm text-gray-500">{{ product.description }}</p>
                </div>
              </div>

              <div class="mt-6 lg:col-span-5 lg:mt-0">
                <dl class="grid grid-cols-2 gap-x-6 text-sm">
                  <div>
                    <dt class="font-medium text-gray-900">Delivery address</dt>
                    <dd class="mt-3 text-gray-500">
                      <span class="block">{{ product.address[0] }}</span>
                      <span class="block">{{ product.address[1] }}</span>
                      <span class="block">{{ product.address[2] }}</span>
                    </dd>
                  </div>
                  <div>
                    <dt class="font-medium text-gray-900">Shipping updates</dt>
                    <dd class="mt-3 space-y-3 text-gray-500">
                      <p>{{ product.email }}</p>
                      <p>{{ product.phone }}</p>
                      <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Edit</button>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
              <h4 class="sr-only">Status</h4>
              <p class="text-sm font-medium text-gray-900">
                {{ product.status }} on <time :datetime="product.datetime">{{ product.date }}</time>
              </p>
              <div class="mt-6" aria-hidden="true">
                <div class="overflow-hidden rounded-full bg-gray-200">
                  <div class="h-2 rounded-full bg-indigo-600" :style="{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }" />
                </div>
                <div class="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                  <div class="text-indigo-600">Order placed</div>
                  <div :class="[product.step > 0 ? 'text-indigo-600' : '', 'text-center']">Processing</div>
                  <div :class="[product.step > 1 ? 'text-indigo-600' : '', 'text-center']">Shipped</div>
                  <div :class="[product.step > 2 ? 'text-indigo-600' : '', 'text-right']">Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Billing -->
      <section aria-labelledby="summary-heading" class="mt-16">
        <h2 id="summary-heading" class="sr-only">Billing Summary</h2>

        <div class="bg-gray-100 px-4 py-6 sm:rounded-lg sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-8">
          <dl class="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
            <div>
              <dt class="font-medium text-gray-900">Billing address</dt>
              <dd class="mt-3 text-gray-500">
                <span class="block">Floyd Miles</span>
                <span class="block">7363 Cynthia Pass</span>
                <span class="block">Toronto, ON N3Y 4H8</span>
              </dd>
            </div>
            <div>
              <dt class="font-medium text-gray-900">Payment information</dt>
              <dd class="-mt-1 -ml-4 flex flex-wrap">
                <div class="mt-4 ml-4 shrink-0">
                  <svg aria-hidden="true" width="36" height="24" viewBox="0 0 36 24" class="h-6 w-auto">
                    <rect width="36" height="24" rx="4" fill="#224DBA" />
                    <path d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z" fill="#fff" />
                  </svg>
                  <p class="sr-only">Visa</p>
                </div>
                <div class="mt-4 ml-4">
                  <p class="text-gray-900">Ending with 4242</p>
                  <p class="text-gray-600">Expires 02 / 24</p>
                </div>
              </dd>
            </div>
          </dl>

          <dl class="mt-8 divide-y divide-gray-200 text-sm lg:col-span-5 lg:mt-0">
            <div class="flex items-center justify-between pb-4">
              <dt class="text-gray-600">Subtotal</dt>
              <dd class="font-medium text-gray-900">$72</dd>
            </div>
            <div class="flex items-center justify-between py-4">
              <dt class="text-gray-600">Shipping</dt>
              <dd class="font-medium text-gray-900">$5</dd>
            </div>
            <div class="flex items-center justify-between py-4">
              <dt class="text-gray-600">Tax</dt>
              <dd class="font-medium text-gray-900">$6.16</dd>
            </div>
            <div class="flex items-center justify-between pt-4">
              <dt class="font-medium text-gray-900">Order total</dt>
              <dd class="font-medium text-indigo-600">$83.16</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const products = [
  {
    id: 1,
    name: 'Nomad Tumbler',
    description:
        'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
    href: '#',
    price: '35.00',
    status: 'Preparing to ship',
    step: 1,
    date: 'March 24, 2021',
    datetime: '2021-03-24',
    address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
    email: 'f•••@example.com',
    phone: '1•••••••••40',
    imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/confirmation-page-03-product-01.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
  {
    id: 2,
    name: 'Minimalist Wristwatch',
    description: 'This contemporary wristwatch has a clean, minimalist look and high quality components.',
    href: '#',
    price: '149.00',
    status: 'Shipped',
    step: 0,
    date: 'March 23, 2021',
    datetime: '2021-03-23',
    address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
    email: 'f•••@example.com',
    phone: '1•••••••••40',
    imageSrc: 'https://tailwindui.starxg.com/plus/img/ecommerce-images/confirmation-page-03-product-02.jpg',
    imageAlt:
        'Arm modeling wristwatch with black leather band, white watch face, thin watch hands, and fine time markings.',
  },
  // More products...
]
const footerNavigation = {
  account: [
    { name: 'Manage Account', href: '#' },
    { name: 'Saved Items', href: '#' },
    { name: 'Orders', href: '#' },
    { name: 'Redeem Gift card', href: '#' },
  ],
  service: [
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
    { name: 'Get in touch', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  connect: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Pinterest', href: '#' },
  ],
}

const open = ref(false)
</script>