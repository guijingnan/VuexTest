import {RECEIVE_TODOS,ADD_TODO,DELETE_TODO,DELETE_DONE,UPDATE_ALL_TODOS} from'./mutation_types'
import storageUtil from '../util/storageUtil'
export default {
  readTodo({commit}){
    setTimeout(()=>{
      const todos = storageUtil.fetch()
      commit(RECEIVE_TODOS, {todos})
    },1000)

  },
addTodo({commit},todo){
commit(ADD_TODO,{todo})
},
  removeTodo({commit},index){
    commit(DELETE_TODO,{index})
  },
  deleteDone({commit}){
    commit(DELETE_DONE)
  },
  updateAllTodos({commit}, isCheck){
      commit(UPDATE_ALL_TODOS,{isCheck})
  }
}
