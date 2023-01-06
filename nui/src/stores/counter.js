import { defineStore } from 'pinia';
import { NuiProxy } from '../services/NuiProxy';

export const useCounterStore = defineStore('counter', {
    state: () => {
        return { count: 0 };
    },

    actions: {
        increment() {
            this.count++;

            NuiProxy.call('incremented', {
                count: this.count,
            });
        },
    },
});
