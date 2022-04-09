import { defineStore } from 'pinia';
import axios from 'axios';

type User = {
    id: string,
    name: string,
    email: string,
}

type UserState = {
    users: User[]
}

export const useUserStore = defineStore({
    id: 'User',
    state: (): UserState => ({
        users: []
    }),
    actions: {
        async fetch() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = response.data
            } catch (error) {
                console.error(error);
            }
        }
    }


})