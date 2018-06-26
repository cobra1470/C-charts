<template>
    <div id="header-bar">
        <h1 class="logo">数据统计</h1>
        <div class="admin-info">
            <div class="dropdown">
                <div class="dropdown-toggle" @click="show = !show">
                    cobra1470
                    &nbsp;&nbsp;<span class="iconfont icon-down" aria-hidden="true"></span>
                </div>
                <ul class="dropdown-menu" v-show="show">
                    <li>
                        <a href="##" class="i-menu">
                            <i class="iconfont icon-power"></i>退出
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'headerBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
    #header-bar{
        width: 100%;
        height: 60px;
        background-color: #ececec;
        background: linear-gradient(to right, #1178f5, #00b3aa);
        .logo{
            float: left;
            display: inline;
            height: 60px;
            line-height: 60px;
            margin-left: 20px;
            font-size: 18px;
            font-weight: 600;
            color: #fff;
            letter-spacing: 3px;
        }
        .admin-info{
            float: right;
            display: inline;
            margin-right: 20px;
            .dropdown{
                position: relative;
                .dropdown-toggle{
                    height: 60px;
                    line-height: 60px;
                    font-size: 14px;
                    color: #fff;
                    cursor: pointer;
                }
                .dropdown-menu{
                    position: absolute;
                    z-index: 3;
                    top: 50px;
                    width: 100%;
                    background-color: #fff;
                    box-shadow: 2px 0 5px #dadada;
                    border-radius: 5px;
                    .i-menu{
                        display: block;
                        padding: 0 8px;
                        line-height: 26px;
                        font-size: 12px;
                        color: #604d64;
                        text-decoration: none;
                        .iconfont{
                            font-size: 14px;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
</style>
