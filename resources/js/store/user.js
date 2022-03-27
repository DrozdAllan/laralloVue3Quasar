import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            // TODO: check if you need the isConnected instead of just verifyin user !== null
            isConnected: false,
            user: null,
        }
    },
    actions: {
        connectUser() {
            axios.get("/api/user").then((Response) => {
                this.user = Response.data;
                this.isConnected = true;
            })
            // TODO: manage the errors
        }
    }
})