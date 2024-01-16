<template>
    <div v-if="project">
        <div class="container">
            <div>
                <img :src="project.img" alt="">
            </div>
            <h1>{{ project.title }}</h1>
            <small>{{ project.type?.name }}</small>
            <p>{{ project.description }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        props:{
            slug: String
        },
        data() {
            return {
                project: null,
            }
        },methods: {
            fetchProject(){
                axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then((res) =>{
                    this.project = res.data.project
                })
            }
        },created() {
            this.fetchProject()
        },
    }
</script>

<style lang="scss" scoped>

</style>