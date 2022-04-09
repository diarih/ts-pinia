<script lang="ts" setup>

import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const user = useUserStore();
onMounted(() => {
  user.fetch();
});

console.log(user.loading);


</script>

<template>
    <div class="container mt-4">
        <h1>User List</h1>

        <div class="fs-1 fw-bold mt-4" v-if="user.loading">Loading...</div>

        <table class="table table-light table-borderless mt-4" v-else>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="e in user.users" :key="e.id">
                    <td>{{ e.id }}</td>
                    <td>{{ e.name }}</td>
                    <td>{{ e.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

