<template>
  <article class="row">
    <div class="col s12">

      <table class="centered striped">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
            <th>delete</th>
            <th>info</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts">
            <td>{{contact.no}}</td>
            <td>{{contact.name}}</td>
            <td>{{contact.tel}}</td>
            <td>{{contact.address}}</td>
            <td><input type="button" class="waves-effect waves-light btn-small" value="delete" @click="deleteButtonClick"></td>
            <td><input type="button" class="waves-effect waves-light btn-small" value="update" @click="infoButtonClick"></td>
          </tr>
        </tbody>
      </table>

    </div>

    <div class="col s1 push-s5">
      <input type="button" class="waves-effect waves-light btn" value="fetch" @click="fetchButtonClick" v-show="!searchYn" />
    </div>

  </article>
</template>

<script type="text/javascript">

import Constant from '@/constants/contacts/contactConstants.js';
import { mapState } from 'vuex';


export default {
  name: 'contacts',
  computed : mapState([ 'contacts', 'pageno', 'searchYn' ]),
  methods : {
    fetchButtonClick : function() {

      var vthis = this;

      this.$store.commit(Constant.UPDATE_SEARCH_YN, false);
      this.$store.dispatch(Constant.SELECT_CONTACTS, {pageno : this.pageno, pagesize : Constant.PAGE_SIZE}).then(
        function(response){
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

