<template>
  <div>
    <!--三欄式-->
    <section class="bg-light py-3 text-dark">
      <div class="container">
        <h2 class="text-center my-3 font-weight-bold wow slideInUp"
          data-wow-duration="2s">托育三大重點</h2>
        <div class="row my-3">
          <div class="col-md-4">
            <div class="text-center wow slideInUp" style="font-size: 3rem;" data-wow-duration="2s">
              <i class="fas fa-user-shield"></i>
            </div>
            <h3 class="text-center wow slideInUp" data-wow-duration="2s">安心托育環境</h3>
            <p class="wow slideInUp" data-wow-duration="2s">
              <span class="d-block">硬體上，安全防護完善，家訪員定期檢核，通過政府居家托育環境安檢。</span>
              <span class="d-block my-2">情緒穩定、樂觀開朗，家庭人口單純、均無不良嗜好。</span>
              <span class="d-block">定期配合輔導單位進行體檢，確保照顧者無影響嬰幼兒健康之傳染病。</span>
            </p>
          </div>
          <div class="col-md-4">
            <div class="text-center wow slideInUp" style="font-size: 3rem;" data-wow-duration="2s">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h3 class="text-center wow slideInUp" data-wow-duration="2s">創意活動設計</h3>
            <p class="wow slideInUp" data-wow-duration="2s">
              <span class="d-block">自製教玩具，帶領孩子從事科學與美學啟蒙活動。</span>
              <span class="d-block my-2">培養孩子閱讀習慣，並串連社區中保母群體每月舉辦說故事活動。</span>
              <span class="d-block">針對偏食孩子，製作營養均衡的造型餐點，促進寶貝的進食意願。</span>
            </p>
          </div>
          <div class="col-md-4">
            <div class="text-center wow slideInUp" style="font-size: 3rem;" data-wow-duration="2s">
              <i class="fas fa-baby"></i>
            </div>
            <h3 class="text-center wow slideInUp" data-wow-duration="2s">個別因材施教</h3>
            <p class="wow slideInUp" data-wow-duration="2s">
              <span class="d-block">依據嬰幼兒發展階段，提供適齡適性的引導。</span>
              <span class="d-block mt-2">尊重嬰幼兒的個體差異，為寶貝量身定做專屬的托育模式。</span>
            </p>
          </div>
        </div>
        <div class="row d-flex justify-content-center wow slideInUp" data-wow-duration="2s">
          <router-link to="/feature" type="button" class="btn btn-outline-info btn-lg">
            更多特色
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
