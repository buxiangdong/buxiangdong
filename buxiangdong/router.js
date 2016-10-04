define(['backbone'],function(){

	var Router = Backbone.Router.extend({

		routes: {
		"home":  "home",
		"store": "store",
		"order":"order",
		"cart":"cart",
		"mine":"mine"
		},

		home: function() {
			require(['./modules/home/home.js',],function(home){
				home.render();
			})
		},
		store: function() {
			require(['./modules/store/store.js',],function(store){
				store.render();
			})
		},
		order: function() {
			require(['./modules/order/order.js',],function(order){
				order.render();
			})
		},
		cart: function() {
			require(['./modules/cart/cart.js',],function(cart){
				cart.render();
			})
		},
		mine: function() {
			require(['./modules/mine/mine.js',],function(mine){
				mine.render();
			})
		}

	});

	var router = new Router();

	return router;

})

