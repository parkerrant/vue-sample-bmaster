<template>
  <div id="app" class="container">
    <vueHeader></vueHeader>
    <vueNav></vueNav>
    <router-view></router-view>
    <vueFooter></vueFooter>
  </div>
</template>



<script type="text/javascript">

import vueHeader from '@/components/VueHeader.vue';
import vueFooter from '@/components/VueFooter.vue';
import vueNav from '@/components/VueNav.vue';

export default{
  name : 'app',
  components : { vueHeader, vueNav, vueFooter }
}

</script>
