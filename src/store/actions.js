import Constant from '../const.js';
import contactsApi from '../api/ContactsAPI.js'

export default {
  [Constant.SELECT_CONTACTS] : (store, payload) => {
    //search
    let json = contactApi.selectContacts(payload.pageno, payload.pagesize);
    store.commit(Const.FETCH_CONTACTS, json);

  }
}
