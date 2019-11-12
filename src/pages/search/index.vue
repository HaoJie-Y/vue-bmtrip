<template>
    <div class="search">
        <div class="search_input">
            <form action="">
                <i class="search_icon iconfont icon-sousuo"></i>
                <router-link tag="input" type="text" placeholder="请输入" class="search_something" @keydown.enter.prevent="handleEnter" :to="'/proList?keyword='+historyItem"></router-link>
            </form>
            <div class="cancel">取消</div>
        </div>
        <div class="hot_search_wrap">
            <p class="hot_search">热门搜索</p>
            <ul></ul>
        </div>

        <div class="search_history_wrap">
            <div class="search_history_wraper">
                <p>搜索历史</p>
                <i class="cancel_icon iconfont icon-lajitong"></i>
            </div>
            <ul>
                <li class="search_history_item" v-for="(data,index) in historyList" :key="index">{{data}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return{
                historyItem:'',
                historyList:[]
            }
        },
        methods:{
            handleEnter(e){
                this.historyItem = e.target.value
                this.historyList.push(this.historyItem);
                e.target.value = '';
            }
        }
    }
</script>

<style scoped>
    .search{
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        padding:0.16rem;
        box-sizing: border-box;
    }

    .search_input{
        width:100%;
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom:0.32rem;
    }

    .search_input>form{
        width:3.08rem;
        height:0.35rem;
        box-sizing: border-box;
        border:1px solid #D9D9D9;
        display:flex;
        align-items: center;
        padding:0.05rem 0.1rem;
    }

    .search_something{
        height:100%;
        flex:1;
        border:none;
    }

    .search_something::placeholder{
        color:#d6d6d6;
    }

    .cancel{
        font-size:0.12rem;
        color:#333
    }

    .hot_search_wrap{
        height:0.35rem;
        margin-bottom:0.32rem;
    }

    .hot_search{
        font-size:0.15rem;
    }


    .search_history_wraper{
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom:0.210rem;
    }

    .search_history_wraper p{
        font-size:0.15rem;
    }


    .search_history_wrap>ul{
        display:flex;
        align-items: center;
        flex-wrap:wrap;
    }

    .search_history_wrap>ul .search_history_item{
        padding:0.095rem 0.28rem;
        margin:0 0.16rem 0.16rem 0;
        background:#F6F6F6;
        font-size: .125rem;
        box-sizing: border-box  ;
    }

    .search_icon{
        width:0.24rem;
        height:0.24rem;
        text-align: center;
        line-height:0.21rem;
    }

    .icon-sousuo-:before{
        color:#BEBEBE;
        font-size:0.2rem;
    }

    .cancel_icon{
        width: 0.24rem;
        height:0.24rem;
        text-align:center;
        line-height:0.24rem;
    }

    .icon-lajitong:before{
        font-size:0.14rem;
        color: #666466;;
    }
</style>