<template>
  <div>
    <div class="logo">
      <a href="/">
        <img src="../assets/logo.png" alt="">
      </a>
    </div>
    <div class="all--menu">
      <ul>
        <li>
          <router-link
              to="/profil"
              class="profil"
          >
            <span>K</span>
            <div class="text">
              Komron
            </div>
          </router-link>
        </li>
        <li v-if="isActive" @click="subject">
          <router-link
          to="/subject"
          >
            <span class="top--span"></span>
            <img src="../assets/subject.png" alt="">
            <div class="text">Subjects</div>
            <span class="bottom--span"></span>
          </router-link>
        </li>
        <li v-if="isActive">
          <router-link
              to="/about"
          >
            <span class="top--span"></span>
            <img src="../assets/about.png" alt="">
            <div class="text">About us</div>
            <span class="bottom--span"></span>
          </router-link>
        </li>
        <li v-if="isActive">
          <router-link
              to="/contact"
          >
            <span class="top--span"></span>
            <img src="../assets/coll.png" alt="">
            <div class="text">Contacts</div>
            <span class="bottom--span"></span>
          </router-link>
        </li>
        <li v-if="Active">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Mathematics
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Section 1
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 2
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 3
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 4
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 5
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 6
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </li>
        <li v-if="Active">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Chemistry
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Section 1
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 2
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 3
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 4
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 5
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 6
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </li>
        <li v-if="Active">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Biology
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Section 1
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 2
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 3
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 4
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 5
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 6
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </li>
        <li v-if="Active">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                English
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Section 1
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 2
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 3
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 4
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 5
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 6
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </li>
        <li v-if="Active">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Physics
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Section 1
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 2
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 3
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 4
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 5
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 6
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </li>
        <li v-if="Active">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Literature
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                Section 1
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 2
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 3
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 4
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 5
              </v-expansion-panel-content>
              <v-expansion-panel-content>
                Section 6
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </li>
      </ul>
    </div>
    <div class="help--menu">
      <div class="img--info">
        <img src="../assets/helpImg.png" alt="">
        <div class="help--info">
          <div class="help--text">
            Yordam 24/7
          </div>
          <div class="help--number">
            +998 88 599 77 77
          </div>
          <div class="help--btn">
            <button>Boshlash</button>
          </div>
        </div>
      </div>
    </div>
    <div class="create--site">
      <a href="https://radium.uz">
        <img src="../assets/create.png" alt="">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isActive: true,
      Active: false,
      helpmenu: false
    }
  },
  methods:{
    subject(){
      this.isActive = false
      this.Active = true
    }
  }
}
</script>
<style scoped lang="scss">
@media (max-width: 1000px) {
  .logo{
    display: none !important;
  }
  .all--menu{
    margin-top: 104px;
  }
  .all--menu{
    ul{
      li{
        a{
          &.router-link-exact-active{
            background: white !important;
            span.top--span{
              display: none !important;
            }
            span.bottom--span{
              display: none !important;
            }
            &::before{
              display: none !important;
            }
            &::after{
              display: none !important;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 560px) {
  .help--menu{
    display: none !important;
  }
  .create--site{
    display: none !important;
  }
  .all--menu ul li a.router-link-exact-active{
    background: unset !important;
  }
  .all--menu ul li:first-child .text{
    color: #FFFFFF !important;
  }
  .all--menu ul li:first-child span{
    background: #FFFFFF !important;
    color: var(--blue) !important;
  }
  .all--menu ul li a .text{
    color: #FFFFFF !important;
  }
  .all--menu ul li a img{
    filter: invert(100%);
  }
  .theme--light.v-expansion-panels .v-expansion-panel{
    background: unset !important;
  }
  .v-application--is-ltr .v-expansion-panel-header{
    color: #FFFFFF !important;
  }
  .v-icon.v-icon{
    filter: invert(100%);
  }
}

.v-expansion-panel::before{
  display: none;
}
  .logo {
    margin-left: 60px;
    margin-bottom: 60px;
    margin-top: 60px;
  }
  .all--menu{

    ul{
      padding: unset;
      li{
        list-style: none;
        a{
          text-decoration: none;
          display: flex;
          align-items: center;
          //margin-left: 60px;
          padding: 16.5px 0px;
          margin-left: 36px;
          padding-left: 24px;
          position: relative;
          &.router-link-exact-active{
            background: var(--grey);
            border-radius: 32px 0px 0px 32px;
            span.top--span{
              content: '';
              width: 40px;
              height: 40px;
              position: absolute;
              background: var(--grey);
              //border-radius: 0px 0px 50px 0px;
              top: -40px;
              right: 0;
            }
            span.bottom--span{
              content: '';
              width: 40px;
              height: 40px;
              position: absolute;
              background: var(--grey);
              //border-radius: 0px 50px 0px 0px;
              bottom: -40px;
              right: 0;
            }
            &::before{
              content: '';
              width: 40px;
              height: 40px;
              position: absolute;
              background: #ffffff;
              border-radius: 0px 0px 50px 0px;
              top: -40px;
              right: 0;
              z-index: 1;
            }
            &::after{
              content: '';
              width: 40px;
              height: 40px;
              position: absolute;
              background: #ffffff;
              border-radius: 0px 50px 0px 0px;
              bottom: -40px;
              right: 0;
            }
            &.profil{
              background: unset;
            }
          }
        }
        &:first-child{
          margin-bottom: 37px;
          span{
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--blue);
            border-radius: 18px;
            color: white;
            font-size: 18px;
            line-height: 27px;
            font-family: poppins-sb;
            margin-right: 24px;
          }
          .text{
            font-size: 24px;
            line-height: 36px;
            color: var(--black);
            font-family: poppins-m;
          }
        }
        a{
          img{
            margin-right: 22px;
          }
          .text{
            font-size: 18px;
            line-height: 27px;
            color: var(--black);
          }
        }
      }
    }
  }
  .help--menu{
    margin-left: 60px;
    margin-top: 90px;
    .img--info{
      position: relative;
      .help--info{
        position: absolute;
        top: 30px;
        left: 30px;
        .help--text{
          font-size: 18px;
          line-height: 27px;
          color: white;
          margin-bottom: 8px;
        }
        .help--number{
          font-size: 14px;
          line-height: 21px;
          color: white;
          opacity: .4;
          margin-bottom: 16px;
        }
        .help--btn{
          button{
            width: 85px;
            height: 35px;
            background: var(--orange);
            font-size: 12px;
            line-height: 18px;
            color: white;
            border-radius: 10px;
          }
        }
      }
    }
  }
  .create--site{
    margin-left: 60px;
    margin-top: 46px;
  }
</style>
