<template>
    <div>
        <hr>
    </div>
    <div class="iteration">
        <div class="price_title">
            <router-link to="" style="text-decoration: none; color: inherit">
                <span class="title">{{ json.name }}</span>
            </router-link>
            <span class="price">${{ json.cost }}</span>
        </div>
        <div class="description">
            <p>{{ truncate(json.description, 100) }}<span v-if="json.description.length > 100">...</span></p>
        </div>
        <div class="time">
            <span class="material-symbols-outlined icon">schedule</span>{{ json.minutes }} minutes
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            json: Object
        },
        methods: {
            truncate (data, num) {
                const reqdString = 
                data.split("").slice(0, num).join("");
                return reqdString;
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: #fff;
    }

    span {
        background-color: #fff;
    }

    p {
        background-color: #fff;
    }

    .iteration {
        padding: 25px 0 25px 0;
    }

    .time {
        display: flex; align-items: center; line-height :1
    }

    .title {
        font-weight: 500;
        font-size: 25px;
        cursor: pointer;
        text-align: left;
    }

    router-link {
        text-decoration: none;
        color: inherit;
    }

    .icon {
        margin-right: 5px;
    }
    .price {
        float: right;
        font-size: 18px;
        font-weight: 500;
    }

    .description {
        margin-top: 5px;
    }

    span {
        background-color: #fff;
    }
</style>
