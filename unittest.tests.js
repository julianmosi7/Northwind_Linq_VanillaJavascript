/* eslint-disable camelcase */
/* eslint-disable no-undef */
testSuite.T01_First5ProductsWithCategories = function () {
  return testSuite.test(_ => {
    const expected = ['Alice Mutton - Meat/Poultry',
      'Aniseed Syrup - Condiments',
      'Boston Crab Meat - Seafood',
      'Camembert Pierrot - Dairy Products',
      'Carnarvon Tigers - Seafood'
    ];
    const actual = First5ProductsWithCategories();
    return actual.assertEquals(expected);
  });
};

testSuite.T02_OrderedProductsOfBOTTM = function () {
  return testSuite.test(_ => {
    const expected = ['Alice Mutton',
      'Camembert Pierrot',
      'Gnocchi di nonna Alice',
      'Ikura',
      'Ipoh Coffee',
      'Manjimup Dried Apples',
      'Mozzarella di Giovanni',
      'Northwoods Cranberry Sauce',
      'Raclette Courdavault',
      'Tarte au sucre'
    ];
    const actual = OrderedProductsOfBOTTM();
    return actual.assertEquals(expected);
  });
};

testSuite.T03_NrOfEmployeesWhoSoldToCustomersInGivenCity = function () {
  return testSuite.test(_ => {
    const results = [];
    results.push(`Nantes: ${NrOfEmployeesWhoSoldToCustomersInGivenCity('Nantes').assertEquals(4)}`);
    results.push(`London: ${NrOfEmployeesWhoSoldToCustomersInGivenCity('London').assertEquals(9)}`);
    results.push(`Buenos Aires: ${NrOfEmployeesWhoSoldToCustomersInGivenCity('Buenos Aires').assertEquals(8)}`);
    return results;
  });
};

testSuite.T04_CustomersWithUnshippedOrders = function () {
  return testSuite.test(_ => {
    const expected = ['Cactus Comidas para llevar - Buenos Aires/Argentina - Laura Callahan',
      'LILA-Supermercado - Barquisimeto/Venezuela - Laura Callahan',
      'LILA-Supermercado - Barquisimeto/Venezuela - Nancy Davolio',
      'LINO-Delicateses - I. de Margarita/Venezuela - Nancy Davolio',
      'Rancho grande - Buenos Aires/Argentina - Michael Suyama'
    ];
    const actual = CustomersWithUnshippedOrders();
    return actual.assertEquals(expected);
  });
};

testSuite.T05_TotalQuantityOfShipperTest = function () {
  return testSuite.test(_ => {
    const results = [];
    results.push(`Speedy Express: ${TotalQuantityOfShipper('Speedy Express').assertEquals(15730)}`);
    results.push(`United Package: ${TotalQuantityOfShipper('United Package').assertEquals(19195)}`);
    results.push(`Federal Shipping: ${TotalQuantityOfShipper('Federal Shipping').assertEquals(15194)}`);
    return results;
  });
};

testSuite.T06_AveragePriceOfSuppliersOfCityTest = function () {
  return testSuite.test(_ => {
    const results = [];
    results.push(`Tokyo: ${AveragePriceOfSuppliersOfCity('Tokyo').assertEquals(46)}`);
    results.push(`Paris: ${AveragePriceOfSuppliersOfCity('Paris').assertEquals(140.75)}`);
    results.push(`Berlin: ${AveragePriceOfSuppliersOfCity('Berlin').assertEquals(29.71)}`);
    return results;
  });
};

testSuite.T07_CategoriesWithProductsInStockMoreThan = function () {
  return testSuite.test(_ => {
    const results = [];
    results.push(`400: ${CategoriesWithProductsInStockMoreThan(400).assertEquals(['Beverages', 'Condiments', 'Seafood'])}`);
    results.push(`600: ${CategoriesWithProductsInStockMoreThan(600).assertEquals(['Seafood'])}`);
    results.push(`200: ${CategoriesWithProductsInStockMoreThan(200).assertEquals(['Beverages', 'Condiments', 'Confections', 'Dairy Products', 'Grains/Cereals', 'Seafood'])}`);
    return results;
  });
};

testSuite.T08_AverageProductPricePerEmployee = function () {
  return testSuite.test(_ => {
    const expected = [{
        EmployeeName: 'Suyama',
        AveragePrice: 24.40
      },
      {
        EmployeeName: 'Peacock',
        AveragePrice: 28.85
      },
      {
        EmployeeName: 'Leverling',
        AveragePrice: 28.86
      },
      {
        EmployeeName: 'King',
        AveragePrice: 28.62
      },
      {
        EmployeeName: 'Fuller',
        AveragePrice: 29.88
      }, {
        EmployeeName: 'Dodsworth',
        AveragePrice: 32.48
      },
      {
        EmployeeName: 'Davolio',
        AveragePrice: 26.96
      },
      {
        EmployeeName: 'Callahan',
        AveragePrice: 26.08
      },
      {
        EmployeeName: 'Buchanan',
        AveragePrice: 25.24
      }
    ];
    return AverageProductPricePerEmployee().assertEquals(expected);
  });
};