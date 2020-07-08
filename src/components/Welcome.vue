<template>
  <div>
    <el-card class="box-card welcome-card">
      <div slot="header" class="clearfix">
        <span>Shopping Cart</span>
        <el-link
          href="#/login"
          style="float: right; padding: 3px 0"
          type="primary"
          >Login</el-link
        >
      </div>
      <div>
        <h3>An online app to purchase goods</h3>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "welcome",
};
</script>
<style>
.welcome-card {
  border: 5px solid cadetblue !important;
  max-width: 650px;
  margin: auto;
  padding: 30px;
}
.title {
  text-shadow: 3px 3px 2px rgba(150, 150, 150, 1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
