var socket=io();
var vm = new Vue({
    el: '#infoDiv',
  
    data: {
      orders: {},
      NOList: {},
    },
  
    created: function () {
      socket.on('initialize', function (data) {
        this.orders = data.orders;
      }.bind(this));
    },
  
    methods: {
      getNext: function () {
        var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
          return Math.max(last, next);}, 0);
        return lastOrder + 1;
      },
  
      addOrder: function () {
        this.NOList[0].orderId = this.getNext();
        this.NOList[0].orderItems = burgerSelection();
        this.NOList[0].customerInfo = OrderInfo();
  
        socket.emit("addOrder",this.NOList[0]);
      },
  
      displayOrder: function (event) {
        var offset = {x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top};
  
        var newOrder = {
  
          orderId: undefined,
  
          details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y
          },
  
          orderItems:[],
          customerInfo:{},
  
          }
          this.NOList = [newOrder];
        },
          
            tryit: function() {
               // console.log("help")
                this.addOrder();
                OrderOutput(OrderInfo(),burgerSelection(),this.NOList[0].details);

            },
    }
});


