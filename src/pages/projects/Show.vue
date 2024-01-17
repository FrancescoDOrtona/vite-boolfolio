<template>
    <div v-if="project">
        <div class="container info">
            <div class="info_img">
                <img :src="project.img" alt="">
            </div>
            <div class="info_content">
                <h1>{{ project.title }}</h1>
                <small>{{ project.type?.name }}</small>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        slug: String
    },
    data() {
        return {
            project: null
        }
    }, methods: {
        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then((res) => {
                    this.project = res.data.project
                }).catch((error) => {
        if(error.response.status === 404) {
          this.$router.push({ name: 'error' })
        }
      })
        }
    }, created() {
        this.fetchProject()
    },
}
</script>

<style lang="scss" scoped>
.info {
    margin-top: 100px;
    display: flex;
    gap: 50px;
}

.info_img {
    display: block;
    img{
        width: 100%;
    }
}
.info_content{
    display: flex;
    flex-direction: column;
    gap: 15px;
    small{
        color: red;
        font-weight: bold;
    }
}
</style>