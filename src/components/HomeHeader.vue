<template>
  <div>
    <!--輪播-->
    <header>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <!--輪播圖片區-->
          <div class="carousel-item carousel-item-height bg-cover active"
            :style="{
              backgroundImage: `url(${require('../assets/images/baby-and-materials.jpg')})`}">
            <div class="carousel-caption px-2">
              <h3>一個人，田野間的輕鬆美味</h3>
              <p>城小中假上問，洲元化究變快歡專，臺正機上色從多空放我。
                來來中的來落行間我海府子成隨上事女，的石在朋經以定空他；級病期他，會性前集一於得當院應對分！意斯能己水成神錢。</p>
            </div>
          </div>
          <div class="carousel-item carousel-item-height bg-cover"
            :style="{
              backgroundImage: `url(${require('../assets/images/lying-laughing-baby.jpg')})`}">
            <div class="carousel-caption px-2">
              <h3>大口的放縱，毫無保留</h3>
              <p>組道心深的起一強理重麼變喜才她起寶事運果引物；
                生一越。為己的治應的了：有的兩懷華場前間不不存力：性張得燈表年健交公言要認才部黨岸家深此一和國專女特希這密年那報。</p>
            </div>
          </div>
          <div class="carousel-item carousel-item-height bg-cover"
            :style="{
              backgroundImage: `url(${require('../assets/images/baby-grab-finger.jpg')})`}">
            <div class="carousel-caption px-2">
              <h3>愛戀的赤裸裸辣辣</h3>
              <p>件臺水則的看方府機英下英影加非！為走改幾少我住準愛地下。
                巴開上人在，但雜處權音生什有會能教！還話弟手大了。</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
};
</script>
