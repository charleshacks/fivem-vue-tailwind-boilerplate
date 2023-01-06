<template>
    <div class="flex items-center justify-center h-screen" v-show="settings.display">
        <div class="w-1/2 h-1/2 bg-slate-900 bg-opacity-70 rounded-lg shadow-md p-3 flex flex-col">
            <ul>
                <li class="flex">
                    <router-link to="/" class="button">Home</router-link>
                    <router-link to="/example" class="button ml-2">Example</router-link>
                    <button class="button ml-auto" @click="counter.increment()">Increment</button>
                </li>
            </ul>

            <div class="mt-3 grow border rounded bg-slate-100 bg-opacity-90 p-3">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    import { useSettingsStore } from './stores/settings';
    import { useCounterStore }  from './stores/counter';

    import {registerCloseHandler, subscribeToNuiEvents} from './services/NuiProxy';

    const settings = useSettingsStore();
    const counter  = useCounterStore();

    onMounted(() => {
        registerCloseHandler();
        subscribeToNuiEvents();
    });
</script>

<style lang="scss" scoped>
    .button {
        @apply
            p-3
            rounded
            shadow-sm
            bg-slate-300;

        &:hover {
            @apply
                bg-slate-400;
        }
    }
</style>
