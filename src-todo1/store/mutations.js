import {RECEIVE_TODOS,ADD_TODO,DELETE_TODO,DELETE_DONE,UPDATE_ALL_TODOS} from './mutation_types'
export default {
  [RECEIVE_TODOS](state,{todos}){
    state.todos = todos
  },
  [ADD_TODO](state,{todo}){
     state.todos.unshift(todo)
  },
  [DELETE_TODO](state,{index}){
    state.todos.splice(index,1)
  },
  [DELETE_DONE](state){
   state.todos = state.todos.filter(todo=> !todo.complete
    )
  },
  [UPDATE_ALL_TODOS](state,{isCheck}){
    state.todos.forEach(todo=>todo.complete = isCheck)
  }
}
