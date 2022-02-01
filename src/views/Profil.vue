<template>
  <div class="main--profil">
    <search/>
    <unfinished/>
  </div>
</template>
<script>
import search from '../components/search__manu'
import unfinished from '../components/profil/unfinished__courses'
export default {
  components:{
    search,
    unfinished
  }
}
</script>
<style lang="scss" scoped>
.main--profil{
  padding: 60px 68px;
}
@media (max-width: 560px) {
  .main--profil{
    padding: 60px 16px !important;
  }
}
</style>