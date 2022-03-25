<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <div class="my-header">This is my custom page footer</div>
    </template>
    <template #sidebar-top>
      <div class="sidebar-header">サイドバー</div>
    </template>
    <template #page-bottom>
      <div class="my-footer">This is my custom page footer</div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-header {
  text-align: center;
}
.sidebar-header {
  padding: 1.5rem 1.5rem 0;
  font-size: 1.1em;
  font-weight: bold;
}
.my-footer {
  text-align: center;
}
</style>