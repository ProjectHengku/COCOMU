<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <nav>
    <RouterLink to="/">홈</RouterLink> |
    <RouterLink to="/accounts/signup">회원가입</RouterLink> |
    <RouterLink to="/movies">영화</RouterLink> |
    <RouterLink to="/reviews">리뷰</RouterLink>
  </nav>
  <div class="container text-center">
    <div class="row">
      <RouterView class="col col-xl-8 offset-xl-2" />
    </div>
  </div>
</template>

<style scoped></style>
