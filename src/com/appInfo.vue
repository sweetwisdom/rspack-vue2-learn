<template>
  <div>
    <button @click="state.count++">count is {{ state.count }}</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";

const state = reactive({
  count: 0,
});
</script>

<style lang="scss" scoped></style>
