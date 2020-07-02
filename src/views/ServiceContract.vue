<template>
  <div class="service">
    <!-- 头部导航 -->
    <van-nav-bar title="服务协议" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <div class="content">
      <div class="item">
        <div class="title">服务协议</div>
        <div class="desc">
          为了更好地为您提供服务，请您仔细阅读《服务协议》（以下简称“本协议”）。在您开始使用“鲜榨口语”软件及相关服务之前，请您务必认真阅读并充分理解本协议。
        </div>
        <div class="desc">如您未满18周岁，请您在法定监护人陪同下仔细阅读并充分理解本协议，并征得法定监护人的同意后使用“鲜榨口语”软件及相关服务。
        </div>
      </div>
      <div class="item">
        <div class="title">一、【协议适用规范】</div>
        <div class="desc">
          <div class="tit">1.1</div>
          本协议是您与北京饕餮互动信息科技有限公司（以下简称“公司”或“饕餮”）之间就您下载、安装、注册、登录、使用“鲜榨口语”软件，并获得“鲜榨口语”软件提供的相关服务所订立的协议。公司有权依“鲜榨口语”软件及相关服务或运营的需要单方决定，安排或指定其关联公司、控制公司、继承公司或公司认可的第三方公司继续运营“鲜榨口语”软件。并且，就本协议项下涉及的某些服务，可能会由公司的关联公司、控制公司、继承公司或公司认可的第三方公司向您提供。您知晓并同意接受相关服务内容，即视为接受相关权利义务关系亦受本协议约束
        </div>
        <div class="desc">
          <div class="tit">1.2</div>
          “用户”是指所有直接或间接获取和使用“鲜榨口语”软件及相关服务的使用者，包括自然人、法人和其他组织等。在本协议中称为“用户”或称“您”。
        </div>
        <div class="desc">
          <div class="tit">1.3</div>
          除非您已充分阅读、完全理解并接受本协议所有条款，否则您无权使用本服务。您点击登陆，或您使用本服务，均视为您已阅读并同意签署本协议。如果您对本协议的任何条款有任何疑问、意见或建议，可以发送邮件至
          feedbacken@taotielanguages.com 与公司联系，或可以选择不安装或使用“鲜榨口语”软件及其相关服务。
        </div>
      </div>
      <div class="item">
        <div class="title">二、【关于服务内容】</div>
        <div class="desc">
          <div class="tit">2.1</div>
          您使用“鲜榨口语”软件及相关服务，可以通过预装、公司已授权的第三方下载等方式获取“鲜榨口语”客户端应用程序或访问“鲜榨口语”相关网站。若您并非从公司或经公司授权的第三方获取本软件的，公司无法保证非官方版本的“鲜榨口语”软件能够正常使用，您因此遭受的损失与公司无关。
        </div>
        <div class="desc">
          <div class="tit">2.2</div>
          公司可能为不同的终端设备开发了不同的应用程序软件版本，您应当根据实际设备状况获取、下载、安装合适的版本。
        </div>

        <div class="desc">
          <div class="tit">2.3</div>
          您可根据自行需要使用“鲜榨口语”软件及相关服务或更新“鲜榨口语”版本，如您不再需要使用“鲜榨口语”软件及相关服务可自行卸载。
        </div>

        <div class="desc">
          <div class="tit">2.4</div>
          为了增进用户体验、完善服务内容，公司将不断努力开发新的服务，并为您不时提供软件更新。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="less" scoped>
  .content {
    padding: 16px;
  }

  .title {
    font-size: @titleSize;
    font-weight: 700;
    color: @blackCoor;
  }

  .item {
    margin-bottom: 12px;
  }

  .desc {
    margin-top: 16px;
    color: @blackCoor;
    font-size: @textSize15;
    line-height: 26px;
  }

</style>
