import {defineStore} from "pinia";

export const useDrawerStore = defineStore('drawer', {
    state: () => {
        return {
            leftDrawer: false,
            rightDrawer: false,
            loginForm: false,
            registerForm: false,
        }
    },
    actions: {
        toggleLeftDrawer() {
            this.leftDrawer = !this.leftDrawer;
        },
        toggleRightDrawer() {
            this.rightDrawer = !this.rightDrawer;
        },
        toggleLoginForm() {
            this.loginForm = !this.loginForm;
            this.registerForm = false;
        },
        toggleRegisterForm() {
            this.registerForm = !this.registerForm;
            this.loginForm = false;
        }
    }
})
