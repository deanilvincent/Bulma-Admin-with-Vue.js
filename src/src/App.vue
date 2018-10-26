<template>
  <div id="app">
      <top-nav-bar/>
      <side-bar-and-content-section></side-bar-and-content-section>
  </div>
</template>

<script>
import TopNavBar from "./components/Layout/TopNavBar";
import SideBarAndContentSection from "./components/Layout/SideBarAndContentSection";

export default {
  components: {
    topNavBar: TopNavBar,
    sideBarAndContentSection: SideBarAndContentSection
  }
};
</script>
