<template>
  <div class="section has-bg-dots">
    <div class="container">
      <!--Title-->
      <div class="section-title has-text-centered">
        <h2 class="title is-2">قیمت‌های رقابتی</h2>
        <h4>برای هر صلیقه‌ای پلن‌های متناسب مهیا کرده‌ایم.</h4>
      </div>

      <!--Wrapper-->
      <div class="pricing-wrapper">
        <!--Pricing plan-->
        <div class="pricing-plan">
          <div class="name">Free</div>
          <img src="/images/logos/logo/logo-platinum.svg" alt="" />
          <div class="price">$0</div>
          <div class="trial">برای همیشه رایگان</div>
          <hr />
          <ul>
            <li>
              <strong>2</strong>
              اعضای تیم
            </li>
            <li>
              <strong>3</strong>
              team projects
            </li>
            <li>
              <strong>50GB</strong>
              of disk storage
            </li>
          </ul>
        </div>

        <!--Pricing plan-->
        <div class="pricing-plan">
          <div class="name">تجاری</div>
          <img src="/images/logos/logo/logo-accent.svg" alt="" />
          <div class="price">$49</div>
          <div class="trial">Free 14 day trial</div>
          <hr />
          <ul>
            <li>
              <strong>10</strong>
              اعضای تیم
            </li>
            <li>
              <strong>150</strong>
              team projects
            </li>
            <li>
              <strong>500GB</strong>
              of disk storage
            </li>
          </ul>
        </div>

        <!--Pricing plan-->
        <div class="pricing-plan is-featured">
          <div class="name">Pro</div>
          <img src="/images/logos/logo/logo.svg" alt="" />
          <div class="price">$119</div>
          <div class="trial">Free 14 day trial</div>
          <hr />
          <ul>
            <li>
              <strong>بی‌نهایت</strong>
              اعضای تیم
            </li>
            <li>
              <strong>بی‌نهایت</strong>
              team projects
            </li>
            <li>
              <strong>بی‌نهایت</strong>
              disk storage
            </li>
            <li>Team analytics</li>
            <li>Custom reports</li>
          </ul>
        </div>
      </div>

      <!--CTA-->
      <div class="cta-block no-border">
        <div class="head-text">
          <h3>Want to learn more?</h3>
          <p>Check out the Vuero documentation</p>
        </div>
        <div class="head-action">
          <div class="buttons">
            <VButton
              class="action-button"
              color="primary"
              rounded
              elevated
              href="https://docs.vuero.ir"
            >
              Read the Docs
            </VButton>
            <a
              href="https://support.vuero.ir"
              target="_blank"
              rel="noopener"
              class="button chat-button is-secondary"
            >
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
