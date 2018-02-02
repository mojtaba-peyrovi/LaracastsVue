Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

    data() {
        return {
            tasks: [
                {task:'go to the sore',complete:true},
                {task:'go to shop',complete:false},
                {task:'go to the bank',complete:true},
                {task:'go to work',complete:false},
            ]
        }
    }
});

Vue.component('task',{
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root',

});
