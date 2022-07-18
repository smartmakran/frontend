<script setup lang="ts">
import { avatarList, avatarListCreative } from '/@src/data/widgets/ui/avatarList'
import {
  socialButtonList1,
  socialButtonList2,
} from '/@src/data/widgets/ui/socialButtonList'
import { followersStats } from '/@src/data/widgets/ui/followers'
import { products } from '/@src/data/widgets/ui/productList'

import Widget1 from '/@src/assets/illustrations/widgets/1.svg'
import Widget2 from '/@src/assets/illustrations/widgets/2.svg'
import Widget3 from '/@src/assets/illustrations/widgets/3.svg'
import Widget4 from '/@src/assets/illustrations/widgets/4.svg'
import Widget5 from '/@src/assets/illustrations/widgets/5.svg'
import Widget7 from '/@src/assets/illustrations/widgets/7.svg'
import Widget8 from '/@src/assets/illustrations/widgets/8.svg'
</script>

<template>
  <div class="columns is-multiline widget-demo-columns">
    <div class="column is-3">
      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v1"
        title="شما ۲ دستاورد جدید را باز کردید"
        text="تبریک می گویم ، زحمات شما به ثمر رسیده است. همینطور ادامه بده!"
        :picture="Widget1"
        :badge-left="Widget2"
        :badge-right="Widget3"
      />

      <!--Widget-->
      <ContactWidget
        picture="/images/avatars/svg/vuero-1.svg"
        username="جمال خاشقچی"
        email="jamal@email.io"
        company="شرکت تعاونی برادران خاشقچی"
        position="مدیر محصول"
        location="لس آنجلس"
        phone="۰۰۱-۴۴۴-۵۱۵۶"
      />

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="شما ۲ دستاورد جدید را باز کردید"
        text="تبریک می گویم ، زحمات شما به ثمر رسیده است. همینطور ادامه بده!"
        :picture="Widget7"
      />

      <!--Widget-->
      <AvatarListWidget :avatars="avatarList" squared />
    </div>

    <div class="column is-3">
      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="شما ۲ دستاورد جدید را باز کردید"
        text="تبریک می گویم ، زحمات شما به ثمر رسیده است. همینطور ادامه بده!"
        :picture="Widget4"
      />

      <!--Widget-->
      <SocialButtonsWidget :buttons="socialButtonList1" />

      <!--Widget-->
      <AvatarListWidget :avatars="avatarList" />

      <!--Widget-->
      <UIWidget class="followers-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="دنبال کنندگان" />
        </template>
        <template #body>
          <UIWidgetFollowerStats :channels="followersStats" />
        </template>
      </UIWidget>

      <!--Widget-->
      <CartWidget :products="products" />
    </div>

    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="text-widget">
        <template #header>
          <UIWidgetToolbarIcon title="@vuero" icon="feather:twitter" />
        </template>
        <template #body>
          <div class="widget-content">
            <p>ویوئِرو به زودی منتشر می شود ، احتمالاً در پایان سال تعطیلات کریسمس.</p>
            <p class="hashtags">
              <a>#کیت_رابط_کاربری</a>
              <a>#داشبورد</a>
              <a>#بولما</a>
            </p>
          </div>
        </template>
      </UIWidget>

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v3"
        title="شما ۲ دستاورد جدید را باز کردید"
        text="تبریک می گویم ، زحمات شما به ثمر رسیده است. همینطور ادامه بده!"
        :picture="Widget5"
      />

      <!--Widget-->
      <ContactWidget
        picture="/images/avatars/svg/vuero-1.svg"
        username="جمال خاشقچی"
        email="jamal@email.io"
        company="شرکت تعاونی برادران خاشقچی"
        position="مدیر محصول"
        location="لس آنجلس"
        phone="۰۰۱-۴۴۴-۵۱۵۶"
        squared
        reversed
      />

      <!--Widget-->
      <SocialButtonsWidget :buttons="socialButtonList2" rounded />

      <!--Widget-->
      <UIWidget class="creative-list-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="طراحان" />
        </template>
        <template #body>
          <UIWidgetCreativeList :list="avatarListCreative" squared />
        </template>
      </UIWidget>
    </div>

    <div class="column is-3">
      <!--Widget-->
      <UIWidget class="creative-list-widget">
        <template #header>
          <UIWidgetToolbarDropdown title="طراحان" />
        </template>
        <template #body>
          <UIWidgetCreativeList :list="avatarListCreative" />
        </template>
      </UIWidget>

      <!--Widget-->
      <CallWidget
        picture="/@src/assets/illustrations/widgets/6.svg"
        badge="/demo/avatars/7.jpg"
        username="آلیس"
      />

      <!--Widget-->
      <IllustrationWidget
        class="illustration-widget-v2"
        title="شما ۲ دستاورد جدید را باز کردید"
        text="تبریک می گویم ، زحمات شما به ثمر رسیده است. همینطور ادامه بده!"
        :picture="Widget8"
      />
    </div>
  </div>
</template>
