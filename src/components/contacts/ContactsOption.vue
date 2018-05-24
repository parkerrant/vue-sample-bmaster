<template>
  <div>
    <input type="text" placeholder="search" v-model="searchKeyword" @keyup.enter="searchButtonClick" />
    <input type="button" value="search" @click="searchButtonClick" />
    <input type="button" value="seeAll" @click="seeAllButtonClick" v-show="stateSearchYn" />
    <input type="button" value="add" @click="addButtonClick" v-show="!stateSearchYn" />
  </div>
</template>



<script type="text/javascript">

import Constant from '@/constants/contacts/contactConstants.js'
import { mapState } from 'vuex';

export default {
  name: 'contactsOption',
  data : function(){
    return {searchKeyword : ''}
  },
  methods : {
    searchButtonClick : function(){
      //search action act
      var vthis = this;

      this.$store.commit(Constant.CLEAR_CONTACTS);
      this.$store.commit(Constant.UPDATE_SEARCH_YN, true);
      this.$store.commit(Constant.UPDATE_PAGENO, 1);
      this.$store.dispatch(Constant.SEARCH_CONTACTS, this.searchKeyword).then(
        function(response){
          vthis.$store.commit(Constant.CONCAT_CONTACTS, response)
        }
      );

    },
    seeAllButtonClick : function(){
      var vthis = this;

      this.$store.commit(Constant.CLEAR_CONTACTS);
      this.searchKeyword = '';
      this.$store.dispatch(Constant.SELECT_CONTACTS, {pageno : this.statePageno, pagesize : Constant.PAGE_SIZE}).then(
        function(response){
          vthis.$store.commit(Constant.CONCAT_CONTACTS, response.contacts)

        }
      );

    },
    addButtonClick : function() {
      this.$router.push({ path: 'contacts/contact/add'});
    }
  },
  computed : mapState({
    stateSearchYn : 'searchYn',
    statePageno : 'pageno'
    }
  )

}

</script>

