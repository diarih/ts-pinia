import { defineStore } from 'pinia';
import router from '../router';

type user = {
    name: string;
    email: string;
}

type auth = {
    loggedIn: boolean;
    user: user | null;
}


export const useAuthStore = defineStore({
    id: 'auth',
    state: (): auth => ({
        loggedIn: false,
        user: null,
    }),
    actions: {
        login(email: string, password: string) {
            if (email === 'name@email.com' && password === '1234') {
                this.loggedIn = true;
                this.user = {
                    name: 'Kipli',
                    email,
                };

                return true;
            }
            return false;
        },
        logout() {
            this.loggedIn = false;
            this.user = null;
            router.push('/login')
        }
    }
})