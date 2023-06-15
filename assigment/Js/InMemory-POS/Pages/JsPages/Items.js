

var items=[];

$("#addItems").click(function (){
    let itemId=$("#txtiid").val();
    let itemName=$("#txtName").val();
    let itemPrice=$("#txtprice").val();
    let itemQTY=$("#txtqty").val();

    var itemObject={

        id:itemId,
        name:itemName,
        price:itemPrice,
        qty:itemQTY

    }

    items.push(itemObject);

    loadAllItems();

    bindRowClickEvents();
});


function bindRowClickEvents() {
    $("#tblItems>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        $('#txtiid').val(id);
        $('#txtName').val(name);
        $('#txtprice').val(price);
        $('#txtqty').val(qty);

    });
}


function loadAllItems() {

    $("#tblItems").empty();

    for (var item of items) {
        var row = `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.price}</td><td>${item.qty}</td></tr>`;

        $("#tblItems").append(row);
    }
}


$("#deleteItems").click(function (){

    let deleteId=$("#txtiid").val();

    let option=confirm("Do you Sure?"+deleteId);
    if (option){
        if (deleteItems(deleteId)) {
            alert("Item Successfully Deleted..");
            setTextfieldValues("", "", "", "");
        } else {
            alert("No such customer to delete");
        }
    }
});

$("#updateItems").click(function () {
    let itemID = $("#txtiid").val();
    let response = updateItems(itemID);
    if (response) {
        alert("Item Updated Successfully");
        setTextfieldValues("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});


$("#txtiid").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedId = $("#txtiid").val();
        let item = searchItem(typedId);
        if (item != null) {
            setTextfieldValues(item.id, item.name, item.price, item.qty);
        } else {
            alert("There is no Item available for that " + typedId);
            setTextfieldValues("", "", "", "");
        }
    }
});

function deleteItems(itemID) {
    let item = searchItem(itemID);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadAllItems();
        return true;
    } else {
        return false;
    }
}

function setTextfieldValues(id, name, price, qty) {
    bindRowClickEvents();
    $("#txtiid").val(id);
    $("#txtName").val(name);
    $("#txtprice").val(price);
    $("#txtqty").val(qty);
}



$("#backItems").click(function (){

    $("#txtiid").val("");
    $("#txtName").val("");
    $("#txtprice").val("");
    $("#txtqty").val("");

});




function searchItem(ItemID) {
    for (let item of items) {
        if (item.id == ItemID) {
            return item;
        }
    }
    return null;
}

function updateItems(ItemID) {
    let item = searchItem(ItemID);
    if (item != null) {
        item.id = $("#txtiid").val();
        item.name = $("#txtName").val();
        item.price = $("#txtprice").val();
        item.qty = $("#txtqty").val();
        loadAllItems();
        return true;
    } else {
        return false;
    }

}





