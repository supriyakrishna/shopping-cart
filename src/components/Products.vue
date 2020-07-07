<template>
  <div>
    <h1>All products</h1>
    <div class="products">
      <div
        class="card product"
        style="width: 18rem;"
        v-bind:key="item.id"
        v-for="item in products"
      >
        <img class="card-img-top img" :src="item.image" alt="Card image cap" />
        <div class="card-body">
          <h6>{{ item.title }}</h6>
          <p>{{ item.price }}</p>
          <button type="button" class="btn btn-default btn-lg">
            <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
            Star
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: "",
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products/").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
  },
};
</script>

<style>
.products {
  margin: 0 auto;
  width: 100%;
  max-width: 80em;
}
.product {
  display: inline-block;
  margin: 0.75em;
  width: 100%;
  max-width: 18em;
}
.product .img {
  width: 18em;
  height: 18em;
}
</style>
