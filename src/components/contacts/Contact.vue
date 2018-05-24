<template>
  <article>

    <p>contact detail info</p>

    <input type="text" v-model="contact.no">
    <input type="text" v-model="contact.name">
    <input type="text" v-model="contact.tel">
    <input type="text" v-model="contact.address">
    <input type="text" v-model="contact.photo">

    <input type="button" value="update" @click="updateButtonClick">
    <input type="button" value="cancel" @click="cancelButtonClick">

  </article>
</template>

<script type="text/javascript">

import Constant from '@/constants/contacts/contactConstants.js';

export default {
  name: 'contact',
  data: function(){
    return { contact :
        {no : '', name : '', tel : '', address : '', photo : ''}
    };
  },
  mounted : function(){

    var vthis = this;

    this.$store.dispatch(Constant.SELECT_CONTACT, this.$route.params.no).then(
      function(response){
        vthis.contact = response;
      }
    )
  },
  methods : {
    updateButtonClick : function() {

      var vthis = this;

      this.$store.dispatch(Constant.UPDATE_CONTACT, this.contact).then(
        function(response){
          vthis.$store.commit(Constant.UPDATE_CONTACT, vthis.contact);
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

