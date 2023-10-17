<template>
  <ListUser />
</template>

<script>
import ListUser from "./pages/users/list.vue"
export default {
  name: 'App',
  components: { ListUser },
  data() {
    return {
      data : []
    }
  },
}
</script>

<style>
</style>
