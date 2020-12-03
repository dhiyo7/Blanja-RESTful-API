module.exports = {
  success: (res, data) => {
    const resObject = {
      message: "Data Success",
      status: 200,
      data: data,
    };
    res.json(resObject);
  },
  error: (res) => {
    const resObject = {
      message: "Data Error",
      status: 500,
      // error: err
    };
    res.status(500).json(resObject);
  },

  nested: (res, data) => {
    let productArray = data[1];
    let categoryArray = data[0];
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

    const resObject = {
      message: "Data Success",
      status: 200,
      data: result,
    };
    res.json(resObject);
  },
};
