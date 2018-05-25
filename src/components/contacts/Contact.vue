<template>
  <article class="row">
    <div class="input-field col s12">
      <input disabled type="text" v-model="contact.no" class="validate">
      <label class="active" for="No">No</label>
    </div>

    <div class="input-field col s12">
      <input type="text" v-model="contact.name">
      <label class="active" for="Name">Name</label>
    </div>
    <div class="input-field col s12">
      <input type="text" v-model="contact.tel">
      <label class="active" for="Tel">Tel</label>
    </div>
    <div class="input-field col s12">
      <input type="text" v-model="contact.address">
      <label class="active" for="Address">Address</label>
    </div>
    <div class="input-field col s12">
      <input type="text" v-model="contact.photo">
      <label class="active" for="Photo">Photo</label>
    </div>

    <div class="col s2">
      <a class="red-text lighten-2-text a-custom-button" @click="updateButtonClick">Update</a>
    </div>
    <div class="col s2">
      <a class="red-text lighten-2-text a-custom-button" @click="cancelButtonClick">Cancel</a>
    </div>

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
        if(response.no == null){
          M.toast({html: 'ContactNo is invaild'});
        }
        vthis.contact = response;
      }
    )
  },
  methods : {
    updateButtonClick : function() {

      var vthis = this;

      this.$store.dispatch(Constant.UPDATE_CONTACT, this.contact).then(
        function(response){
          M.toast({html: 'Update Completed'});
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

