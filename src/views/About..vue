<template>
  <div class="main--subject">
    <search/>
    <unfinished/>
  </div>
</template>
<script>
import search from '../components/search__manu'
import unfinished from '../components/about/unfinished__courses'
export default {
  data(){
    return{

    }
  },
  components:{
    search,
    unfinished
  }
}
</script>
<style lang="scss" scoped>
.main--subject{
  padding: 60px 68px;
}
@media (max-width: 560px) {
  .main--subject{
    padding: 60px 16px !important;
  }
}
</style>