<template>
    <div>
        <Suspense>
            <asyncCityView />
            <template #fallback>
                <p>Loading...</p>
            </template>
        </Suspense>

    </div>
</template>
<script setup>
import asyncCityView from "../components/asyncCityView.vue";
</script>
