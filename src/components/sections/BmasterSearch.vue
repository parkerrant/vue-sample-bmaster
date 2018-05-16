<template>
  <p>Bmastser Search area</p>
  <input type="text" placeholder="search" v-model="searchKeyword" @keyup.enter="searchButtonClick">
  <input type="button" value="search" @click="searchButtonClick">
  <p>{{ responseMessage }}</p>
  <input type="button" value="list"  @click="goToListButtonClick">
  <input type="button" value="add" @click="addContactButtonClick">
</template>






Vue.component('contacts-aside', {
    template : '#contacts-aside',
    data : function(){
        return {
            searchKeyword : '',
            responseMessage : ''
        }
    },
    methods : {
        searchButtonClick : function(){
          eventBus.$emit('searchContacts', this.searchKeyword)
        },
        goToListButtonClick : function(){
            eventBus.$emit('initializeContacts', null)
            this.clearSearchKeyword();
        },
        clearSearchKeyword : function(){
            this.searchKeyword = '';
        },
        setResponseMessage : function(responseMessage){
            this.responseMessage =  responseMessage
        },
        addContactButtonClick : function(){
            eventBus.$emit('showAddPopup', null)
        }
    },
    created : function(){
        eventBus.$on('setResponseMessage', this.setResponseMessage)
    }
})


<script type="text/javascript">

export default {
  name: 'bmasterSearch',
  data: function(){
    return { searchKeyword : '', responseMessage : '' }
  }
}

</script>

