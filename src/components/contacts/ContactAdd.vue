<template>
  <div>
    <p>contact add</p>
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="tel" v-model="tel" >
    <input type="text" placeholder="address" v-model="address">
    <input type="button" value="add" @click="addButtonClick">
    <input type="button" value="go back" @click="cancelButtonClick">
  </div>
</template>

<script type="text/javascript">

import Constant from '@/constants/contacts/contactConstants.js';
import { mapState } from 'vuex';


export default {
  name: 'contactAdd',
  data : function(){
    return {name : '', tel : '', address : ''}
  },
  methods : {
    cancelButtonClick : function(){
      this.$router.go(-1);
    },
    addButtonClick : function(){

      this.$store.dispatch(Constant.INSERT_CONTACT, {name : this.name, tel : this.tel, address : this.address});

      //초기화
      this.$store.commit(Constant.CLEAR_CONTACTS);
      this.$store.commit(Constant.UPDATE_PAGENO, 1);

      this.$router.push({ path: '/contacts'});
    }
  }
}

</script>

