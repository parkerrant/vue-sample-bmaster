<template>
  <div id="app">
    <bmasterHeader></bmasterHeader>
    <bmasterFooter></bmasterFooter>
  </div>
</template>

<script type="text/javascript">

import bmasterHeader from './components/BmasterHeader.vue';
import bmasterFooter from './components/BmasterFooter.vue';

export default{
  name : 'app',
  components : { bmasterHeader, bmasterFooter }
}

</script>
