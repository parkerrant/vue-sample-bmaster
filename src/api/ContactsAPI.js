import 'fetch';
import 'es6-promise';

export default {
  fetchContacts : (pageno, pagesize) => {

  },
  fetchContactOne : (no) => {

  },
  addContact : (contact) => {
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
