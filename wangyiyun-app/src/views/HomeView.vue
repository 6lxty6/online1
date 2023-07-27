<template>

    <topnav />
<ces />
<iconlist />
<musiclist />
</template>

<script>
// @ is an alias to /src
import topnav from '@/components/home/topnav.vue';
import ces from '@/components/home/ces.vue';
import iconlist from '@/components/home/iconlist.vue';
import musiclist from '@/components/home/musiclist.vue';
export default {
  name: 'HomeView',
  components: {
    topnav,
    ces,
    iconlist,
    musiclist

  }
}
</script>
