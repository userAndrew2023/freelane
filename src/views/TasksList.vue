<template>
    <div class="tasks">
        <div class="len_tasks">
            <div class="inline">
                <p class="found">Found {{ tasks.length }} tasks</p>
                <router-link to="/task/create">
                    <div class="btn_div">
                        <button><span class="material-symbols-outlined icon">add</span>Add task</button>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-for="item in tasks" :key="item.id" class="hr">
            <TasksListItem :json="item"></TasksListItem>
        </div>
    </div>
</template>

<script>

import TasksListItem from '../components/TasksListItem'

export default {
    data () {
        return {
            tasks: []
        }
    },
    components: {
        TasksListItem  
    },
    methods: {
        new_task() {
            window.location.href = "/"
        }
    },
    mounted () {
        fetch("http://localhost:8081/task/").then(response => response.json()).then(json => {
            this.tasks = json
        })
    }
}

</script>

<style scoped>

.inline {
    display: inline;
}

.found {
    display: inline-block;
}

p {
    background-color: #fff;
}

.icon {
    color: #fff;
    background-color: #0000ff;
    font-size: 25px;
}

div {
    background-color: #fff;
}

.pagination {
    padding: 10px;
}

.tasks {
    margin: 0 400px 0 400px;
}

.len_tasks {
    text-align: left;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    font-size: 20px;
}

.btn_div {
    float: right;
    padding-top: 5px;
    margin: 0 auto;
    display: inline-block;
}

button {
    padding: 10px;
    color: #fff;
    border: none;
    font-size: 17px;
    font-weight: 400;
    border-radius: 7px;
    display: flex; align-items: center; line-height :1;
    background-color: #0000ff;
}

button:hover {
    cursor: pointer;
}


.hr {
    text-align: left;
    padding: 0 20px 0 20px
}

</style>
