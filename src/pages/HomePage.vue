<template>
  <div >
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppMain from '@/components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppMain
  }
};
</script>

<style>

</style>