<template>
    <div>
        <h1>登录</h1>
        <input type="text" v-model="uname">
        <br>
        <input type="text" v-model="pwd">
        <br>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                uname:"",
                pwd:""
            }
        },
        //编程式导航
        methods:{
            login(){
                //验证用户名和密码
                if(this.uname == "admin"&&this.pwd == "123"){
                    //用户名和密码正确跳转到首页
                    // console.log(this)
                    this.$router.push("/home/admin")
                }
            }
        }
    }
</script>

<style scoped>

</style>