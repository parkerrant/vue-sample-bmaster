import fetch from 'fetch';
import ES6promise from 'es6-promise';

ES6promise.polyfill();

export default {
  selectContacts : (pageno, pagesize) => {
    var url = "http://sample.bmaster.kro.kr/contacts?pageno=" + pageno + "?pagesize=" + pagesize
    fetch(url).then(function(response){
        return response.json()
    }).then(function(json){
      alert(json.contacts)

      return json.contacts

    }).catch(function(ex){
    })
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
  deleteContactOne : (no) => {

    var url = "http://sample.bmaster.kro.kr/contacts/"+no/

    fetch(url, {
      method : 'delete'
    }).then(function(response){
    return response.json()
    }).then(function(json){
      alert(json.message)
      if(json.status === "success"){

      }else{

      }
    }).catch(function(ex){

    })

  }
}
