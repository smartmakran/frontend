<script setup lang="ts">
const props = defineProps<{
  rows: any[]
  squared?: boolean
  circled?: boolean
}>()
</script>

<template>
  <tr v-for="row in props.rows" :key="row.id">
    <td class="is-media">
      <VAvatar
        :picture="row.picture"
        :initials="row.initials"
        size="medium"
        :color="row.color"
        :squared="props.squared"
      />
    </td>
    <td>
      <div class="double-line">
        <span class="dark-inverted">{{ row.name }}</span>
        <span>عضو از {{ row.membership }}</span>
      </div>
    </td>
    <td>
      <div class="double-line">
        <span class="dark-inverted">{{ row.income }} تومان</span>
        <span>درآمد ماهانه</span>
      </div>
    </td>
    <td>
      <div class="avatars">
        <VAvatar
          v-for="skill in row.skills"
          :key="skill.id"
          :picture="skill.icon"
          size="small"
        />
      </div>
    </td>
    <td>
      <div class="rating-wrap">
        <span>امتیاز</span>
        <div class="rating">
          <i
            v-for="(star, index) in 5"
            :key="index"
            class="fas fa-star"
            aria-hidden="true"
            :class="row.rating - index > 0 && 'selected'"
          ></i>
        </div>
      </div>
    </td>
    <td>
      <div class="tag-wrap">
        <VTag
          :class="[
            row.status === 'تائید شده' && 'is-green',
            row.status === 'در انتظار' && 'is-info',
            row.status === 'معلق شده' && 'is-orange',
          ]"
          :label="row.status"
          elevated
        />
      </div>
    </td>
    <td class="is-end">
      <div class="buttons">
        <button class="button is-dark-outlined" :class="[props.circled && 'is-circle']">
          <span class="icon is-small">
            <i aria-hidden="true" class="iconify" data-icon="feather:edit-2"></i>
          </span>
        </button>
        <button class="button is-dark-outlined" :class="[props.circled && 'is-circle']">
          <span class="icon is-small">
            <i aria-hidden="true" class="iconify" data-icon="feather:eye"></i>
          </span>
        </button>
        <button class="button is-dark-outlined" :class="[props.circled && 'is-circle']">
          <span class="icon is-small">
            <i aria-hidden="true" class="iconify" data-icon="feather:trash-2"></i>
          </span>
        </button>
      </div>
    </td>
  </tr>
</template>
