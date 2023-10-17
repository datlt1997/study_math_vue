<template>
  <div>Hello World</div>
  <pre>
    {{ data }}
  </pre>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      data : []
    }
  },
  created() {
    this.axios.get("https://jsonplaceholder.typicode.com/todos").then(res => res.data).then(data => this.data = data)
  }
}
</script>

<style>
</style>
