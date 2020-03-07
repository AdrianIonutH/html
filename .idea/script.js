// console.log("mesaj");
//
// var elementById = document.getElementById("iii");
//
// console.log(elementById)




// Vue.component('licurici',{
//     props: ['zburatoare'],
//     template: '<li>{{ zburatoare }}</li>'
// })
//
// Vue.component('haine',{
//     props: ['colectie'],
//     template: '<li>{{ colectie }}</li>'
// })





Vue.component('mamaligaBeton',{
    props: ['merdeneus'],
    template: '<li>Added merdenea {{merdeneus.nume}}</li>'
})
var app = new Vue({
    el: '#app',
    data: {
        merdenea: {
            numeMerdenea:''},
        merdenele : []
    },
    methods: {
        addMerdenea: function(){
            this.merdenele.push (
                {
                    nume: this.merdenea.numeMerdenea
                });
            this.merdenea.numeMerdenea='';
        }
    }
})


// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!',
//         ceva: 'Test!',
//         nimic: 'Nimic',
//         mesajStyle: 'color: red',
//         mesajStyle2: 'color: blue',
//         shouldAppear: false,
//         shouldAppear2: true,
//         masini: [
//             {
//                 numeMasina: 'man'
//             },
//             {
//                 numeMasina: 'olcit'
//             }
//         ],
//         buchet: [
//             {
//                 numeFloare: 'lalea',
//                 culoare: 'galbena'
//             },
//             {
//                 numeFloare: 'mac',
//                 culoare: 'mov'
//             }
//         ],
//
//         myObject : {
//             userName: '',
//             password: ''
//         }
//
//
//
//     },
//     methods: {
//         mySpecialFunction: function () {
//             window.alert('you clicked that button');
//         },
//         hoverFunction: function () {
//             console.log('over the button');
//         }
//     }
//
//
// })


// elementById.addEventListener("click",function () {
//     let elementById = document.getElementById('iii');
//     console.log(elementById)
// elementById.innerHTML('hj');
// })