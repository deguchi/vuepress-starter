<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default defineComponent({
  components: { Layout },
})
</script>

<template>
  <Layout>
    <template #sidebar-top>
      <div class="sidebar-header">サイドバー</div>
    </template>
  </Layout>
</template>

<style>
.sidebar-header {
  padding: 1.5rem 1.5rem 0;
  font-size: 1.1em;
  font-weight: bold;
}
</style>