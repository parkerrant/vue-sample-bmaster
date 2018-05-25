<template>
  <article class="row">
    <div class="input-field col s12">
      <input type="text" v-model="name">
      <label for="Name">Name</label>
    </div>
    <div class="input-field col s12">
      <input type="text" v-model="tel">
      <label for="Tel">Tel</label>
    </div>
    <div class="input-field col s12">
      <input type="text" v-model="address">
      <label for="Address">Address</label>
    </div>

    <div class="col s2">
      <a class="red-text lighten-2-text a-custom-button" @click="addButtonClick">Add</a>
    </div>
    <div class="col s2">
      <a class="red-text lighten-2-text a-custom-button" @click="cancelButtonClick">Cancel</a>
    </div>

  </article>
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

      var vthis = this;

      this.$store.dispatch(Constant.INSERT_CONTACT, {name : this.name, tel : this.tel, address : this.address}).then(
        function(response){
          M.toast({html: 'Add Completed'});
          vthis.$store.commit(Constant.CLEAR_CONTACTS);
          vthis.$store.commit(Constant.UPDATE_PAGENO, 1);
          vthis.$router.push({ path: '/contacts'});
        }
      )
    }
  }
}

</script>

