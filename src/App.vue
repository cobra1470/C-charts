<template>
  <div id="app">
    <header-bar></header-bar>
    <div id="stage-box" :class="{'open': open}">
        <side-bar @toggle="setOpen"></side-bar>
        <div id="content-box">
            <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'App',
      data(){
        return {
            open: false
        }
      },
      methods: {
        setOpen(b){
            this.open = b;
        }
      }
    }

    // 设置一屏展示
    ;(function(){
        var setFullScreen = function(){
            var wHeight = document.documentElement.clientHeight;
            var hHeigth = document.getElementById('header-bar').offsetHeight;
            document.getElementById('content-box').style.height = (wHeight - hHeigth + 'px');
            document.getElementById('side-bar').style.height = (wHeight - hHeigth + 'px');
        }
        window.onresize = () => {
            setFullScreen();
        }

        window.onload = () => {
            setFullScreen();
        }
    })();

    
</script>

<style lang="scss">
@import "../static/fonts/iconfont.css";

*{
    margin: 0;
    padding: 0;
    border: none;
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
}
ul,li{
    list-style: none;
}

#stage-box{
    width: 100%;
    overflow: hidden;
    #side-bar{
        float: left;
        display: inline;
        width: 50px;
        border-right: 1px solid #e1e2e2;
        transition: all 0.3s;
        background-color: #fff;
        overflow: auto;
    }
    #content-box{
        margin-left: 51px;
        background-color: #ececec;
        transition: all 0.3s;
        overflow: auto;
    }
}
#stage-box.open{
    #side-bar{
        width: 180px;
    }
    #content-box{
        margin-left: 181px;
    }
}

</style>
