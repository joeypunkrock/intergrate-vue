Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

Vue.component('range-slider', {
    props: ['range']
});

var todoItem = new Vue({
    el: '#todo_item',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Milk' }
        ],
    }
});

var rangeSlider = new Vue({
    el: '#range_slider',
    data: {
        rangeList: [
            { id: 0, value: '10' },
            { id: 1, value: '50' },
            { id: 2, value: '85' }
        ]
    },
    methods: {
        updateValue (e) {
            this.value = e.target.value;
            console.log(this.value);
        },
    }
});

// Define a new component called button-counter
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

new Vue({ el: '#components-demo' });