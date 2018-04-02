<template>
  <div class="uk-width-1-1 uk-padding-remove">
    <div class="uk-width-1-1 header-area">
      <h1 class="header-title">{{ header_title }}<div class="uk-badge header-badge"><i class="uk-icon-caret-square-o-right"></i><font>{{ header_badge }}</font></div></h1>
      <p class="header-content">{{ header_content }}</p>
    </div>
    <div class="brand-back-area">
      <div class="brand-item">
      </div>
    </div>
    <div class="brand-area uk-grid">
      <div class="uk-width-1-3">
        <h2 class="brand-item-num uk-margin-left"><span class="brand-item-icon"><i class="uk-icon-calendar-o"></i></span>1</h2>
        <h3 class="brand-item-title uk-margin-left">{{ brand_title1 }}</h3>
        <p class="brand-item-content uk-margin-left">{{ brand_content1 }}</p>
      </div>
      <div class="uk-width-1-3">
        <h2 class="brand-item-num uk-margin-left"><span class="brand-item-icon"><i class="uk-icon-clone"></i></span>2</h2>
        <h3 class="brand-item-title uk-margin-left">{{ brand_title2 }}</h3>
        <p class="brand-item-content uk-margin-left">{{ brand_content2 }}</p>
      </div>
      <div class="uk-width-1-3">
        <h2 class="brand-item-num uk-margin-left"><span class="brand-item-icon"><i class="uk-icon-eye"></i></span>3</h2>
        <h3 class="brand-item-title uk-margin-left">{{ brand_title3 }}</h3>
        <p class="brand-item-content uk-margin-left">{{ brand_content3 }}</p>
      </div>
    </div>
    <div class="uk-width-1-1 case-area">
      <div class="uk-container-center uk-grid">
        <div class="uk-width-1-3">
          <p class="uk-clearfix">
            <img class="uk-align-center case-img" v-bind:src="case_img1">
          </p>
        </div>
        <div class="uk-width-1-3"></div>
        <div class="uk-width-1-3"></div>
      </div>
    </div>
    <div class="uk-width-1-1 doc-area"></div>
  </div>
</template>
<script>
export default {
  name: 'OCSPproduct',
  data() {
    return {
      header_title: '流数据处理引擎',
      header_badge: '视频简介',
      header_content: '流处理引擎SP为企业级用户搭建统一的分布式流数据加工处理平台，实现统一的实时数据接入、预处理、标签运算、数据订阅分发，并提供可视化配置开发工具，通过开发配置化提升业务响应时间。',
      brand_title1: '全面支撑用户需求',
      brand_content1: '依据业务和数据特点，通过界面化配置和插件式注册，快速实现业务逻辑，提升需求响应度。',
      brand_title2: '丰富的数据订阅规则',
      brand_content2: '确保企业业务数据间的隐私，同时为精准分析和决策提供依据参考 。',
      brand_title3: '可视化界面友好易用',
      brand_content3: '易用且直观的界面功能，全面提升易用性，提供精准管理系统的能力。',
      case_title1: '助力智慧旅游、人流监测预警',
      case_img1: "../../static/pics/ocspproduct_case1.png",
      case_content1: '实现用户2、3、4G位置信令数据的全面接入，日接入数据量约40T、1000亿条左右，流处理引擎每分钟处理7000万条数据。',
      case_title2: '加速位置营销，实时感知、识别用户行为轨迹',
      case_img2: "../../static/pics/ocspproduct_case1.png",
      case_content2: '针对高频度的事件流，每个独立的事件都需要处理和分析； 传统复杂全量批处理无法满足时效性要求，通过流迭代运算处理。',
      case_title3: '构建收入保障生态',
      case_img3: "../../static/pics/ocspproduct_case1.png",
      case_content3: '实时获取BOSS话单文件并转流处理，进行指标数据分析汇总，通过界面展示结果。提升对话单的监控效率和准确，同时也增进客户感知。',
    }
  }
}
</script>
<style scoped>
.header-area {
  opacity: 0.75;
  background: #303643;
  height: 470px;
}

.header-title {
  font-family: MicrosoftYaHei;
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 1.54px;
  padding-top: 111px;
  padding-left: 58px;
}

.header-badge {
  background: rgba(71,178,251,0.21);
  border: 1px solid rgba(255,255,255,0.21);
  border-radius: 4px;
  line-height: 20px!important;
  margin-left: 10px;
}

.header-badge:hover {
  cursor: pointer;
}

.header-badge font {
  font-family: uex-icon;
  font-size: 11px!important;
  color: #FFFFFF;
  letter-spacing: 0;
}

.header-content {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 1.54px;
  padding-left: 58px;
  max-width: 600px;
  min-width: 500px;
}

.brand-area {
  position: absolute;
  width: 1100px;
  height: 310px;
  top: 355px;
  left: 169px;
  z-index: 110;
  opacity: 0.91;
  background: black;
  box-shadow: 10px 10px 22px 0 rgba(0,0,0,0.50);
  border-radius: 10px 50px 0 0;
  padding-left: 40px;
}

.brand-back-area {
  width: 1057px;
  height: 295px;
  position: absolute;
  top: 334px;
  left: 239px;
  z-index: 99px;
  opacity: 0.91;
  background: rgba(255,255,255,0.09);
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 8px 48px 0 0;
}

.brand-item-num {
  font-family: ShreeDev0714-Bold;
  font-size: 122px;
  color: #FFFFFF;
  letter-spacing: 0;
  margin-top: 100px;
}

.brand-item-icon {
  font-size: 48px!important;
  color: #47B2FB;
}

.brand-item-title {
  font-family: MicrosoftYaHei;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
  width: 170px;
}

.brand-item-content {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0;
  width: 172px;
}

.case-area {
  background: #646B7B;
  height: 540px;
}

.case-title {
  font-family: MicrosoftYaHei;
  font-size: 20px;
  color: #FFFFFF;
  letter-spacing: 0;
}

.case-img {
  width: 213px;
  height: 159px;
}

.case-item-title {
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
}

.case-item-content {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0;
}

.doc-area {
  background: #F5F5F6;
  height: 210px;
}

.doc-title {
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0;
}

.doc-item-title {
  font-family: MicrosoftYaHei;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0;
}

.doc-item-content {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #000000;
  letter-spacing: 0;
}
</style>