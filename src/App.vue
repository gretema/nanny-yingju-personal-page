<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
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
