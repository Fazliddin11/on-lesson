<template>
  <div class="main--subject">
    <search/>
    <unfinished/>
  </div>
</template>
<script>
import search from '../components/search__manu'
import unfinished from '../components/subject/unfinished__courses'
export default {
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