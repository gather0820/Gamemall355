<template>
  <div class="MallIndex">
    <el-carousel class="banner-container" :interval="4000" height="500px">
      <el-carousel-item v-for="item in bannnerData" :key="item">
        <el-image
          style="height:100%;width:100%"
          :fit="'cover'"
          :src="item"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="container-wrapper-public">
      <section class="newGoods section">
        <SectionHeader
          :title="$t('index.The-new-start')"
          :tips="$t('index.The-new-start-info')"
          :moreText="$t('index.The-new-start-more') + '>'"
        />
        <Slick
          :ulWidth="266 * goodsList.length + 10 * (goodsList.length - 1)"
          :showWidth="266 * 4 + 10 * 3"
          :height="360"
        >
          <ul
            class="goodsList"
            :style="{
              width: `${266 * goodsList.length + 10 * (goodsList.length - 1)}px`
            }"
            slot="list"
          >
            <GoodsItem
              v-for="(item, index) in goodsList"
              :style="{ marginRight: (index + 1) % 4 === 0 ? '0px' : '20px' }"
              :key="+item.id"
              :id="item.id"
              :img="item.img"
              :name="item.name"
              :price="item.price"
            />
          </ul>
        </Slick>
      </section>

      <section
        class="typeSection section"
        v-for="(item, index) in typeList.slice(1)"
        :key="item.id"
        v-if="filterGoodsByType(item.id).length"
      >
        <SectionHeader
          :title="item.name"
          tips=""
          moreText="To view more>"
          @click.native="selectType(item.id)"
        />
        <ul class="content">
          <GoodsItem
            v-for="(item, index) in filterGoodsByType(item.id).slice(0, 4)"
            :style="{ marginRight: (index + 1) % 4 === 0 ? '0px' : '25px' }"
            :key="+item.id"
            :id="item.id"
            :img="item.img"
            :name="item.name"
            :price="item.price"
          />
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { getTypes, getGoodsList } from "../../api/client";
import SectionHeader from "../../components/SectionHeader";
import GoodsItem from "../../components/GoodsItem";
import Slick from "../../components/Slick";

import { getClientSize, getScrollWidth } from "@/utils";

export default {
  name: "MallIndex",
  components: {
    SectionHeader,
    GoodsItem,
    Slick
  },
  computed: {},
  data() {
    return {
      typeList: [],
      goodsList: [],
      initTimestamp: 0,
      newTimestamp: 0,
      timer: null,
      h: 0,
      m: 0,
      s: 0,
      bannnerData: [
        "https://images.gog.com/78485317312e881a175c686eaab8a988202b208942623acba641f35384f8dc12_product_card_v2_mobile_slider_639.jpg",
        "https://steamcdn-a.akamaihd.net/steam/apps/606880/header.jpg?t=1575302145",
        "https://steamcdn-a.akamaihd.net/steam/apps/382900/header.jpg?t=1549381929",
        "https://images-1.gog.com/6e36da960c022ae1fe984b4617a326a46d9567afba0b5e0f6046b0cc6c6991a2_bs_logo_big_2x.webp",
        "https://www.hellblade.com/wp-content/uploads/2018/03/hbcom_buy_link.jpg"
      ]
    };
  },

  methods: {
    filterGoodsByType(typeid) {
      return this.goodsList.filter(item => {
        return item.typeId === typeid;
      });
    },
    navTo(route) {
      this.$router.push(route);
    },
    selectType(typeId) {
      if (typeId == -1) {
        return;
      }
      this.navTo("/mall/show/goodsList/" + typeId + "/all");
    },
    getGoodsList(typeId) {
      const res = getGoodsList(typeId);
      res
        .then(data => {
          this.goodsList = data;
        })
        .catch(e => {
          this.$message.error(e);
        });
    },
    searchTip(tip) {
      this.$message.info(tip);
    },
    inputTextChange(text) {},
    scrollHandle() {
      const top = this.$refs.typeList.getBoundingClientRect().top;
      //还未到顶
      if (top > 0) {
        this.navShouldFixed = false;
      }
      //已经到顶
      else {
        this.navShouldFixed = true;
      }
    }
  },

  mounted() {
    //获取数据
    const res = getTypes();
    res
      .then(data => {
        data.unshift({
          id: -1,
          name: "Home"
        });
        this.typeList = data;
        this.getGoodsList(-1);
      })
      .catch(e => {
        this.$message.error(e);
      });

    //记录打开网页再加四小时的时间
    this.initTimestamp = new Date().getTime() + 4 * 60 * 60 * 1000;
    this.timer = setInterval(() => {
      this.newTimestamp = new Date().getTime();
      let diff = parseInt((this.initTimestamp - this.newTimestamp) / 1000);
      diff = ((diff % (86400 * 365)) % (86400 * 30)) % 86400;
      this.h = new String(Math.floor(diff / 3600)).padStart(2, "0");
      diff = diff % 3600;
      this.m = new String(Math.floor(diff / 60)).padStart(2, "0");
      diff = diff % 60;
      this.s = new String(diff).padStart(2, "0");
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/var.less";
.MallIndex {
  width: 100%;
  .swiperBox {
    position: absolute;
    left: 0;
    top: 230px;
    margin-top: 20px;
    display: block;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    .banner {
      transform: scale(1.2, 1);
    }
  }
  .section {
    padding: 30px;
    overflow: hidden;
    .Slick {
      position: relative;
      left: -30px;
    }
  }
  .newGoods {
  }
  .flashSale {
    .content {
      border: 1px solid @borderColor;
      height: 376px;
      position: relative;
      .left {
        vertical-align: top;
        display: inline-block;
        width: 20%;
        height: 100%;
        position: relative;
        background-image: url(//yanxuan.nosdn.127.net/c9aeb62a3f79123d793d8c49b6698b09.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
        text-align: center;
        color: #615548;
        cursor: pointer;
        .title {
          font-size: 26px;
          font-weight: 500;
          margin-top: 60px;
        }
        hr {
          width: 20px;
          height: 2px;
          background-color: #615548;
          border: none;
          margin-top: 20px;
        }
        .tips {
          font-size: 18px;
          margin-top: 20px;
        }
        .countBox {
          margin-top: 20px;
          .time {
            width: 42px;
            height: 42px;
            line-height: 42px;
            font-size: 19px;
            display: inline-block;
            color: white;
            background-color: #615548;
          }
        }
        .allBtn {
          width: 110px;
          height: 33px;
          line-height: 33px;
          font-size: 13px;
          background-color: #a7936e;
          color: white;
          border-radius: 20px;
          margin: 50px auto;
        }
      }
      .right {
        vertical-align: top;
        display: inline-block;
        width: 80%;
        height: 100%;
        position: relative;
        overflow: hidden;
        li {
          display: inline-block;
          width: 50%;
          height: 50%;
          overflow: hidden;
          .leftImg {
            width: 180px;
            height: 100%;
            display: inline-block;
          }
          .rightBox {
            display: inline-block;
            width: 240px;
            height: 100%;
            overflow: hidden;
            padding: 15px;
            .goodsName {
              font-size: 15px;
              cursor: pointer;
              margin-top: 16px;
              &:hover {
                color: @thirdColor;
              }
            }
            .less {
              margin-top: 16px;
              .lessBar {
                display: inline-block;
                width: 150px;
                height: 10px;
                background-color: #ffe5e5;
                border: 1px solid #f2cecd;
                border-radius: 10px;
              }
              .lessNum {
                color: @fontDefaultColor;
                font-size: 13px;
              }
            }
            .price {
              margin-top: 16px;
              .nowPrice {
                color: @falseColor;
                font-size: 20px;
              }
              .beforePrice {
                color: @fontDefaultColor;
                text-decoration: line-through;
                margin-left: 10px;
                font-size: 14px;
              }
            }
            .buyBtn {
              margin-top: 30px;
              width: 120px;
              height: 30px;
              color: white;
              background-color: @falseColor;
              text-align: center;
              line-height: 30px;
              cursor: pointer;
            }
          }
          &:nth-of-type(1) {
            border-bottom: 1px solid @borderColor;
            border-right: 1px solid @borderColor;
          }
          &:nth-of-type(2) {
            border-bottom: 1px solid @borderColor;
          }
          &:nth-of-type(3) {
            border-right: 1px solid @borderColor;
          }
        }
      }
    }
  }
  .maker {
    .content {
      .left,
      .center,
      .right {
        display: inline-block;
        height: 320px;
        width: 32%;
      }
      .left,
      .center {
        margin-right: 7px;
        .makerInfo {
          p {
            text-align: center;
          }
          hr {
            width: 60px;
          }
          .large {
            margin-top: 50px;
            margin-bottom: 10px;
            font-size: 26px;
          }
          .small {
            margin-top: 10px;
            font-size: 14px;
          }
        }
      }
      .right {
      }
    }
  }
  .hotGoods {
    background-color: rgb(244, 240, 234);
    height: 654px;
    .left {
      width: 394px;
      display: inline-block;
      vertical-align: top;
      .GoodsItem {
        width: 100%;
        height: 532px;
        background-color: white;
      }
      .GoodsItem /deep/ .imgBox {
        height: 380px;
      }
      .GoodsItem /deep/ .goodsInfo {
        height: auto;
      }
      .GoodsItem /deep/ .goodsName {
        font-size: 30px;
        line-height: 60px;
      }
    }
    .right {
      display: inline-block;
      vertical-align: top;
      width: 740px;
      height: 100%;
      .GoodsItem {
        width: 230px;
        height: 260px;
        background-color: white;
        margin-left: 10px;
        overflow: hidden;
      }
      .GoodsItem /deep/ .imgBox {
        height: 180px;
      }
    }
  }
}
</style>
