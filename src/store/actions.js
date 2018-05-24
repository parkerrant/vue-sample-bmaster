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
        reject(ex);
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
        reject(ex)
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
        reject(ex)
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
        reject(ex);
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
        reject(ex);
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
        reject(ex);
      })
    })
  },

}
