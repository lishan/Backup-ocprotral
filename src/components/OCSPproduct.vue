<template>
  <div class="uk-width-1-1 uk-padding-remove">
    <div class="brand-back-area">
      <div class="brand-item">
      </div>
    </div>
    <div class="brand-area uk-grid">
      <div v-for="(item, index) in brand_items" v-bind:key="item.title" class="uk-width-1-3">
        <h2 class="brand-item-num"><span class="brand-item-icon"><i v-bind:class="item.icon"></i></span>{{ index+1 }}</h2>
        <h3 class="brand-item-title">{{ item.title }}</h3>
        <p class="brand-item-content">{{ item.content }}</p>
      </div>
    </div>
    <div class="uk-width-1-1 header-area">
      <h1 class="header-title">{{ header_title }}<div class="uk-badge header-badge"><i class="uk-icon-caret-square-o-right"></i><font>{{ header_badge }}</font></div></h1>
      <p class="header-content">{{ header_content }}</p>
    </div>
    <div class="uk-width-1-1 case-area">
      <div class="uk-container-center uk-grid">
        <div class="uk-width-1-1" style="height: 150px;">
        </div>
        <div class="uk-width-1-1 uk-text-center uk-margin-large-bottom">
          <h2 class="case-title">{{ case_title }}</h2>
        </div>
        <div v-for="item in case_items" v-bind:key="item.title" class="uk-width-1-3">
          <img class="case-img" v-bind:src="item.img"><br>
          <h3 class="case-item-title">{{ item.title }}</h3>
          <p class="case-item-content">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <div class="uk-width-1-1 doc-area">
      <div class="uk-container-center uk-grid">
        <div class="uk-width-1-1 uk-text-center">
          <h2 class="doc-title">{{ doc_title }}</h2>
        </div>
        <div class="uk-width-1-1 uk-grid uk-grid-divider doc-area-items">
          <div v-for="item in doc_items" v-bind:key="item.title" class="uk-width-1-4">
            <h3 class="doc-item-title">{{ item.title }}</h3>
            <p class="doc-item-content">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
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
      brand_items: [
        {title: '全面支撑用户需求', icon: 'uk-icon-calendar-o', content: '依据业务和数据特点，通过界面化配置和插件式注册，快速实现业务逻辑，提升需求响应度。'},
        {title: '丰富的数据订阅规则', icon: 'uk-icon-clone', content: '确保企业业务数据间的隐私，同时为精准分析和决策提供依据参考 。'},
        {title: '可视化界面友好易用', icon: 'uk-icon-eye', content: '易用且直观的界面功能，全面提升易用性，提供精准管理系统的能力。'},
      ],
      case_title: '应用案例',
      case_items: [
        {title: '助力智慧旅游、人流监测预警', img: '../../static/pics/ocspproduct_case1.png', content: '实现用户2、3、4G位置信令数据的全面接入，日接入数据量约40T、1000亿条左右，流处理引擎每分钟处理7000万条数据。'},
        {title: '加速位置营销，实时感知、识别用户行为轨迹', img: '../../static/pics/ocspproduct_case2.png', content: '针对高频度的事件流，每个独立的事件都需要处理和分析； 传统复杂全量批处理无法满足时效性要求，通过流迭代运算处理。'},
        {title: '构建收入保障生态', img: '../../static/pics/ocspproduct_case3.png', content: '实时获取BOSS话单文件并转流处理，进行指标数据分析汇总，通过界面展示结果。提升对话单的监控效率和准确，同时也增进客户感知。'},
      ],
      doc_title: '文档',
      doc_items: [
        {title: '介绍文档', content: '文档的简单描述信息'},
        {title: '用户文档', content: '文档的简单描述信息'},
        {title: '开发手册', content: '文档的简单描述信息'},
        {title: '部署文档', content: '文档的简单描述信息'},
      ],
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
  font-family: MicrosoftYaHei!important;
  font-size: 24px!important;
  color: #FFFFFF!important;
  letter-spacing: 1.54px!important;
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
  font-family: uex-icon!important;
  font-size: 11px!important;
  color: #FFFFFF!important;
  letter-spacing: 0;
}

.header-content {
  font-family: MicrosoftYaHei!important;
  font-size: 14px;
  color: #FFFFFF!important;
  letter-spacing: 1.54px;
  padding-left: 58px;
  max-width: 600px;
  min-width: 500px;
}

.brand-area {
  z-index: 3;
  position: absolute;
  width: 1100px;
  height: 310px;
  margin-top: 290px;
  margin-left: 58px;
  opacity: 0.91;
  background: black!important;
  box-shadow: 10px 10px 22px 0 rgba(0,0,0,0.50);
  border-radius: 10px 50px 0 0;
  padding-left: 90px;
  padding-right: 30px;
}

.brand-back-area {
  z-index: 2;
  width: 1057px;
  height: 295px;
  position: absolute;
  margin-top: 264px;
  margin-left: 159px;
  opacity: 0.91;
  background: rgba(255,255,255,0.09)!important;
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 8px 48px 0 0;
}

.brand-item-num {
  font-family: ShreeDev0714-Bold!important;
  font-size: 122px!important;
  color: #FFFFFF!important;
  letter-spacing: 0;
  margin-top: 100px;
}

.brand-item-icon {
  font-size: 48px!important;
  color: #47B2FB;
}

.brand-item-title {
  font-family: MicrosoftYaHei!important;
  font-size: 18px!important;
  color: #FFFFFF!important;
  letter-spacing: 0;
  width: 170px;
}

.brand-item-content {
  font-family: MicrosoftYaHei!important;
  font-size: 12px!important;
  color: #FFFFFF!important;
  letter-spacing: 0;
  width: 172px;
}

.case-area {
  background: #646B7B;
  height: 580px;
  padding-left: 140px;
  padding-right: 140px;
}

.case-title {
  font-family: MicrosoftYaHei!important;
  font-size: 20px!important;
  color: #FFFFFF!important;
  letter-spacing: 0;
}

.case-img {
  width: 325px;
  height: 159px;
}

.case-item-title {
  font-family: MicrosoftYaHei!important;
  font-size: 16px!important;
  color: #FFFFFF!important;
  letter-spacing: 0;
  width: 325px;
}

.case-item-content {
  font-family: MicrosoftYaHei!important;
  font-size: 12px!important;
  color: #FFFFFF!important;
  letter-spacing: 0;
  width: 325px;
}

.doc-area {
  background: #F5F5F6;
  height: 210px;
}

.doc-area-items {
  padding-left: 120px;
  padding-right: 120px;
}

.doc-title {
  font-family: MicrosoftYaHei!important;
  font-size: 16px!important;
  color: #000000!important;
  letter-spacing: 0;
  padding-top: 20px;
  padding-bottom: 40px;
}

.doc-item-title {
  font-family: MicrosoftYaHei!important;
  font-size: 16px!important;
  color: #000000!important;
  letter-spacing: 0;
}

.doc-item-content {
  font-family: MicrosoftYaHei!important;
  font-size: 12px!important;
  color: #000000!important;
  letter-spacing: 0;
}
</style>