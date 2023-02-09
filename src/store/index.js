import { createStore } from 'vuex'
import counterModule from './modules/counterModule'
import employeeModule from './modules/employeeModule';
import userListModule from './modules/userListModule';

export default createStore({
  state: {
    counterState : counterModule.state,
    employeeState: employeeModule.state,
    userState: userListModule.state,
  },
  getters: {
    getCounterState: function(state){
      return state.counterState.counter;
    },
    getEmployeeState: function(state){
      return state.employeeState.employeeList;
    },
    getUserState: function(state){
      return state.userState.userList;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    employeeModule,
    userListModule
  }
})
