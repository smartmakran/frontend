<template>
  <VDropdown class="end-action" icon="feather:more-vertical" spaced right>
    <template #content>
      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-eye"></i>
        </div>
        <div class="meta">
          <span>مشاهده</span>
          <span>مشاهده پروفایل کاربر</span>
        </div>
      </a>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-pencil"></i>
        </div>
        <div class="meta">
          <span>ویرایش نقش</span>
          <span>ویرایش نقش کاربری و مجوزها</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

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
          <i aria-hidden="true" class="lnil lnil-trash-can-alt-1"></i>
        </div>
        <div class="meta">
          <span>حذف</span>
          <span>حذف از تیم</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
