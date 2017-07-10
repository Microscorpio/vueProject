<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab-list border-1px">
      <div class="tab-item">
        <router-link to="/goods">goods</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">ratings</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">seller</router-link>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import header from './components/header/header';

const ERR_OK = 0;
export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
      }
    });
  },
  components: {
    'v-header': header
  }
};
</script>

<style lang="scss">
@import "./common/sass/base.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.tab-list{
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  @include border-1px(rgba(7, 17, 27, 0.1));
  .tab-item{
    flex: 1;
    text-align: center;
    a{
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.active{
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
