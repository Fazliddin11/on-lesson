<template>
  <div class="all--search--menu">
    <div class="top--sec">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo1.png" alt="">
        </a>
      </div>
      <div class="input">
        <img src="../assets/search.png" alt="" @click="Simage">
        <input type="text" placeholder="Search..." :class="{'active' : search}">
        <div class="back" :class="{'active' : search}"></div>
      </div>
      <div class="sign--btn">
        <button>Sign In</button>
      </div>
      <div class="sign--btn--img">
        <button>
          <img src="../assets/user.png" alt="">
        </button>
      </div>
      <div class="language">
        <div class="default--lang" @click="language">
          {{lang}}
          <img src="../assets/bottom.png" alt="">
        </div>
        <div class="next--lang" :class="{'active' : isActive}">
          <div class="lang" @click="elang('En')">
            En
          </div>
          <div class="lang" @click="rlang('Ru')">
            Ru
          </div>
          <div class="lang" @click="ulang('Uz')">
            Uz
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isActive: false,
      lang: '',
      drawer: null,
      search: false
    }
  },
  methods:{
    language(){
      this.isActive = !this.isActive
    },
    elang(l){
      this.lang = l
      this.isActive = !this.isActive
    },
    rlang(l){
      this.lang = l
      this.isActive = !this.isActive
    },
    ulang(l){
      this.lang = l
      this.isActive = !this.isActive
    },
    Simage(){
      this.search = !this.search
    }
  },
  created() {
    if (this.lang == ''){
      this.lang = 'En'
    }
  },
}
</script>
<style lang="scss" scoped>
@media (max-width: 1600px) {
  .sign--btn{
    margin-left: 84px;
    margin-right: 30px;
  }
}
@media (max-width: 1000px) {
  .logo{
    margin-right: 24px;
  }
  .top--sec .language .next--lang.active{
    background: var(--blue);
    padding: 5px 15px;
    right: 0;
  }
}
@media (max-width: 680px) {
  input{
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 328px;
    height: 48px;
    background: #F6F6F5;
    border-radius: 12px;
    top: -1000px;
    z-index: 1;
    transition: all ease .5s;
    &.active{
      top: 106px;
      transition: all ease .5s;
    }
  }
  .back{
    width: 100%;
    height: 140px;
    background: var(--blue);
    position: absolute;
    left: 0;
    right: 0;
    top: 958px;
    transition: all ease .5s;
    &.active{
      top: 64px;
      transition: all ease .5s;
    }
  }
}
@media (max-width: 560px) {
  .sign--btn{
    display: none !important;
  }
  .sign--btn--img{
    display: block !important;
  }
}
@media (max-width: 450px) {
  .logo{
    margin-right: unset !important;
  }
  .top--sec .input img{
    padding-left: unset !important;
  }
}
.sign--btn--img{
  display: none;
}
.all--search--menu{
  width: 100%;
}
  .top--sec{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      img{
        margin-top: 5px;
      }
    }
    .input{
      display: flex;
      align-items: center;
      //width: 832px;
      height: 60px;
      border-radius: 12px;
      //background: white;
      img{
        padding-left: 24px;
        filter: invert(100%);
      }
      input{
        padding-left: 24px;
        border: 0;
        font-size: 16px;
        line-height: 24px;
        color: var(--h--grey);
        &::placeholder{
          color: var(--h--grey);
        }
      }
    }
    .sign--btn{
      button{
        width: 100px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--orange);
        border-radius: 12px;
        color: white;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .language{
      font-size: 18px;
      line-height: 27px;
      color: white;
      position: relative;
      .default--lang{
        display: flex;
        align-items: center;
        cursor: pointer;
        img{
          margin-left: 4px;
          filter: invert(100%);
        }
      }
      .next--lang{
        position: absolute;
        height: 0;
        overflow: hidden;
        .lang{
          cursor: pointer;
          margin-top: 5px;
        }
        &.active{
          height: auto;
        }
      }
    }
  }
</style>