<template>
  <div>
    <div class="top--text">
      <div class="text">
        About us
      </div>
      <button>
        <img src="../../assets/3btn.png" alt="">
      </button>
    </div>
    <div class="img--text">
      <img src="../../assets/img.png" alt="">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat arcu vitae elit efficitur cursus. Sed dapibus id neque non tristique. Etiam mattis nisl at est mattis sagittis. Sed aliquet ex est, gravida aliquet nisi tempus eu. Vestibulum et pretium dolor. Aenean venenatis venenatis urna, vel ultricies mi vulputate nec. Aenean aliquam eget ipsum ut placerat. Vestibulum id leo egestas, convallis velit non, vestibulum lectus. Nullam ac lacinia metus, sed interdum magna.
      </div>
    </div>
    <div class="teacher">
      Teachers
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
}
@media (max-width: 1000px) {
  .img--text{
    align-items: unset !important;
    img{
      height: 100%;
    }
  }
}
@media (max-width: 560px) {
  .img--text{
    display: block !important;
    img{
      width: 100% !important;
    }
    .text{
      width: 100% !important;
      text-align: center;
    }
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
  .img--text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    img{
      width: 48%;
    }
    .text{
      font-size: 18px;
      line-height: 32px;
      color: black;
      width: 48%;
      //margin-left: 40px;
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