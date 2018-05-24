import 'fetch';
import ES6promise from 'es6-promise';
import Constant from "../../const";

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

  selectContact : (no) => {
    var url = "http://sample.bmaster.kro.kr/contacts/" + no
    return fetch(url)
  },

  insertContact : (contact) => {
    var url = "http://sample.bmaster.kro.kr/contacts";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", 'application/json')
    return fetch(url, {
      method : 'post',
      headers : myHeaders,
      body : JSON.stringify(contact)});
  },

  updateContact : (contact) => {
    var url = "http://sample.bmaster.kro.kr/contacts/" + contact.no
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", 'application/json')
    return fetch(url, {
        method: 'put',
        headers : myHeaders,
        body : JSON.stringify(contact)
    });
  },

  deleteContact : (no) => {
    var url = "http://sample.bmaster.kro.kr/contacts/"+no
    return fetch(url, {method : 'delete'});

  }
}
