<template>
  <div id="app">
   <!-- <add-blog></add-blog> -->
   <!-- <show-blogs></show-blogs> -->
   <blog-header></blog-header>
   <router-view></router-view>
  </div>
</template>

<script>
import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import BlogHeader from './components/BlogHeader.vue'
// import SingleBlog from './components/SingleBlog'


export default {
    name: 'app',
    components: {
        AddBlog,ShowBlogs,BlogHeader
    }
}
</script>

<style>

</style>

