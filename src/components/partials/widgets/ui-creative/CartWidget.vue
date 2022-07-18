<script setup lang="ts">
const props = defineProps<{
  products: any[]
  straight?: boolean
}>()
</script>

<template>
  <div class="widget cart-widget" :class="[props.straight && 'is-straight']">
    <div class="widget-toolbar">
      <div class="left">
        <h3>سبد خرید شما</h3>
      </div>
      <div class="right">
        <VTag :label="props.products.length + ' قلم'" color="orange" curved />
      </div>
    </div>
    <div class="cart-items">
      <div v-for="product in props.products" :key="product.id" class="cart-item">
        <VAvatar :picture="product.picture" size="large" squared />
        <div class="meta">
          <span class="text">{{ product.name }}</span>
          <span class="price">{{ product.price }} تومان</span>
        </div>
      </div>
    </div>
    <div class="cart-button">
      <div class="button v-button is-primary is-raised is-bold is-fullwidth">
        ادامه‌ی خرید
      </div>
    </div>
  </div>
</template>
