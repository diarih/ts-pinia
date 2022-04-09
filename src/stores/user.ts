import { defineStore } from 'pinia';
import axios from 'axios';

type User = {
    id: string,
    name: string,
    email: string,
}

type UserState = {
    users: User[],
    loading: boolean,
}

export const useUserStore = defineStore({
    id: 'User',
    state: (): UserState => ({
        users: [],
        loading: false,
    }),
    actions: {
        async fetch() {
            try {
                this.loading = true
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = response.data
                this.loading = false
            } catch (error) {
                console.error(error);
            }
        }
    }
})