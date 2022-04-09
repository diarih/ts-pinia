<script lang="ts" setup>

import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

// const user = useUserStore();

// const { users } = user;

// onMounted(() => {
//     user.fetch();
// });


const user = useUserStore();
// const { users } = storeToRefs(user);
const { fetch } = user;
onMounted(() => {
  user.fetch();
});





</script>

<template>
    <div class="container mt-4">
        <h1>User List</h1>

        <table class="table table-light table-borderless mt-4">
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

