<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <h1 class="font-weight-bold">
            <img src="../assets/images/growth.svg" width="32" alt="">
            保母乾媽的育花園
          </h1>
        </router-link>
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
          <div class="navbar-nav ml-auto">
            <router-link class="nav-item nav-link" to="/" exact>首頁</router-link>
            <router-link class="nav-item nav-link" to="/about">關於</router-link>
            <router-link class="nav-item nav-link" to="/feature">特色</router-link>
            <router-link class="nav-item nav-link" to="/faq">常見問題</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
