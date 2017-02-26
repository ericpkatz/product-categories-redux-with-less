import CategoriesComponent from './CategoriesComponent';
import ProductsComponent from './ProductsComponent';
require('./foo.less');

let categories = [
  {
    name: 'Foo',
    products: [
      { name: 'Foo 1' },
      { name: 'Foo 2' },
      { name: 'Foo 3' },
    ]
  },
  {
    name: 'Bar',
    products: [
      { name: 'Bar 1' },
      { name: 'Bar 2' },
      { name: 'Bar 3' },
    ]
  },
  {
    name: 'Bazz',
    products: [
      { name: 'Bazz 1' },
      { name: 'Bazz 2' },
      { name: 'Bazz 3' },
    ]
  }
];

let idx = 0;

const onSelectCategory = (_idx)=> {
  idx = _idx;
  renderCategories();
};

const onSelectProduct = (_idx)=> {
  console.log(`you have chosen ${categories[idx].products[_idx].name}`);
}

const renderCategories = ()=> {
  CategoriesComponent({ containerId: '#categories', categories, idx, onSelect: onSelectCategory });
  renderProducts();
};

const renderProducts = ()=> {
  const category = categories[idx];
  ProductsComponent({ containerId: '#products', category, onSelect: onSelectProduct });
};

renderCategories();
