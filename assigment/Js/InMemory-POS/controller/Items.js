
initiateUI();

function initiateUI() {
    clearAll();
    $("#customerContent").css("display", "block");
    setTheLastView();
}

function saveLastView(clickedID) {
    switch (clickedID) {
       /* case "dashboardContent":
            localStorage.setItem("view", "HOME");
            break;*/
        case "customerContent":
            localStorage.setItem("view", "CUSTOMER");
            break;
        case "itemContent":
            localStorage.setItem("view", "ITEM");
            break;
        case "orderContent":
            localStorage.setItem("view", "PLACEORDER");
            break;
    }
}

function setTheLastView() {
    let view = localStorage.getItem("view");
    switch (view) {
        /*case "HOME":
            setView($("#dashboardContent"));
            break;*/
        case "ITEM":
            setView($("#itemContent"));
            break;
        case "CUSTOMER":
            setView($("#customerContent"));
            break;
        case "PLACEORDER":
            setView($("#placOrderContent"));
            break;
        default:
            setView($("#customerContent"));
    }
}

function clearAll() {
    $("#customerContent,#itemContent,#placOrderContent").css('display', 'none');
}

function setView(viewOb) {
    clearAll();
    viewOb.css("display", "block");
    saveLastView(viewOb.get(0).id);
    console.log(viewOb.get(0).id);
}


/*$("#linkHome").click(function () {
    setView($("#dashboardContent"));
});*/

$("#linkcustomers").click(function () {
    setView($("#customerContent"));
});

$("#linkitems").click(function () {
    setView($("#itemContent"));
});

$("#linkplaceOrder").click(function () {
    setView($("#placOrderContent"));
});



/*
var items=[];
*/

$("#addItems").click(function (){
    let itemId=$("#txtItemId").val();
    let itemDescription=$("#txtItemDescription").val();
    let itemUnitprice=$("#txtItemUnitprice").val();
    let itemQty=$("#txtItemQty").val();

    /*var itemObject={

        id:itemId,
        name:itemName,
        price:itemPrice,
        qty:itemQTY

    }*/



    let newItems=Object.assign({},itemObject);
    newItems.itemId=itemId;
    newItems.descriptions=itemDescription;
    newItems.unitprice=itemUnitprice;
    newItems.qty=itemQty;

    items.push(newItems);

    loadAllItems();

    bindRowClickEventsItems();

    loadAllItemId();
});


function bindRowClickEventsItems() {
    $("#tblItems>tr").click(function () {
        let itemId  = $(this).children(":eq(0)").text();
        let Description = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        $('#txtItemId').val(itemId);
        $('#txtItemDescription').val(Description);
        $('#txtItemUnitprice').val(price);
        $('#txtItemQty').val(qty);

    });
}


function loadAllItems() {

    $("#tblItems").empty();

    for (var item of items) {
        var row = `<tr><td>${item.itemId}</td><td>${item.descriptions}</td><td>${item.unitprice}</td><td>${item.qty}</td></tr>`;

        $("#tblItems").append(row);
    }
}


$("#deleteItems").click(function (){

    let deleteId=$("#txtItemId").val();

    let option=confirm("Do you Sure?"+deleteId);
    if (option){
        if (deleteItems(deleteId)) {
            alert("Item Deleted Successfully ");
            setTextfieldValues("", "", "", "");
        } else {
            alert("No such Item to delete");
        }
    }
});

$("#updateItems").click(function () {
    let itemIDs = $("#txtItemId").val();
    let responses = updateItem(itemIDs);
    if (responses) {
        alert("Item Updated Successfully");
        setTextfieldValuesItems("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});


$("#txtItemId").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedId = $("#txtItemId").val();
        let item = searchItem(typedId);
        if (item != null) {
            setTextfieldValuesItems(item.itemId, item.description, item.unitprice, item.qty);
        } else {
            alert("There is no Item available for that " + typedId);
            setTextfieldValuesItems("", "", "", "");
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

function setTextfieldValuesItems(itemId,description, unitprice, qty) {
    bindRowClickEventsItems();
    $("#txtItemId").val(itemId);
    $("#txtItemDescription").val(description);
    $("#txtItemUnitprice").val(unitprice);
    $("#txtItemQty").val(qty);
}



$("#backItems").click(function (){

    $("#txtItemId").val("");
    $("#txtItemDescription").val("");
    $("#txtItemUnitprice").val("");
    $("#txtItemQty").val("");

});




function searchItem(ItemID) {
    for (let item of items) {
        if (item.itemId == ItemID) {
            return item;
        }
    }
    return null;
}

function updateItem(Items) {
    let item = searchItem(Items);
    if (item != null) {
        item.itemId = $("#txtItemId").val();
        item.descriptions = $("#txtItemDescription").val();
        item.unitprice = $("#txtItemUnitprice").val();
        item.qty = $("#txtItemQty").val();
        loadAllItems();
        return true;
    } else {
        return false;
    }

}







