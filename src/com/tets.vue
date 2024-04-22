<template>
  <div class="contain">
    <span class="title"> this is a test page </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  props: {},
  watch: {},
  mounted() {},
  created() {
    // process.env.NODE_ENV
    console.log(process.env.NODE_ENV);
    console.log(process.env.PUBLIC_FOO);
  },

  methods: {},
};
</script>

<style lang="less" scoped>

@bgColor: white;
@textColor:#4ccd61;
@Height: 50rpx;
.contain {
  background-color: @bgColor;
  color: @textColor;
}
.row {
  height: @Height;
  margin-left: @Height;
}
</style>
