"use strict";

const products = {
  "brake-disc": {
    name: "Тормозной диск Bosch",
    category: "Тормозная система",
    article: "0986479A10",
    price: "4 500 ₽",
    type: "Тормозной диск",
    image: "images/products/brake-disc.jpg",
    alt: "Тормозной диск Bosch",
    description: "Тормозной диск взаимодействует с тормозными колодками и помогает замедлять автомобиль.",
    compatibility: "Совместимость необходимо проверить по марке, модели и году выпуска автомобиля."
  },

  "oil-filter": {
    name: "Масляный фильтр MANN-FILTER",
    category: "Фильтры",
    article: "W 712/95",
    price: "850 ₽",
    type: "Масляный фильтр",
    image: "images/products/oil-filter.jpg",
    alt: "Масляный фильтр MANN-FILTER",
    description: "Масляный фильтр задерживает загрязнения в моторном масле и помогает поддерживать чистоту системы смазки двигателя.",
    compatibility: "Совместимость необходимо проверить по каталогу производителя."
  },

  "spark-plug": {
    name: "Свеча зажигания NGK",
    category: "Система зажигания",
    article: "BKR6E",
    price: "450 ₽",
    type: "Свеча зажигания",
    image: "images/products/spark-plug.jpg",
    alt: "Свеча зажигания NGK",
    description: "Свеча зажигания создаёт искру для воспламенения топливовоздушной смеси в бензиновом двигателе.",
    compatibility: "Тип свечи необходимо сверить с рекомендациями производителя автомобиля."
  },

  "wiper-blades": {
    name: "Щётки стеклоочистителя Bosch Aerotwin",
    category: "Стеклоочистители",
    article: "A863S",
    price: "2 300 ₽",
    type: "Комплект щёток стеклоочистителя",
    image: "images/products/wiper-blades.jpg",
    alt: "Щётки стеклоочистителя Bosch Aerotwin",
    description: "Щётки стеклоочистителя удаляют воду и загрязнения с лобового стекла, помогая сохранять хорошую видимость.",
    compatibility: "Необходимо проверить длину щёток и тип крепления."
  },

  "air-filter": {
    name: "Воздушный фильтр MANN-FILTER",
    category: "Фильтры",
    article: "C 30 005",
    price: "1 200 ₽",
    type: "Воздушный фильтр",
    image: "images/products/air-filter.jpg",
    alt: "Воздушный фильтр MANN-FILTER",
    description: "Воздушный фильтр очищает поступающий в двигатель воздух от пыли и других загрязнений.",
    compatibility: "Форму и артикул необходимо проверить по каталогу конкретного автомобиля."
  },

  "engine-oil": {
    name: "Моторное масло LIQUI MOLY Top Tec 4200",
    category: "Масла и жидкости",
    article: "Top Tec 4200",
    price: "5 500 ₽",
    type: "Моторное масло 5W-30",
    image: "images/products/engine-oil.jpg",
    alt: "Моторное масло LIQUI MOLY",
    description: "Моторное масло предназначено для двигателей, которым подходят его вязкость и необходимые допуски.",
    compatibility: "Перед использованием необходимо проверить требования производителя двигателя."
  }
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id") || "brake-disc";
const product = products[productId] || products["brake-disc"];

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

document.title = `${product.name} — Гараж №7`;

setText("breadcrumb-product", product.name);
setText("product-eyebrow", `${product.category} · Артикул ${product.article}`);
setText("product-title", product.name);
setText("product-description", product.description);
setText("product-full-description", product.description);
setText("product-price", product.price);
setText(
  "product-note",
  "Цена указана для учебного проекта. Перед покупкой проверьте совместимость детали."
);

setText("spec-article", product.article);
setText("spec-category", product.category);
setText("spec-price", product.price);
setText("spec-type", product.type);
setText("spec-compatibility", product.compatibility);

const image = document.getElementById("product-image");

if (image) {
  image.src = product.image;
  image.alt = product.alt;
}

const orderLink = document.getElementById("product-order-link");

if (orderLink) {
  orderLink.href = `order.html?product=${encodeURIComponent(product.name)}`;
}