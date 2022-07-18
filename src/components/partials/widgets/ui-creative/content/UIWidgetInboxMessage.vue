<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    user?: string
    picture?: string
    time?: string
  }>(),
  {
    title: 'پروژه طراحی',
    user: 'آلیس',
    picture: '/demo/avatars/7.jpg',
    time: '28 دقیقه پیش',
  }
)
</script>

<template>
  <div class="widget-content">
    <div class="sender-block">
      <div class="sender-block-inner">
        <VAvatar :picture="props.picture" />
        <div class="meta">
          <span>{{ props.user }} پیامی برای شما در اینباکستان فرستاده است.</span>
        </div>
      </div>
      <div class="exerpt">
        <h5>
          <i aria-hidden="true" class="fas fa-circle"></i>
          <span>{{ props.title }}</span>
        </h5>
        <p>از نظر طراحی کجا هستیم؟ ما باید صفحه های جدید را مرور کنیم.</p>
        <small>{{ props.time }}</small>
      </div>
    </div>
  </div>
</template>
