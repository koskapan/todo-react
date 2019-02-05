class ItemsService {

    items = [];

    async getItems() {
        return this.items;
    }

    async getItem(id) {
        this.items.find(item => {
            return item.id === id
        });
    }

    async createItem (text)  {
        let newItem = {
            id: Date.now(),
            createDate: Date.now(),
            text: text
        };

        this.items.push(newItem);

        return newItem;
    }

    async editItem(id, text) {
        let editedItem = {}
        
        this.items = this.items.filter( function(item) {
            if (item.id === id) {
                item.text = text;
                editedItem = item;
            }
            return item;            
        });  

        return editedItem;
    }

    async deleteItem(id) {
        let removedItem = {};
        this.items = this.items.filter( function(item) {
            if (item.id === id) {
                removedItem = item;
            }
            return item.id !== id;            
        });        
        return removedItem;
    }
}

export const itemsService  = new ItemsService();