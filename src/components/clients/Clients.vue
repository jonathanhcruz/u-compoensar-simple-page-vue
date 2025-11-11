<script setup lang="ts">
const logos = [
  new URL('../../assets/img/logo.png', import.meta.url).href,
  new URL('../../assets/img/logo.png', import.meta.url).href,
  new URL('../../assets/img/logo.png', import.meta.url).href,
  new URL('../../assets/img/logo.png', import.meta.url).href,
  new URL('../../assets/img/logo.png', import.meta.url).href
]
</script>

<template>
  <section class="clients" aria-label="Our clients">
    <div class="clients__inner">
      <p class="clients__eyebrow">Our Clients</p>
      <h3 class="clients__title">We have been working with some famous B2B clients</h3>

      <ul class="clients__list">
        <li v-for="(src, i) in logos" :key="i" class="clients__item">
          <img :src="src" :alt="`Client logo ${i + 1}`" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './styles/clients.scss';
</style>
