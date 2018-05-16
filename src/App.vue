<template>
  <div id="app">
    <bmasterHeader></bmasterHeader>
    <bmasterNav></bmasterNav>
    <!-- <router-view></router-view> -->
    <bmasterSection></bmasterSection>
    <bmasterFooter></bmasterFooter>
  </div>
</template>

<script type="text/javascript">

import bmasterHeader from './components/BmasterHeader.vue';
import bmasterFooter from './components/BmasterFooter.vue';
import bmasterNav from './components/BmasterNav.vue';
import bmasterSection from './components/BmasterSection.vue';

export default{
  name : 'app',
  components : { bmasterHeader, bmasterNav, bmasterSection, bmasterFooter }
}

</script>
