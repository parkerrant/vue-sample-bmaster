//상태를 변경하는 기능만...
//search keyword
//search mode 정도 있을듯...
//

import Constant from '../../const.js'

export default{
  [Constant.UPDATE_SEARCH_MODE] : (state) => {
    state.searchMode = !( state.searchMode );
  }
}
