<template lang="">
  <div>
      <input-layout />
      <button-layout />
  </div>
</template>
<script>
import InputVue from "@/components/element/Input.vue"
import ButtonVue from '@/components/element/Button.vue'
export default {
  name: "CreateUser",
  components: {
    "input-layout": InputVue,
    "button-layout": ButtonVue
  }
}
</script>