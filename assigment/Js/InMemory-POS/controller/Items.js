
initiateUI();

function initiateUI() {
    clearAll();
    $("#dashboardContent").css("display", "block");
    setTheLastView();
}

function saveLastView(clickedID) {
    switch (clickedID) {
        case "dashboardContent":
            localStorage.setItem("view", "HOME");
            break;
        case "customerContent":
            localStorage.setItem("view", "CUSTOMER");
            break;
        case "itemContent":
            localStorage.setItem("view", "ITEM");
            break;
        case "orderContent":
            localStorage.setItem("view", "ORDER");
            break;
    }
}

function setTheLastView() {
    let view = localStorage.getItem("view");
    switch (view) {
        case "HOME":
            setView($("#dashboardContent"));
            break;
        case "ITEM":
            setView($("#itemContent"));
            break;
        case "CUSTOMER":
            setView($("#customerContent"));
            break;
        case "ORDER":
            setView($("#orderContent"));
            break;
        default:
            setView($("#dashboardContent"));
    }
}

function clearAll() {
    $("#dashboardContent,#customerContent,#itemContent,#orderContent").css('display', 'none');
}

function setView(viewOb) {
    clearAll();
    viewOb.css("display", "block");
    saveLastView(viewOb.get(0).id);
    console.log(viewOb.get(0).id);
}


$("#linkHome").click(function () {
    setView($("#dashboardContent"));
});

$("#linkcustomers").click(function () {
    setView($("#customerContent"));
});

$("#linkitems").click(function () {
    setView($("#itemContent"));
});

$("#linkplaceOrder").click(function () {
    setView($("#orderContent"));
});


/*
var items=[];

$("#addItems").click(function (){
    let itemId=$("#txtiid").val();
    let itemName=$("#txtItemName").val();
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

    loadAllItemId();
});


function bindRowClickEvents() {
    $("#tblItems>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let price = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        $('#txtiid').val(id);
        $('#txtItemName').val(name);
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
    $("#txtItemName").val(name);
    $("#txtprice").val(price);
    $("#txtqty").val(qty);
}



$("#backItems").click(function (){

    $("#txtiid").val("");
    $("#txtItemName").val("");
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
        item.name = $("#txtItemName").val();
        item.price = $("#txtprice").val();
        item.qty = $("#txtqty").val();
        loadAllItems();
        return true;
    } else {
        return false;
    }

}


$("#txtiid").keydown(function (event){
    let customerIdPattern = /^(I00-)[0-9]{3}$/;

    let cId = $("#txtiid").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtiid").css('border-color','green').blur();
            $("#txtItemName").focus();
        }else{
            $("#txtiid").css('border-color','red').blur();
        }

    }
});

$("#txtItemName").keydown(function (event){
    let customerIdPattern = /^[a-zA-Z-' ]{2,50}$/;

    let cId = $("#txtItemName").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtItemName").css('border-color','green').blur();
            $("#txtprice").focus();
        }else{
            $("#txtItemName").css('border-color','red').blur();
        }
    }
});

$("#txtprice").keydown(function (event){
    let customerIdPattern = /^[0-9]{1,}[.]?[0-5]{1,2}$/;

    let cId = $("#txtprice").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtprice").css('border-color','green').blur();
            $("#txtqty").focus();
        }else{
            $("#txtprice").css('border-color','red').blur();
        }

    }
});

$("#txtqty").keydown(function (event){
    let customerIdPattern = /^[0-9]{1,}[.]?[0-3]{1,2}$/;

    let cId = $("#txtqty").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtqty").css('border-color','green').blur();
            $("#addItems").focus();
        }else{
            $("#txtqty").css('border-color','red').blur();
        }

    }
});*/


/*var items = [];*/

$("#addItems").click(function () {
    itemAdd();


});

function itemAdd() {
    let itemIds = $("#txtItemId").val();
    if (searchItem(itemIds.trim()) == undefined) {
        let itemDescription = $("#txtItemDescription").val();
        let itemUnitprice = $("#txtItemUnitprice").val();
        let itemQty = $("#txtItemQty").val();



        let newItems=Object.assign({},itemObject);
        newItems.itemId=itemIds;
        newItems.descriptions=itemDescription;
        newItems.unitprice=itemUnitprice;
        newItems.qty=itemQty;

        items.push(newItems);

        loadAllItems();
        loadAllItemId();

        bindRowClickEventsItems();
    } else {
        alert("Item already exits.!");
    }
}

function clearItemData() {
    $('#txtItemId').val("");
    $('#txtItemDescription').val("");
    $('#txtItemUnitprice').val("");
    $('#txtItemQty').val("");
}


function bindRowClickEventsItems() {
    $("#tblItem>tr").click(function () {
        let itemId = $(this).children(":eq(0)").text();
        let descriptions = $(this).children(":eq(1)").text();
        let unitprice = $(this).children(":eq(2)").text();
        let qty = $(this).children(":eq(3)").text();

        $('#txtItemId').val(itemId);
        $('#txtItemDescription').val(descriptions);
        $('#txtItemUnitprice').val(unitprice);
        $('#txtItemQty').val(qty);

        setItemButtonUpdate(2);
        $("#updateItems").attr('disabled', false);
    });
    $("#updateItems").attr('disabled', true);
}

function setItemButtonUpdate(value) {
    if (value > 1) {
        $("#updateItems").attr('disabled', true);
    } else {
        $("#updateItems").attr('disabled', disabled);
    }
}

function loadAllItems() {

    $("#tblItems").empty();

    for (var item of items) {
        var row = `<tr><td>${item.itemId}</td><td>${item.descriptions}</td><td>${item.unitprice}</td><td>${item.qty}</td></tr>`;

        $("#tblItem").append(row);
    }
}


$("#deleteItems").click(function () {
    /*bindRowClickEventsItems();*/
    let deleteIds = $("#txtItemId").val();

    let option = confirm("Do you Sure?" + deleteIds);
    if (option) {
        if (deleteItem(deleteIds)) {
            alert("Item Successfully Deleted..");
            setTextfieldValuesItem("", "", "", "");
        } else {
            alert("No such Item to delete");
        }
    }
});

$("#backItems").click(function () {
    clearItemData();
});


$("#updateItems").click(function () {
    /* bindRowClickEventsItems();*/
    let ItemId = $("#txtItemId").val();
    let responses = updateItem(ItemId);
    if (responses) {
        alert("Item Updated Successfully");
        setTextfieldValuesItem("", "", "", "");

    } else {
        alert("Update Failed..!");

    }
});


$("#txtItemId").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedIds = $("#txtItemId").val();
        let item = searchItem(typedIds);
        if (item != null) {
            setTextfieldValuesItem(item.itemId, item.descriptions, item.unitprice, item.qty);
        } else {
            alert("There is no cusotmer available for that " + typedIds);
            setTextfieldValuesItem("", "", "", "");
        }
    }
});

function deleteItem(ItemID) {
    let Item = searchItem(ItemID);
    if (Item != null) {
        let indexNumber = items.indexOf(Item);
        items.splice(indexNumber, 1);
        loadAllItems();
        return true;
    } else {
        return false;
    }
}

function setTextfieldValuesItem(itemId, descriptions, unitprice, qty) {
    bindRowClickEventsItems();
    $("#txtItemId").val(itemId);
    $("#txtItemDescription").val(descriptions);
    $("#txtItemUnitprice").val(unitprice);
    $("#txtItemQty").val(qty);
}


function searchItem(itemID) {
    for (let item of items) {
        if (item.itemId == itemID) {
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

function addTable() {
    $("#tblItem> tr").detach();

    for (var itm of itemAr){
        var row="<tr><td>"+itm.itemId+"</td><td>"+itm.descriptions+"</td><td>"+itm.unitprice+"</td><td>"+itm.qty+"</td></tr>";
        $('#tblItem').append(row);
    }
    trSelector();

}

$("#txtiid").keydown(function (event){
    let customerIdPattern = /^(I00-)[0-9]{3}$/;

    let cId = $("#txtiid").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtiid").css('border-color','green').blur();
            $("#txtItemName").focus();
        }else{
            $("#txtiid").css('border-color','red').blur();
        }

    }
});

$("#txtItemName").keydown(function (event){
    let customerIdPattern = /^[a-zA-Z-' ]{2,50}$/;

    let cId = $("#txtItemName").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtItemName").css('border-color','green').blur();
            $("#txtprice").focus();
        }else{
            $("#txtItemName").css('border-color','red').blur();
        }
    }
});

$("#txtprice").keydown(function (event){
    let customerIdPattern = /^[0-9]{1,}[.]?[0-5]{1,2}$/;

    let cId = $("#txtprice").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtprice").css('border-color','green').blur();
            $("#txtqty").focus();
        }else{
            $("#txtprice").css('border-color','red').blur();
        }

    }
});

$("#txtqty").keydown(function (event){
    let customerIdPattern = /^[0-9]{1,}[.]?[0-3]{1,2}$/;

    let cId = $("#txtqty").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtqty").css('border-color','green').blur();
            $("#addItems").focus();
        }else{
            $("#txtqty").css('border-color','red').blur();
        }

    }
})