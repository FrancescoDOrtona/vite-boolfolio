<template>
    <div>
        <nav class="nav-bar">
            <div class="logo">
                <router-link :to="{ name:'home'}">
                    <img src="../../public/Portfolio.hu_full_logo.png" alt="logo">
                </router-link>
                
            </div>
            <ul class="nav-bar_items">
                <li>
                    <router-link :to="{ name:'home'}">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name:'projects'}">Portfolio</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'contacts'}">Contacts</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.nav-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid lightblue;
    box-shadow: -1px 5px 10px 2px rgba(0, 0, 2, 0.3);
}

.nav-bar_items{
    display: flex;
    gap: 20px;
    
    li{
        font-weight: bold;
        font-size: 15px;
    }
}

.logo{
    align-self: flex-start;
}
.logo img{
    width: 80px;
    display: block;
}
</style>