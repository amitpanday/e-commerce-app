import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const product = {
  id: 1,
  categoryId: 1,
  cover: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350",
  images: [
    {
      source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350"
    },
    {
      source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350"
    },
    {
      source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350"
    }
  ],
  title: "title",
  brand: 1,
  shortDescription: "shortDescription",
  description: "description",
  properties: [
    {
      title: "properties title1",
      value: "properties value1"
    },
    {
      title: "properties title2",
      value: "properties value2"
    },
    {
      title: "properties title3",
      value: "properties value3"
    },
    {
      title: "properties title4",
      value: "properties value4"
    },
    {
      title: "properties title5",
      value: "properties value5"
    },
    {
      title: "properties title6",
      value: "properties value6"
    }
  ],
  percentage: 30,
  price: 15,
  oldPrice: 25,
  freeShipping: true
};





export default [
  {
    type: "slider",
    height: 350,
    images: [
      {
        title: "title 1",
        source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350",
        category_id: 1
      },
      {
        title: "title 2",
        source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350",
        category_id: 1
      },
      {
        title: "title 3",
        source: "https://via.placeholder.com/" + width + "x350.png?text=" + width + "x350",
        category_id: 1
      }
    ]
  },
  {
    type: "tabs",
    categories: [
      {
        id: 25,
        title: "Category 1",
        products: [
          {
            ...product
          },
          {
            ...product
          },
          {
            ...product
          }
        ]
      },
      {
        id: 26,
        title: "Category 2",
        products: [
          {
            ...product
          },
          {
            ...product
          },
          {
            ...product
          }
        ]
      },
      {
        id: 27,
        title: "Category 3",
        products: [
          {
            ...product
          },
          {
            ...product
          },
          {
            ...product
          }
        ]
      }
    ]
  },
  {
    type: "banner_content",
    marginTop: 25,
    components: [
      {
        type: "banner",
        source: "https://via.placeholder.com/" + width + "x150.png?text=" + width + "x150",
        category_id: 1,
        height: 150,
        col: 1
      }
    ]
  },
  {
    type: "banner_content",
    components: [
      {
        type: "banner",
        source: "https://via.placeholder.com/" + width + "x150.png?text=" + width + "x150",
        category_id: 1,
        height: 150,
        col: 2
      },
      {
        type: "banner",
        source: "https://via.placeholder.com/" + width + "x150.png?text=" + width + "x150",
        category_id: 1,
        height: 150,
        col: 2
      }
    ]
  },
  {
    type: "product_slider",
    title: "Product Slider title",
    products: [
      {
        ...product
      },
      {
        ...product
      },
      {
        ...product
      }
    ]
  },
  {
    type: "banner_content",
    components: [
      {
        type: "banner",
        source: "https://via.placeholder.com/" + width + "x250.png?text=" + width + "x250",
        category_id: 1,
        height: 250,
        col: 1
      }
    ]
  },
  {
    type: "category_banner",
    categories: [
      {
        id: 25,
        title: "category_banner title1",
        source: "https://via.placeholder.com/200x200.png?text=200x200",
      },
      {
        id: 26,
        title: "category_banner title2",
        source: "https://via.placeholder.com/200x200.png?text=200x200",
      },
      {
        id: 27,
        title: "category_banner title3",
        source: "https://via.placeholder.com/200x200.png?text=200x200",
      },
      {
        id: 28,
        title: "category_banner title4",
        source: "https://via.placeholder.com/200x200.png?text=200x200",
      }
    ],
    col: 2,
    height: 150
  },
  {
    type: "product_scroll",
    title: "product_scroll title",
    products: [
      {
        ...product
      },
      {
        ...product
      },
      {
        ...product
      }
    ]
  }
]
