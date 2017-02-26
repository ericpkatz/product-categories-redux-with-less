import $ from 'jquery';

const render = ({ containerId, category, onSelect })=> {
  const container = $(containerId);
  const lis = category.products.map( product => `<li class='list-group-item'>${product.name}</li>`);
  const html = `<ul class='list-group'>${lis.join('')}</ul>`;
  container.html(html);
  container.on('click', 'li', function(){ onSelect($(this).index())});
};

export default render;
