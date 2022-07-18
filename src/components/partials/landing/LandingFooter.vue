<template>
  <footer class="vuero-footer">
    <div class="container">
      <div class="footer-head">
        <div class="head-text">
          <h3>برای شروع پروژه‌ي خود آماده هستید؟</h3>
          <p>هم اکنون یک نسخه از ویوئِرو را سفارش دهید</p>
        </div>
        <div class="head-action">
          <div class="buttons">
            <a
              href="https://www.rtl-theme.com/user-profile/vuero/"
              class="button v-button is-primary is-rounded raised action-button"
            >
              خرید ویوئِرو
            </a>
            <a href="https://support.vuero.ir" class="button chat-button">
              مشاوره با ما
            </a>
          </div>
        </div>
      </div>
      <div class="columns footer-body">
        <!-- Column -->
        <div class="column is-4">
          <div class="p-t-10 p-b-10">
            <AnimatedLogo width="36px" height="36px" />

            <div class="footer-description p-t-10 p-b-10">
              ویوئِرو برای طراحان و دولوپرها ساخته شده است. با بهره بردن از سیستم ماژولار
              آن می‌توان به راحتی طرح‌های جذابی را خلق نمود که انواع منوها و المان‌ها را
              در خود داشته باشند.
            </div>
          </div>
          <div>
            <span class="moto">
              طراحی و توسعه داده شده
              <i aria-hidden="true" class="fas fa-heart text-danger"></i> توسط CSS
              Ninja.</span
            >
            <div class="social-links p-t-10 p-b-10">
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-facebook"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-twitter"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-linkedin"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-dribbble"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="column is-6 is-offset-2">
          <div class="columns is-flex-tablet-p">
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">ویوئِرو</li>
                <li class="column-item"><a href="#">خانه</a></li>
                <li class="column-item"><a href="#">قیمت‌ها</a></li>
                <li class="column-item"><a href="#">شروع به کار</a></li>
                <li class="column-item"><a href="#">راهنمایی</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">منابع</li>
                <li class="column-item"><a href="#">یادگیری</a></li>
                <li class="column-item"><a href="#">مرکز پشیتبانی</a></li>
                <li class="column-item"><a href="#">سوالات پرتکرار</a></li>
                <li class="column-item"><a href="#">درخواست دمو</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">قوانین</li>
                <li class="column-item">
                  <a href="#">قوانین استفاده از خدمات</a>
                </li>
                <li class="column-item">
                  <a href="#">سیاست حفظ حریم خصوصی</a>
                </li>
                <li class="column-item"><a href="#">خدمات SaaS</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright has-text-centered">
        <p>
          &copy; ۱۴۰۰-۱۴۰۱ | <a href="https://cssninja.io">سی اس اس نینجا</a> | همه حقوق
          محفوظ است.
        </p>
      </div>
    </div>
  </footer>
  <!-- /Simple light footer -->
</template>

<style lang="scss">
.vuero-footer {
  padding-bottom: 0 !important;
  padding-top: 4rem !important;
  background: var(--body-color);

  .footer-head {
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--fade-grey-dark-4);

    .head-text {
      h3 {
        font-family: var(--font);
        font-size: 1.8rem;
        color: var(--dark-text);
      }

      p {
        font-size: 1.1rem;
        color: var(--light-text);
      }
    }

    .head-action {
      .buttons {
        .button {
          &.action-button {
            height: 36px;
            min-width: 140px;
          }

          &.chat-button {
            background: transparent;
            border: none;
            box-shadow: none;
            color: var(--primary);
            font-weight: 500;
          }
        }
      }
    }
  }

  .footer-body {
    padding-top: 3rem;

    .footer-column {
      padding-top: 20px;

      .column-header {
        font-family: var(--font-alt);
        text-transform: uppercase;
        color: var(--dark-text);
        font-size: 1rem;
        font-weight: 700;
        margin: 10px 0;
      }

      .column-item {
        padding-bottom: 10px;

        a {
          font-family: var(--font);
          color: var(--light-text);

          &:hover,
          &:focus {
            color: var(--primary);
          }
        }
      }
    }

    .social-links {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a {
        color: var(--light-text);
        margin: 0 5px;

        &:hover,
        &:focus {
          color: var(--primary);
        }
      }
    }

    .footer-description {
      color: var(--light-text);
    }

    .moto {
      color: var(--light-text);
    }

    .small-footer-logo {
      height: 36px;
    }
  }

  .footer-copyright {
    font-family: var(--font);
    color: var(--light-text);
    padding: 4rem 0 2rem;

    a {
      color: var(--light-text);

      &:hover,
      &:focus {
        color: var(--primary);
      }
    }
  }
}

.is-dark {
  .landing-page-wrapper {
    .vuero-footer {
      background: var(--landing-xxx-light-8);

      .footer-head {
        border-color: var(--landing-xxx-light-18);

        .head-text {
          h3 {
            color: var(--dark-dark-text);
          }

          p {
            font-size: 1.1rem;
            color: var(--light-text);
          }
        }

        .head-action {
          .buttons {
            .button {
              &.action-button {
                background: var(--primary);
                border-color: var(--primary);
              }

              &.chat-button {
                color: var(--primary);
                background: none !important;
              }
            }
          }
        }
      }

      .footer-body {
        .footer-column {
          .column-header {
            color: var(--dark-dark-text);
          }

          .column-item {
            a:hover {
              color: var(--primary);
            }
          }
        }

        .social-links {
          a:hover {
            color: var(--primary);
          }
        }
      }

      .footer-copyright {
        a {
          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .vuero-footer {
    .footer-head {
      flex-direction: column;
      text-align: center;

      .head-text {
        padding-bottom: 20px;
      }
    }

    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }

    .footer-description {
      max-width: 400px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .vuero-footer {
    .footer-head,
    .footer-body {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
