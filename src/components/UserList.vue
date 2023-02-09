<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col mt-3">
                <p class="h3 text-success">User List</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab consequuntur perferendis minus tenetur ullam placeat. Minima vitae rerum doloremque? Blanditiis natus sint perferendis fuga expedita libero quos hic voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam doloribus quisquam saepe ipsum odit nulla cum ex enim. Itaque temporibus sit qui? Maxime nostrum ad iusto, nobis nihil reprehenderit?</p>
            </div>
        </div>
    </div>
    <div class="container mt-5" v-if="userState.loading">
        <div class="row">
            <div class="col">
                <SpinnerView/>
            </div>
        </div>        
    </div>
    <div class="container mt-5" v-if="!userState.loading && userState.errorMsg">
        <div class="row">
            <div class="col">
                <p class="fw-bold text-danger"> {{ userState.errorMsg }}</p>
            </div>
        </div>
    </div>
    <div class="container mt" v-if="!userState.loading && userState.users.length > 0">
        <div class="row">
            <div class="col">
                <table class="table table-hover text-center table-striped">
                    <thead class="bg-secondary text-white">
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>City</th>
                        <th>Company Name</th>
                    </thead>
                    <tbody>
                        <tr v-for="user in userState.users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td> {{ user.email }} </td>
                            <td> {{ user.website }} </td>
                            <td> {{ user.address.city }} </td>
                            <td> {{ user.company.name }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import SpinnerView from "./SpinnerView.vue";

export default{
    components:{
        SpinnerView
    },
    computed: mapGetters({
        userState : "getUserState"
    }),
    created: function(){
        this.$store.dispatch("userListModule/getUsers")
    }
}
</script>