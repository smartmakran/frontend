<template>
  <VDropdown icon="feather:more-vertical" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-reload"></i>
        </div>
        <div class="meta">
          <span>بازسازی</span>
          <span>بارگیری مجدد نتایج جستجو</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-save"></i>
        </div>
        <div class="meta">
          <span>ذخیره</span>
          <span>ذخیره‌سازی این جستجو</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>تنظیمات</span>
          <span>configuration options</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
