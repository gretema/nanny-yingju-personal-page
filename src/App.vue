<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
    <!-- Gotop button -->
    <button class="gotop-btn" id="gotopBtn" @click="gotop">
      <i class="fas fa-arrow-up gotop-arrow"></i>
    </button>
  </div>
</template>

<script>
import $ from 'jquery';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  methods: {
    gotop() {
      $('html, body').animate({ scrollTop: 0 }, 1500);
    },
  },
  created() {
    // 偵測頁面往下滑超過 400px 就讓 Gotop 按鈕出現
    function showBtnCondition() {
      if ($(this).scrollTop() > 400) {
        $('#gotopBtn').fadeIn();
      } else {
        $('#gotopBtn').fadeOut();
      }
    }
    $(window).scroll(showBtnCondition);
  },
  metaInfo: {
    title: '保母乾媽的育花園 | 台中市最佳的托育選擇',
    meta: [
      {
        name: 'keywords',
        content: '張瑛如, 台中市, 保母, 西屯, 南屯, 西區, 台中市保母, 台中西區保母, 台中西屯保母, 台中市南屯保母, 日托, 假日臨托',
      },
      {
        property: 'description',
        content: '張瑛如從事托育工作二十年來，秉持著創新托育的精神，以開闊的視野提供不同於傳統刻板印象的居家托育服務。',
      },
      {
        property: 'og:title',
        content: '保母乾媽的育花園 | 台中市最佳的托育選擇',
      },
      {
        property: 'og:description',
        content: '張瑛如從事托育工作二十年來，秉持著創新托育的精神，以開闊的視野提供不同於傳統刻板印象的居家托育服務。',
      },
      {
        property: 'og:locale',
        content: 'zh_tw',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: 'https://upload.cc/i1/2020/03/16/oxg0zM.jpg',
      },
    ],
  },
};
</script>

<style lang="scss">
@import "./assets/scss/all";
</style>
