<template>
  <section>
    <article>
      <bmasterSearch></bmasterSearch>
    </article>
    <article>
      <bmasterList></bmasterList>
    </article>
  </section>
</template>





<script type="text/javascript">

import bmasterSearch from './sections/BmasterSearch.vue';
import bmasterList from './sections/BmasterList.vue';


export default {
  name: 'bmasterSection',
  components : { bmasterSearch, bmasterList }
}

</script>

