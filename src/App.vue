<template>
  <div id="app">

    <app-header></app-header>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    'app-header': Header
  }
}
</script>

<style></style>
