function createBlock(name, value, contents){
    var item = elem('div',
        {'class': 'block', draggable: true, 'data-name': name},
        [name]
    );
    if (value !== undefined && value !== null){
        item.appendChild(elem('input', {type: 'number', value: value}));
    }
    if (Array.isArray(contents)){
        item.appendChild(
            elem('div', {'class': 'container'}, contents.map(function(block){
            return createBlock.apply(null, block);
        })));
    }else if (typeof contents === 'string'){
        // Add units (degrees, etc.) specifier
        item.appendChild(document.createTextNode(' ' + contents));
    }
    return item;
}
    function blockContents(block){
        var container = block.querySelector('.container');
        return container ? [].slice.call(container.children) : null;
    }

    function blockValue(block){
        var input = block.querySelector('input');
        return input ? Number(input.value) : null;
    }