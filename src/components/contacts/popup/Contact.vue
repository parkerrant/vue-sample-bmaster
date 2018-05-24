<template>
  <div>
    <p>contact detail info</p>

    <input type="text" v-model="no">
    <input type="text" v-model="name">
    <input type="text" v-model="tel">
    <input type="text" v-model="address">
    <input type="text" v-model="photo">



    <input type="button" value="update" @click="updateButtonClick">
    <input type="button" value="cancel" @click="cancelButtonClick">

  </div>
</template>

<script type="text/javascript">

import Constant from '@/const.js';
import { mapState } from 'vuex';


export default {
  name: 'contact',
  data: function(){
    return {no : '', name : '', tel : '', address : '', photo : ''};
  },
  mounted : function(){

    var vthis = this;

    this.$store.dispatch(Constant.SELECT_CONTACT, this.$route.params.no).then(
      function(response){
        vthis.no = response.no;
        vthis.name = response.name;
        vthis.tel = response.tel;
        vthis.address = response.address;
        vthis.photo = response.photo;
      }
    )
  },
  methods : {
    updateButtonClick : function() {

      var vthis = this;

      this.$store.dispatch(Constant.UPDATE_CONTACT, { no : this.no, name : this.name, tel : this.tel, address : this.address, photo : this.photo }).then(
        function(response){
          vthis.$store.commit(Constant.UPDATE_CONTACT, { no : vthis.no, name : vthis.name, tel : vthis.tel, address : vthis.address, photo : vthis.photo });
          vthis.$router.push({ path: '/contacts'});
        }
      )
    },
    cancelButtonClick : function(){
      this.$router.go(-1);
    }
  }
}

</script>

