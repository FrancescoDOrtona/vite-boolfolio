<template>
    <div>
        <nav class="nav-bar">
            <ul class="nav-bar_items">
                <li>Home</li>
                <li>Portfolio</li>
                <li>Contacts</li>
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
    padding: 20px;
    border-bottom: 2px solid lightblue;
    box-shadow: 0 0 0 1 rgba(0, 0, 2,  0.300);
}

.nav-bar_items{
    display: flex;
    gap: 20px;
    
    li{
        font-weight: bold;
        font-size: 15px;
    }
}
</style>