// Add Icon
function renderPicture(data: any /*, cell: any, row: any */) {
  return `
        <img class="product-photo" src="${data}" alt="">
    `
}

// Name
function renderName(data: any /*, cell: any, row: any */) {
  return `<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${data}</span>`
}

// SKU
function renderSKU(data: any /*, cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Price
function renderPrice(data: any /*, cell: any, row: any */) {
  return `<span class="light-text">$${data}</span>`
}

// Stock
function renderStock(data: any /*, cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Category
function renderCategory(data: any /*, cell: any, row: any */) {
  return `<span class="light-text">${data}</span>`
}

// Button
function renderButton(data: any, cell: any, row: any) {
  return `<div class="has-text-left">
            <button class="button v-button is-dark-outlined" data-row="${row.dataIndex}">
                <span class="icon">
                    <i aria-hidden="true" class="lnir lnir-pencil"></i>
                </span>
                <span>ویرایش</span>
            </button>
        </div>
    `
}

export const datatableV2 = {
  perPageSelect: [5, 10, 20, 25, 50, 100],
  perPage: 10,
  labels: {
    placeholder: 'جستجو...',
    perPage: '{select} داده در صفحه',
    noRows: 'مطلبی یافت نشد',
    info: 'نمایش {start} الی {end} از {rows} مورد',
  },
  columns: [
    { select: 0, hidden: true },
    { select: 1, render: renderPicture, sortable: false },
    { select: 2, render: renderName },
    { select: 3, render: renderSKU },
    { select: 4, render: renderPrice },
    { select: 5, render: renderStock },
    { select: 6, render: renderCategory },
    { select: 7, render: renderButton, sortable: false },
  ],
  data: {
    headings: [
      'شناسه',
      'تصویر',
      'نام',
      'کد محصول',
      'قیمت',
      'موجودی',
      'دسته‌بندی',
      'اقدامات',
    ],
    data: [
      [
        0,
        '/demo/photos/products/1.png',
        'مبلمان زرد',
        'FC-58-5564',
        '19,000,000',
        51,
        'مبلمان',
        true,
      ],
      [
        1,
        '/demo/photos/products/2.png',
        'مبلمان سبز',
        'FC-58-1565',
        '17,000,000',
        42,
        'مبلمان',
        true,
      ],
      [
        2,
        '/demo/photos/products/3.png',
        'مبلمان فیروزه',
        'FS-12-4854',
        '9,000,000',
        59,
        'صندلی',
        true,
      ],
      [
        3,
        '/demo/photos/products/4.png',
        'مبلمان نیلی',
        'FC-58-6723',
        '18,000,000',
        42,
        'مبلمان',
        true,
      ],
      [
        4,
        '/demo/photos/products/5.png',
        'مبلمان قرمز',
        'FT-45-4684',
        '28,000,000',
        12,
        'میز',
        true,
      ],
      [
        5,
        '/demo/photos/products/6.png',
        'مبلمان لیمویی',
        'FC-58-7565',
        '19,000,000',
        37,
        'مبلمان',
        true,
      ],
      [
        6,
        '/demo/photos/products/7.png',
        'صندلی خردل',
        'FS-11-1861',
        '7,000,000',
        31,
        'صندلی',
        true,
      ],
      [
        7,
        '/demo/photos/products/8.png',
        'کاناپه مدرن',
        'FC-58-3971',
        '19,000,000',
        29,
        'مبلمان',
        true,
      ],
      [
        8,
        '/demo/photos/products/9.png',
        'میز سه تیکه',
        'FT-22-2875',
        '3,400,000',
        6,
        'میز',
        true,
      ],
      [
        9,
        '/demo/photos/products/10.png',
        'صندلی چوبی',
        'FS-11-2876',
        '8,000,000',
        16,
        'صندلی',
        true,
      ],
      [
        10,
        '/demo/photos/products/11.png',
        'میز مدرن',
        'FT-14-6543',
        '15,000,000',
        33,
        'میز',
        true,
      ],
      [
        11,
        '/demo/photos/products/12.png',
        'کاناپه هایپ',
        'FC-58-7241',
        '38,000,000',
        4,
        'مبلمان',
        true,
      ],
      [
        12,
        '/demo/photos/products/13.png',
        'کمد چوبی',
        'FD-98-4654',
        '27,000,000',
        26,
        'کمد',
        true,
      ],
      [
        13,
        '/demo/photos/products/14.png',
        'صندلی گردویی',
        'FS-11-5873',
        '110,000,000',
        37,
        'صندلی',
        true,
      ],
      [
        14,
        '/demo/photos/products/15.png',
        'صندلی بنفش',
        'FS-10-1948',
        '13,000,000',
        24,
        'صندلی',
        true,
      ],
      [
        15,
        '/demo/photos/products/16.png',
        'صندلی گرد',
        'FS-11-2857',
        '6,000,000',
        31,
        'صندلی',
        true,
      ],
      [
        16,
        '/demo/photos/products/17.png',
        'کابینت مدرن',
        'FB-58-25253',
        '24,000,000',
        11,
        'کابینت',
        true,
      ],
      [
        17,
        '/demo/photos/products/18.png',
        'کابینت کرومی',
        'FB-58-5673',
        '35,000,000',
        29,
        'کابینت',
        true,
      ],
      [
        18,
        '/demo/photos/products/19.png',
        'لامپ مدرن',
        'FL-19-7354',
        '5,000,000',
        62,
        'لامپ',
        true,
      ],
      [
        19,
        '/demo/photos/products/20.png',
        'لامپ سه تیکه',
        'FL-18-2846',
        '18,000,000',
        44,
        'لامپ',
        true,
      ],
      [
        20,
        '/demo/photos/products/21.png',
        'لامپ جوبی',
        'FL-19-1947',
        '6,000,000',
        82,
        'لامپ',
        true,
      ],
      [
        21,
        '/demo/photos/products/22.png',
        'لامپ کربنی',
        'FL-19-3658',
        '22,000,000',
        11,
        'لامپ',
        true,
      ],
      [
        22,
        '/demo/photos/products/23.png',
        'لامپ چند تیکه',
        'FL-19-1731',
        '16,000,000',
        17,
        'لامپ',
        true,
      ],
    ],
  },
}
