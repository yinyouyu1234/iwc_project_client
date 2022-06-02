<template>
  <div class="login__warpper">
    <div class="login__box">
      <div class="title">成败 一念间</div>
      <Form :label-width="80" style="padding: 30px 30px 0px 0 ">
        <FormItem label="username" prop="username">
          <Input v-model="formValidate.username"></Input>
        </FormItem>
        <FormItem label="username" prop="password">
          <Input v-model="formValidate.username" type="password"></Input>
        </FormItem>
      </Form>
      <div class="button__box">
        <Button type="primary" long @click="handleLogin">login</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      formValidate: {
        username: 'dian0828',
        passworld: 'dian0828'
      }
    }
  },
  methods: {
    handleLogin () {
      this.$router.push('/index/express')
    }
  }
}
</script>
<style scoped>
.login__warpper {
  width: 100%;
  height: 100%;
  position: relative;
  background: url(../assets/image/loginBg.webp);
  background-size: cover;
}
.login__box {
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(0%, -50%);
  background: rgba(255, 255, 255, 0.4);
}
.button__box {
  text-align: center;
  padding: 30px;
}
.title {
  font-size: 34px;
  text-align: center;
  font-family: 隶书;
  padding-top: 10px;
}
</style>