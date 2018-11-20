<template>
    <nav class="navbar is-white" id="navbarStyle" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            UI Features
                        </a>

                        <div class="navbar-dropdown">
                            <router-link to="/ui-features/button" class="navbar-item">
                                Buttons
                            </router-link>
                            <router-link to="/ui-features/form" class="navbar-item">
                                Form
                            </router-link>
                            <a class="navbar-item">
                                Typography
                            </a>
                            <a class="navbar-item">
                                Icons
                            </a>
                        </div>
                    </div>
                </div>
                <div class="navbar-item">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            <img src="../../assets/logo.png" />
                            Welcome User!
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Profile
                            </a>
                            <a class="navbar-item">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style>
#navbarStyle {
  -webkit-box-shadow: 0px 1px 5px #ccc;
  -moz-box-shadow: 0px 1px 5px #ccc;
  box-shadow: 0px 1px 5px #ccc;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
