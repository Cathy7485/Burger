<template>
  <div id="popular-products" class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">暢銷漢堡</div>
      </div>
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
              <a href="#!" class="more-btn" title="更多資訊">更多資訊 <i class="fas fa-long-arrow-right"></i></a>
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
              <a href="#!" class="more-btn" title="更多資訊">更多資訊 <i class="fas fa-long-arrow-right"></i></a>
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
              <a href="#!" class="more-btn" title="更多資訊">更多資訊 <i class="fas fa-long-arrow-right"></i></a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div id="about" class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">品牌故事</div>
      </div>
      <div class="col-xl-6">
        <div class="about-img">
          <img
            src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/about.jpg"
            alt="關於我們照片"
          />
        </div>
      </div>
      <div class="col-xl-6">
        <div class="about-info">
          <p>
            吃堡創立於2022年，創立動機是想讓更多人吃到手工漢堡的美味，市面上的漢堡販賣管道琳瑯滿目，卻鮮少有漢堡品牌可以兼具平價與健康的兩大要點。
          </p>
          <p>
            吃堡有著獨特性的魅力就是想怎麼吃就怎麼點，讓挑食的顧客也能吃得很開心。
          </p>
          <p>
            吃堡秉持著看似是垃圾食物漢堡也可以吃得很健康，我們雖沒有速食連鎖店的廣大據點，更沒有快速出餐的優勢，但我們更在意的是做好每一份餐點，開心的吃，也吃得健康！
          </p>
          <p>
            創業團隊跨足三代，我們有年輕人的熱血與活力，也具備長青族的成熟與沉穩，各司其職的分工，讓我們提供給客戶最好最健康的漢堡與餐點。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="evaluate" class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">客戶評價</div>
      </div>
      <swiper
        :navigation="false"
        :breakpoints="swiperOptions.breakpoints"
        :modules="modules"
        class="evaluateSwiper"
      >
        <swiper-slide>
          <div class="evaluate-item">
            <div class="headshot">
              <img
                src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/ch.jpg"
                alt="美食部落客 君君"
              />
            </div>
            <div class="title">美食部落客 君君</div>
            <div class="info">
              <div class="star"><span>評價</span>
								<span>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
								</span>
							</div>
              <div class="comment">
                <span>評論</span
                ><span>太美味了！終於可以不用再吃到自己討厭的配料了</span>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="evaluate-item">
            <div class="headshot">
              <img
                src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/john.jpg"
                alt="健身教練 John Lin "
              />
            </div>
            <div class="title">健身教練 John Lin</div>
            <div class="info">
              <div class="star"><span>評價</span>
								<span>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
								</span>
							</div>
              <div class="comment">
                <span>評論</span
                ><span
                  >漢堡肉質真的很鮮！都是老闆手工做的！對身體無負擔！滿滿蛋白質！</span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="evaluate-item">
            <div class="headshot">
              <img
                src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/bai.jpg"
                alt="素素飲食Youtuber 百百"
              />
            </div>
            <div class="title">素素飲食Youtuber 百百</div>
            <div class="info">
              <div class="star"><span>評價</span>
								<span>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
								</span>
							</div>
              <div class="comment">
                <span>評論</span
                ><span
                  >手工漢堡居然還有素食的！真的很特別也很棒！讓素食者也一飽口福！</span
                >
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div id="location" class="container-fluid">
    <div class="row">
      <div class="block-title">
        <div class="title">地理位置</div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6423889002085!2d120.22444165078909!3d23.00017418489063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76ea43016789%3A0xdf299d1044d0fd06!2z5Y-w5Y2X5biC5bCP5p2x6Lev!5e0!3m2!1szh-TW!2stw!4v1677924985144!5m2!1szh-TW!2stw"
        width="100%"
        height="450"
        style="border: 0; padding: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
      },
    };
  },
};
</script>
<style scoped lang="scss">
.popularSwiper {
  overflow: initial;
}
</style>
