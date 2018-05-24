import Constant from '@/const.js';
import ContactsApi from '@/api/ContactsAPI.js';

import ES6promise from 'es6-promise';
ES6promise.polyfill();

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

  },

  [Constant.INSERT_CONTACT] : (store, payload) => {

    //search
    ContactsApi.insertContact(payload)
      .then(function(response){
        return response.json()
      }).then(function(json){
        //insert success
    }).catch(function(ex){
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
