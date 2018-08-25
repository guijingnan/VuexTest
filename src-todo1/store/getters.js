export default {
  todos(state){
  return state.todos
  },
  totalSize(state){
  return state.todos.length
  },
  completeSize(state){
    return state.todos.reduce((pretotal,todo)=>{
      return pretotal  + (todo.complete?1:0)
    },0)
  },
  isAllComplete(state,getters){
      return getters.completeSize === getters.totalSize && getters.completeSize>0
  }

}
