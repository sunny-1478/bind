<template>
    <div>
       
        <mt-navbar v-model="active">
            <mt-tab-item id="1">123
                <img src="../../assets/rel.png" alt="" slot="icon">
            </mt-tab-item>
            <mt-tab-item id="2">123
                <img src="../../assets/rel.png" alt="" slot="icon">
            </mt-tab-item>
            <mt-tab-item id="3">
                <img src="../../assets/rel.png" alt="" slot="icon">
                123</mt-tab-item>
            <mt-tab-item id="4">123
                <img src="../../assets/rel.png" alt="" slot="icon">
            </mt-tab-item>
        </mt-navbar>
        <h1>{{active}}</h1>
    </div>
</template>
<script>
export default ({
    data(){
        return{
            active:'1'
        }
    },
    watch:{
        active(){
            console.log(`${this.active}`);
        }
    }

})
</script>