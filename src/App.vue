<script setup>
import CategoryPage from "@/views/Main/index.vue";
import Header from "@/components/layout/Header.vue";
</script>
<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>
<!--<template>-->
<!--&lt;!&ndash;  <header>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </header>&ndash;&gt;-->
<!--  <div class="app">-->
<!--    <CategoryPage />-->
<!--  </div>-->
<!--</template>-->

<script>
export default {
  name: "App"
}
</script>


<style scoped>
header {
  line-height: 1.5;
}

</style>
