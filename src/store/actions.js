import {REQUESTING,REQ_SUCCESS,REQ_FAIL} from'./mutation-types'
import axios from 'axios'
export default {
search({commit},username){
    commit(REQUESTING)
  const url =`https://api.github.com/search/users?q=${username}`;
    axios.get(url)
      .then(response=>{
        const result = response.data;
        const users = result.items.map(item=>({
          username: item.login,
          header_url: item.avatar_url,
          url: item.html_url
        }))
        commit(REQ_SUCCESS,{users})
      })
      .catch(err=>{
        commit(REQ_FAIL)
      })


}
}
