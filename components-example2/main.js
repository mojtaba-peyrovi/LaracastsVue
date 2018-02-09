Vue.component('modal',{
    template: `

    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
          <div class="box">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quaerat illum saepe quae pariatur velit dolorem iusto iste rem, laborum!</p>
          </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>

    `

});

new Vue({
    el:'#root',

    data: {
        showModal : false
    }
});
