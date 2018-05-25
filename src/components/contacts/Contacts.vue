<template>
  <article class="row">
    <div class="col s12">

      <table class="centered">
        <thead class="red-text lighten-2-text">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Address</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts">
            <td>{{contact.no}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.tel}}</td>
            <td>{{contact.address}}</td>
            <td><a class="red-text lighten-2-text a-custom-button" @click="deleteButtonClick">Delete</a></td>
            <td><a class="red-text lighten-2-text a-custom-button" @click="infoButtonClick">Detail</a></td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="col s1 push-s5">
      <a class="red-text lighten-2-text a-custom-button" id="fetchButton" @click="fetchButtonClick" v-show="!searchYn">Fetch</a>
    </div>

  </article>
</template>

<script type="text/javascript">

import Constant from '@/constants/contacts/contactConstants.js';
import { mapState } from 'vuex';


export default {
  name: 'contacts',
  computed : mapState([ 'contacts', 'pageno', 'searchYn' ]),
  mounted : function(){
    //기능상 버그 다수 발생하여 제거
    //document.querySelector('#fetchButton').click();
  },
  methods : {
    fetchButtonClick : function() {

      var vthis = this;

      this.$store.commit(Constant.UPDATE_SEARCH_YN, false);
      this.$store.dispatch(Constant.SELECT_CONTACTS, {pageno : this.pageno, pagesize : Constant.PAGE_SIZE}).then(
        function(response){
          M.toast({html: 'Fetch Completed'});
          vthis.$store.commit(Constant.CONCAT_CONTACTS, response.contacts);
          vthis.$store.commit(Constant.UPDATE_PAGENO, response.pageno + 1);
        }
      )
    },
    deleteButtonClick : function(e) {
      let no = e.currentTarget.parentElement.parentElement.firstChild.innerHTML
      var vthis = this;

      this.$store.dispatch(Constant.DELETE_CONTACT, no).then(
        function(response){
          M.toast({html: 'Delete Completed'});
          vthis.$store.commit(Constant.DELETE_CONTACT, no);
        }
      )
    },
    infoButtonClick : function(e) {
      let no = e.currentTarget.parentElement.parentElement.firstChild.innerHTML
      this.$router.push({ path: '/contacts/contact/' + no})
    }
  }
}

</script>

