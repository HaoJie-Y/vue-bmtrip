<template>
    <div class="messageboxContainer">
        <div class="messageBox_title">
            <div>{{title}}</div>
            <div>X</div>
        </div>
        <div class="messageBox_content">
            {{content}}
        </div>
        <div class="messageBox_btn">
            <div>确认</div>
        </div>
    </div>
</template>
<script>
export default {
	
}
</script>
<style>
    .messageboxContainer {
        background-color: #fff;
        width: 2.56rem;
        height: 1.59rem;
        box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
        border-radius: .02rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 20;
    }
    .messageBox_title {
        width: 100%;
        height: 0.43rem;
        background: #f8f8f8;
        padding: 0 0.1rem;
        line-height: 0.86rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }
    .messageBox_content {
        padding: 0.2rem 1rem; 
        text-align: center;
    }
    .messageBox_btn {
        height: 0.57rem;
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>