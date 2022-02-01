<template>
  <div>
    <div class="help--menu">
      <div class="img--info">
        <img src="../assets/group.png" alt="">
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
        <img src="../assets/whitelogo.png" alt="">
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.help--menu{
  .img--info{
    position: relative;
    img{
      width: 100%;
    }
    .help--info{
      position: absolute;
      top: 30px;
      left: 30px;
      .help--text{
        font-size: 24px;
        line-height: 36px;
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
          width: 95px;
          height: 40px;
          background: var(--orange);
          font-size: 14px;
          line-height: 21px;
          color: white;
          border-radius: 10px;
        }
      }
    }
  }
}

.create--site{
  position: absolute;
  bottom: 24px;
  left: 16px;
}
</style>