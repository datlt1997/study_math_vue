<template lang="">
    <div>
        <pre>
            {{ user }}
        </pre>
        
    </div>
</template>
<script>
import userApi from '@/api/userAxios';
import { mapState } from 'vuex';
export default {
    name: "ListUser",
    computed: mapState ({
        user: state => state.user.users
    }),    
    async created() {
        await userApi.getAll().then(response => this.users = response);
    }
}
</script>