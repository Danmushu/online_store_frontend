<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">注册您的账户</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleRegister" method="POST">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">请输入邮箱</label>
          <div class="mt-2">
            <input type="email" name="email" id="email" autocomplete="email" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="username" class="block text-sm/6 font-medium text-gray-900">请输入用户名</label>
          </div>
          <div class="mt-2">
            <input type="text" name="username" id="username" required="" v-model="registerUsername"
                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="phone" class="block text-sm/6 font-medium text-gray-900">请输入电话号码</label>
          </div>
          <div class="mt-2">
            <input type="tel" name="phone" id="phone" required="" v-model="registerPhone"
                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">请输入密码</label>
          </div>
          <div class="mt-2">
            <input type="password" name="password" id="password" autocomplete="current-password" required="" v-model="registerPassword"
                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            注册账户
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { registerUser } from "@/api/auth.js";

const registerUsername = ref('')
const registerEmail = ref('')
const registerPhone = ref('')
const registerPassword = ref('')

const handleRegister = () => {
  const userData = {
    username: registerUsername.value,
    password: registerPassword.value,
    email: registerEmail.value,
    phone: registerPhone.value,

  };
  registerUser(userData).then(response => {
    console.log('注册成功:', response);
    // 处理注册成功后的逻辑，例如跳转到登录页面
    location.href = '/login';
  }).catch(error => {
    console.error('注册失败:', error);
    // 处理注册失败的逻辑，例如显示错误消息
    alert("注册失败，注意格式")
  });
}

</script>