<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    @submit.native.prevent="submitForm('ruleForm')"
    class="welcome-card"
  >
    <el-form-item label="User name" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="ruleForm.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">Create</el-button>
      <el-button @click="resetForm('ruleForm')">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";
import Router from "../router";
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      users: [],
      rules: {
        name: [
          { required: true, message: "please input username", trigger: "blur" },
          {
            min: 3,
            max: 12,
            message: "minimum length should be 3",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "please input password", trigger: "blur" },
          { min: 5, message: "minimum length should be 5", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const { name, password } = this.ruleForm;
          var user = this.users.filter(
            (item) => item.userName === name && item.password === password
          );
          if (user != "") {
            sessionStorage.setItem("isLoggedIn", true);
            Router.push({ path: "/products" });
          } else {
            alert("Incorrect username or password");
          }
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
        } else {
          alert("Incorrect username or password");
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
