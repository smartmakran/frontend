<script setup lang="ts">
import { ref } from 'vue'
import { usePanels } from '/@src/stores/panels'

const panels = usePanels()
const props = withDefaults(
  defineProps<{
    activeTab?: 'project' | 'team' | 'tasks'
  }>(),
  {
    activeTab: 'project',
  }
)

const tab = ref(props.activeTab)
const filterTasks = ref(0)

const participants = [
  { picture: '/demo/avatars/7.jpg' },
  { picture: '/demo/avatars/9.jpg' },
  { picture: '/demo/avatars/12.jpg' },
  { picture: '/images/avatars/svg/vuero-1.svg' },
  { picture: '/demo/avatars/25.jpg' },
  { picture: '/demo/avatars/25.jpg' },
  { picture: '/demo/avatars/25.jpg' },
]
</script>

<template>
  <div class="project-details">
    <div class="tabs-wrapper is-triple-slider">
      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[tab === 'project' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="tab = 'project'"
                @click="tab = 'project'"
                ><span>Project</span></a
              >
            </li>
            <li :class="[tab === 'team' && 'is-active']">
              <a tabindex="0" @keydown.space.prevent="tab = 'team'" @click="tab = 'team'"
                ><span>Team</span></a
              >
            </li>
            <li :class="[tab === 'tasks' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="tab = 'tasks'"
                @click="tab = 'tasks'"
                ><span>Tasks</span></a
              >
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>

      <div v-if="tab === 'project'" class="tab-content is-active">
        <div class="columns project-details-inner">
          <div class="column is-8">
            <div class="project-details-card">
              <div class="card-head">
                <div class="title-wrap">
                  <h3>بازطراحی برند و وب‌سایت</h3>
                  <p>طراح رابط کاربری</p>
                </div>

                <VIconButton
                  size="small"
                  icon="feather:edit-3"
                  tabindex="0"
                  @keydown.space.prevent="panels.setActive('task')"
                  @click="panels.setActive('task')"
                />
              </div>

              <div class="project-overview">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                <VAvatarStack :avatars="participants" />
              </div>

              <div class="project-features">
                <div class="project-feature">
                  <i aria-hidden="true" class="lnil lnil-vector-pen"></i>
                  <h4>طراح رابط کاربری</h4>
                  <p>طراحی یک تجربه کاربری کامل در حوزه این پروژه است.</p>
                </div>
                <div class="project-feature">
                  <i aria-hidden="true" class="lnil lnil-alarm-clock"></i>
                  <h4>1 هفته اسپرینت</h4>
                  <p>
                    این تکرارهای توسعه پروژه از الگوی دو هفته ای سرعت دویدن پیروی می کند.
                  </p>
                </div>
                <div class="project-feature">
                  <i aria-hidden="true" class="lnil lnil-calendar"></i>
                  <h4>3 ماه</h4>
                  <p>این پروژه و کلیه وظایف مرتبط باید ظرف 3 ماه به پایان برسد.</p>
                </div>
                <div class="project-feature">
                  <i aria-hidden="true" class="lnil lnil-diamond-alt"></i>
                  <h4>ثابت شده</h4>
                  <p>
                    برنامه ریزی بودجه این پروژه بر اساس پیشنهاد ثابت تغییر ناپذیر است.
                  </p>
                </div>
              </div>

              <div class="project-files">
                <h4>فایل‌های اخیرا افزوده شده</h4>
                <div class="columns is-multiline">
                  <div class="column is-6">
                    <div class="file-box">
                      <img src="/images/icons/files/zip-format.svg" alt="" />
                      <div class="meta">
                        <span>طرح اولیه</span>
                        <span>
                          3 مگابایت
                          <i aria-hidden="true" class="fas fa-circle"></i> 5 روز پیش
                        </span>
                      </div>
                      <FileCardDropdown />
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="file-box">
                      <img src="/images/icons/files/pdf.svg" alt="" />
                      <div class="meta">
                        <span>محدوده پروژه</span>
                        <span>
                          0.8 مگابایت
                          <i aria-hidden="true" class="fas fa-circle"></i> 7 روز پیش
                        </span>
                      </div>
                      <FileCardDropdown />
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="file-box">
                      <img src="/images/icons/files/presentation.svg" alt="" />
                      <div class="meta">
                        <span>ارائه پروژه</span>
                        <span>
                          2.4 مگابایت
                          <i aria-hidden="true" class="fas fa-circle"></i> 7 روز پیش
                        </span>
                      </div>
                      <FileCardDropdown />
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="file-box">
                      <img src="/images/icons/files/sheet.svg" alt="" />
                      <div class="meta">
                        <span>بودجه پروژه</span>
                        <span>
                          0.6 مگابایت
                          <i aria-hidden="true" class="fas fa-circle"></i> 8 روز پیش
                        </span>
                      </div>
                      <FileCardDropdown />
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="file-box">
                      <img src="/images/icons/files/doc.svg" alt="" />
                      <div class="meta">
                        <span>یادداشت‌های پروژه</span>
                        <span>
                          0.4 مگابایت
                          <i aria-hidden="true" class="fas fa-circle"></i> 8 روز پیش
                        </span>
                      </div>
                      <FileCardDropdown />
                    </div>
                  </div>
                  <div class="column is-6">
                    <div class="file-box">
                      <img src="/images/icons/files/video.svg" alt="" />
                      <div class="meta">
                        <span>نسخه ی نمایشی POC</span>
                        <span>
                          8.75 مگابایت
                          <i aria-hidden="true" class="fas fa-circle"></i> 8 روز پیش
                        </span>
                      </div>
                      <FileCardDropdown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="side-card">
              <h4>ابزار پروژه</h4>

              <VBlock center title="اسکچ" subtitle="نرم‌افزار طراحی">
                <template #icon>
                  <VAvatar size="small" picture="/images/icons/stacks/sketch.svg" />
                </template>
              </VBlock>

              <VBlock center title="ایلاستریتور" subtitle="نرم‌افزار طراحی">
                <template #icon>
                  <VAvatar size="small" picture="/images/icons/stacks/illustrator.svg" />
                </template>
              </VBlock>

              <VBlock center title="فتوشاپ" subtitle="نرم‌افزار طراحی">
                <template #icon>
                  <VAvatar size="small" picture="/images/icons/stacks/photoshop.svg" />
                </template>
              </VBlock>
            </div>

            <div class="side-card">
              <h4>پشته های پروژه</h4>

              <VBlock center title="Html5" subtitle="زبان نشانه گذاری">
                <template #icon>
                  <VAvatar size="small" picture="/images/icons/stacks/html5.svg" />
                </template>
              </VBlock>

              <VBlock center title="CSS3" subtitle="طرح بندی و رنگ بندی صفحات">
                <template #icon>
                  <VAvatar size="small" picture="/images/icons/stacks/css3.svg" />
                </template>
              </VBlock>

              <VBlock center title="VueJS" subtitle="فریم ورک جاواسکریپت">
                <template #icon>
                  <VAvatar size="small" picture="/images/icons/stacks/vuejs.svg" />
                </template>
              </VBlock>
            </div>

            <div class="side-card">
              <h4>مشتری</h4>

              <VBlock center title="علی بابا" subtitle="شرکت هواپیمایی">
                <template #icon>
                  <VAvatar
                    size="small"
                    picture="/@src/assets/illustrations/dashboards/flights/company1.svg"
                  />
                </template>
              </VBlock>
            </div>
          </div>
        </div>
      </div>

      <!--Project Team-->
      <div v-if="tab === 'team'" class="tab-content is-active">
        <div class="project-details-inner">
          <div class="project-team-card">
            <div class="columns is-multiline">
              <!--Team Member-->
              <div class="column is-6 has-border-bottom">
                <VBlock center title="آلیس" subtitle="مهندس نرم‌افزار">
                  <template #icon>
                    <VAvatar size="medium" picture="/demo/avatars/7.jpg" />
                  </template>

                  <template #action>
                    <TeamCardDropdown />
                  </template>
                </VBlock>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
              <!--Team Member-->
              <div class="column is-6 has-border-bottom">
                <VBlock center title="آنا" subtitle="طراح تجربه کاربری">
                  <template #icon>
                    <VAvatar size="medium" picture="/demo/avatars/9.jpg" />
                  </template>

                  <template #action>
                    <TeamCardDropdown />
                  </template>
                </VBlock>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
              <!--Team Member-->
              <div class="column is-6 has-border-bottom">
                <VBlock center title="ساشا" subtitle="توسعه دهنده بک اند">
                  <template #icon>
                    <VAvatar size="medium" picture="/demo/avatars/12.jpg" />
                  </template>

                  <template #action>
                    <TeamCardDropdown />
                  </template>
                </VBlock>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
              <!--Team Member-->
              <div class="column is-6 has-border-bottom">
                <VBlock center title="جمال خاشقچی" subtitle="مدیر محصول">
                  <template #icon>
                    <VAvatar size="medium" picture="/images/avatars/svg/vuero-1.svg" />
                  </template>

                  <template #action>
                    <TeamCardDropdown />
                  </template>
                </VBlock>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
              <!--Team Member-->
              <div class="column is-6 has-border-bottom">
                <VBlock center title="ملانی" subtitle="توسعه دهنده‌ی وب">
                  <template #icon>
                    <VAvatar size="medium" picture="/demo/avatars/25.jpg" />
                  </template>

                  <template #action>
                    <TeamCardDropdown />
                  </template>
                </VBlock>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
              <!--Team Member-->
              <div class="column is-6 has-border-bottom">
                <VBlock center title="تارا" subtitle="طراح رابط کاربری و تجربه کاربری">
                  <template #icon>
                    <VAvatar size="medium" picture="/demo/avatars/13.jpg" />
                  </template>

                  <template #action>
                    <TeamCardDropdown />
                  </template>
                </VBlock>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
              <!--Team Member-->
              <div class="column is-6">
                <VBlock
                  center
                  title="بیل گیتس"
                  subtitle="طراح رابط کاربری و تجربه کاربری"
                >
                  <template #icon>
                    <VAvatar size="medium" picture="/demo/avatars/18.jpg" />
                  </template>

                  <template #action>
                    <TeamCardDropdown />
                  </template>
                </VBlock>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
              <!--Team Member-->
              <div class="column is-6">
                <VBlock center title="مریم" subtitle="مدیر پروژه">
                  <template #icon>
                    <VAvatar size="medium" picture="/demo/avatars/5.jpg" />
                  </template>

                  <template #action>
                    <TeamCardDropdown />
                  </template>
                </VBlock>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                  سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                  متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tab === 'tasks'" class="tab-content is-active">
        <div class="project-details-inner">
          <div class="task-grid">
            <div class="grid-header">
              <h3>تسک‌ها</h3>
              <div class="filter">
                <span>فیلتر با</span>
                <VControl>
                  <Multiselect
                    v-model="filterTasks"
                    :options="['جدید', 'درحال انجام', 'بسته شده', 'آرشیو شده']"
                    placeholder="درحال انجام"
                  />
                </VControl>
              </div>
            </div>

            <div class="columns is-multiline">
              <!--Task-->
              <div class="column is-4">
                <div class="task-card right-panel-trigger">
                  <a class="title-wrap">
                    <h3>ساخت صفحه لندینگ موبایل و دسکتاپ</h3>
                    <span>45%</span>
                  </a>
                  <div class="content-wrap">
                    <div class="left">
                      <VAvatarStack
                        size="small"
                        :avatars="[
                          { picture: '/demo/avatars/7.jpg' },
                          { picture: '/images/avatars/svg/vuero-1.svg' },
                          { picture: '/demo/avatars/5.jpg' },
                        ]"
                      />
                      <div class="attachments">
                        <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                        <span>3 ضمیمه</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="circle-chart-wrapper is-info">
                        <CircleChart :value="45" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Task-->
              <div class="column is-4">
                <div class="task-card right-panel-trigger">
                  <a class="title-wrap">
                    <h3>ساخت ویدیوپلیر جاوا اسکریپتی جدید</h3>
                    <span>90%</span>
                  </a>
                  <div class="content-wrap">
                    <div class="left">
                      <VAvatarStack
                        size="small"
                        :avatars="[{ picture: '/demo/avatars/12.jpg' }]"
                      />
                      <div class="attachments">
                        <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                        <span>1 ضمیمه</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="circle-chart-wrapper is-success">
                        <CircleChart :value="90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Task-->
              <div class="column is-4">
                <div class="task-card right-panel-trigger">
                  <a class="title-wrap">
                    <h3>ساخت اعتبارسنجی JWT برای موبایل</h3>
                    <span>65%</span>
                  </a>
                  <div class="content-wrap">
                    <div class="left">
                      <VAvatarStack
                        size="small"
                        :avatars="[{ picture: '/demo/avatars/12.jpg' }]"
                      />
                      <div class="attachments">
                        <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                        <span>1 ضمیمه</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="circle-chart-wrapper is-danger">
                        <CircleChart :value="65" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Task-->
              <div class="column is-4">
                <div class="task-card right-panel-trigger">
                  <a class="title-wrap">
                    <h3>طراحی برای صفحه‌ی لندینگ</h3>
                    <span>38%</span>
                  </a>
                  <div class="content-wrap">
                    <div class="left">
                      <VAvatarStack
                        size="small"
                        :avatars="[
                          { picture: '/demo/avatars/5.jpg' },
                          { picture: '/demo/avatars/7.jpg' },
                        ]"
                      />
                      <div class="attachments">
                        <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                        <span>1 ضمیمه</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="circle-chart-wrapper is-warning">
                        <CircleChart :value="38" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Task-->
              <div class="column is-4">
                <div class="task-card right-panel-trigger">
                  <a class="title-wrap">
                    <h3>پلاگین ورود با شبکه‌های اجتماعی</h3>
                    <span>59%</span>
                  </a>
                  <div class="content-wrap">
                    <div class="left">
                      <VAvatarStack
                        size="small"
                        :avatars="[{ picture: '/demo/avatars/25.jpg' }]"
                      />
                      <div class="attachments">
                        <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                        <span>2 ضمیمه</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="circle-chart-wrapper">
                        <CircleChart :value="59" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Task-->
              <div class="column is-4">
                <div class="task-card right-panel-trigger">
                  <a class="title-wrap">
                    <h3>ای پی آی مدیریت کاربران</h3>
                    <span>78%</span>
                  </a>
                  <div class="content-wrap">
                    <div class="left">
                      <VAvatarStack
                        size="small"
                        :avatars="[
                          { picture: '/demo/avatars/25.jpg' },
                          { picture: '/demo/avatars/12.jpg' },
                        ]"
                      />
                      <div class="attachments">
                        <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                        <span>3 ضمیمه</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="circle-chart-wrapper is-info">
                        <CircleChart :value="78" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Task-->
              <div class="column is-4">
                <div class="task-card right-panel-trigger">
                  <a class="title-wrap">
                    <h3>ای پی آی مدیریت استخدامی‌ها</h3>
                    <span>36%</span>
                  </a>
                  <div class="content-wrap">
                    <div class="left">
                      <VAvatarStack
                        size="small"
                        :avatars="[
                          { picture: '/demo/avatars/25.jpg' },
                          { picture: '/demo/avatars/12.jpg' },
                        ]"
                      />
                      <div class="attachments">
                        <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                        <span>3 ضمیمه</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="circle-chart-wrapper is-success">
                        <CircleChart :value="36" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Task-->
              <div class="column is-4">
                <div class="task-card right-panel-trigger">
                  <a class="title-wrap">
                    <h3>بهینه‌سازی کدهای سمت سرور</h3>
                    <span>49%</span>
                  </a>
                  <div class="content-wrap">
                    <div class="left">
                      <VAvatarStack
                        size="small"
                        :avatars="[
                          { picture: '/demo/avatars/25.jpg' },
                          { picture: '/demo/avatars/12.jpg' },
                        ]"
                      />
                      <div class="attachments">
                        <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                        <span>2 ضمیمه</span>
                      </div>
                    </div>
                    <div class="right">
                      <div class="circle-chart-wrapper is-danger">
                        <CircleChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.is-navbar {
  .project-details {
    padding-top: 30px;
  }
}

.project-details {
  .tabs-wrapper {
    .tabs-inner {
      .tabs {
        margin: 0 auto;
        background: var(--white);
      }
    }
  }

  .project-details-inner {
    padding: 20px 0;

    .project-details-card {
      @include vuero-s-card;

      padding: 40px;

      .card-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        .title-wrap {
          h3 {
            font-family: var(--font-alt);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark-text);
            line-height: 1.2;
            transition: all 0.3s; // transition-all test
          }
        }
      }

      .project-overview {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;

        p {
          max-width: 420px;
        }
      }

      .project-features {
        display: flex;
        padding: 25px 0;
        border-top: 1px solid var(--fade-grey-dark-3);
        border-bottom: 1px solid var(--fade-grey-dark-3);

        .project-feature {
          margin-right: 20px;
          [dir='rtl'] & {
            margin-left: 20px;
            margin-right: unset;
          }
          width: calc(25% - 20px);

          i {
            font-size: 1.6rem;
            color: var(--primary);
            margin-bottom: 8px;
          }

          h4 {
            font-family: var(--font-alt);
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--dark);
          }

          p {
            line-height: 1.2;
            font-size: 0.85rem;
            color: var(--light-text);
            margin-bottom: 0;
          }
        }
      }

      .project-files {
        padding: 20px 0;

        h4 {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .file-box {
          display: flex;
          align-items: center;
          padding: 8px;
          background: var(--white);
          border: 1px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s; // transition-all test

          &:hover {
            border-color: var(--fade-grey-dark-3);
            box-shadow: var(--light-box-shadow);
          }

          img {
            display: block;
            width: 48px;
            min-width: 48px;
            height: 48px;
          }

          .meta {
            margin-left: 12px;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: 12px;
            }
            line-height: 1.3;

            span {
              display: block;

              &:first-child {
                font-family: var(--font-alt);
                font-size: 0.9rem;
                font-weight: 600;
                color: var(--dark-text);
              }

              &:nth-child(2) {
                font-size: 0.9rem;
                color: var(--light-text);

                i {
                  position: relative;
                  top: -3px;
                  font-size: 0.3rem;
                  color: var(--light-text);
                  margin: 0 4px;
                }
              }
            }
          }

          .dropdown {
            margin-left: auto;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: auto;
            }
          }
        }
      }
    }

    .side-card {
      @include vuero-s-card;

      padding: 40px;
      margin-bottom: 1.5rem;

      h4 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--primary);
        margin-bottom: 16px;
      }
    }

    .project-team-card {
      @include vuero-s-card;

      padding: 40px;
      max-width: 940px;
      display: block;
      margin: 0 auto;

      .column {
        padding: 1.5rem;

        &:nth-child(odd) {
          border-right: 1px solid var(--fade-grey-dark-3);
          [dir='rtl'] & {
            border-right: none;
            border-left: 1px solid var(--fade-grey-dark-3);
          }
        }

        &.has-border-bottom {
          border-bottom: 1px solid var(--fade-grey-dark-3);
        }
      }
    }

    .task-grid {
      .grid-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        h3 {
          font-family: var(--font-alt);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--dark-text);
          line-height: 1.2;
        }

        .filter {
          display: flex;
          align-items: center;
          background: var(--white);
          padding: 8px 24px;
          border-radius: 100px;

          > span {
            font-family: var(--font-alt);
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--dark-text);
            margin-right: 20px;
            [dir='rtl'] & {
              margin-left: 20px;
              margin-right: unset;
            }
          }

          .multiselect {
            min-width: 140px;

            .multiselect-input {
              border: none;
            }
          }
        }
      }

      .task-card {
        @include vuero-s-card;

        min-height: 200px;
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        cursor: pointer;
        transition: all 0.3s; // transition-all test

        &:hover {
          transform: translateY(-5px);
          box-shadow: var(--light-box-shadow);
        }

        .title-wrap {
          h3 {
            font-size: 1.1rem;
            font-family: var(--font-alt);
            font-weight: 600;
            color: var(--dark-text);
            line-height: 1.2;
            margin-bottom: 4px;
          }

          span {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
          }
        }

        .content-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left {
            .avatar-stack {
              margin-bottom: 6px;
            }

            .attachments {
              display: flex;
              align-items: center;

              i {
                font-size: 15px;
                color: var(--light-text);
              }

              span {
                margin-left: 2px;
                [dir='rtl'] & {
                  margin-left: unset;
                  margin-right: 2px;
                }
                font-size: 0.9rem;
                font-family: var(--font);
                color: var(--light-text);
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .project-details {
    .project-details-inner {
      .project-details-card {
        @include vuero-card--dark;

        .card-head {
          .title-wrap {
            h3 {
              color: var(--dark-dark-text) !important;
            }
          }
        }

        .project-features {
          border-color: var(--dark-sidebar-light-12);

          .project-feature {
            i {
              color: var(--primary);
            }

            h4 {
              color: var(--dark-dark-text);
            }
          }
        }

        .project-files {
          h4 {
            color: var(--primary);
          }

          .file-box {
            background: var(--dark-sidebar-light-3);

            &:hover,
            &:focus {
              border-color: var(--dark-sidebar-light-10);
            }

            .meta {
              span {
                &:first-child {
                  color: var(--dark-dark-text);
                }
              }
            }
          }
        }
      }

      .side-card {
        @include vuero-card--dark;

        h4 {
          color: var(--primary);
        }
      }

      .project-team-card {
        @include vuero-card--dark;

        .column {
          border-color: var(--dark-sidebar-light-12);
        }
      }

      .task-grid {
        .grid-header {
          h3 {
            color: var(--dark-dark-text);
          }

          .filter {
            background: var(--dark-sidebar-light-1) !important;
            border-color: var(--dark-sidebar-light-4) !important;

            > span {
              color: var(--dark-dark-text);
            }
          }
        }

        .task-card {
          @include vuero-card--dark;

          .title-wrap {
            h3 {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .project-details {
    .project-details-inner {
      .project-details-card {
        padding: 30px;

        .project-overview {
          flex-direction: column;

          p {
            margin-bottom: 20px;
          }
        }

        .project-features {
          flex-wrap: wrap;

          .project-feature {
            width: calc(50% - 20px);
            text-align: center;
            margin: 0 10px;

            &:first-child,
            &:nth-child(2) {
              margin-bottom: 20px;
            }
          }
        }
      }

      .project-team-card {
        padding: 30px;

        .column {
          border-right: none !important;
          [dir='rtl'] & {
            border-left: none !important;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .project-details {
    .project-details-inner {
      .project-details-card {
        .project-files {
          .columns {
            display: flex;

            .column {
              min-width: 50%;
            }
          }
        }
      }

      .project-team-card {
        .columns {
          display: flex;

          .column {
            min-width: 50%;
          }
        }
      }

      .task-grid {
        .columns {
          display: flex;

          .column {
            min-width: 50%;
          }
        }
      }
    }
  }
}
</style>
