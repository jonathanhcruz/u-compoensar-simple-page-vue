<script setup lang="ts">
import HeroSection from '../../components/hero/HeroSection.vue'
import Clients from '../../components/clients/Clients.vue'
import Community from '../../components/community/community.vue'
import Customer from '../../components/customer/Customer.vue'
</script>

<template>
  <div>
    <main class="page-main">
      <HeroSection />
      <Community />
      <Customer />
      <Clients />
    </main>
  </div>
</template>