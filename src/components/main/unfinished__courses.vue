<template>
  <div>
    <div class="top--text">
      <div class="text">
        Tugallanmagan kurslaringiz
      </div>
      <button>
        <img src="../../assets/3btn.png" alt="">
      </button>
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
<style scoped lang="scss">
@media (max-width: 1440px) {
  .cards .card .video{
    margin-top: 57px !important;
    margin-bottom: 43px !important;
  }
}
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
    .text{
      font-size: 28px;
      line-height: 42px;
      color: var(--black);
    }
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
        background: rgba(255, 255, 255, 0.3);
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