<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <left/>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
          @click="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <search/>
    </v-app-bar>

    <v-main>
      <router-view/>
      <div class="footer">
        <footerr/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import left from './views/Left__menu'
import search from './components/search__manu2'
import footerr from './views/footer'
export default {
  data() {
    return {
      drawer: null,
    }
  },
  components:{
    left,
    search,
    footerr
  }
}
</script>
<style lang="scss">
@media (max-width: 1000px) {
  body{
    .v-navigation-drawer{
      //transition: all ease .8s;
    }
    .v-navigation-drawer--close{
      transform: translateX(-100) !important;
      visibility: hidden !important;
      //transition: all ease .8s;
    }
    .v-main{
      padding: unset !important;
    }
    .primary{
      display: block !important;
    }
    .v-toolbar__content{
      background: var(--blue);
      height: 64px !important;
    }
  }
  .v-main__wrap{
    border-radius: unset !important;
  }
  .v-icon.notranslate.mdi.mdi-menu.theme--dark{
    filter: invert(100%);
  }
  .v-app-bar.v-app-bar--fixed{
    z-index: 6 !important;
  }
}
@media (max-width: 560px) {
  .theme--light.v-navigation-drawer{
    background: var(--blue) !important;
  }
  .v-icon.v-icon{
    filter: invert(100%);
  }
  .footer{
    display: block !important;
  }
  .v-expansion-panel-content__wrap{
    color: white;
  }
}
.footer{
  display: none;
}
.primary{
  display: none !important;
}
@font-face {
  font-family: 'poppins-sb';
  src: url("./assets/font/Poppins-SemiBold.ttf");
}
@font-face {
  font-family: 'poppins-m';
  src: url("./assets/font/Poppins-Medium.ttf");
}
@font-face {
  font-family: 'poppins-r';
  src: url("./assets/font/Poppins-Regular.ttf");
}
@font-face {
  font-family: 'poppins-sb';
  src: url("./assets/font/Poppins-SemiBold.ttf");
}
body{
  .theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{
    background: unset;
  }
}
.v-main{
  padding: 24px 24px 0px 360px !important;
}
*{
  font-family: poppins-m;
}
:root{
  --blue: #132651;
  --black: #333333;
  --orange: #FB6D3A;
  --grey: #E1E1E1;
  --h--grey: #B3B6B6;
  --card: #9E9E9E;
}
.theme--light.v-navigation-drawer{
  width: 360px !important;
}
.v-main__wrap{
  background: var(--grey);
  border-radius: 48px 48px 0px 0px;
}
body{
    .v-application .primary {
      background-color: white !important;
    }
  }
  .v-app-bar__nav-icon.v-btn.v-btn--icon.v-btn--round.theme--dark.v-size--default{
    filter: invert(100%);
  }
  textarea,
  input,
  button{
    &:focus{
      outline: 0;
    }
  }
.v-application--is-ltr .v-expansion-panel-header__icon{
  margin-left: unset !important;
}
.v-expansion-panel-header{
  padding: unset !important;
  margin-left: 64px;
  width: 217px;
  justify-content: space-between;
  font-size: 24px;
  line-height: 36px;
  &.v-item--active{
    color: var(--orange) !important;
  }
}
.theme--light.v-expansion-panels .v-expansion-panel{
  margin-bottom: 25px;
}
.v-expansion-panel-header--active{
  color: var(--orange) !important;
}
.v-expansion-panel-content__wrap{
  padding: 0 0px 16px 64px !important;
}
.v-expansion-panel-content__wrap:hover{
  cursor: pointer;
  color: var(--orange);
  transform: translateX(10px);
  transition: all ease .3s;
}
.v-expansion-panel-content__wrap{
  transition: all ease .3s;
}
.v-navigation-drawer--close{
  transform: translateX(0) !important;
  visibility: unset !important;
}
</style>
