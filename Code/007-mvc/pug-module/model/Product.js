const db = require('../database/db');

module.exports = class Product {
    
    constructor(data) {  
        this.id = +data.id;             
        this.product_name = data.product_name;
        this.price = data.price;
        this.description = data.description;
        this.picture = data.picture;
    }

    
    getShortned() {
        const end = 30;

        if(this.description.length > end) {
            this.description = this.description.slice(0,end) + '...';
        }

        return this;
    }
}