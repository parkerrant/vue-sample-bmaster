<template>
  <article class="row">
    <div class="row">

      <div class="col s6">
        <input type="text" v-model="searchKeyword" @keyup.enter="searchButtonClick"placeholder="Input Search Keyword" >
      </div>

      <div class="col s1">
        <a class="red-text lighten-2-text a-custom-button" @click="searchButtonClick">Search</a>
      </div>

    </div>
    <div class="row">
      <div class="col s1">
        <a class="red-text lighten-2-text a-custom-button" @click="seeAllButtonClick" v-show="stateSearchYn">See All</a>
      </div>
      <div class="col s1 push-s10">
        <a class="red-text lighten-2-text a-custom-button" @click="addButtonClick" v-show="!stateSearchYn">Add</a>
      </div>
    </div>
  </article>
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
          if(response.status == 'fail'){
            M.toast({html: response.message});
          }else{
           M.toast({html: 'Search Completed (Count : '+response.length+')'});
           vthis.$store.commit(Constant.CONCAT_CONTACTS, response)
          }
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
          vthis.$store.commit(Constant.UPDATE_SEARCH_YN, false)
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
