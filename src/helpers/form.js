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
};
