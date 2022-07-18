<template>
  <div class="soccer-dashboard">
    <div class="soccer-dashboard-inner">
      <div class="columns">
        <div class="column is-4">
          <!--Live match card-->
          <div class="live-match">
            <div class="head">
              <h3 class="title is-5">لیگ قهرمانان اروپا</h3>
              <div class="league">
                <div class="left">
                  <span>گروه C</span>
                  <span>مسابقه‌ی 3 از 6</span>
                </div>
                <div class="right">
                  <div class="live-block">
                    <i class="iconify" data-icon="feather:video"></i>
                    <span>در حال برگزاری</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="match">
              <div class="left">
                <img
                  class="team-logo"
                  src="/images/icons/soccer/teams/barcelona.svg"
                  alt=""
                />
                <span class="team-name">بارسلونا</span>
              </div>
              <div class="center">
                <span class="score">4</span>
                <span class="separator">:</span>
                <span class="score">0</span>
              </div>
              <div class="right">
                img class="team-logo" src="/images/icons/soccer/teams/psg.svg" alt="" />
                <span class="team-name">پاریسن ژرمن</span>
              </div>
            </div>
            <div class="action">
              <VButton color="primary" fullwidth raised>مشاهده‌ی آنلاین</VButton>
            </div>
          </div>

          <!--Leagues-->
          <div class="leagues">
            <div class="head">
              <h3 class="title is-5">لیگ‌های اروپایی</h3>
            </div>
            <div class="leagues-list">
              <RouterLink :to="{ name: 'sidebar-dashboards-soccer' }" class="league-item">
                <img
                  class="league-logo"
                  src="/images/icons/soccer/leagues/ligue-1.svg"
                  alt=""
                />
                <div class="meta">
                  <span class="league-name">لیگ 1</span>
                  <span class="league-country">فرانسه</span>
                </div>
                <div class="end">
                  <span>8 مسابقه</span>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: 'sidebar-dashboards-soccer' }" class="league-item">
                <img
                  class="league-logo"
                  src="/images/icons/soccer/leagues/laliga.svg"
                  alt=""
                />
                <div class="meta">
                  <span class="league-name">لالیگا</span>
                  <span class="league-country">اسپانیا</span>
                </div>
                <div class="end">
                  <span>8 مسابقه</span>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: 'sidebar-dashboards-soccer' }" class="league-item">
                <img
                  class="league-logo"
                  src="/images/icons/soccer/leagues/liga.svg"
                  alt=""
                />
                <div class="meta">
                  <span class="league-name">لیگا</span>
                  <span class="league-country">پرتغال</span>
                </div>
                <div class="end">
                  <span>8 مسابقه</span>
                </div>
              </RouterLink>
              <RouterLink :to="{ name: 'sidebar-dashboards-soccer' }" class="league-item">
                <img
                  class="league-logo"
                  src="/images/icons/soccer/leagues/bundesliga.svg"
                  alt=""
                />
                <div class="meta">
                  <span class="league-name">بوندسلیگا</span>
                  <span class="league-country">آلمان</span>
                </div>
                <div class="end">
                  <span>8 مسابقه</span>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>

        <!--Right side-->
        <div class="column is-8">
          <!--Colored CTA-->
          <div class="dashboard-cta">
            <div class="dashboard-cta-img">
              <img alt="" src="/demo/photos/soccer/player.png" />
            </div>
            <h2 class="dashboard-cta-title">
              در مسابقه‌ی ما شرکت کنید و جوایز نفیس برنده شوید
            </h2>
            <p class="dashboard-cta-text">
              تنها کافی است نتیجه‌ی بازی را پیش‌بینی کنید و سرانجام بازی را حدس بزنید که
              به چه شکل تمام خواهد شد.
            </p>
            <VButton color="light" bold raised>بیشتر بدانید</VButton>
          </div>

          <!--Matches table-->
          <div class="matches-card">
            <!--Header-->
            <div class="matches-card-header">
              <!--Tabs-->
              <ul class="header-nav">
                <li class="nav-item">
                  <a class="nav-link is-active">همه</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">درحال برگزاری</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">پایان یافته</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">پیش رو</a>
                </li>
              </ul>
            </div>

            <!--Table-->
            <div class="matches-card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>وقت بازی</th>
                    <th>دیدار تیم‌ها</th>
                    <th>استادیوم</th>
                    <th>جزئیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">-- : --</span>
                        <span class="tag is-live">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          درحال برگزاری
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>بارسلونا</span
                          ><img alt="" src="/images/icons/soccer/teams/barcelona.svg" />
                        </div>
                        <p class="score-result score-result-vertical">
                          <span class="score-goals">4</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">0</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img alt="" src="/images/icons/soccer/teams/psg.svg" /><span
                            >پاریسن ژرمن</span
                          >
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">نیوکمپ</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">10:30</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          پیش رو
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>رئال مادرید</span
                          ><img alt="" src="/images/icons/soccer/teams/madrid.svg" />
                        </div>
                        <p class="score-result score-result-vertical">
                          <span class="score-goals">1</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">0</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img
                            alt=""
                            src="/images/icons/soccer/teams/liverpool.svg"
                          /><span>لیورپول</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">برنابئو</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">12:00</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          پیش رو
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>آرسنال</span
                          ><img alt="" src="/images/icons/soccer/teams/arsenal.svg" />
                        </div>
                        <p
                          class="score__result score__result--vertical score__result--not-started"
                        >
                          <span class="score-goals">-</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">-</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img alt="" src="/images/icons/soccer/teams/chelsea.svg" /><span
                            >چلسی</span
                          >
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">آرسنال</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">14:00</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          پیش رو
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>اورتون</span
                          ><img alt="" src="/images/icons/soccer/teams/everton.svg" />
                        </div>
                        <p
                          class="score__result score__result--vertical score__result--not-started"
                        >
                          <span class="score-goals">-</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">-</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img
                            alt=""
                            src="/images/icons/soccer/teams/liverpool.svg"
                          /><span>لیورپول</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">گودیسون پارک</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">16:00</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          پیش رو
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>والادولید</span
                          ><img alt="" src="/images/icons/soccer/teams/valladolid.svg" />
                        </div>
                        <p
                          class="score__result score__result--vertical score__result--not-started"
                        >
                          <span class="score-goals">-</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">-</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img alt="" src="/images/icons/soccer/teams/zagreb.svg" /><span
                            >زاگرب</span
                          >
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">خوزه زوریللا</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="match-time-row">
                        <span class="match-time">18:00</span>
                        <span class="tag">
                          <svg width="6" height="6" viewBox="0 0 8 8">
                            <circle fill="currentColor" cx="4" cy="4" r="4" />
                          </svg>
                          پیش رو
                        </span>
                      </div>
                    </td>
                    <td class="score-cell">
                      <div class="score score-vertical">
                        <div class="score-team score-team-vertical">
                          <span>پاریسن ژرمن</span
                          ><img alt="" src="/images/icons/soccer/teams/psg.svg" />
                        </div>
                        <p
                          class="score__result score__result--vertical score__result--not-started"
                        >
                          <span class="score-goals">-</span
                          ><span class="score-separator">:</span
                          ><span class="score-goals">-</span>
                        </p>
                        <div class="score-team score-team-vertical">
                          <img alt="" src="/images/icons/soccer/teams/chelsea.svg" /><span
                            >چلسی</span
                          >
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="stadium">پارس دِ پرنس</span>
                    </td>
                    <td>
                      <a class="table-action">
                        <i class="iconify" data-icon="feather:align-right"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.soccer-dashboard {
  .soccer-dashboard-inner {
    .live-match {
      @include vuero-l-card;

      padding: 2rem;
      margin-bottom: 1.5rem;

      .head {
        margin-bottom: 1.5rem;

        .league {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left {
            span {
              display: block;
              font-family: var(--font);

              &:first-child {
                color: var(--dark-text);
              }

              &:nth-child(2) {
                color: var(--light-text);
                font-size: 0.9rem;
              }
            }
          }

          .right {
            .live-block {
              display: inline-flex;
              align-items: center;
              padding: 0.25rem 0.75rem;
              border-radius: 50rem;
              background: var(--danger);
              color: var(--white);
              box-shadow: var(--danger-box-shadow);

              span {
                display: inline-block;
                font-family: var(--font);
                font-size: 0.85rem;
                margin-left: 0.25rem;
                [dir='rtl'] & {
                  margin-left: unset;
                  margin-right: 0.25rem;
                }
              }
            }
          }
        }
      }

      .match {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;

        .left,
        .right {
          text-align: center;

          .team-logo {
            display: block;
            min-width: 50px;
            max-width: 50px;
            text-align: center;
            margin-bottom: 0.25rem;
          }

          .team-name {
            display: block;
            font-family: var(--font);
            font-weight: 500;
          }
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;

          .score {
            display: block;
            font-family: var(--font);
            font-weight: 700;
            font-size: 2.25rem;
          }

          .separator {
            position: relative;
            top: -2px;
            display: block;
            padding: 0 0.5rem;
            font-family: var(--font);
            font-weight: 700;
            font-size: 1.75rem;
          }
        }
      }

      .action {
        .v-button {
          border-radius: 0.65rem;
          height: 44px;
        }
      }
    }

    .leagues {
      @include vuero-l-card;

      padding: 2rem;

      .head {
        margin-bottom: 1.5rem;
      }

      .leagues-list {
        .league-item {
          display: flex;
          align-items: center;

          &:not(:last-child) {
            margin-bottom: 1rem;
          }

          .league-logo {
            display: block;
            min-width: 38px;
            max-width: 38px;
          }

          .meta {
            margin-left: 0.5rem;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: 0.5rem;
            }

            line-height: 1.2;

            .league-name {
              display: block;
              font-family: var(--font-alt);
              font-size: 1rem;
              font-weight: 600;
              color: var(--dark-text);
            }

            .league-country {
              display: block;
              font-family: var(--font);
              font-size: 0.9rem;
              color: var(--light-text);
            }
          }

          .end {
            margin-left: auto;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: auto;
            }

            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
          }
        }
      }
    }

    .dashboard-cta {
      background-color: var(--primary);
      padding: 2rem;
      border-radius: 1rem;
      position: relative;
      margin-bottom: 1.5rem;

      .dashboard-cta-title {
        font-family: var(--font-alt);
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--white);
        margin: 0 0 0.25rem;
      }

      .dashboard-cta-text {
        color: var(--white);
        opacity: 0.9;
        font-family: var(--font);
        line-height: 1.7;
        margin-top: 0;
        max-width: 58%;
        margin-bottom: 1rem;
      }

      .dashboard-cta-img {
        width: 40%;
        max-width: 350px;
        position: absolute;
        overflow: hidden;
        height: calc(110%);
        top: -10%;
        right: 2rem;
        [dir='rtl'] & {
          left: 2rem;
          right: unset;
        }

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    .matches-card {
      @include vuero-l-card;

      padding: 0;
      overflow: hidden;

      .matches-card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3rem;
        padding: 2rem 2rem 0;

        .header-nav {
          display: flex;

          .nav-item {
            .nav-link {
              font-family: var(--font);
              margin-right: 1rem;
              [dir='rtl'] & {
                margin-left: 1rem;
                margin-right: unset;
              }

              border-bottom: 3px solid transparent;
              padding-bottom: 1rem;
              color: var(--light-text);

              &.is-active {
                color: var(--dark-text);
                border-bottom-color: var(--primary);
              }
            }
          }
        }
      }

      .matches-card-body {
        overflow-x: auto;

        .table {
          width: 100%;

          thead th {
            border: none;
            font-family: var(--font);
            font-size: 0.8rem;
            text-transform: uppercase;
          }

          tr {
            th:first-child,
            td:first-child {
              padding-left: 2rem;
              [dir='rtl'] & {
                padding-left: unset;
                padding-right: 2rem;
              }
            }

            th:last-child,
            td:last-child {
              padding-right: 2rem;
              [dir='rtl'] & {
                padding-left: 2rem;
                padding-right: unset;
              }
            }

            td {
              padding-top: 1.5rem;
              padding-bottom: 1.5rem;

              &.score-cell {
                min-width: 300px;
              }

              .match-time-row {
                display: flex;
                align-items: center;

                .match-time {
                  font-family: var(--font);
                  color: var(--light-text);
                  margin-right: 0.75rem;
                  [dir='rtl'] & {
                    margin-left: 0.75rem;
                    margin-right: unset;
                    white-space: nowrap;
                  }
                }

                .tag {
                  font-family: var(--font);

                  svg {
                    color: var(--warning);
                  }

                  &.is-live {
                    svg {
                      color: var(--danger);
                    }
                  }
                }
              }

              .table-action {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 36px;
                width: 36px;
                border-radius: 50%;
                color: var(--light-text);
                transition: background-color 0.3s;

                &:hover,
                &:focus {
                  background: var(--widget-grey);
                }
              }
            }
          }

          .score {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            .score-vertical {
              justify-content: flex-start;
            }

            .score-team {
              text-align: center;

              span {
                display: block;
                font-weight: 500;
                padding-top: 0.25rem;
              }

              img {
                width: 40px;
              }

              &.score-team-vertical {
                display: flex;
                align-items: center;
                flex: 1;

                &:first-child {
                  justify-content: flex-end;
                }

                span {
                  white-space: nowrap;
                  font-size: inherit;
                }

                img {
                  width: 32px;
                  margin: 0 0.5rem;
                }
              }
            }

            .score-result {
              text-align: center;
              width: 100%;
              font-weight: 900;
              font-size: 1.75rem;
              margin: 0;
              letter-spacing: 0.4em;

              &.score-result-not-started {
                color: gray;
              }

              &.score-result-vertical {
                letter-spacing: 0.2em;
                font-size: inherit;
                flex: 0 0 auto;
                width: auto;
              }
            }
          }
        }
      }
    }

    .matches {
      .nav-item {
        &:first-child {
          .nav-link {
            padding-left: 0;
            [dir='rtl'] & {
              padding-right: 0;
            }
          }
        }

        .nav-link {
          padding-top: 0;
          padding-bottom: 0;
        }
      }
    }
  }
}

.is-dark {
  .soccer-dashboard {
    .soccer-dashboard-inner {
      .live-match,
      .leagues {
        @include vuero-card--dark;

        .head {
          .title {
            color: var(--white) !important;
          }
        }

        .match {
          .left,
          .right {
            .team-name {
              color: var(--white) !important;
            }
          }
        }

        .leagues-list {
          .league-item {
            .meta {
              span:first-child {
                color: var(--white) !important;
              }
            }
          }
        }
      }

      .matches-card {
        @include vuero-card--dark;

        .matches-card-header {
          .header-nav {
            .nav-item {
              .nav-link {
                &.is-active {
                  color: var(--white) !important;
                }
              }
            }
          }
        }
      }

      .matches-card-body {
        .table {
          .score {
            .score-team {
              &.score-team-vertical {
                > span {
                  color: var(--white) !important;
                }
              }
            }
          }

          tr td {
            .table-action {
              &:hover {
                background: var(--dark-sidebar-light-2) !important;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .soccer-dashboard {
    .soccer-dashboard-inner {
      .dashboard-cta {
        .dashboard-cta-title {
          max-width: 170px;
        }

        .dashboard-cta-img {
          right: -0.25rem;
          [dir='rtl'] & {
            left: -0.25rem;
            right: unset;
          }

          width: 36%;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .soccer-dashboard {
    .soccer-dashboard-inner {
      .dashboard-cta {
        .dashboard-cta-title {
          max-width: 170px;
        }

        .dashboard-cta-img {
          right: 1rem;
          [dir='rtl'] & {
            left: 1rem;
            right: unset;
          }

          width: 36%;
        }
      }
    }
  }
}
</style>
