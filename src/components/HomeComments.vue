<template>
  <div>
    <section class="my-3">
      <div class="row row d-flex flex-md-column align-items-center">
        <div class="col-12">
          <h2 class="text-center my-3 font-weight-bold">聽聽家長怎麼說</h2>
        </div>
        <div class="col-md-8 pt-md-3">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item comment-box active">
                <div
                  class="d-flex flex-column flex-md-row justify-content-center align-items-start"
                >
                  <span class="pr-md-5 top-quotes">“</span>
                  <p class="comment-text">保母乾媽的托育環境常會配合活動有所調整，讓托育的小寶貝們都能驚奇不斷，敬佩您多年來不斷精進！</p>
                  <span class="pl-md-5 bottom-quotes">”</span>
                </div>
                <p
                  class="m-0 p-0 d-flex justify-content-md-center justify-content-end"
                >－ 家長 游小姐（公務員）－</p>
              </div>
              <div class="carousel-item comment-box" v-for="(item, key) in comment" :key="key">
                <div
                  class="d-flex flex-column flex-md-row justify-content-center align-items-start"
                >
                  <span class="pr-md-5 top-quotes">“</span>
                  <p class="comment-text">{{ item.content }}</p>
                  <span class="pl-md-5 bottom-quotes">”</span>
                </div>
                <p
                  class="m-0 p-0 d-flex justify-content-md-center justify-content-end"
                >－ {{ item.commentBy }} －</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {
      comment: [
        {
          content: '小孩能交到您手裡，是父母和孩子的福氣。',
          commentBy: '家長 Miyabi 小姐（教師）',
        },
        {
          content:
            '看了瑛如姊寫的撥撥紀錄表，作媽媽的看著看著眼淚直掉，我的撥撥，每天都有進步，真的很謝謝妳用心的照顧撥撥。',
          commentBy: '家長 撥撥 & 搬搬的媽媽',
        },
        {
          content: '這年頭要搶乾媽的名額要先預約好，才能安排生子阿！',
          commentBy: '家長 賴小姐（代工業）',
        },
      ],
    };
  },
  mounted() {
    $('.carousel').carousel({
      interval: 5000,
    });
  },
};
</script>
