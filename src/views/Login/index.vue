<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">登录您的账号</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin" method="POST">
<!--        <div>-->
<!--          <label for="email" class="block text-sm/6 font-medium text-gray-900">邮箱</label>-->
<!--          <div class="mt-2">-->
<!--            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />-->
<!--          </div>-->
<!--        </div>-->
        <div>
          <label for="username" class="block text-sm/6 font-medium text-gray-900">用户名</label>
          <div class="mt-2">
            <input type="text" name="username" id="username" v-model="loginUsername" autocomplete="username"
                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">密码</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">忘记密码?</a>
            </div>
          </div>
          <div class="mt-2">
            <input type="password" name="password" id="password" v-model="loginPassword" autocomplete="current-password"
                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">登录</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm/6 text-gray-500">
        还没注册?
        {{ '' }}
        <a href="/registration" class="font-semibold text-indigo-600 hover:text-indigo-500">注册</a>
      </p>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { loginUser, registerUser } from '@/api/auth.js';
import {useRouter} from "vue-router"; // 确保路径正确

const loginUsername = ref(localStorage.getItem("username")? localStorage.getItem("username"):''); // 注意这里变量名的更改
const loginPassword = ref(localStorage.getItem("password")?localStorage.getItem("password"):'');
const router = useRouter()
const handleLogin = () => {
  const userData = {
    username: loginUsername.value, // 使用正确的变量名
    password: loginPassword.value
  };
  loginUser(userData).then(res => res.json().then(data => {
    if (!data.token){
      alert("用户不存在或密码错误")
      return
    }

    localStorage.setItem('token', data.token)
    localStorage.setItem('username', loginUsername.value)
    localStorage.setItem('password', loginPassword.value)
    localStorage.setItem('email', data.data.email)
    localStorage.setItem('name', data.data.name)

    console.log('登录成功:', data);


    // 处理登录成功后的逻辑，例如跳转到主页？？
    location.href="/";


  }))
};



</script>