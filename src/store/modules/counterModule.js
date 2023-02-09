export default {
    namespaced : true,
    state:{
        counter:{
            count: 0
        }
    },
    mutations:{
        INCR_COUNTER : function(state){
            state.counter.count += 1;
        },
        DECR_COUNTER : function(state){
            if(state.counter.count > 0){
                state.counter.count -= 1;
            }
        },
        INCR_COUNTER_BY : function(state, payload){
            // Over here payload is an object
            state.counter.count += payload.value;
        }
    },
    actions:{
        incrementCount: function({commit}){
            return commit("INCR_COUNTER");
        },
        incrementCountBy: function({commit},payload){
            return commit("INCR_COUNTER_BY",payload);
        },
        decrementCount: function({commit}){
            return commit("DECR_COUNTER");
        }
    }
}