<template>
    <div id="search" class="search">
        <!-- 顶部标题 -->
        <div class="tc box rel flex js_between al_center top_title">
            <span class="back"  v-on:click="back()">
            </span>
            <div class="input-inner">
                <i class="el-icon-search"></i>
                <input type="text" placeholder="请输入你想要寻找的宝贝...">
                <i class="el-icon-circle-close-outline"></i>
            </div>
            <span class="exit">搜索</span>
        </div>
        <!-- 搜索列表 -->
        <ul class="search-list">
            <li class="search-item">
                <a href="">
                    <span>男士手表</span>
                    <span>
                        <i>帆布</i>
                        <i>月相</i>
                    </span>
                </a>
            </li>
            <li class="search-item">
                <a href="">
                    <span>男鞋</span>
                    <span>
                        <i>透气</i>
                        <i>防滑</i>
                    </span>
                </a>
            </li>
            <li class="search-item">
                <a href="">
                    <span>男士皮带</span>
                    <span>
                        <i>印花</i>
                        <i>漆皮</i>
                    </span>
                </a>
            </li>
        </ul>
        <!-- 热门推荐 -->
        <dl class="auto-commend">
            <dt class="commend-label">热门搜索</dt>
            <dd class="commend-list">
                <span>口红</span>
                <span>手机</span>
                <span>耳机</span> 
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){

    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>
<style scoped>
    #search.search{
        position: relative;
    }
    #search.search .top_title{
        height: 1.76rem;
        line-height: 1.12rem;
        font-size: 0.64rem;
        padding: 0 0.4rem;
    }
    #search.search .top_title span.back {
    display: inline-block;
    position: relative;
    width: 1.28rem;
    height: 100%;
    vertical-align: middle;
    }
    #search.search .top_title span.back::before{
    
        border: 2px solid transparent;
        border-right: 0;
        border-bottom: 0;
        content: " ";
        top: 0.6rem;
        left: 0.6rem;
        position: absolute;
        width: 0.51rem;
        height: 0.51rem;
        border-color: #FB3812;
        -webkit-transform: rotate(-45deg) scale(1);
        transform: rotate(-45deg) scale(1);
    }

    #search.search .top_title  .input-inner{
        display: flex;
        position: relative;
        justify-content: space-around;
        flex: 1;
        height: 1.76rem;
        padding: 0.32rem 0.4rem;
        box-sizing: border-box;
        align-items: center;
        font-size: .72rem;
        vertical-align: middle;
    }
    #search.search .search-list{
        background-color: #fff;
        text-align: left;
        margin: 0.4rem 0 0.2rem;
        width: 100%;
        /* position: absolute; */
        display: flex;
        flex-direction: column;
    }
    #search.search .search-list .search-item{
        line-height: 32px;
        height: 32px;
        font-size: 14px;
        padding: 0 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        box-sizing: border-box;
    }
    #search.search .search-list .search-item a{
        display: flex;
        justify-content: space-between
    }

    #search.search .top_title  .input-inner i{
         color: #666666;
         
    }    
    #search.search .top_title  .input-inner input{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        outline: 0;
        margin: 0 .4rem;
    }

    #search.search .top_title span.exit {
        width: 2rem;
        color: #FB3812;
    }
    .auto-commend{
        padding: .4rem .8rem;
    }
    .auto-commend .commend-label{
        font-size: 12px;
         color: #666666;
         margin-bottom: 0.4rem;
    }
    .auto-commend .commend-list{
        display: flex;
        justify-content: space-around;
        font-size: 0.64rem;
        line-height: 0.8rem;
        color: #FB3812;
    }
</style>
