<template>
  <div>
    <div class="top--text">
      <div class="text">
        Contacts
      </div>
      <button>
        <img src="../../assets/3btn.png" alt="">
      </button>
    </div>
    <div class="fields">
      <div class="left">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Phone number">
        <input type="text" placeholder="Email">
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Send</button>
      </div>
      <div class="right">
        <iframe data-v-5c7c611a="" name="search_iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23997.070476067387!2d69.336211!3d41.2515339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f9d7f0e52ef%3A0xdb005ae8d5bd436c!2sBaza%20Bearings!5e0!3m2!1sru!2s!4v1615621859538!5m2!1sru!2s" width="600" height="450" allowfullscreen="allowfullscreen" loading="lazy" style="border: 0px;"></iframe>
        <div class="address">
          <img src="../../assets/loc.png" alt="">
          Адрес, Массив Буюк Ипак Йули, 38 Ташкент
        </div>
        <div class="email--num">
          <div class="email">
            <img src="../../assets/email.png" alt="">
            email@mail.com
          </div>
          <div class="num">
            <img src="../../assets/num.png" alt="">
            +998 88 599 77 77
          </div>
        </div>
      </div>
    </div>
    <div class="teacher">
      Tugallanmagan kurslaringiz
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
@media (max-width: 1000px) {
  .fields{
    display: block !important;
    .left{
      width: 100% !important;
    }
    .right{
      width: 100% !important;
    }
  }
}
@media (max-width: 440px) {
  .fields .right .email--num{
    display: block !important;
    .email{
      width: 100% !important;
    }
    .num{
      width: 100% !important;
    }
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
      display: flex;
      flex-direction: column;
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
      textarea{
        //width: 440px;
        height: 202px;
        background: white;
        border-radius: 12px;
        padding: 24px;
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
        margin-top: 24px;
      }
    }
    .right{
      width: 48%;
      iframe{
        width: 100%;
        //width: 440px;
        height: 332px;
        border-radius: 12px;
      }
      .address{
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
        margin-top: 26px;
        img{
          margin-right: 8px;
        }
      }
      .email--num{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .num,
        .email{
          //width: 208px;
          width: 48%;
          height: 48px;
          border-radius: 12px;
          background: var(--orange);
          font-size: 16px;
          line-height: 24px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 29px;
          img{
            margin-right: 8px;
          }
        }
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