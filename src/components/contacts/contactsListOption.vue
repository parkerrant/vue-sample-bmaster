<template>
  <div>
    <input type="text" placeholder="search" v-model="searchKeyword" @keyup.enter="searchButtonClick" />
    <input type="button" value="search" @click="searchButtonClick" />
    <input type="button" value="seeAll" @click="seeAllButtonClick" v-show="stateSearchYn" />
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
      this.$store.commit(Constant.UPDATE_SEARCH_KEYWORD, this.searchKeyword);
      this.$store.dispatch(Constant.SEARCH_CONTACTS, this.searchKeyword);

    },
    seeAllButtonClick : function(){
      this.$store.commit(Constant.CLEAR_CONTACTS);
      this.$store.dispatch(Constant.SELECT_CONTACTS, {pageno : this.statePageno, pagesize : 5});
      this.$store.commit(Constant.UPDATE_SEARCH_KEYWORD, '');
      this.searchKeyword = '';
    }
  },
  computed : mapState({
    stateSearchYn : 'searchYn',
    statePageno : 'pageno',
    stateSearchKeyword1 : 'searchKeyword1'
    }
  )

}

</script>

