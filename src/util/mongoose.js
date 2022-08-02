module.exports = {
    multiDataToObject: function(dataArrays) {
        return dataArrays.map(data => data.toObject());
    },

    oneItemToObject: function(oneItem) {
        return oneItem ? oneItem.toObject() : oneItem;
    }
};