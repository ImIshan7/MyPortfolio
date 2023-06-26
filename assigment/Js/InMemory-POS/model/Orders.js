/*
function tempCartModal(itemCode,itmName,itmPrice,itemOrderQty,total) {
    var tempOrder={
        orItemCOde:itemCode,
        orItemName:itmName,
        orItemPrice:itmPrice,
        orItemQTY:itemOrderQty,
        orItemTotal:total
    }
    tempOrderCartAr.push(tempOrder);
}*/

class Orders{
    constructor(oId, customer, date, details, subTotal) {
        this.oId = oId;
        this.customer = customer;
        this.date = date;
        this.details = details;
        this.subTotal=subTotal;
    }
}