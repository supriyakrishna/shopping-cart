<template>
  <div>
    <!-- <div class="btn-nav">
      <a href="#login">Login</a>
    </div>-->
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#/login">Login</a>
      </li>
    </ul>

    <div class="container">
      <div class="card-header">Welcome</div>
      <div class="card-body">
        <i style="font-size:40px" class="fas fa-shopping-cart"></i>
        <h2 class="title">mCart</h2>
      </div>
      <h3>An online app to purchase mobile gadgets</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "welcome",
};
</script>
<style>
.container {
  border: 5px solid cadetblue;
  max-width: 650px;
}
.title {
  text-shadow: 3px 3px 2px rgba(150, 150, 150, 1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
