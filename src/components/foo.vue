<template>
    <div>
        <h2>Foo</h2>
        <p>{{$store.state.count}}</p>
        <button @click="$store.commit('add',2)">+</button>
        <van-button type="default">Default</van-button>
        <van-button type="primary">Primary</van-button>
        <van-button type="info">Info</van-button>
        <van-button type="danger">Danger</van-button>
        <van-button type="warning">Warning</van-button>
        <van-cell-group>
        <van-cell title="Cell title" value="Content" />
        <van-cell title="Cell title" value="Content" label="Description" />
        </van-cell-group>

        <i class="iconfont icon-icon_fuben1"></i>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
