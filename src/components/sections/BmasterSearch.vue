<template>
  <div>
    <input type="text" placeholder="search" v-model="searchKeyword" @keyup.enter="searchButtonClick" />
    <input type="button" value="search" @click="searchButtonClick" />
    <input type="button" value="seeAll" @click="seeAllButtonClick" v-show="searchYn" />
  </div>
</template>



<script type="text/javascript">

import Constant from '../../const.js'
import { mapState } from 'vuex';

export default {
  name: 'bmasterSearch',
  data : function(){
    return {searchKeyword : ''}
  },
  methods : {
    searchButtonClick : function(){
      //search action act
      this.$store.dispatch(Constant.SEARCH_CONTACTS, this.searchKeyword);
    },
    seeAllButtonClick : function(){
      this.$store.commit(Constant.CLEAR_CONTACTS);
      this.$store.dispatch(Constant.SELECT_CONTACTS, {pageno : this.pageno, pagesize : 5});
    }
  },
  computed : mapState([ 'searchYn', 'pageno', 'searchYn' ])

}

</script>

