<template>
  <VDropdown icon="feather:more-vertical" class="end-action" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cloud-download"></i>
        </div>
        <div class="meta">
          <span>دانلود</span>
          <span>دانلود این فایل</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
        </div>
        <div class="meta">
          <span>مشاهده تسک</span>
          <span>مشاهده تسک‌های مرتبط</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cloud-upload"></i>
        </div>
        <div class="meta">
          <span>بروزرسانی</span>
          <span>بارگذاری نسخه تازه</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt-1"></i>
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف این فایل</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
