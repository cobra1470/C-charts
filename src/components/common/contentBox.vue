<template>
    <div class="w">
        <div class="content-header">
            {{ header }}
        </div>
        <div class="main-content">
            <slot name="c">没有内容！</slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'contentBox',
  props:['header'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    .content-header{
        height: 16px;
        line-height: 16px;
        padding: 12px;
        font-size: 14px;
        border-bottom: 1px solid #e1e2e2;
        background-color: #fff;
    }
    .main-content{
        padding: 20px;
        .grid-item{
            margin-bottom: 18px;
            border: 1px solid #e1e2e2;
            border-radius: 2px;
            background-color: #fff;
        }
        .grid-item:hover{
            border-color: #dbdbdb;
            box-shadow: 2px 0 8px #dadada;
        }
        .col-1{
            width: 100%;
        }
        .col-2{
            overflow: hidden;
            .left{
                float: left;
                display: inline;
                width: 49%;
            }
            .right{
                float: right;
                display: inline;
                width: 49%;
            }
        }
    }
</style>
