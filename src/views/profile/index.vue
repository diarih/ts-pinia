<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';


const auth = useAuthStore()
// const router = useRouter();

// const logout = () => {
//   auth.logout();
//   router.push('/');
// };

</script>

<template>
    <div class="container mt-4">
        <h1>Profile</h1>

        <div>Name: {{ auth.user?.name }}</div>
        <div>Email: {{ auth.user?.email }}</div>

        <button class="mt-4 btn btn-danger" @click="auth.logout">Logout</button>
    </div>
</template>