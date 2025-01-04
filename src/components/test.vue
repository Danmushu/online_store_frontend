<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleSubmit = (event) => {
  event.preventDefault()  // 阻止表单的默认提交行为

  // 可以在这里进行表单验证或其他逻辑处理

  // 表单提交后，跳转到目标页面
  router.push('/Header_log')
}
</script>

<template>

</template>

<style scoped>

</style>