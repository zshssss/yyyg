<template>
    <div class="agreement" id="agreement">
        <!-- 顶部标题 -->
        <div class="tc box rel flex js_between al_center top_title">
            <span class="back"  v-on:click="back()">
            <!-- <img :src="baseImgUrl+'left_21_37.png'" style="width:.42rem;height:.74rem;" alt=""> -->
            </span>
            <span>用户协议</span>
            <span class="exit"></span>
        </div>
        <!-- 协议内容 -->
        <div class="agreement-body">
            <section class="agreement-list">
                <div class="agree-title">
                    <p>第一条 专属权利</p>
                </div>
                <div class="agree-content">
                    甲方愿意授权乙方独家推销其网站上的所有广告的权利。
                    甲方不得同意、授权、许可其他任何人或者法人主体订立、出售或者代理促销甲方之协议。

                </div>
            </section>
             <section class="agreement-list">
                <div class="agree-title">
                    <p>第二条 乙方承担的义务</p>
                    <p>除了上面以外，乙方还同意</p>
                </div>
                <div class="agree-content">
                    A、本协议有效期内并只有在执行本协议时，
                    乙方将向甲方提供用HTML/ Java语言或其它适
                    当的语言制作的链接程序，甲方应当用适当的方
                    式将其加到甲方的所有广告位置上（甲方对这些
                    链接程序没有任何专利、产权或利益，其中包括
                    知识产权）。

                </div>
                <div class="agree-content">
                    B、乙方将尽最大的努力，以双方拟订的具
                    市场竞争力的合理广告价格和折扣，向广告商销
                    售上述网址的网页上的广告位。                   

                </div>
                <div class="agree-content">
                    C、乙方应事先避免违法的广告刊登，并通
                    过电子邮件把乙方已经征集到将在上述网址网页
                    上登载的新广告通知甲方，并尽量尊重甲方根据
                    下面第三条D款规定，作出的拒绝任何不合法广告
                    的有效地控制广告登载到其网页的。

                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            baseImgUrl: this.$store.state.baseImgUrl,
        }
    },
    created: function() {},
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style>
#agreement.agreement {
  min-height: 100vh;
  background-color: #fff;
}
#agreement.agreement .top_title {
  height: 1.76rem;
  /* background-color: #FB3812; */
  line-height: 1.76rem;
  font-size: 0.72rem;
  /* color: #ffffff; */
  padding: 0 0.4rem;
  overflow: hidden;
}
#agreement.agreement .top_title span.back {
    display: inline-block;
    position: relative;
    width: 3rem;
    height: 100%;
    vertical-align: middle;
}
#agreement.agreement .top_title span.back::before{
  
    border: 2px solid transparent;
    border-right: 0;
    border-bottom: 0;
    content: " ";
    top: 0.5rem;
    left: 0.5rem;
    position: absolute;
    width: 0.51rem;
    height: 0.51rem;
    border-color: #FB3812;
    -webkit-transform: rotate(-45deg) scale(1);
    transform: rotate(-45deg) scale(1);
}
#agreement.agreement .top_title span.exit {
    width: 3rem;
    font-size: 0.52rem;
    color: #ffffff;
    position: relative;
    top: 0.3rem;
    line-height: 1.76rem;
}

.agreement-body{
    padding: .4rem 0.8rem;
    letter-spacing: .05rem;
    color: #333333;
}

.agreement-list{
    line-height: 1.28rem;
    font-size: 0.64rem;
    margin-bottom: 1.28rem;
}
.agree-content{
    text-indent: 1.48rem;
}
</style>
