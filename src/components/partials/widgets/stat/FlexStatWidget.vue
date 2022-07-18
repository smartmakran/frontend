<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    value?: string
    text?: string
  }>(),
  {
    title: 'عنوان ابزارک',
    value: '8,641,260',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
  }
)
</script>

<template>
  <div class="stat-widget flex-stat-widget is-straight">
    <div class="chart-media">
      <div class="meta">
        <h4 class="dark-inverted">{{ props.title }}</h4>
        <span class="is-dark-primary">{{ props.value }} تومان</span>
        <p>
          {{ props.text }}
        </p>
      </div>
      <div class="chart-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.stat-widget {
  &.flex-stat-widget {
    .chart-media {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .meta {
        margin-right: 30px;
        align-items: center;
        font-family: var(--font);

        h4 {
          font-family: var(--font-alt);
          font-size: 1rem;
          font-weight: 600;
          color: var(--dark-text);
        }

        span {
          display: block;
          color: var(--primary);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .chart-container {
        min-width: 110px;
      }
    }
  }
}
</style>
