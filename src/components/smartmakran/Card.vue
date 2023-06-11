<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
  icon: any
  title: string
  counter: number
}>()
</script>

<template>
  <div class="card">
    <div class="card-icon">
      <img src="icon" alt="" />
    </div>
    <div class="card-content-attr">
      <p>{{ title }}</p>
      <h2>{{ counter }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 15px;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.card-icon {
  width: 45px;
  height: 45px;
  background: rgba(221, 219, 243, 0.377);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(221, 219, 243);
  margin-left: 10px;
  img {
    height: 27px;
  }
}
.card-content-attr {
  p {
    color: rgb(162, 162, 162);
    font-size: 12px;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    margin-top: -5px;
  }
}
@media screen and (min-width: 600px) {
  .card {
    flex-direction: column;
  }
  .card-content-attr {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    width: 100%;
    align-items: center;
    h2 {
      margin-top: -3px;
    }
  }
  .card-icon {
    margin-left: 0;
  }
}
</style>
