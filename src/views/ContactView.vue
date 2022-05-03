<template>
    <h1>Contact</h1>

    <button @click="incrementBy(1)">+1</button>
    <button @click="incrementBy(2)">+2</button>
</template>

<script lang="ts" setup>
import { useCountertore } from '../stores/counter';

const countertore = useCountertore();

const incrementBy = (value: number) => {
    countertore.incrementBy(value);
}
</script>