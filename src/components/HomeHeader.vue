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
          <div class="carousel-item carousel-item-height bg-cover wh-100 active"
            :style="{
              backgroundImage: `url(${require('../assets/images/baby-and-materials.jpg')})`}">
            <div class="carousel-caption px-2 rounded">
              <h3 class="carousel-item-text font-weight-bold">不同於傳統的居家托育服務</h3>
            </div>
          </div>
          <div class="carousel-item carousel-item-height bg-cover wh-100"
            :style="{
              backgroundImage: `url(${require('../assets/images/lying-laughing-baby.jpg')})`}">
            <div class="carousel-caption px-2 rounded">
              <h3 class="carousel-item-text font-weight-bold">以多元的方式帶領孩子探索世界</h3>
            </div>
          </div>
          <div class="carousel-item carousel-item-height bg-cover wh-100"
            :style="{
              backgroundImage: `url(${require('../assets/images/baby-grab-finger.jpg')})`}">
            <div class="carousel-caption px-2 rounded">
              <h3 class="carousel-item-text font-weight-bold">建立照顧者與孩子之間的羈絆</h3>
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
