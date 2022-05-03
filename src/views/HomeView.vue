<template>
    <h1>Home view : {{ countertore.counter }}</h1>

    <h3>Numero de cambios: {{ countertore.numberOfChanges }}</h3>
</template>

<script lang="ts" setup>

import {useCountertore} from '../stores/counter';

const countertore = useCountertore();

</script>