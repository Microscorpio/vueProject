<template>
  <div>
    <img src="./assets/logo.png">
    <router-link to="/goods">goods</router-link>
    <router-link to="/ratings">ratings</router-link>
    <router-link to="/seller">seller</router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
