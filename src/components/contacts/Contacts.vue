<template>
  <div>

    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>delete</th>
          <th>상세</th>
        </tr>
      </thead>
      </tbody>
        <tr v-for="contact in contacts">
          <td>{{contact.no}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
          <td><input type="button" value="delete" @click="deleteButtonClick"></td>
          <td><input type="button" value="update" @click="infoButtonClick"></td>
        </tr>
      </tbody>
    </table>

    <input type="button" value="fetch" @click="fetchButtonClick" v-show="!searchYn" />

  </div>
</template>

<script type="text/javascript">

import Constant from '@/const.js';
import { mapState } from 'vuex';


export default {
  name: 'contacts',
  computed : mapState([ 'contacts', 'pageno', 'searchYn' ]),
  methods : {
    fetchButtonClick : function() {
      store.commit(Constant.UPDATE_SEARCH_YN, false);
      this.$store.dispatch(Constant.SELECT_CONTACTS, {pageno : this.pageno, pagesize : 5})
    },
    deleteButtonClick : function(e) {
      let no = e.currentTarget.parentElement.parentElement.firstChild.innerHTML
      this.$store.dispatch(Constant.DELETE_CONTACT, no)
    },
    infoButtonClick : function(e) {
      let no = e.currentTarget.parentElement.parentElement.firstChild.innerHTML
      this.$router.push({ path: 'contacts/contact', params: { userId: 123 }})
      //여기서 update url로 이동시킨다
      //이동시키기 전에 conctat state 값을 조회대상 기준으로 업데이트한다
      //업데이트는 no만 진행한다.
    }
  }
}

</script>

