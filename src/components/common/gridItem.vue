<template>
    <div>   
        <div class="item-title">
            {{ title }}
            <a :href="id" class="btn-detail iconfont icon-arrow-right" v-if="id">&nbsp;</a>
        </div>
        <div class="c">  
            <slot name="chart">chart box</slot>       
        </div>
    </div>
</template>

<script>
export default {
  name: 'gridItem',
  props:['title', 'id'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    .item-title{
        height: 18px;
        line-height: 18px;
        font-size: 16px;
        padding: 20px 20px 10px;
        .iconfont{
            float: right;
            display: inline;
            width: 16px;
            height: 16px;
            text-decoration: none;
            color: #d5d6d8;
        }
        .iconfont:hover{
            color: #43a4ff;
        }
    }
    .c{
        padding: 0 20px 10px 20px;
    }
</style>
