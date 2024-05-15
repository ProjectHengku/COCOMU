<template>
  <div>
    <form>
      <label for="username">아이디 : </label>
      <input
        type="text"
        name="username"
        id="username"
        v-model="username"
      /><br />

      <label for="password1">비밀번호 : </label>
      <input
        type="password"
        name="password1"
        id="password1"
        v-model="password1"
      /><br />

      <label for="password2">비밀번호 확인 : </label>
      <input
        type="password"
        name="password2"
        id="password2"
        v-model="password2"
      /><br />

      <button class="btn btn-primary" type="submit">회원가입</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"

const username = ref(null)
const password1 = ref(null)
const password2 = ref(null)
</script>

<style scoped></style>
