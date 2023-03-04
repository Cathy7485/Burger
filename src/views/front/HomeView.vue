<template>
  <div id="popular-products" class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">暢銷漢堡</div>
      </div>
      <!-- swiper -->
      <swiper
        :navigation="true"
        :spaceBetween="120"
        :modules="modules"
        class="popularSwiper"
      >
        <swiper-slide>
					<div class="product-item">
						<div class="product-img">
							<img 
                src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/%E7%81%AB%E7%84%B0%E9%A6%99%E8%84%86%E7%82%B8%E9%9B%9E%E5%A0%A1.jpg"
								alt=""
							/>
						</div>
						<div class="product-info">
							<div class="title">火焰爆汁雞肉起司堡</div>
							<div class="info">
								雞肉鮮嫩搭配上經典起司，火焰噴槍融化起司完美融合在嫩雞肉上，給你最佳的味覺享受，口感多汁一口接一口！配料蔬菜與醬汁搭配，碰撞出多種新滋味！怎麼吃都不會膩！
							</div>
              <a href="#!" class="more-btn" title="更多資訊">更多資訊</a>
						</div>
					</div>
        </swiper-slide>
        <swiper-slide>
					<div class="product-item">
						<div class="product-img">
							<img 
                src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/%E8%B5%B7%E5%8F%B8%E7%80%91%E5%B8%83%E6%96%B0%E8%B1%AC%E8%82%89%E7%B4%A0%E5%A0%A1.jpg"
								alt=""
							/>
						</div>
						<div class="product-info">
							<div class="title">起司瀑布新豬肉素堡</div>
							<div class="info">
								半熟蛋液與香濃起司絕配組合！新鮮蔬菜與素食新豬肉搭配獨家水果風味醬，口感清爽無負擔，讓人一口接一口的好滋味，蔬食健康第一選擇！
							</div>
              <a href="#!" class="more-btn" title="更多資訊">更多資訊</a>
						</div>
					</div>
        </swiper-slide>
        <swiper-slide>
					<div class="product-item">
						<div class="product-img">
							<img 
                src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/%E9%BB%83%E9%87%91%E6%B5%B7%E6%B4%8B%E9%A6%99%E8%84%86%E7%82%B8%E8%9D%A6%E5%A0%A1.jpg"
								alt=""
							/>
						</div>
						<div class="product-info">
							<div class="title">黃金海洋香脆炸蝦堡</div>
							<div class="info">
								每日新鮮直送的鮮蝦製作，鮮美口感的炸蝦佐洋蔥裹粉酥炸再搭配經典莎莎醬，每一口都新鮮！讓你回味無窮的滋味。
							</div>
              <a href="#!" class="more-btn" title="更多資訊">更多資訊</a>
						</div>
					</div>
        </swiper-slide>
      </swiper>
      <!-- swiper -->
    </div>
  </div>
  <div id="about" class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">品牌故事</div>
      </div>
      <div class="col-6">
        <div class="about-img">
          <img src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/about.jpg" alt="關於我們照片" />
        </div>
      </div>
      <div class="col-6">
        <div class="about-info">
          <p>吃堡創立於2022年，創立動機是想讓更多人吃到手工漢堡的美味，市面上的漢堡販賣管道琳瑯滿目，卻鮮少有漢堡品牌可以兼具平價與健康的兩大要點。</p>
          <p>吃堡有著獨特性的魅力就是想怎麼吃就怎麼點，讓挑食的顧客也能吃得很開心。</p>
          <p>吃堡秉持著看似是垃圾食物漢堡也可以吃得很健康，我們雖沒有速食連鎖店的廣大據點，更沒有快速出餐的優勢，但我們更在意的是做好每一份餐點，開心的吃，也吃得健康！</p>
          <p>創業團隊跨足三代，我們有年輕人的熱血與活力，也具備長青族的成熟與沉穩，各司其職的分工，讓我們提供給客戶最好最健康的漢堡與餐點。 </p>
        </div>
      </div>
    </div>
  </div>
  <div id="evaluate" class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">客戶評價</div>
      </div>
      <div class="col-lg-4">
        <div class="evaluate-item">
          
        </div>
      </div>
      <div class="col-lg-4">
        <div class="evaluate-item">
          
        </div>
      </div>
      <div class="col-lg-4">
        <div class="evaluate-item">
          
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="block-title">
        <div class="title">地理位置</div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Pagination, Navigation } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>
<style scoped lang="scss">
.swiper {
  overflow: initial;
  // .swiper-slide-prev {
  //   display: none;
  // }
  // .swiper-slide-next{
  //   transform: scale(0.8);
  // }
  // .swiper-slide-active{
  //   transform: scale(1);
  // }
}
</style>