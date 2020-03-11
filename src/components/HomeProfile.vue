<template>
  <div>
    <section class="bg-primary">
      <!--桌機版-->
      <div class="container py-3 d-none d-md-block">
        <div class="row d-flex align-items-center justify-content-around">
          <!--桌機版左側照片-->
          <div class="col-md-3 home-avatar wow slideInLeft"
            data-wow-duration="2s"></div>
          <!--桌機版簡介與按鈕-->
          <div class="col-md-7 py-3">
            <h2 class="font-weight-bold wow slideInUp"
              data-wow-duration="2s">張瑛如</h2>
            <p class="wow slideInUp" data-wow-duration="2s" data-wow-delay="1s">
              對托兒視如己出，因此自稱為孩子們的「乾媽」。
              二十餘年專業的居家育兒經驗中，總是持續設計創意活動來引領孩子們學習成長；加上開放、彈性、樂於溝通的特質，相信能帶給您滿意又放心的托育服務。
            </p>
            <router-link to="/about"
              class="btn btn-accent text-info wow slideInUp"
              data-wow-duration="2s" data-wow-delay="1s">了解更多</router-link>
          </div>
        </div>
      </div>
      <!--手機版-->
      <div class="d-md-none container py-3">
        <!--行動版姓名與照片-->
        <div class="row d-flex align-items-center mb-2">
          <div class="col wow slideInUp" data-wow-duration="2s">
            <h2 class="font-weight-bold">張瑛如</h2>
          </div>
          <div class="col d-flex justify-content-end wow slideInUp"
            data-wow-duration="2s">
            <div class="mobile-home-avatar"></div>
          </div>
        </div>
        <!--行動版簡介與按鈕-->
        <div class="row justify-content-end text-dark wow slideInUp"
          data-wow-duration="2s">
          <div class="col d-md-none">
            <p>
              對托兒視如己出，因此自稱為孩子們的「乾媽」。
              二十餘年專業的居家育兒經驗中，總是持續設計創意活動來引領孩子們學習成長；加上開放、彈性、樂於溝通的特質，相信能帶給您滿意又放心的托育服務。
            </p>
            <a href="#" class="btn btn-info">了解更多</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
