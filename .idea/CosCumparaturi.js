Vue.component ('cumparaturiComponent',{
    props: ['alimente'],
    template: '<tr><td>{{alimente.nume}}</td><td> {{alimente.qty}}</td></tr>'
})

var app = new Vue({
    el: '#app',
    data: {
        produs: {
            numeProdus:'',
            cantitate:''},
        cumparaturi: []
    },
    methods: {
        adaugaProdus: function () {
            this.cumparaturi.push(
                {
                nume: this.produs.numeProdus,
                qty: this.produs.cantitate
            });
            this.produs.numeProdus='';
            this.produs.cantitate='';
        }
    }
})