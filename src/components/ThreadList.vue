<template>
  <div class="col-full">
      
      <div class="thread-list">
          
          <h2 class="list-title">
              Threads
          </h2>
          
          <div v-for="thread in threads" :key="thread.id"
          class="thread">
            
            <div>
                <p>
                    <a href="#">{{thread.title}}</a>
                </p>
                <p class="text-faded text-xsmaill">
                    By <a href="#"> {{ userById(thread.userId).name }}</a> {{ thread.publishedAt }}
                </p>
            </div>

            <div class="activity">
                <p class="replies-count">
                    {{ thread.posts.length }} replies
                </p>

                <img :src="userById(thread.userId).avatar" alt="" class="avatar-medium">


                <div>
                    <p class="text-xsmall">
                        <a href="#"> {{userById(thread.userId).name}} </a>
                    </p>
                    <p class="text-xsmall text-faded">
                        <a href="#"> {{ thread.publishedAt }} </a>
                    </p>
                </div>

            </div>

          </div>


      </div>
  </div>
</template>

<script>
import sourceData from '@/data.json';

export default {
    props:{
        threads:{
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            posts: sourceData.posts,
            users: sourceData.users,
        }
    },
    methods:{
        postById(postId){
            return this.posts.find(x => x.id === postId)
        },
        userById(userId){
            return this.users.find(x => x.id === userId)
        }
    }
}
</script>

<style>

</style>