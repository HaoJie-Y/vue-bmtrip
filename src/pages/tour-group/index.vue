<template>
  <div class="trip">
     <div class="header" style="background: rgba(0, 0, 0, 0);">
      <v-touch tag="div" @tap="handleBack" class="iconfont icon-fanhui" style="font-size: 0.24rem;color: #000;"></v-touch>
      <span>{{detailTitle}}</span>
      <div
        class="iconfont icon-fenxiang"
        style="font-size: 0.24rem;color: #fff;margin-right: 0.04rem;"
      ></div>
    </div>
    <div class="trip_wrap">
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            height="293"
            :src="help || detailList[0].data[0].img.url"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  style="height:318px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5daa783963fed.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!312.5x318.5r/crop/312.5x318.5/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  style="height:318px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5daa7844e43f9.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!312.5x318.5r/crop/312.5x318.5/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  style="height:318px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5daa783963fed.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!312.5x318.5r/crop/312.5x318.5/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            style="height:113px;"
            src="https://product-ssl-qiniu.bmtrip.com/product_5da955d994eae.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x113r/crop/339x113/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_item_more">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5daa78525d2d2.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x53.336r/crop/339x53.336/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            style="height:113px;"
            src="https://product-ssl-qiniu.bmtrip.com/product_5da955d994eae.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x113r/crop/339x113/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_item_more">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5daa78525d2d2.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x53.336r/crop/339x53.336/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            style="height:113px;"
            src="https://product-ssl-qiniu.bmtrip.com/product_5da955d994eae.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x113r/crop/339x113/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_item_more">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5daa78525d2d2.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x53.336r/crop/339x53.336/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            style="height:113px;"
            src="https://product-ssl-qiniu.bmtrip.com/product_5da955d994eae.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x113r/crop/339x113/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_item_more">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <img
                  style="height:210px"
                  src="https://product-ssl-qiniu.bmtrip.com/product_5cb83fc1d3c19.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
                  alt
                />
                <div class="trim_wrap_item_info">
                  <div class="trim_wrap_item_info_title">美过油画 |法瑞意13日11晚</div>
                  <div class="trim_wrap_item_info_subtitle">
                    <span>少女峰</span>
                    <span>威尼斯</span>
                    <span>塞纳河游船</span>
                    <span>托斯卡纳庄园酒店</span>
                  </div>
                  <div class="trim_wrap_item_info_bottom">
                    <ul class="trim_wrap_item_info_tag">
                      <li>浪漫蜜月</li>
                      <li>含机票</li>
                      <li>新品</li>
                    </ul>
                    <div class="trim_wrap_item_info_price">13,600起</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5daa78525d2d2.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x53.336r/crop/339x53.336/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5da957d819fa8.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x93.112r/crop/339x93.112/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5da957e2bf1bd.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x393.692r/crop/339x393.692/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/5a169f566d3b5.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
          <div class="trim_wrap_item_info">
            <div class="trim_wrap_item_info_title">周游列国|11国28日26晚入门之旅</div>
            <div class="trim_wrap_item_info_subtitle">
              <span>悬崖酒店</span>
              <span>威尼斯</span>
              <span>塞纳河游船</span>
              <span>托斯卡纳庄园酒店</span>
            </div>
            <div class="trim_wrap_item_info_bottom">
              <ul class="trim_wrap_item_info_tag">
                <li>浪漫蜜月</li>
                <li>含机票</li>
                <li>新品</li>
              </ul>
              <div class="trim_wrap_item_info_price">13,600起</div>
            </div>
          </div>
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5da957e2bf1bd.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x393.692r/crop/339x393.692/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/5a169f566d3b5.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
          <div class="trim_wrap_item_info">
            <div class="trim_wrap_item_info_title">周游列国|11国28日26晚入门之旅</div>
            <div class="trim_wrap_item_info_subtitle">
              <span>悬崖酒店</span>
              <span>威尼斯</span>
              <span>塞纳河游船</span>
              <span>托斯卡纳庄园酒店</span>
            </div>
            <div class="trim_wrap_item_info_bottom">
              <ul class="trim_wrap_item_info_tag">
                <li>浪漫蜜月</li>
                <li>含机票</li>
                <li>新品</li>
              </ul>
              <div class="trim_wrap_item_info_price">13,600起</div>
            </div>
          </div>
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5da957e2bf1bd.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x393.692r/crop/339x393.692/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/5a169f566d3b5.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x210r/crop/339x210/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
          <div class="trim_wrap_item_info">
            <div class="trim_wrap_item_info_title">周游列国|11国28日26晚入门之旅</div>
            <div class="trim_wrap_item_info_subtitle">
              <span>悬崖酒店</span>
              <span>威尼斯</span>
              <span>塞纳河游船</span>
              <span>托斯卡纳庄园酒店</span>
            </div>
            <div class="trim_wrap_item_info_bottom">
              <ul class="trim_wrap_item_info_tag">
                <li>浪漫蜜月</li>
                <li>含机票</li>
                <li>新品</li>
              </ul>
              <div class="trim_wrap_item_info_price">13,600起</div>
            </div>
          </div>
        </div>
      </div>
      <div class="trim_wrap_item">
        <div class="trim_wrap_pictures">
          <img
            src="https://product-ssl-qiniu.bmtrip.com/product_5da958347673d.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x60.116r/crop/339x60.116/format/jpg/interlace/1/sharpen/1/quality/100!"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tourApi,tourDetailApi } from "@api/tour-group";
import Header from "@common/components/header"
export default {
  name: "Tour-group",
  components:{
      Header
  },
  data(){
      return{
          detailList:[],
          help:1,
          detailTitle:""
      }
  },
  async created() {
    let data = await tourApi();
    // console.log(data);
    let detail = await tourDetailApi();
    if(detail){
        this.help = ""
    }

    this.detailTitle = detail.data.pageName

    this.detailList = detail.data.data;
    
    console.log(this.detailTitle)
    this.$nextTick(() => {
      var centerSwiper = new Swiper(".swiper-container", {
        
      });
    });
  },
  methods:{
      handleBack(){
          this.$router.back();
      }
  }
};
</script>

<style scoped>
.trip {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

header {
  width: 100%;
  height: 0.44rem;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  background: pink;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.trip_wrap {
  padding-top: 0.44rem;
}

.trim_wrap_item {
  width: 100%;
}

.trim_wrap_pictures {
  padding: 0.18rem 0.18rem 0.22rem;
  box-sizing: border-box;
}

.trim_wrap_item_more {
  margin: 0.18rem 0 0.24rem 0.18rem;
}

.trim_wrap_item_info {
  padding: 0.12rem 0.09rem 0;
}

.trim_wrap_item_info_title {
  margin-bottom: 0.06rem;
  font-size: 0.15rem;
  color: #333;
  letter-spacing: 0.15px;
  font-weight: 500;
}

.trim_wrap_item_info_subtitle {
  font-family: PingFangSC-Light;
  font-size: 0.11rem;
  color: #898989;
  letter-spacing: 0.15px;
  margin-bottom: 0.09rem;
  text-align: left;
}

.trim_wrap_item_info_subtitle span:after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 0.08rem;
  background: #ccc;
  margin: 0 0.04rem;
}

.trim_wrap_item_info_subtitle span:last-child:after {
  display: none;
}

.trim_wrap_item_info_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trim_wrap_item_info_tag {
  display: flex;
  align-items: center;
}
.trim_wrap_item_info_tag > li {
  margin-right: 0.09rem;
  letter-spacing: 0.2px;
  color: #c14374;
  font-size: 0.1rem;
  font-family: PingFangSC-Light;
  padding: 0.03rem 0.06rem;
  border: 0.5px solid rgba(193, 67, 116, 0.2);
}
.trim_wrap_item_info_price {
  font-family: PingFangSC-Medium;
  font-size: 0.18rem;
  color: #c04374;
  letter-spacing: 0.8px;
  white-space: nowrap;
}
.trim_wrap_item_info_price::before {
  content: "\A5";
}
</style>