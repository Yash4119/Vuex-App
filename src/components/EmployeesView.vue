<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 text-success mt-3">Employee</p>
                <p class="fst-italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus? Qui saepe inventore eum, libero fugit animi a, tempora ea distinctio debitis at vero. Cumque quibusdam ex perferendis necessitatibus laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odit quasi voluptatem perspiciatis. Labore repellendus nemo ab aliquid tenetur natus quas exercitationem? Sit ullam accusantium doloribus iure dolores ratione cum!</p>
            </div>
        </div>
    </div>

    <!-- {{ employees }} -->

    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 my-1">
                <ul class="list-group">
                    <li v-for="employee in employeeState.employees" :key="employee.id"  class="list-group-item">
                        <input :checked="employee.isSelected" @change="updatedSelected(employee.id)" type="checkbox">
                        {{ employee.name }}
                        <!-- {{ employee.username }}
                        {{ employee.email }} -->
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <div v-for="employee in employeeState.employees" :key="employee.id">
                    <div class="card my-1" v-if="employee.isSelected">
                        <div class="card-body list-group-item-success">
                            <ul class="list-group ">
                                <li class="list-group-item">Id : <span class="fw-bold">{{ employee.id }}</span></li>
                                <li class="list-group-item">Name : <span class="fw-bold">{{ employee.name }}</span></li>
                                <li class="list-group-item">Email : <span class="fw-bold">{{ employee.email }}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
    name: 'EmployeesView',
    methods:{
        updatedSelected: function(empId){
            this.$store.dispatch("employeeModule/updateSelected",{Id:empId})
        }
    },
    computed: mapGetters({
        employeeState : "getEmployeeState"
    })
}

</script>