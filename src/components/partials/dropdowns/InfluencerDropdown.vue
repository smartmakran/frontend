<template>
  <VDropdown icon="feather:more-vertical" class="end-action" spaced right>
    <template #content>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-whiteboard-alt-2"></i>
        </div>
        <div class="meta">
          <span>بروزرسانی‌ها</span>
          <span>مشاهده جزئیات گزارش</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-pencil"></i>
        </div>
        <div class="meta">
          <span>ویرایش</span>
          <span>ویرایش این پروفایل</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-bubble"></i>
        </div>
        <div class="meta">
          <span>پیام</span>
          <span>ارسال پیام خصوصی</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-gift-alt-1"></i>
        </div>
        <div class="meta">
          <span>هدیه</span>
          <span>ارسال یک هدیه</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>تنظیمات</span>
          <span>پیکربندی تنظیمات</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
