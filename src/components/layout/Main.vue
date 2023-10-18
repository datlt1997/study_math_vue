<template>
  <div>
    <header-layout/>
    <div>
      <router-link :to="{name: 'list'}">list user</router-link>
      <router-link :to="{name: 'create'}">create user</router-link>
    </div>
    <router-view />
    <footer-layout />
  </div>
</template>
<script>
import HeaderLayout from './Header.vue';
import FooterLayout from './Footer.vue';
export default {
  name: "MainLayout",
  components: {
    "header-layout": HeaderLayout,
    "footer-layout": FooterLayout
  }
}
</script>