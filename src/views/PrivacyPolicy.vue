<template>
  <div class="privacy">
    <!-- 头部导航 -->
    <van-nav-bar title="隐私政策" :border="false" style="background-color:rgba(0,0,0,0);" left-arrow
      @click-left="$router.back()" />

    <div class="content">
      <div class="item">
        <div class="title">隐私条款</div>
        <div class="desc">
          欢迎您使用“阳光英语”软件，“鲜榨口语”是由北京饕餮互动信息科技有限公司（以下简称“公司”或“饕餮”）开发并负责管理的软件，“饕餮”对每一位用户的隐私权采取高度尊重且保护的态度。为给您提供更准确的个性化的服务和更安全的互联网环境，公司依据《中华人民共和国网络安全法》、《信息安全技术个人信息安规范》（GB/T35273-2017）以及其他相关法律法规和技术规范，将原先体现在《用户协议与隐私条款》中的“隐私条款“相关内容进行了更新并单独以本《隐私条款》的形式进行发布，
          本次更新的内容较多，进一步明确了收集/使用/对外提供的原则，进一步阐述了关于您个人信息的相关权利。
        </div>
      </div>
      <div class="item">
        <div class="desc">
          <div class="tit">本隐私条款将帮助您了解：</div>
          我们会遵循隐私条款收集、使用您的信息，但不会仅因您同意本隐私条款而采用强制捆绑的方式一揽子收集个人信息。
        </div>
        <div class="desc">

          当您使用或开启相关功能或使用服务时，为实现功能、服务所必需，我们会收集、使用相关信息。除非是为实现基本业务功能或根据法律法规要求必要信息，您均可以拒绝提供且不影响其他功能或服务。我们将在隐私条款中逐项说明哪些是必要信息。
        </div>
        <div class="desc">

          摄像头、麦克风权限，均不会默认开启，只有经过您的明示授权才会在为实现特定功能或服务时使用，您也可以撤回授权。特别需要指出的是，即使经过您的授权，我们获得了这些敏感权限，也不会在相关功能或服务不需要时而收集您的信息。
        </div>
        <div class="desc">

          下文将帮您详细了解我们如何收集、使用、存储、传输、共享、转让（如适用）与保护个人信息；帮您了解查询、访问、删除、更正、撤回授权个人信息的方式。<span
            class="tit">其中，有关您个人信息权益的条款重要内容我们已用加粗形式提示，请特别关注。</span>
        </div>
        <p class="tit">1.我们如何收集和使用个人信息</p>
        <p class="tit">2.我们如何使用Cookie等同类技术</p>
        <p class="tit">3.我们如何共享、转让、公开披露个人信息</p>
        <p class="tit">4.我们如何存储个人信息</p>
        <p class="tit">5.我们如何保护个人信息的安全</p>
        <p class="tit">6.管理您的个人信息</p>
        <p class="tit">7.未成年人使用条款</p>
        <p class="tit">8.隐私条款的修订和通知</p>
        <p class="tit">9.联系我们</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

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

    p {
      line-height: 28px;
    }
  }

  .desc {
    margin-top: 16px;
    color: @blackCoor;
    font-size: @textSize14;
    line-height: 26px;

  }

</style>
