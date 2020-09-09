<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <div class="recommend-content">
        <div class="content-wrap" v-for="item in recommentList" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <p class="scenic-mask">1</p>
            <p class="scenic">{{item.scenic}}</p>      
            <p class="desc">{{item.desc}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
        recommentList:[
            {
                id:'01',
                imgUrl:'http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
                desc:'包含往返飞日游泰国一日日游泰国一日机票',
                scenic:'泰国一日游泰国一日游泰国一日游'
            },
            {
                id:'02',
                imgUrl:'http:////imgs.qunarzz.com/p/p90/201308/23/5ce590745204c90193835fbb.jpg_256x160_04bdc5bd.jpg',
                desc:'包含往返飞日游泰国一日日游泰国一日机票',
                scenic:'泰国一日游泰国一日游泰国一日游'
            },
            {
                id:'03',
                imgUrl:'http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
                desc:'包含往返飞日游泰国一日日游泰国一日机票',
                scenic:'泰国一日游泰国一日游泰国一日游'
            },
            {
                id:'04',
                imgUrl:'http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
                desc:'包含往返飞日游泰国一日日游泰国一日机票',
                scenic:'泰国一日游泰国一日游泰国一日游'
            }
        ]
    };
  },
};
</script>

<style lang="scss" scoped>
.recommend-title{
    background-color: #eee;
    line-height: 0.8rem;
    text-indent: 0.3rem;
}
.recommend-content{
    margin:0.2rem 0;
    .content-wrap{
        width: 50%;
        float: left;
        position: relative;
        height: 2.6rem;
        img{
            width: 90%;
            display: block;
            margin: auto;
            height: 2rem;
        }
        .scenic{
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            line-height: 0.4rem;
            width: 90%;
            top: 1.6rem;
            // text-align: center;
            text-indent: 0.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            color: #fff;
        }
        .scenic-mask{
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            line-height: 0.4rem;
            width: 90%;
            top: 1.6rem;
            text-align: center;
            background-color: rgba($color: #000000, $alpha: .5);
        }
        .desc{
            text-indent: 0.2rem;
            line-height: 0.5rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #444;
        }
    }
}
</style>