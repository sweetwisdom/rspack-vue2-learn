<template>
  <div class="app">
    <h2>2021</h2>
    <tets></tets>
    <app-info></app-info>
    
  </div>
</template>

<script>
import tets from "@/com/tets.vue";
import appInfo from "@/com/appInfo.vue";
export default {
  components: { tets,appInfo },
  data() {
    return {};
  },
  computed: {},
  props: {},
  watch: {},
  mounted() {},
  created() {
    console.log("hello rustpack");
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@/css/reset.scss';
$mainColor: #138fda;
$mainSize: 22px;
.app {
  h2 {
    color: $mainColor;
    font-size: $mainSize;
  }
}
</style>
