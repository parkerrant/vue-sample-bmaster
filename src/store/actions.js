import Constant from '@/const.js';
import ContactsApi from '@/api/ContactsAPI.js';

export default {
  [Constant.SELECT_CONTACTS] : (store, payload) => {
    //search
    ContactsApi.selectContacts(payload.pageno, payload.pagesize)
      .then(function(response){
        return response.json()
      }).then(function(json){
      store.commit(Constant.CONCAT_CONTACTS, json.contacts);
      store.commit(Constant.UPDATE_PAGENO, json.pageno + 1);
    }).catch(function(ex){
    })
  },

  [Constant.SELECT_CONTACT] : (store, payload) => {

      ContactsApi.selectContact(payload.no)
      .then(function(response){
        return response.json()
      }).then(function(json){
      store.commit(Constant.UPDATE_CONTACT, json.contacts);
    }).catch(function(ex){
    })

  },

  [Constant.SEARCH_CONTACTS] : (store, payload) => {

    //search
    ContactsApi.searchContacts(payload)
      .then(function(response){
        return response.json()
      }).then(function(json){
      store.commit(Constant.CONCAT_CONTACTS, json);
    }).catch(function(ex){
    })

  },

  [Constant.DELETE_CONTACT] : (store, payload) => {

    //search
    ContactsApi.deleteContact(payload)
      .then(function(response){
        return response.json()
      }).then(function(json){
      store.commit(Constant.DELETE_CONTACT, payload);
    }).catch(function(ex){
    })

  }

}
