<template>
    <div class="home">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/home/index">首页</router-link>
            <router-link to="/home/cart">购物车</router-link>
            <router-link to="/home/my">我的</router-link>
        </footer>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                uname:"",  //uname为空，return返回
            }
        },
        //生命周期 ，，取值
        mounted() {
        //    this.uname = this.$route.query.i
            // this.uname = this.$route.qurey.n  //把route的qurey的uname的admin传给this.uname
            this.uname = this.$route.params.uname
        },
    }
</script>

<style scoped>
    .home{
        widows: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    main{
        flex: 1;
    }
    footer{
        height: 50px;
        background-color: #cccccc;
    }
</style>