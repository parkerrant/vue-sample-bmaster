<template>
  <div>
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="text">

  </div>
</template>

<script type="text/javascript">

import Constant from '@/const.js';
import { mapState } from 'vuex';


export default {
  name: 'contact',
  mounted : function(){
    //store의 contacts 존재여부 기준으로 핸들링한다.
    //있으면 그대로 부르고 없으면 라우트 파라미터를 참조한다.
  },
  computed : mapState([ 'contact' ]),
  methods : {
    updateButtonClick : function() {
      this.$store.dispatch(Constant.SELECT_CONTACTS, {pageno : this.pageno, pagesize : 5})
    },
    closeButtonClick : function() {
      this.$route.go(-1)
    }
  }
}

</script>

