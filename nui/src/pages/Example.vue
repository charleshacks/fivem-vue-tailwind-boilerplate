<template>
    <div>
        <h1>Example page! Current count is: {{ counter.count }}</h1>
    </div>
</template>

<script>
    import { useCounterStore } from '../stores/counter';

    export default {
        setup() {
            const counter = useCounterStore();

            return { counter }
        },
    }
</script>

<style lang="scss" scoped>

</style>
