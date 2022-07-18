<template>
  <VDropdown icon="feather:more-vertical" spaced right>
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
          <i aria-hidden="true" class="lnil lnil-cloud-upload"></i>
        </div>
        <div class="meta">
          <span>بارگذاری</span>
          <span>بارگذاری نسخه تازه</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-lock"></i>
        </div>
        <div class="meta">
          <span>مجوز‌ها</span>
          <span>مدیریت مجوزهای فایل</span>
        </div>
      </a>
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-share"></i>
        </div>
        <div class="meta">
          <span>اشتراک گذاری</span>
          <span>اشتراک گذاری این فایل</span>
        </div>
      </a>
      <hr class="dropdown-divider" />
      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف این فایل</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
