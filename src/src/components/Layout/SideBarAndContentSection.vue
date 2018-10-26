<template>
    <!-- <div>
            <div class="columns">
                <aside class="column is-2 is-fullheight is-narrow-mobile is-hidden-mobile" id="sidebarStyle">
                <br />
                <nav class="menu">
                    <ul class="menu-list">
                    <li><a class="is-active">Dashboard</a></li>
                    <li><a>Customers</a></li>
                    </ul>
                    <p class="menu-label">
                    Administration
                    </p>
                    <ul class="menu-list">
                    <li><a>Team Settings</a></li>
                    <li>
                        <a class="">Manage Your Team</a>
                        <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                        </ul>
                    </li>
                    <li><a>Invitations</a></li>
                    <li><a>Cloud Storage Environment Settings</a></li>
                    <li><a>Authentication</a></li>
                    </ul>
                    <p class="menu-label">
                    Transactions
                    </p>
                    <ul class="menu-list">
                    <li><a>Payments</a></li>
                    <li><a>Transfers</a></li>
                    <li><a>Balance</a></li>
                    </ul>
                </nav>
                </aside>
                
                <main class="column">
                    <router-view></router-view>
                </main>
            </div>

    </div> -->
    
    <section class="main-content columns is-fullheight">
    <aside class="column is-2 aside hero is-fullheight is-narrow-mobile section is-hidden-mobile" id="sidebarStyle">
        <ul class="menu-list">
        <li>
            <a @click="navHome(activeLink = 'linkHome')" :class="{'is-active': activeLink === 'linkHome'}" id="linkStyle">
            <span class="icon"><i class="fa fa-dashboard"></i></span> Home
            </a>
        </li>
        <li>
            <a href="#" @click="navAbout(activeLink = 'linkAbout')" :class="{'is-active': activeLink === 'linkAbout'}" id="linkStyle">
            <span class="icon"><i class="fa fa-table"></i></span> Links
            </a>

            <ul>
            <li>
                <a href="#" id="linkStyle">
                <span class="icon is-small"><i class="fa fa-link"></i></span> Link1
                </a>
            </li>
            <li>
                <a href="#" id="linkStyle">
                <span class="icon is-small"><i class="fa fa-link"></i></span> Link2
                </a>
            </li>
            </ul>
        </li>
        <li>
            <a href="#" id="linkStyle">
            <span class="icon"><i class="fa fa-info"></i></span> About
            </a>
        </li>
        </ul>
    </aside>
        <div id="sectionStyle">
            <br />
            <router-view></router-view>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            activeLink: ""
        }
    },
    methods:{
        navHome(args){
            this.$router.push({name: 'home'});
            return args;
        },
        navAbout(args){
            this.$router.push({name: 'about'});
            return args;
        }
    }
};
</script>

<style>
#sidebarStyle{
    box-shadow: 0px 3px 5px #ccc;
    position: fixed;
    float: left;
    width: 15%;
}
#sectionStyle{
    float:left;
    width: 85%;
}
#linkStyle{
    font-size: 14px;
}
</style>
