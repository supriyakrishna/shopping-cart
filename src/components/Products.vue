<template>
  <div>
    <h1>All products</h1>
    <div class="cart">
      <span>{{ cartProducts.length }}</span>
      <i
        class="el-icon-shopping-cart-full
"
      ></i>
      <h2>{{ cartProducts.length }} items in basket</h2>
      <div class="cart-block">
        <ul :key="item.title" v-for="item in cartProducts">
          <li>
            <img :src="item.image" style="width:50px;height:50px;" />
            <div class="cart-title">{{ item.title }}</div>
            <span><i class="el-icon-circle-plus"></i></span>
            <span>1</span>
            <span><i class="el-icon-remove"></i></span>
            <span>{{ item.price }}</span>
          </li>
        </ul>
      </div>
    </div>
    <el-row>
      <el-col
        :span="5"
        v-bind:key="item.id"
        v-for="item in products"
        :offset="1"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.image" class="image" style="width:18em;height:18em" />
          <div style="padding: 14px;">
            <span>{{ item.title }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="addToCart(item)"
                >Add to Cart</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: "",
      cartSize: 0,
      cartProducts: [],
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products/").then((response) => {
      this.products = response.data;
    });
  },
  methods: {
    addToCart(item) {
      this.cartProducts.push(item);
    },
  },
};
</script>

<style scoped>
.el-card {
  height: 400px;
  margin-bottom: 10px;
}
.cart {
  position: fixed;
  right: 0em;
  top: 0em;
  text-align: right;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  z-index: 1;
}
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
.cart-block {
  padding: 15px;
}
.cart-block li {
  list-style: none;
  margin-bottom: 18px;
  text-align: left;
}
.cart-title {
  display: inline-block;
  width: 250px;
  padding-left: 15px;
  max-width: 220px;
  white-space: break-spaces;
}
</style>
