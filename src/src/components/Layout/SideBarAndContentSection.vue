<template>
<div>
    <div :class="sideBarClass">
        <ul>
            <li><a href="#"><i class="fa fa-dashboard"></i><span>Dashboard</span></a></li>
            <li><a href="#"><i class="fa fa-desktop"></i><span>UI Features</span></a></li>
            <li><a href="#"><i class="fa fa-calendar"></i><span>Calendar</span></a></li>
            <li><a href="#"><i class="fa fa-envelope-o"></i><span>Messages</span></a></li>
            <li><a href="#"><i class="fa fa-table"></i><span>Data Table</span></a></li>
            <li><a href="#" @click="openAndCloseSideBar"><i class="fa fa-arrows-h"></i><span>Close Sidebar</span></a></li>
        </ul>
    </div>
    <!-- Content -->
    <div :class="mainClass">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            sideBarClass: "sidebar active",
            mainClass: "main active"
        }
    },
    methods:{
        openAndCloseSideBar(){
            if(this.sideBarClass === "sidebar active" && this.mainClass === "main active"){
                this.sideBarClass = "sidebar";
                this.mainClass = "main";
            }else{
                this.sideBarClass = "sidebar active";
                this.mainClass = "main active";
            }
        },
        windowSizeTrigger(){
            if(window.innerWidth <= 1087){
                this.sideBarClass = "sidebar";
                this.mainClass = "main";
            }else{
                this.sideBarClass = "sidebar active";
                this.mainClass = "main active";
            }
        }
    },
    created(){
        if(/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)) {
            this.sideBarClass = "sidebar";
            this.mainClass = "main";
        }
        window.addEventListener('resize', this.windowSizeTrigger);
        this.windowSizeTrigger();
    }
};
</script>

<style lang="less">
@import '../../custom-css/less/admin.less';
</style>
