import 'fetch';
import ES6promise from 'es6-promise';
import Constant from "../const";

ES6promise.polyfill();

export default {
  selectContacts : (pageno, pagesize) => {
    var url = "http://sample.bmaster.kro.kr/contacts?pageno=" + pageno + "?pagesize=" + pagesize
    return fetch(url)
  },

  searchContacts : (searchKeyword) => {
    var url = "http://sample.bmaster.kro.kr/contacts/search/" + searchKeyword
    return fetch(url)
  },

  selectContactOne : (no) => {
    var url = "http://sample.bmaster.kro.kr/contacts/" + no

    fetch(url).then(function(response){
        return response.json()
    }).then(function(json){
      alert(json)
    }).catch(function(ex){
    })
  },
  insertContactOne : (contact) => {
    var url = "http://sample.bmaster.kro.kr/contacts"

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", 'application/json')

    fetch(url, {
        method: 'post',
        headers : myHeaders,
        body : JSON.stringify(contact)
    }).then(function(response){
        return response.json()
    }).then(function(json){
        alert(json.message)
    }).catch(function(ex){

    })
  },
  updateContact : (contact) => {
    var url = "http://sample.bmaster.kro.kr/contacts/" + contact.no

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", 'application/json')

    fetch(url, {
        method: 'put',
        headers : myHeaders,
        body : JSON.stringify(contact)
    }).then(function(response){
        return response.json()
    }).then(function(json){
        alert(json.message)
    }).catch(function(ex){

    })
  },
  deleteContact : (no) => {

    var url = "http://sample.bmaster.kro.kr/contacts/"+no
    return fetch(url, {method : 'delete'});

  }
}
