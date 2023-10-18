<template lang="">
    <div>
        <pre>
            {{ getUser }}
        </pre>
        
    </div>
</template>
<script>
import userApi from '@/api/userAxios';
export default {
    name: "ListUser",
    computed: {
        getUser() {
            return this.$store.getters["user/getUserFormat"];
        }
    },
    created() {
        userApi.getAll().then(response => this.$store.dispatch('user/fetch', response));
    }
}
</script>