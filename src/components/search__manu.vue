<template>
  <div>
    <div class="top--sec">
      <div class="input">
        <img src="../assets/search.png" alt="">
        <input type="text" placeholder="Search...">
      </div>
      <div class="sign--btn">
        <button>Sign In</button>
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
      drawer: null
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
@media (max-width: 1440px) {

}
@media (max-width: 1000px) {
  .top--sec{
    display: none !important;
  }
  .top--sec .language .next--lang.active{
    background: var(--blue);
    padding: 5px 15px;
    right: 0;
  }
}
  .top--sec{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input{
      display: flex;
      align-items: center;
      width: 832px;
      height: 60px;
      border-radius: 12px;
      background: white;
      img{
        padding-left: 24px;
      }
      input{
        padding-left: 24px;
        border: 0;
        font-size: 16px;
        line-height: 24px;
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
      color: var(--black);
      position: relative;
      .default--lang{
        display: flex;
        align-items: center;
        cursor: pointer;
        img{
          margin-left: 4px;
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