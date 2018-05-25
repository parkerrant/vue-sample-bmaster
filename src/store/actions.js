import Constant from '@/constants/contacts/contactConstants.js';
import ContactsApi from '@/api/Contacts/ContactsAPI.js';

export default {

  [Constant.SELECT_CONTACTS] : (store, payload) => {
    //search

    return new Promise((resolve, reject) => {
      ContactsApi.selectContacts(payload.pageno, payload.pagesize)
        .then(function(response){
          return response.json()
        }).then(function(json){
        resolve(json);
      }).catch(function(ex){
        M.toast({html: Constant.SELECT_CONTACTS + ' failed!!'});
        reject(Error(ex.toString()));
      })
    })


  },

  [Constant.SELECT_CONTACT] : (store, payload) => {

    return new Promise((resolve, reject) => {
      ContactsApi.selectContact(payload)
      .then(function(response){
        return response.json()
      }).then(function(json){
        resolve(json)
      }).catch(function(ex){
        M.toast({html: Constant.SELECT_CONTACT + ' failed!!'});
        reject(Error(ex.toString()));
      })
    })


  },

  [Constant.SEARCH_CONTACTS] : (store, payload) => {

    //search
    return new Promise((resolve, reject) => {
      ContactsApi.searchContacts(payload)
        .then(function(response){
          return response.json()
        }).then(function(json){
        resolve(json)
      }).catch(function(ex){
        M.toast({html: Constant.SEARCH_CONTACTS + ' failed!!'});
        reject(Error(ex.toString()));
      })
    })



  },

  [Constant.DELETE_CONTACT] : (store, payload) => {

    return new Promise((resolve, reject) => {
      ContactsApi.deleteContact(payload)
        .then(function(response){
          return response.json()
        }).then(function(json){
        resolve(json);
      }).catch(function(ex){
        M.toast({html: Constant.DELETE_CONTACT + ' failed!!'});
        reject(Error(ex.toString()));
      })
    })



  },

  [Constant.INSERT_CONTACT] : (store, payload) => {

    return new Promise((resolve, rejcet) => {
      ContactsApi.insertContact(payload)
        .then(function(response){
          return response.json()
        }).then(function(json){
        resolve(json);
      }).catch(function(ex){
        M.toast({html: Constant.INSERT_CONTACT + ' failed!!'});
        reject(Error(ex.toString()));
      })
    })


  },

  [Constant.UPDATE_CONTACT] : (store, payload) => {

    return new Promise((resolve, reject) => {
      ContactsApi.updateContact(payload)
      .then(function(response){
        return response.json()
      }).then(function(json){
        resolve(json);
      }).catch(function(ex){
        M.toast({html: Constant.UPDATE_CONTACT + ' failed!!'});
        reject(Error(ex.toString()));
      })
    })
  },

}
