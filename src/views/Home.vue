<template>
  <div class="home">
    <HomeHeader/>
    <HomeProfile/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue';
import HomeProfile from '@/components/HomeProfile.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeProfile,
  },
  data() {
    return {
    };
  },
};
</script>
