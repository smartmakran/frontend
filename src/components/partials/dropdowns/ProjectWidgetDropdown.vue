<template>
  <VDropdown class="end-action" icon="feather:more-vertical" spaced right>
    <template #content>
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-whiteboard-alt-2"></i>
        </div>
        <div class="meta">
          <span>مشاهده</span>
          <span>مشاهده بورد پروژه</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-pencil"></i>
        </div>
        <div class="meta">
          <span>ویرایش</span>
          <span>ویرایش پروژه</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
        </div>
        <div class="meta">
          <span>تسک‌ها</span>
          <span>مشاهده کارهای معلق</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-hierchy-alt"></i>
        </div>
        <div class="meta">
          <span>تیم</span>
          <span>ملاقات با تیم پروژه</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
