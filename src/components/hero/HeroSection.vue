<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow">Lessons and insights</p>
        <h1 class="hero__title">
          <span class="hero__title--lead">from</span>
          <span class="hero__title--accent">8 years</span>
        </h1>
        <p class="hero__subtitle">
          Where to grow your business as a photographer: site or social media?
        </p>
        <router-link to="/register" class="hero__cta">Register</router-link>
      </div>

      <div class="hero__figure" aria-hidden="true">
        <img src="../../assets/img/hero-illustration.png" alt="Hero illustration" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './styles/hero.scss';
</style>

