var app = new Vue({
    el: '#app',
    data() {
        return {
            info: "",

        }
    },
    mounted() {
        var self = this;
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function (response) {
                self.info = response;
            })
    }
})