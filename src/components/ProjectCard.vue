<template>
    <div class="card">
        <img class="card_img" :src="project.img" alt="">
        <h3>{{ project.title }}</h3>
        <p v-if="project.type">{{ project.type.name }}</p>
        <p>{{ project.description }}</p>
        <router-link :to="{ name: 'project.show' , params: { slug: project.slug } }">
            <button>More Info</button>
        </router-link>
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

.card_img{
    width: 100%;
}
</style>