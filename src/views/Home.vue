<template>
  <div class="home">
    <HomeHeader/>
    <WorriesSection class="wow slideInUp" />
    <HomeProfile/>
    <ThreePoints/>
    <Comments/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/HomeHeader.vue';
import HomeProfile from '@/components/HomeProfile.vue';
import WorriesSection from '@/components/Worries.vue';
import ThreePoints from '@/components/ThreePoints.vue';
import Comments from '@/components/HomeComments.vue';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeProfile,
    WorriesSection,
    ThreePoints,
    Comments,
  },
  data() {
    return {
    };
  },
};
</script>
