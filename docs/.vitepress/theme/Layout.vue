<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress';

const { Layout } = DefaultTheme
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #doc-top>
      <div class="vp-doc">
        <h1>{{ frontmatter.title }}</h1>
        <div
          class="flex
                 flex-wrap
                 gap-1"
        >
          <v-chip v-for="category in frontmatter.categories">{{ category }}</v-chip>
        </div>
      </div>
    </template>
  </Layout>
</template>