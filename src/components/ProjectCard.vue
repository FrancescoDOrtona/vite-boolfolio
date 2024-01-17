<template>
    <div class="card">
        <img class="card_img" :src="project.img" alt="">
        <h3>{{ project.title }}</h3>
        <p class="card_type" v-if="project.type">{{ project.type.name }}</p>
        <p class="card_description">{{ project.description }}</p>
        <router-link :to="{ name: 'project.show' , params: { slug: project.slug } }">
            <button class="info-button">More Info</button>
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
    color: white;
    border-radius: 15px;
    background-color: lightcyan;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 9px 10px 20px 0px rgba(0, 0, 2, 0.3);
    background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)), url(../../public/card-bg.jpg);
}

.card_img{
    width: 100%;
}

.card_type{
    color: #8797ff;
    font-weight: bold;
    text-decoration: underline;
}

.card_description{
    flex-grow: 1;
}

.info-button{
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #5161ce;
    cursor: pointer;
    background-color: #5161ce;
    font-weight: bold;
}

.info-button:hover{
    box-shadow: 1px 4px 7px 2px rgba(0, 0, 2, 0.3);
}
</style>