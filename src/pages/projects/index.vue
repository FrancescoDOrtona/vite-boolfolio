<template>
    <div>
        <div class="container">
            <h1 class="title">Projects</h1>
        </div>
    </div>
    <div class="container">
        <div class="grid">
            <ProjectCard v-for="project in projects" :project="project" :key="project.id" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';
export default {
        components:{
            ProjectCard
        },
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        console.log(res)
        this.projects = res.data.results.data
      })
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<style lang="scss" scoped>


.grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4,1fr);
  }

  .title{
    margin: 20px 0px;
  }
</style>