<template>
  <VDropdown icon="feather:more-vertical" spaced right>
    <template #content>
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-lock"></i>
        </div>
        <div class="meta">
          <span>مجوز‌ها</span>
          <span>ویرایش مجوزها</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-bubble"></i>
        </div>
        <div class="meta">
          <span>پیام</span>
          <span>ارسال یک پیام</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-share"></i>
        </div>
        <div class="meta">
          <span>اشتراک گذاری</span>
          <span>اشتراک گذاری این پروفایل</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف از شبکه</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
