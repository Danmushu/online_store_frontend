import { defineStore } from 'pinia'
import {ref} from "vue";

export const useCounterStore = defineStore('cart', () => {
    const count = ref(0)
    function set(num) {
        count.value = num
    }

    return { count, set }
})