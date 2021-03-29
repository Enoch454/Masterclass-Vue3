<template>
    <div class="col-large push-top"
        v-for="item in threads"
        :key="item.id">
      
        <h2>{{item.title}}</h2>

        <div class="post-list">
            <div
                class="post"
                v-for="postId in item.posts"
                :key="postId"
                >
                <div class="user-info">
                    <a href="#" class="user-name">
                        {{ userById(postById(postId).userId).name }}
                    </a>
                    <a href="#">
                        <img :src="userById(postById(postId).userId).avatar" alt="" class="avatar-large">
                    </a>
                </div>
                <div class="post-content">
                    <div>
                        <p>
                            {{ postById(postId).text }}
                        </p>
                    </div>
                </div>
                <div class="post-date text-faded">
                    {{postById(postId).publishedAt}}
                </div>
            </div>
        </div>  
        
  </div>
</template>

<script>
import sourceData from '@/data.json';

export default {
    data() {
        return {
            threads: sourceData.threads,
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