function First5ProductsWithCategories() {
  let q = db.Products
      .sort((x, y) => x.ProductName < y.ProductName ? -1 : 1)
      .slice(0, 5)
      .map(x => `${x.ProductName} - ${x.Category.CategoryName}`);
  return q;
}

function OrderedProductsOfBOTTM() {
  let q = db.OrderDetails
      .filter(x => x.Order.Customer.CustomerID === "BOTTM")
      .filter(x => x.Product.UnitPrice > 30)
      .map(x => x.Product.ProductName)
      .reduce((set, x) => {
        if(set.indexOf(x) < 0) set.push(x);
        return set;
      }, [])
      .sort((x, y) => x < y ? -1 : 1);
  return q;
}

function NrOfEmployeesWhoSoldToCustomersInGivenCity(city) {
  let q = db.Orders
      .filter(x => x.Customer.City === city)
      .map(x => x.Employee.LastName)
      .reduce((set, x) => {
        if(set.indexOf(x) < 0) set.push(x);
        return set;
      }, [])
      .map(x => x.Employee)
      .length;
  return q;
}

function CustomersWithUnshippedOrders() {
  let q = db.Orders
      .filter(x => x.Customer.Country === "Venezuela" || x.Customer.Country === "Argentina")
      .filter(x => x.ShippedDate === null)
      .sort((x, y) => x.Customer.CompanyName === y.Customer.CompanyName ? x.Employee.LastName < y.Employee.LastName ? -1 : 1 : x.Customer.CompanyName < y.Customer.CompanyName ? -1 : 1)
      .map(x => `${x.Customer.CompanyName} - ${x.Customer.City}/${x.Customer.Country} - ${x.Employee.FirstName} ${x.Employee.LastName}`);
  return q;
}

function TotalQuantityOfShipper(shipperCompany) {
  let q = db.OrderDetails
      .filter(x => x.Order.Shipper.CompanyName === shipperCompany)
      .filter(x => x.Order.ShippedDate !== null)
      .reduce((sum, x) => sum + x.Quantity, 0);
  return q;
}

function AveragePriceOfSuppliersOfCity(city) {
  let a = db.Products
      .filter(x => x.Supplier.City === city)
      .length;
  let q = db.Products
      .filter(x => x.Supplier.City === city)
      .reduce((sum, x) => sum + x.UnitPrice, 0) / a;
  return q;
}

function CategoriesWithProductsInStockMoreThan(totalStock) {
    let cat;
       let q = db.Products
           .map(x => x.Category.CategoryID)
           .reduce((set, x) => {
               if(set.indexOf(x) < 0) set.push(x);
               return set;
           }, []);
       let a = q.forEach(x => db.Products.filter(y => y.Category.CategoryID === x).reduce((sum, x) => sum + x.UnitsInStock, 0));
        q.map(x => cat = {Category: x, TotalUnitsInStock: 0});
        a.map(x => cat.TotalUnitsInStock = x);
       console.log(q);
        return cat;
}

function AverageProductPricePerEmployee() {

}
