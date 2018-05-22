<template>
  <div>

    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
        </tr>
      </thead>
      </tbody>
        <tr v-for="contact in contacts">
          <td>{{contact.no}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
        </tr>
      </tbody>
    </table>

    <input type="button" value="fetch" @click="fetchButtonClick" v-show="!searchYn" />

  </div>
</template>

<script type="text/javascript">

import Constant from '../../../const.js';
import { mapState } from 'vuex';


export default {
  name: 'bmasterList',
  computed : mapState([ 'contacts', 'pageno', 'searchYn' ]),
  methods : {
    fetchButtonClick : function() {
      this.$store.dispatch(Constant.SELECT_CONTACTS, {pageno : this.pageno, pagesize : 5})
    }
  }
}

</script>

