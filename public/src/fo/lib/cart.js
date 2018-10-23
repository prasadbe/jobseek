class Cart {

    constructor(){
        this.items = [];
        this.offers = [];
        this.customerId = 1;
        this.carts = [];
    }

    addItem(item) {
        if(item.qty == 0) {
            this.items = this.items.filter((val) => {
                return !(val.productId == item.productId)
            });
        } else {
            this.items = this.items.filter((val) => {
                return !(val.productId == item.productId)
            });
            this.items.push(item);
        }
        
        this.offerFormula();
    }

    removeItem(item) {
        this.items =  this.items.filter((val) => {
                return !val.productId == item.productId;
        });
    }

    addCustomer(id) {
        this.customerId = parseInt(id);
        this.offerFormula();
    }


    addOffers(offers) {
        this.offers = offers;
    }

    offerFormula () {

        
        let validOffers = this.offers.filter((val) => {
                return (val.customerId == this.customerId);
        }).filter((val) => {
            let valid = false;
            this.items.forEach((val2, key) => {
                if(!valid) {
                    valid = (val.productId == val2.productId)
                }
                    
            });
            return valid;
        })

        console.log(validOffers);

        var discount = 0; var total = 0;
        this.carts = [];
        this.items.filter((item) => {
                var cart = [];
                cart.push(item.productId);
                cart.id = item.productId;
                cart.name = item.name;
                cart.price = item.qty * item.price;
                cart.qty = item.qty;
                cart.discount = 0;
                cart.f_qty = 0;
                this.carts.push(cart);
        })
        validOffers.forEach((val, key) => {
            var item_key = 0;
            this.items.filter((item) => {
                item_key++;
                total += item.qty * item.price;
                return (val.productId == item.productId);
            }).forEach((val_p, key_p) => {
                var cart = [];
                cart.id = val_p.productId;
                cart.name = val_p.name;
                cart.price = val_p.qty * val_p.price;
                cart.qty = val_p.qty;
                cart.f_qty = 0;
                if(val.type == 'buy_y_get_x' && val_p.qty >= val.buy_qty) {
                    discount += Math.floor(val_p.qty / val.buy_qty) * val_p.price;
                    cart.f_qty = Math.floor(val_p.qty / val.buy_qty);
                    if(val_p.qty % val.buy_qty == 0) {
                        cart.f_qty = Math.ceil(val_p.qty / val.buy_qty) * (val.buy_qty + val.get_qty)  - val_p.qty;

                        val_p.qty = Math.ceil(val_p.qty / val.buy_qty) * (val.buy_qty + val.get_qty);
                        total += cart.f_qty * val_p.price;

                        
                    }
                    cart.qty = val_p.qty;

                    cart.price = cart.qty * val_p.price;
                    console.log(cart.price );

                } else if(val_p.qty >= val.min_qty) {
                    discount += val_p.qty * val.discount_price;
                    cart.qty = val_p.qty;
                    cart.f_qty = 0;
                }
                cart.discount = discount;
                this.carts.map((val_cart) => {
                    if(val_cart.id == cart.id) {
                        val_cart.f_qty = cart.f_qty;
                        val_cart.discount = cart.discount;
                        val_cart.price = cart.price;
                    } 
                });
            });
            
        });

        



        console.log(discount, total , this.items);

    }
}
export default new Cart();