<script setup>
import "@/style/login.css";
import bg from "@/assets/login/bg.png";
import illustration from "@/assets/login/illustration.svg?component";
import avatar from "@/assets/logo.svg?component";
<<<<<<< HEAD
import { toRaw, ref, reactive} from "vue";
import axios from "@/api/index.js"




=======
import { toRaw, ref } from "vue";
>>>>>>> 97a1ea749edf8d7de2f0cf4cb3525f8d4049a13a
defineOptions({
  name: "Login",
});

const title = ref("校园隐患安全平台");
<<<<<<< HEAD

const form_body = reactive(
  {username: "", password: ""}
)

const login = ()=>{
  console.log(23123);
  
}

=======
>>>>>>> 97a1ea749edf8d7de2f0cf4cb3525f8d4049a13a
</script>

<template>
  <div class="select-none">
    <img :src="bg" class="wave" />
    <div class="login-container">
      <div class="img">
        <component :is="toRaw(illustration)" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <avatar class="avatar" />
          <h2 class="outline-none">{{ title }}</h2>
          <el-form size="large">
            <el-form-item>
<<<<<<< HEAD
              <el-input v-model="form_body.username"/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form_body.password" type="password"/>
            </el-form-item>
            <el-button type="primary" size="default" class="w-full mt-4" @click="login"
=======
              <el-input />
            </el-form-item>
            <el-form-item>
              <el-input />
            </el-form-item>
            <el-button type="primary" size="default" class="w-full mt-4"
>>>>>>> 97a1ea749edf8d7de2f0cf4cb3525f8d4049a13a
              >登录</el-button
            >
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  max-width: 100%;
  width: 100vw;
  grid-gap: 18rem;
}
.img {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.login-box {
  align-items: center;
  display: flex;
  overflow: hidden;
  text-align: center;
}
.login-from {
  width: 360px;
}
.avatar {
  height: 80px;
  width: 350px;
}
.login-form h2 {
  color: #999;
  font: 700 200% Consolas, Monaco, monospace;
  margin: 15px 0;
  text-transform: uppercase;
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.w-full {
  width: 100%;
}
.mt-4 {
  margin-top: 1rem;
}
</style>
