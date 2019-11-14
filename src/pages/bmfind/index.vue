<template>
    <div class="bmfind">
        <div class="header">
            <div class="header_left"
                 style="background:  50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLTEgMTloMjBWLTFILTF6Ii8+PHBhdGggZD0iTTE0IDcuMzMzYTYuNjY3IDYuNjY3IDAgMTEtMTMuMzM0IDAgNi42NjcgNi42NjcgMCAwMTEzLjMzNCAweiIgc3Ryb2tlPSIjMUExQTFBIiBzdHJva2Utd2lkdGg9Ii44MzMiLz48cGF0aCBkPSJNMTcuMzMzIDE3LjMzM2wtNS01IiBzdHJva2U9IiMxQTFBMUEiIHN0cm9rZS13aWR0aD0iLjgzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvc3ZnPg==')">
            </div>
            <span>斑马发现</span>
            <div class="header_right"
                 style="background: 50% no-repeat url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4yNSAxMi4zMzNWOWE4Ljc1IDguNzUgMCAwMTE3LjUgMHY1QTMuNzUgMy43NSAwIDAxMTQgMTcuNzVhLjQxNy40MTcgMCAwMTAtLjgzM2MuODE2IDAgMS41NTMtLjMzNSAyLjA4My0uODc1YTIuMDgzIDIuMDgzIDAgMDEtMi41LTIuMDQydi0xLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzQtMS42NjZWOUE3LjkxNyA3LjkxNyAwIDAwMS4wODMgOXYxLjY2N2EyLjA4MyAyLjA4MyAwIDAxMy4zMzMgMS42NjdWMTRBMi4wODMgMi4wODMgMCAwMS4yNSAxNHYtMS42Njd6TTEuMDgzIDE0YTEuMjUgMS4yNSAwIDAwMi41IDB2LTEuNjY3YTEuMjUgMS4yNSAwIDAwLTIuNSAwVjE0em0xNS44MzQtMS42NjdhMS4yNSAxLjI1IDAgMDAtMi41IDBWMTRhMS4yNSAxLjI1IDAgMTAyLjUgMHYtMS42Njd6IiBmaWxsPSIjMzMzIi8+PC9zdmc+');">
            </div>
        </div>
        <div class="bm_navbar">
            <ul class="van_tags">
                <li v-for="data in navList" :key="data.id" class="active">{{data.name}}
                    <!-- <span class="tags_line"></span> -->
                </li>
            </ul>
        </div>
        <div class="content_bm">
            <div class="content_wrap">
                <div class="card_wrap">
                    <div class="card_item">
                        <div class="card_item_type">达人说</div>
                        <img height="189"
                             src="https://product-ssl-qiniu.bmtrip.com/product_5bc6ae829043f.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x189r/crop/339x189/format/jpg/interlace/1/sharpen/1/quality/100!"
                             alt="">
                        <div class="card_item_title">
                            奥地利捷克，风景如画的两个怪胎国家
                        </div>
                        <div class="card_item_subtitle">
                            奥捷归来，天下所有的小镇都不必再看了
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_item_type">达人说</div>
                        <img height="189"
                             src="https://product-ssl-qiniu.bmtrip.com/product_5bc6ae829043f.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x189r/crop/339x189/format/jpg/interlace/1/sharpen/1/quality/100!"
                             alt="">
                        <div class="card_item_title">
                            奥地利捷克，风景如画的两个怪胎国家
                        </div>
                        <div class="card_item_subtitle">
                            奥捷归来，天下所有的小镇都不必再看了
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_item_type">达人说</div>
                        <img height="189"
                             src="https://product-ssl-qiniu.bmtrip.com/product_5bc6ae829043f.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x189r/crop/339x189/format/jpg/interlace/1/sharpen/1/quality/100!"
                             alt="">
                        <div class="card_item_title">
                            奥地利捷克，风景如画的两个怪胎国家
                        </div>
                        <div class="card_item_subtitle">
                            奥捷归来，天下所有的小镇都不必再看了
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_item_type">达人说</div>
                        <img height="189"
                             src="https://product-ssl-qiniu.bmtrip.com/product_5bc6ae829043f.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x189r/crop/339x189/format/jpg/interlace/1/sharpen/1/quality/100!"
                             alt="">
                        <div class="card_item_title">
                            奥地利捷克，风景如画的两个怪胎国家
                        </div>
                        <div class="card_item_subtitle">
                            奥捷归来，天下所有的小镇都不必再看了
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_item_type">达人说</div>
                        <img height="189"
                             src="https://product-ssl-qiniu.bmtrip.com/product_5bc6ae829043f.jpg?imageMogr2/auto-orient/strip/gravity/Center/thumbnail/!339x189r/crop/339x189/format/jpg/interlace/1/sharpen/1/quality/100!"
                             alt="">
                        <div class="card_item_title">
                            奥地利捷克，风景如画的两个怪胎国家
                        </div>
                        <div class="card_item_subtitle">
                            奥捷归来，天下所有的小镇都不必再看了
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {bmfindNavApi} from "@api/bmfind"
    export default {
        name: "Bmfind",
        data(){
            return{
                navList:[],
            }
        },
        async created(){
            let navData = await bmfindNavApi();
            this.navList = navData.data.list;
            // console.log(this.navList);
        }
    }
</script>

<style scoped>
    .bmfind{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
    }

    .bm_navbar{
        padding: 0.44rem 0.06rem 0;
        border-bottom: 0.01rem solid #ebedf0;
        box-sizing: border-box;
        margin-bottom:0.15rem;
    }

    .van_tags{
        display:flex;
        position: relative;
    }

    .van_tags li{
        height:0.44rem;
        margin:0 0.05rem;
        padding:0 0.12rem;
        text-align:center;
        line-height:0.44rem;
        font-size:0.13rem;
    }

    .van_tags li:first-child{
        color:#c14374;
    }

    /* .active{
        color:#c14374;
        border-bottom:0.03rem solid #c14374;;
        width: 0.18rem;
        border-radius: 3px;
        box-sizing: 
    } */

    .tags_line{
        width: 0.18rem;
        transform: translateX(0.22rem);
        transition-duration: 0.3s;
        position:absolute;
        bottom:0;
        border-radius: 3px;
        height:0.03rem;
        background: #c14374;
    }

    .content_wrap{
        margin:0 0.18rem;
    }
    .card_item{
        margin-bottom:0.36rem;
        position: relative;
    }
    .card_item_type{
        position: absolute;
        right:0.09rem;
        top:0.09rem;
        padding:0.02rem 0.06rem;
        background:rgba(0,0,0,0.8);
        color:#fff;
        font-size:0.12rem;
        border-radius: 0.02rem;
    }

    .card_item_title{
        font-weight: 500;
        font-size:0.15rem;
        color:#333;
        letter-spacing: 0.0008rem;
        margin: 0.12rem 0 0.06rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align:center;
    }

    .card_item_subtitle{
        width: 100%;
        font-family: PingFangSC-Light;
        font-size: 0.12rem;
        color: #333333;
        letter-spacing: 0.0015rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align:center;
    }
</style>