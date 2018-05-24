//상태를 변경하는 기능만...
//search keyword
//search mode 정도 있을듯...
//

import Constant from '@/const.js'

export default{
  [Constant.UPDATE_SEARCH_YN] : (state, payload) => {
    state.searchYn = payload;
  },

  [Constant.UPDATE_SEARCH_KEYWORD] : (state, payload) => {
    state.searchKeyword = payload;
  },

  [Constant.DELETE_CONTACT] : (state, payload) => {
    for(let i=0; i<state.contacts.length; i++){
      if(state.contacts[i].no == payload){
       state.contacts.splice(i, 1);
       break;
     }
    }
  },

  [Constant.UPDATE_CONTACT] : (state, payload) => {
    for(let i=0; i<state.contacts.length; i++){
      if(state.contacts[i].no == payload.no){
       state.contacts[i] = payload;
       break;
     }
    }
  },


  [Constant.UPDATE_PAGENO] : (state, payload) => {
    state.pageno = payload;
  },


  [Constant.CONCAT_CONTACTS] : (state, payload) => {
    if(state.contacts.length > 0){
      state.contacts = state.contacts.concat(payload);
    }else{
      state.contacts = payload;
    }

  },

  [Constant.CLEAR_CONTACTS] : (state) => {
    state.contacts = [];
  }
}

