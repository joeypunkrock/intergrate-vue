Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

Vue.component('range-item', {
    props: ['range']
});

var app = new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Milk' }
        ],
        rangeList: [
            { id: 0, value: '10' },
            { id: 1, value: '50' },
            { id: 2, value: '85' }
        ]
    }
});