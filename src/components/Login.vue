<template>
  <div>
    <div class="container">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit()">
          <div class="form-group row">
            <label for="username" class="col-form-label col-sm-2"
              >Username :</label
            >
            <input
              class="form-control"
              v-model="username"
              name="username"
              type="text"
            />
          </div>
          <div class="form-group row">
            <label for="password" class="col-form-label col-sm-2"
              >Password :</label
            >
            <input
              class="form-control"
              v-model="password"
              name="password"
              type="password"
            />
          </div>
          <div class="form-group row">
            <div class="col-3 offset-2">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="col-3 offset-2">
              <input
                type="reset"
                class="btn btn-outline-secondary"
                value="Cancel"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Router from "../router";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      users: [],
    };
  },
  methods: {
    handleSubmit() {
      if (this.username === "" || this.password === "")
        alert("invalid details");
      else {
        var user = this.users.filter(
          (item) =>
            item.userName === this.username && item.password === this.password
        );
        if (user != "") {
          sessionStorage.setItem("isLoggedIn", true);
          Router.push({ path: "/products" });
        } else{
            alert("Incorrect username or password")
        }
      }
    },
  },
  created() {
    axios.get("./users/users.json").then((response) => {
      this.users = response.data;
      //console.log(this.users)
    });
  },
};
</script>

<style></style>
