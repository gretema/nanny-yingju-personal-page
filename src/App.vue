<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">保母乾媽的育花園</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" to="/">
            首頁
          </router-link>
          <router-link class="nav-item nav-link" to="/about">關於</router-link>
          <router-link class="nav-item nav-link" to="/feature">特色</router-link>
          <router-link class="nav-item nav-link" to="/faq">常見問題</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/all";
</style>
