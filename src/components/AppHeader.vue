<template>
    <!-- <div>
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
    </div> -->

    <div id="navbar-animmenu">
        <ul class="show-dropdown main-navbar">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li  class="active">
                <router-link :to="{ name:'home'}" href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'contacts'}" href="javascript:void(0);"><i class="far fa-address-book"></i>Contacts</router-link>
            </li>
            <li>
                <router-link :to="{ name:'projects'}" href="javascript:void(0);"><i class="far fa-clone"></i>Projects</router-link>
            </li>
            <li>
                <a href="javascript:void(0);"><i class="far fa-calendar-alt"></i>Calendar</a>
            </li>
            <li>
                <a href="javascript:void(0);"><i class="far fa-chart-bar"></i>Charts</a>
            </li>
            
            
        </ul>
    </div>  
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
/* 
    .nav-bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 3px;
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
    width: 100px;
    display: block;
} 
*/



i {
	margin-right: 10px;
}/* ---------horizontal-navbar-menu-----------*/
#navbar-animmenu {
	background: #5161ce;
	overflow: hidden;
	position: relative;
	padding: 10px 0px;
  width: 100%;
}
#navbar-animmenu ul{
	padding: 0px;
	margin: 0px;
  
}

#navbar-animmenu ul li a i{
	margin-right: 10px;
}

#navbar-animmenu li {
	list-style-type: none;
	float: left;
}

#navbar-animmenu ul li a{
	color: rgba(255,255,255,0.5);
    text-decoration: none;
    font-size: 15px;
    line-height: 45px;
    display: block;
    padding: 0px 20px;
    transition-duration:0.6s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}

#navbar-animmenu>ul>li.active>a{
	color: #5161ce;
	background-color: transparent;
	transition: all 0.7s;
}


#navbar-animmenu a:not(:only-child):after {
	content: "\f105";
	position: absolute;
	right: 20px;
	top: 10%;
	font-size: 14px;
	font-family: "Font Awesome 5 Free";
	display: inline-block;
	padding-right: 3px;
	vertical-align: middle;
	font-weight: 900;
	transition: 0.5s;
}

#navbar-animmenu .active>a:not(:only-child):after {
	transform: rotate(90deg);
}
.hori-selector{
	display:inline-block;
	position:absolute;
	height: 100%;
	top: 10px;
	left: 0px;
	transition-duration:0.6s;
	transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	background-color: #fff;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}
.hori-selector .right,
.hori-selector .left{
	position: absolute;
	width: 25px;
	height: 25px;
	background-color: #fff;
	bottom: 10px;
}
.hori-selector .right{
	right: -25px;
}
.hori-selector .left{
	left: -25px;
}
.hori-selector .right:before,
.hori-selector .left:before{
	content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #5161ce;
}
.hori-selector .right:before{
	bottom: 0;
    right: -25px;
}
.hori-selector .left:before{
	bottom: 0;
    left: -25px;
}

</style>