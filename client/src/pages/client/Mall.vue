<template>
  <div class="Mall">
    <header>
      <div class="container clear">
        <span class="title" @click="navTo('/mall')"
          >{{ $t("system.title") }}——{{ $t("system.info") }}
        </span>

        <div class="right">
          <div class="searchBox">
            <el-input
              placeholder="Product keyword"
              v-model="searchText"
              class="search-item"
            >
              <el-button
                slot="append"
                icon="el-icon-search"
                type="warning"
                @click="searchConfirm"
              ></el-button>
            </el-input>
          </div>
          <template v-if="clientToken">
            
            <span @click="navTo('/mall/personal')">{{
              $t("system.Mine")
            }}</span>
            <span @click="logout">{{ $t("system.log-out") }}</span>
          </template>
          <template v-else>
            <div class="system">
              <span @click="navTo('/login')">{{ $t("system.login") }}</span>
              <span @click="navTo('/login')">{{ $t("system.register") }}</span>
            </div>
          </template>
        </div>
      </div>
    </header>
    <div class="content" :style="{ minHeight: clientHeight + 'px' }">
      <div class="container">
        <router-view></router-view>
      </div>
      <div class="fixedAd">
        <ul class="fixedList">
          <li @click="backToTop" v-show="shouldShowBT">
            <i class="iconfont icon-arrows-4-7" />
            <span>Top</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { getClientSize, backToTop } from "../../util/util";

import NoticeList from "../../components/NoticeList";
import TipsInput from "../../components/TipsInput";

export default {
  name: "Mall",
  computed: {
    ...mapGetters(["clientToken", "clientName"])
  },
  components: {
    NoticeList,
    TipsInput
  },
  sockets: {
    messageOrder: function({ type = "info", msg = "A new reminder" } = {}) {
      this.$notify[type]({
        title: "Order update reminder",
        duration: 0,
        message: msg
      });
    }
  },
  data() {
    return {
      notices: [
        "今日疯抢：任天堂Switch仅229元！直减2...",
        "【福利】领1000元APP新人礼"
      ],
      clientHeight: getClientSize().height,
      shouldShowBT: false,
      searchText: "",
      tips: ["aa", "bb", "cc"]
    };
  },

  methods: {
    ...mapMutations({
      clientLogout: "CLIENT_LOGOUT"
    }),
    searchTip(tip) {
      this.$message.warning(tip);
    },
    searchConfirm() {
      if (this.searchText.trim().length <= 0) {
        this.$message.warning("Input cannot be empty!");
        return;
      }
      this.navTo(`/mall/show/goodsList/0/${this.searchText}`);
    },
    navTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.clientLogout();
      this.$router.go(0);
    },
    backToTop() {
      backToTop();
    },
    watchScrollTop() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 150) {
        this.shouldShowBT = true;
      } else {
        this.shouldShowBT = false;
      }
    }
  },

  mounted() {
    document.addEventListener("scroll", this.watchScrollTop, false);
  },

  watch: {
    searchText(newVal, oldVal) {
      this.searchTextChange(newVal);
    }
  },

  beforeDestroyed() {
    document.removeEventListener("scroll", this.watchScrollTop, false);
  }
};
</script>

<style scoped lang="less">
@import "~@/assets/css/var.less";
.Mall {
  width: 100%;
  .bg {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url("~@/assets/img/bg.jpg") center;
    z-index: -1;
  }
  header {
    width: 100%;
    min-width: 1200px;
    background-color: #191919;
    height: 38px;
    color: @fontShallowColor;
    user-select: none;
    z-index: 9;
    position: absolute;
    left: 0;
    top: 0;
    .container {
      position: relative;
      height: 38px;
      max-width: 1200px;
      margin: 0 auto;
      .title {
        position: absolute;
        left: 0;
        display: inline-block;
        height: 26px;
        top: 50%;
        margin-top: -13px;
        line-height: 26px;
        font-size: 14px;
        cursor: pointer;
      }
      .NoticeListBox {
        position: absolute;
        left: 200px;
      }
      .right {
        position: absolute;
        right: 0;
        height: 26px;
        line-height: 26px;
        top: 4px;
        font-size: 14px;
        span {
          margin-left: 20px;
          cursor: pointer;
        }
        .name {
          cursor: default;
        }
        .system,
        .searchBox {
          display: inline-block;
        }
        .search-item {
          border-radius: 30px;
          overflow: hidden;
        }
      }
    }
  }
  .content {
    padding-top: 40px;
  }
  .fixedAd {
    position: fixed;
    right: 0;
    top: 108px;
    width: 52px;
    .fixedList {
      margin-top: 2px;
      background-color: #ffffff52;
      width: 100%;
      li {
        width: 100%;
        height: 80px;
        text-align: center;
        border-bottom: 1px solid @borderColor;
        cursor: pointer;
        padding-top: 12px;
        i {
          display: block;
          font-size: 24px;
          color: #666666;
        }
        span {
          display: block;
          font-size: 12px;
          color: #666666;
          margin-top: 4px;
        }
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          i {
            color: @thirdColor;
          }
          span {
            color: @thirdColor;
          }
        }
      }
    }
  }
  .bottomInfo {
    width: 100%;
    height: 300px;
    border-top: 1px solid @borderColor;
    overflow: hidden;
    margin-top: 80px;
    .footerItem {
      width: 33%;
      height: 210px;
      position: relative;
      top: 45px;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      color: @fontDefaultColor;
      .title {
        color: @fontDeepColor;
        margin-bottom: 30px;
      }
    }
    .service {
      border-right: 1px solid @borderColor;
      span {
        display: inline-block;
        width: 80px;
        height: 100px;
        border: 1px solid @borderColor;
        text-align: center;
        margin: 0 10px;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          color: @thirdColor;
        }
        i {
          display: block;
          font-size: 30px;
          margin-top: 20px;
          margin-bottom: 10px;
        }
      }
    }
    .intro {
      border-right: 1px solid @borderColor;
      .intro-p {
        font-size: 13px;
        width: 300px;
        margin: 0 auto;
        text-align: left;
        color: @fontDeepColor;
        line-height: 1.8em;
      }
      div {
        text-align: left;
        font-size: 14px;
        margin-left: 47px;
        margin-top: 20px;
        img {
          margin: 0 6px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .code {
      img {
        display: block;
        margin: 0 auto;
      }
      span {
        font-size: 12px;
        color: @thirdColor;
        margin-top: 10px;
        display: block;
      }
    }
  }
  footer {
    margin-top: 50px;
    width: 100%;
    height: 208px;
    background-color: #191919;
    color: white;
    overflow: hidden;
    .footerTop {
      padding: 36px 0;
      border-bottom: 1px solid #4f4f4f;
      width: 100%;
      li {
        display: inline-block;
        width: 33%;
        text-align: center;
        img {
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
          font-size: 18px;
          margin-left: 10px;
        }
      }
    }
    .footerBottom {
      color: @fontDefaultColor;
      margin-top: 30px;
      font-size: 13px;
      text-align: center;
      ul {
        li {
          display: inline-block;
          cursor: pointer;
          padding: 0 6px;
          border-right: 2px solid @fontDefaultColor;
          &:last-child {
            border-right: none;
          }
        }
      }
      p {
        margin-top: 5px;
        padding: 5px;
      }
    }
  }
}
</style>
