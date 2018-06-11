<template>
    <div id="side-bar" :class="{'open': open}">
        <div class="title" @click="toggleSideBar" title="功能导航">
            <span class="text" v-show="open">功能导航</span>
            <span class="iconfont" :class="open ? 'icon-menu-unfold' : 'icon-menu-fold'"></span>
        </div>
        <ul class="simple-nav">
            <li class="menu-item">
                <a href="#" class="m-level1" title="系统通知">
                    <span class="iconfont icon-notice"></span>
                    <span class="text">系统通知</span>
                </a>
            </li>
            <li class="menu-item">
                <a href="#" class="m-level1" title="销售分析">
                    <span class="iconfont icon-analyze"></span>
                    <span class="text">销售分析</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'sideBar',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          open: false
        }
    },
    methods: {
        toggleSideBar(){
            this.open = !this.open;
            this.$emit('toggle', this.open);
        }
    }
}
</script>

<style lang="scss" scoped>
    #side-bar{
        .text{
            line-height: 40px;
            font-size: 12px;
            color: #787a7d;
            display: none;
        }
        .title{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #e1e2e2;
            background-color: #f2f3f4;
            cursor: pointer;
            text-align: center;
            overflow: hidden;
        }
        .simple-nav{
            .menu-item{
                text-align: center;
                a{
                    display: block;
                    height: 40px;
                    line-height: 40px;
                    text-decoration: none;
                    .iconfont{
                        line-height: 40px;
                        font-size: 14px;
                        font-weight: 600;
                        color: #5d5d61;
                    } 
                }
                a:hover{
                    background-color: #f3f4f4;
                }
                a.current{
                    span{
                        color: #4c80e5;
                    }
                }
            }
        }
        
    }
    #side-bar.open{
        .text{
            display: inline-block;    
        }
        .title{
            text-align: left;
            padding-left: 33px;
            padding-right: 15px;
            .iconfont{
                float: right;
                display: inline;
            }
        }
        .simple-nav{
            .menu-item{
                text-align: left;
                a{
                    padding: 0 15px;
                    overflow: hidden;
                    .iconfont{
                        float: left;
                        display: inline;
                    }
                    .text{
                        float: left;
                        display: inline;
                        margin-left: 5px;
                    }
                }
            }
        }
    }
</style>
