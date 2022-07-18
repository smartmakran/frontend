<template>
  <VDropdown icon="feather:more-vertical" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-reload"></i>
        </div>
        <div class="meta">
          <span>بارگیری مجدد</span>
          <span>بارگیری مجدد نمودار</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-users-alt"></i>
        </div>
        <div class="meta">
          <span>مشتریان</span>
          <span>مشاهده گزارش مشتریان</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-gift-alt-1"></i>
        </div>
        <div class="meta">
          <span>محصولات</span>
          <span>مشاهده‌ی گزارش محصولات</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-bank"></i>
        </div>
        <div class="meta">
          <span>مالی</span>
          <span>مشاهده‌ی گزارشات مالی</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
