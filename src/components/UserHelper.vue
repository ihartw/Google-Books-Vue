<template>
  <div class="user-helper">
    <div class="tap-target-wrapper tap-target-wrapper-open" v-bind:class="{ open: isActive }">
      <div class="tap-target teal lighten-3" data-target="menu">
        <div class="tap-target-content white-text tap-target-content-open">
          <h5>What is this?</h5>
          <p class="white-text">It's a simple web app built with the Google Books API and Vue.js. Search by an Authors name or book title and browse the catalog.</p>
        </div>
      </div>
      <div class="tap-target-wave tap-target-wave-open">
        <a class="btn btn-floating btn-large red lighten-3 tap-target-origin" @click="isActive = !isActive">
          <i class="material-icons">close</i>
        </a>
      </div>
    </div>
    <div class="fixed-action-btn direction-top active tap-target-fixed-btn">
      <a id="menu" class="btn btn-floating btn-large pulse teal lighten-3" @click="isActive = !isActive">
        <i class="material-icons">live_help</i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserHelper',
    data() {
      return {
        isActive: false
      }
    }
  }
</script>

<style>
  .tap-target-wrapper-open {
    right: -348px;
    bottom: -327px;
    position: fixed;
  }

  .tap-target-content-open {
    width: 456px;
    height: 400px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    padding: 56px;
    vertical-align: bottom;
  }

  .tap-target-wave-open {
    top: 344px;
    left: 344px;
    width: 112px;
    height: 112px;
  }

  .tap-target-fixed-btn {
    bottom: 45px;
    right: 24px;
  }

  @media(max-width: 767px) {
    .tap-target-wrapper-open {
      right: -88px;
      bottom: -7px;
      position: fixed;
    }

    .tap-target-wrapper {
      width: 400px;
      height: 400px;
    }

    .tap-target-wave-open {
      top: 310px;
      left: 230px;
      width: 75px;
      height: 75px;
    }

    .tap-target-fixed-btn {
      bottom: 15px;
      right: 15px;
    }

    #app>div.user-helper>div.tap-target-wrapper.tap-target-wrapper-open.open>div.tap-target.teal.lighten-2>div {
      width: 280px;
      top: -60px;
      left: 55px;
    }
  }
</style>
