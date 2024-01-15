<template>
    <div class="card">
        <img :src="project.img" alt="">
        <h3>{{ project.title }}</h3>
        <p v-if="project.type">{{ project.type.name }}</p>
        <p>{{ project.description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    padding: 20px;
    border-radius: 15px;
    background-color: aqua;
}
</style>