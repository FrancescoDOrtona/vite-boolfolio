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
    <div class="container">
        <ul class="pagination">
          <li v-for="n in lastPage" :key="n" @click="setPage(n)" :class="{'active': n === page}">{{ n }}</li>
        </ul>
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
      page: 1,
      lastPage: 0
    }
  },
  watch: {
    page: function() {
      this.projects = []
      this.fetchProjects()
    }
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {
          page: this.page
        }
      }).then((res) => {
        console.log(res)
        this.projects = res.data.results.data
        this.lastPage = res.data.results.last_page
      })
    },
    setPage(n){
      this.page = n
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

  .pagination{
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 30px;
    li{
      cursor: pointer;
      border: 1px solid #5161ce;
      border-radius: 50%;
      aspect-ratio: 1;
      padding: 8px;
      display: flex;
      align-items: center;
      overflow: hidden;
      font-weight: bold;
      background-color: #5161ce;
    }
    .active{
      background-color: rgb(109, 11, 173);
      border: 1px solid rgb(109, 11, 173);
    }
  }

 
</style>