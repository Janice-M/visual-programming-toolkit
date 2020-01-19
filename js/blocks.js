function createBlock(name, value, contents){
    var item = elem('div',
        {'class': 'block', draggable: true, 'data-name': name},
        [name]
    );