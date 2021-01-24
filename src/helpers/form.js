module.exports = {
  success: (res, data) => {
    const resObject = {
      message: "Data Success",
      status: 200,
      data: data,
    };
    res.json(resObject);
  },

  error: (res, err) => {
    const resObject = {
      message: err,
      // status: 500,
      // error: err
    };
    res.status(500).json(resObject);
  },

  // Kategories response
  nested: (res, data) => {
    let productArray = data[1];
    let categoryArray = data[0];

    // console.log('category ',categoryArray[0]);
    // console.log('product ',productArray);

    const sortKey = "category_name";
    categoryArray.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return -1;
      }
      if (a[sortKey] > b[sortKey]) {
        return 1;
      }
      return 0;
    });

    let categories = categoryArray.reduce((map, row) => {
      const key = row["category_name"];
      map[key] = row;
      return map;
    }, {});

    productArray.reduce((map, row) => {
      const key = row["category_name"];
      map[key];
      if (map[key]) {
        if (!map[key].product) map[key].product = [];
        map[key].product.push(row);
      }

      return map;
    }, categories);

    let result = Object.values(categories);
    // let result = categories;

    const resObject = {
      message: "Data Success",
      status: 200,
      data: result[0],
    };
    res.json(resObject);
  },

  // orders response
  nestedAll: (res, data) => {
    let orderDetailArray = data[1];
    let orderArray = data[0];

    let orders = orderArray.reduce((map, row) => {
      const key = row["id"];
      console.log("order key = " + key);
      map[key] = row;
      return map;
    }, {});

    orderDetailArray.reduce((map, row) => {
      const key = row["order_id"];
      map[key];
      if (map[key]) {
        if (!map[key].order_detail) map[key].order_detail = [];
        map[key].order_detail.push(row);
      }

      return map;
    }, orders);

    let result = Object.values(orders);

    const resObject = {
      message: "Data Success",
      status: 200,
      data: result,
    };
    res.json(resObject);
  },

  // order Detail response
  nestedOne: (res, data) => {
    let orderDetailArray = data[1];
    let orderArray = data[0];

    let orders = orderArray.reduce((map, row) => {
      const key = row["id"];
      console.log("order key = " + key);
      map[key] = row;
      return map;
    }, {});

    orderDetailArray.reduce((map, row) => {
      const key = row["order_id"];
      map[key];
      if (map[key]) {
        if (!map[key].order_detail) map[key].order_detail = [];
        map[key].order_detail.push(row);
      }

      return map;
    }, orders);

    let result = Object.values(orders);

    const resObject = {
      message: "Data Success",
      status: 200,
      data: result[0],
    };
    res.json(resObject);
  },

  nestedAllProduct: (res, data) => {
    let productArray = data[0]
    let reviewArray = data[1]
    
    let products = productArray.reduce((map,row) => {
      const key = row["id"]
      map[key] = row
      row.review = []
      return map
    }, {})

    reviewArray.reduce((map,row) => {
      const key = row["product_id"]
      map[key]
      console.log(!map[key].review);
      if(map[key]){
        if(!map[key].review){ 
          map[key].review = []
        };
        map[key].review.push(row)
      }
      return map
    }, products)
    let result = Object.values(products);

    const resObject = {
      message: "Data Success",
      status: 200,
      data: result
    };
    res.json(resObject);
  },
  
  nestedProductById: (res, data) => {
    let productArray = data[0]
    let reviewArray = data[1]
    
    let products = productArray.reduce((map,row) => {
      const key = row["id"]
      map[key] = row
      row.review = []
      return map
    }, {})

    reviewArray.reduce((map,row) => {
      const key = row["product_id"]
      map[key]
      console.log(!map[key].review);
      if(map[key]){
        if(!map[key].review){ 
          map[key].review = []
        };
        map[key].review.push(row)
      }
      return map
    }, products)
    let result = Object.values(products);

    const resObject = {
      message: "Data Success",
      status: 200,
      data: result[0]
    };
    res.json(resObject);
  }
};
