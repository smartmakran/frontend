<template>
  <VDropdown class="end-action" icon="feather:more-vertical" spaced right>
    <template #content>
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-coins"></i>
        </div>
        <div class="meta">
          <span>سرمایه‌گذاری</span>
          <span>خرید سهام</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-bank"></i>
        </div>
        <div class="meta">
          <span>خرید و فروش</span>
          <span>مرور موقعیت‌های مناسب خرید و فروش</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-reload"></i>
        </div>
        <div class="meta">
          <span>نوسازی</span>
          <span>Refresh data</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
