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
        
    }
</script>

<style scoped>
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
main {
    flex: 1;
}
footer {
    height: 50px;
    background-color: antiquewhite;
}
</style>