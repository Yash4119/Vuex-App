<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">Counter</p>
                <p class="fst-italic">
                    Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.    
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-5">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <p class="h3 display-3"> {{ count }} </p>
                        <button class="btn btn-success m-1" v-on:click="incrementCount">Increment</button>
                        <button class="btn btn-warning m-2" @click="decrementCount">Decrement</button>
                        <button class="btn btn-danger m-1" @click="incrementCountBy(by)">Increment By</button>
                        <div class="container">
                            <label class="m-1">Increament Value By : </label>
                            <input class="card m-1" type="text" v-model.number="by">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: "CounterView",
    data(){
        return{
            count:0,
            by:0,
            incBy:false
        }
    },
    methods:{
        incrementCount(){
            this.count += 1;
        },
        incrementCountBy(by){
            this.count += by;
        },
        decrementCount(){
            if(this.count > 0)this.count -= 1;
        }
    }
}

</script>