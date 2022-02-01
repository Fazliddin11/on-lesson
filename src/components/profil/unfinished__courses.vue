<template>
  <div>
    <div class="top--text">
      <div class="text">
        Profile
      </div>
      <button>
        <img src="../../assets/3btn.png" alt="">
      </button>
    </div>
    <div class="fields">
      <div class="left">
        <img src="../../assets/userP.png" alt="">
      </div>
      <div class="right">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Phone number">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Password">
        <button>Save changes</button>
      </div>
    </div>
    <div class="teacher">
      My courses
    </div>
    <div class="cards">
      <div class="card">
        <div class="top">
          <div class="user">
            <div class="user--img">
              <img src="../../assets/user1.png" alt="">
            </div>
            <div class="user--name">
              <div class="top">
                Dianne Edwards
              </div>
              <div class="bottom">
                @dianneed
              </div>
            </div>
          </div>
          <div class="time">
            82 min
          </div>
        </div>
        <div class="video">
          <img src="../../assets/video.png" alt="">
        </div>
        <div class="information">
          Learning how to create simple Swift applications in 8 lessons
        </div>
      </div>
      <div class="card">
        <div class="top">
          <div class="user">
            <div class="user--img">
              <img src="../../assets/user1.png" alt="">
            </div>
            <div class="user--name">
              <div class="top">
                Dianne Edwards
              </div>
              <div class="bottom">
                @dianneed
              </div>
            </div>
          </div>
          <div class="time">
            82 min
          </div>
        </div>
        <div class="video">
          <img src="../../assets/video.png" alt="">
        </div>
        <div class="information">
          Learning how to create simple Swift applications in 8 lessons
        </div>
      </div>
      <div class="card">
        <div class="top">
          <div class="user">
            <div class="user--img">
              <img src="../../assets/user1.png" alt="">
            </div>
            <div class="user--name">
              <div class="top">
                Dianne Edwards
              </div>
              <div class="bottom">
                @dianneed
              </div>
            </div>
          </div>
          <div class="time">
            82 min
          </div>
        </div>
        <div class="video">
          <img src="../../assets/video.png" alt="">
        </div>
        <div class="information">
          Learning how to create simple Swift applications in 8 lessons
        </div>
      </div>
      <div class="card">
        <div class="top">
          <div class="user">
            <div class="user--img">
              <img src="../../assets/user1.png" alt="">
            </div>
            <div class="user--name">
              <div class="top">
                Dianne Edwards
              </div>
              <div class="bottom">
                @dianneed
              </div>
            </div>
          </div>
          <div class="time">
            82 min
          </div>
        </div>
        <div class="video">
          <img src="../../assets/video.png" alt="">
        </div>
        <div class="information">
          Learning how to create simple Swift applications in 8 lessons
        </div>
      </div>
    </div>
  </div>
</template>
<!--<script>-->
<!--export default {-->
<!--  data -->
<!--}-->
<!--</script>-->
<style scoped lang="scss">
@media (max-width: 1280px) {
  .video{
    margin-top: 40px !important;
    margin-bottom: 50px !important;
  }
  .information{
    font-size: 14px !important;
    line-height: 24px !important;
  }
}
@media (max-width: 1250px) {
  .cards{
    display: block !important;
  }
  .fields{
    display: block !important;
  }
  .left{
    display: none;
  }
  .right{
    width: auto !important;
  }
  .fields .right button{
    bottom: -45px !important;
  }
}
  .top--text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 64px;
    margin-bottom: 46px;
    .text{
      font-size: 28px;
      line-height: 42px;
      color: var(--black);
    }
  }
  .fields{
    display: flex;
    justify-content: space-between;
    .left{
      width: 48%;
      img{
        width: 100%;
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      width: 48%;
      position: relative;
      input{
        //width: 440px;
        height: 48px;
        background: white;
        margin-bottom: 24px;
        border-radius: 12px;
        padding-left: 24px;
        &::placeholder{
          font-size: 16px;
          line-height: 24px;
          color: var(--h--grey);
        }
      }
      button{
        //width: 440px;
        height: 48px;
        border-radius: 12px;
        background: var(--orange);
        font-size: 16px;
        line-height: 24px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        bottom: 0;
      }
    }
  }
  .teacher{
    font-size: 28px;
    line-height: 42px;
    color: var(--black);
    margin-top: 64px;
  }
  .cards{
    margin-top: 42px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card{
      flex-basis: 48%;
      //width: 623px;
      //height: 562px;
      background: var(--card);
      border-radius: 48px;
      padding: 26px;
      margin-bottom: 40px;
      position: relative;
      .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .user{
          display: flex;
          //align-items: center;
          .user--name{
            margin-left: 20px;
            .top{
              font-size: 18px;
              line-height: 27px;
              color: white;
            }
            .bottom{
              font-family: poppins-r;
              font-size: 14px;
              line-height: 21px;
              color: white;
            }
          }
        }
        .time{
          width: 68px;
          height: 37px;
          background: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 0;
          //font-family: poppins-sb;
          color: white;
        }
      }
      .video{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 76px;
        margin-bottom: 109px;
      }
      .information{
        background: var(--grey);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 24px;
        font-size: 18px;
        line-height: 27px;
        color: white;
        padding: 18px 35px;
        //position: absolute;
        bottom: 32px;
        margin: auto;
        left: 0;
        right: 0;
        width: 88%;
      }
    }
  }
</style>