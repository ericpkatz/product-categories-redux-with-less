import $ from 'jquery';

const render = ({ containerId, categories, idx, onSelect})=> {
  const container = $(containerId); 
  const lis = categories.map( (category, _idx) => 
      `<li class='list-group-item${idx === _idx ? ' list-group-item-success': ''}'>${category.name}</li>`
  );
  const html = `<ul class='list-group'>${lis.join('')}</ul>`;
  container.html(html);
  container.on('click', 'li', function(){ onSelect($(this).index()) });
}

export default render;
