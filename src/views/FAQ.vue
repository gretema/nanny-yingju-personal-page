<template>
  <div>
    <div class="container my-5">
      <h2 class="text-center mb-5 font-weight-bold faq-title">常見問題</h2>
      <div class="qa-list" @click="openAnswer">
        <div class="qa-item">
          <h3>Ｑ：保母如何管教孩子？</h3>
          <p>照顧者將會與家長事先討論出保親雙方皆可以認同的範圍，確保寶貝獲得適當的教導；並會如實告知家長孩子的不當行為表現和處理經過。</p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：是否有托育補助資格？</h3>
          <p>
            有的。
            <br />保母乾媽是合格保母，在台中市政府社會局備案列管。保母乾媽和政府簽約，具備準公共化托育資格，可協助符合托育補助的家長申請。
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：保母收托名額限制？</h3>
          <p>
            依照政府規定，在同一處托育地點，可同時收托「二歲以上和以下」各 2 個名額，總共四位。
            <br />保母乾媽斟酌實際托育配合情況，在個人能力所及之下決定收托名額總數，一般為 3 ~ 4 名。
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：可配合加班或假日托育嗎？</h3>
          <p>保母乾媽提供的服務時間之外，若家長偶爾需要額外托育，請事先告知，以利時間的安排。</p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：煮飯時如何安置小孩？</h3>
          <p>
            照顧者在工作時間應讓嬰幼兒的活動保持在視線範圍，如果不方便時，我會將較小的孩子放置嬰兒床，
            暫時限制活動範圍，確保安全。
            <br />較大孩子則事先檢查門窗安全扣，並播放音樂故事CD，同時引導孩童玩玩具或進行個人的閱讀。過程中時時留意孩子的動靜，加以查看。
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：小孩同時哭鬧，如何處理？</h3>
          <p>
            首先要先了解當下情況。是生理需求？還是有別的原因？
            <br />一般而言，較小孩童身心發展未臻成熟，需要立即滿足，但不鼓勵經常性的以糖果餅乾作為手段，以免養成習慣；
            <br />年紀較大的孩子在某些時刻需要教導等待，若是有立即性的危險事件則是要首先處理。
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：會讓小孩看電視、3C 產品嗎？</h3>
          <p>
            不會。
            <br />但幼兒行為的養成需要保親雙方達成共識，好的習慣才會顯現。
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：會將小孩單獨留在家中獨自外出辦事嗎？</h3>
          <p>
            絕對不會。
            <br />照顧者在哪，小孩就在哪。
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：如何處理小孩之間的爭執？</h3>
          <p>
            照顧者會先觀察小朋友如何解決。
            <br />如果需要，則會試著以居間協調的角色協助傳遞雙方的感受，引導孩子做出適當的反應。
            <br />而對於年紀較小者，轉移注意力會是一種效果良好的行為改變技術。
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：保母可下樓接送孩子嗎？</h3>
          <p>
            可以的。但希望家長接送時間<span class="font-weight-bold">固定並準時</span>。<br>
            若家長偶爾延遲送托或接回的時間，請務必遵守事先告知將會延遲多久，並於約定好的時間抵達！<br>
            因為考量其他托兒必須一起帶下樓，常常會影響其他托兒作息，例如：必須中斷孩子的餵食；<br>
            又或是有時在戶外等候接送，小孩便便了、有時是中午最忙的時段...。<br>
            且小孩不耐久等，對於會跑會跳的孩子，在外面待越久，曝露的風險相對提高。<br>
            同時，準時也是尊重保母的表現。
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：孩子的伙食是保母自煮還是外食？會給孩子吃零食或亂餵東西嗎？</h3>
          <p>
            照顧者依照家長的貼補金額，提供點心和正餐，皆是採買新鮮蔬果在家親自烹調，符合健康營養原則，
            甚至經常是超乎原先收取的伙食貼補額度。<br>
            除了這些以外，不會擅自餵食寶貝其他的零食或不明食物，敬請家長放心！
          </p>
        </div>
        <div class="qa-item">
          <h3>Ｑ：保母會只讓孩子在室內玩而不帶去戶外嗎？</h3>
          <p>
            平常就會帶寶貝至社區中庭活動，但若受限於天氣好壞、寶貝身體情況等因素，則會留在室內活動。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    openAnswer(event) {
      // 事件委派
      const targetTag = event.target.tagName;
      const { target } = event;
      if (targetTag.toLowerCase() === 'h3') {
        $(target).toggleClass('active');
        $(target).parent().find('p').slideToggle();
        $(target).parent().siblings().find('p')
          .slideUp();
        $(target).parent().siblings().find('h3')
          .removeClass('active');
      }
    },
  },
};
</script>
