<template>
  <div class="flex items-center justify-between">
    <h2 class="flex items-center justify-between">登录</h2>
    <form @submit.prevent="handleLogin" class="space-y-6">
      <div>
        <label for="loginEmail" class="block text-sm/6 font-medium text-gray-900">邮箱</label>
        <input type="email" id="loginEmail" v-model="loginEmail">
      </div>
      <div>
        <label for="loginPassword" class="block text-sm/6 font-medium text-gray-900">密码</label>
        <input type="password" id="loginPassword" v-model="loginPassword">
      </div>
      <button type="submit" class="space-y-6">登录</button>
    </form>

    <h2 class="flex items-center justify-between">注册</h2>
    <form @submit.prevent="handleRegister" class="space-y-6">
      <div>
        <label for="registerEmail" class="block text-sm/6 font-medium text-gray-900">邮箱</label>
        <input type="email" id="registerEmail" v-model="registerEmail">
      </div>
      <div>
        <label for="registerPassword" class="block text-sm/6 font-medium text-gray-900">密码</label>
        <input type="password" id="registerPassword" v-model="registerPassword">
      </div>
      <button type="submit" class="space-y-6">注册</button>
    </form>
  </div>
</template>

<script>
import { loginUser, registerUser } from '@/api/auth.js';

export default {
  data() {
    return {
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerPassword: ''
    };
  },
  methods: {
    handleLogin() {
      const userData = {
        email: this.loginEmail,
        password: this.loginPassword
      };
      loginUser(userData).then(response => {
        console.log('登录成功:', response);
        // 处理登录成功后的逻辑，例如跳转到主页
      }).catch(error => {
        console.error('登录失败:', error);
        // 处理登录失败的逻辑，例如显示错误消息
      });
    },
    handleRegister() {
      const userData = {
        email: this.registerEmail,
        password: this.registerPassword
      };
      registerUser(userData).then(response => {
        console.log('注册成功:', response);
        // 处理注册成功后的逻辑，例如跳转到登录页面
      }).catch(error => {
        console.error('注册失败:', error);
        // 处理注册失败的逻辑，例如显示错误消息
      });
    }
  }
}
</script>