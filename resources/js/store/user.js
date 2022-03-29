import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: null,
        }
    },
    actions: {
        connectUser() {
            axios.get("/api/user").then((Response) => {
                this.user = Response.data;
            })
                .catch((e) => {
                    if (e.response.status === 401) {
                        console.log('unauthorized')
                    }
                })
        }
    }
})