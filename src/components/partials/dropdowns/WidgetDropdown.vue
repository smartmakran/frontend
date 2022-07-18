<template>
  <VDropdown icon="feather:more-vertical" right spaced>
    <template #content>
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-reload"></i>
        </div>
        <div class="meta">
          <span>بازسازی</span>
          <span>بارگیری مجدد ابزارک</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cogs"></i>
        </div>
        <div class="meta">
          <span>پیکربندی</span>
          <span>پیکربندی ابزارک</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>تنظیمات</span>
          <span>تنظیمات ابزارک</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف از صفحه</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
