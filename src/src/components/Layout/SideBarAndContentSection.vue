<template>
  <div>
    <div :class="sideBarClass">
      <ul>
        <li><a href="#"><i class="fa fa-dashboard"></i><span>Dashboard</span></a></li>
        <li>
          <a
            href="#"
            class="dropdown-btn"
          >
            <i class="fa fa-desktop"></i>
            <span>Dropdown
            </span>
            <i
              id="caretId"
              class="fa fa-caret-down"
            ></i>
          </a>
          <div :style="dropdownContainerStyle" :class="dropdownContainerClass">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li><a href="#"><i class="fa fa-calendar"></i><span>Calendar</span></a></li>
        <li><a href="#"><i class="fa fa-envelope-o"></i><span>Messages</span></a></li>
        <li><a href="#"><i class="fa fa-table"></i><span>Data Table</span></a></li>
      </ul>
    </div>
    <!-- Content -->
    <div :class="mainClass">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
#bottom-stuff {
  position: relative;
}

#bottom {
  position: fixed;
  background: gray;
  width: 100%;
  bottom: 0;
}
</style>

<script>
import {mapState,mapActions} from 'vuex'

export default {
  mounted() {
    var dropdown = document.getElementsByClassName('dropdown-btn')
    var i

    var sideBar = document.getElementsByClassName('sidebar')
    var main = document.getElementsByClassName('main')

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active')
        var dropdownContent = this.nextElementSibling
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none'
          if (window.innerWidth <= 1087) {
            if (sideBar[0].className === 'sidebar active') {
              sideBar[0].className = 'sidebar'
            }
          }
        } else {
          dropdownContent.style.display = 'block'
          if (window.innerWidth <= 1087) {
            if (sideBar[0].className === 'sidebar') {
              sideBar[0].className = 'sidebar active'
            }
          }else{
            if(sideBar[0].className === "sidebar"){
              sideBar[0].className = 'sidebar active'
              main[0].className = 'main active'
            }
          }
        }
      })
    }
  },
  computed:{
    ...mapState("topandsidebar",{
    isOpenAndCloseSidebar: state=>state.isOpenAndCloseSidebar
    })
  },
  data() {
    return{
      sideBarClass: "",
      mainClass: "",
      dropdownContainerClass: "dropdown-container",
      dropdownContainerStyle: ""
    }
  },
  methods: {
    ...mapActions("topandsidebar",[
      "openAndCloseSideBar"
    ]),
    sidebarEvent(){
    if (
        this.sideBarClass === 'sidebar active' &&
        this.mainClass === 'main active'
      ) {
        this.sideBarClass = 'sidebar'
        this.mainClass = 'main'
        this.openAndCloseSideBar({
          sideBarClass: "sidebar",
          mainClass: "main"
        })
      } else {
        this.sideBarClass = 'sidebar active'
        this.mainClass =   'main active'
        this.openAndCloseSideBar({
          sideBarClass: "sidebar active",
          mainClass: "main active"
        })
      }
      if(this.sideBarClass === "sidebar"){
        this.dropdownContainerStyle = "display: none"
      }else{
        this.dropdownContainerStyle = ""
      }
    },
    windowSizeTrigger() {
      if (window.innerWidth <= 1087) {
        this.sideBarClass = 'sidebar'
        this.mainClass = 'main'
      } else {
        this.sideBarClass = 'sidebar active'
        this.mainClass = 'main active'
      }
    }
  },
  created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.sideBarClass = 'sidebar'
      this.mainClass = 'main'
    }
    window.addEventListener('resize', this.windowSizeTrigger)
    this.windowSizeTrigger()
  },
  watch:{
    isOpenAndCloseSidebar(){
      if(this.isOpenAndCloseSidebar){
        this.sidebarEvent();
      }
    }
  }
}
</script>

<style lang="less">
@import '../../custom-css/less/admin.less';
</style>
