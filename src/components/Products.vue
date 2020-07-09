<template>
  <div>
    <h1>All products</h1>
    <div class="cart">
      <div class="cart-size">
        <el-button
          icon="el-icon-shopping-cart-full"
          style="background-color:black;color:white"
          @click="showCartDetails"
        >{{ cartProducts.length }}</el-button>
      </div>
      <el-dialog title="Tips" :visible.sync="dialogVisible" width="30%">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
      <div class="cart-block" v-if="showCart">
        <ul :key="item.title" v-for="item in cartProducts">
          <li>
            <img :src="item.image" style="width:50px;height:50px;" @click="openDialog" />
            <div class="cart-title">{{ item.title }}</div>
            <el-button @click="increment(item)" icon="el-icon-circle-plus" circle size="mini"></el-button>
            <span>{{item.quantity}}</span>
            <el-button @click="decrement(item)" icon="el-icon-remove" circle size="mini"></el-button>
            <span>{{ item.price }}</span>
          </li>
        </ul>
      </div>
    </div>
    <el-row>
      <el-col :span="5" v-bind:key="item.id" v-for="item in products" :offset="1">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.image" class="image" style="width:18em;height:18em" />
          <div style="padding: 14px;">
            <span>{{ item.title }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="addToCart(item)">Add to Cart</el-button>
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
  name: "Products",
  data() {
    return {
      products: "",
      cartSize: 0,
      cartProducts: [],
      showCart: false,
      dialogVisible: false
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products/").then(response => {
      this.products = response.data;
    });
  },
  methods: {
    addToCart(item) {
      let count = 0;
      if (!item.quantity) {
        count = item.quantity ? item.quantity : 0;
        this.$set(item, "quantity", count + 1);
        this.cartProducts.push(item);
      } else {
        let temp = this.cartProducts.findIndex(p => p.id === item.id);
        let c = item.quantity + 1;
        this.$set(this.cartProducts[temp], "quantity", c);
      }
    },
    increment(item) {
      if (item.quantity == 10) alert("maximum only 10 per items");
      else item.quantity++;
    },
    decrement(item) {
      if (item.quantity == 1) {
        let temp = this.cartProducts.findIndex(p => p.id === item.id);
        this.cartProducts.splice(temp, 1);
      } else item.quantity--;
    },
    showCartDetails() {
      if (this.cartProducts.length != 0) {
        this.showCart = !this.showCart;
      } else this.showCart = false;
    },
    openDialog() {
      console.log("in");
      this.dialogVisible = true;
    }
  }
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
