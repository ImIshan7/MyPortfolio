/*

initiateUI();

function initiateUI() {
    clearAll();
    $("#customerContent").css("display", "block");
    setTheLastView();
}

function saveLastView(clickedID) {
    switch (clickedID) {
       /!* case "dashboardContent":
            localStorage.setItem("view", "HOME");
            break;*!/
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
        /!*case "HOME":
            setView($("#dashboardContent"));
            break;*!/
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
    $("#customerContent,#itemContent,#ordersContent,#placOrderContent").css('display', 'none');
}

function setView(viewOb) {
    clearAll();
    viewOb.css("display", "block");
    saveLastView(viewOb.get(0).id);
    console.log(viewOb.get(0).id);
}


/!*$("#linkHome").click(function () {
    setView($("#dashboardContent"));
});*!/

$("#linkcustomers").click(function () {
    setView($("#customerContent"));
});

$("#linkitems").click(function () {
    setView($("#itemContent"));
});

$("#linkplaceOrder").click(function () {
    setView($("#placOrderContent"));
});



/!*
var items=[];
*!/

$("#addItems").click(function (){
    let itemId=$("#txtItemId").val();
    let itemDescription=$("#txtItemDescription").val();
    let itemUnitprice=$("#txtItemUnitprice").val();
    let itemQty=$("#txtItemQty").val();

    /!*var itemObject={

        id:itemId,
        name:itemName,
        price:itemPrice,
        qty:itemQTY

    }*!/



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


*/


let selectedItemRow;
let itemIndex;
let itemId;
let lastITr;

//regex for item fields
const itemNameRegex = /^[a-zA-Z0-9\s]+$/;
const itemPriceRegex = /^\d+(\.\d{1,2})?$/;
const itemQuantityRegex = /^\d+$/;


//buttons
const btnItemAdd = $("#btnItemAdd");
const tblItems = $("#tblItemBody");
const btnItemUpdate = $("#btnItemUpdate");
const btnItemDelete = $("#btnItemDelete");
const btnItemClear = $("#btnItemClear");

//Item fields
const itemIdF = $('#Iid');
const itemDescF = $('#ItemDesc');
const itemPF = $('#UPrice');
const itemQtyF = $('#Qty');

//increase item id
function incrementItemId(currentID) {
    if (currentID==='no'){
        itemId='I00-001';
    }else {
        let number =parseInt(currentID.slice(4), 10);
        number++;
        itemId = "I00-" + number.toString().padStart(3, "0");
    }
}

incrementItemId('no');
itemIdF.val(itemId);

function clearItemFields() {
    itemIdF.val("");
    itemDescF.val("");
    itemPF.val("");
    itemQtyF.val("");

    itemDescF.focus();
}



btnItemUpdate.prop('disabled',true);
btnItemDelete.prop('disabled',true);

function addItem() {
    let iID = itemIdF.val();
    let itemDesc = itemDescF.val();
    let itemPrice = itemPF.val();
    let itemQty = itemQtyF.val();

    //adding the customer to the list and to the table
    itemList.push(new Items(iID ,itemDesc,itemQty, itemPrice));
    addItemsToTable();
    console.log(itemList);
    loadItemOptionIds();

    clearItemFields();

    incrementItemId(lastITr.find('td:first').text());
    itemIdF.val(itemId);

    btnItemUpdate.prop('disabled',false);
    btnItemDelete.prop('disabled',false);
}

function addItemsToTable() {
    tblItems.empty();

    for (let item of itemList) {
        let row = $('<tr> <td>'+ item.iId +'</td> <td>'+ item.desc +'</td> <td>'+ item.unitP +'</td> <td>'+ item.qty +'</td> </tr>');
        lastITr =row;
        tblItems.append(row);
    }
}

//Button Add function
btnItemAdd.click(function (){

    if (validateItemFields()){
        addItem();
    }
});

tblItems.dblclick(function (event){

    btnItemUpdate.prop('disabled',false);
    btnItemDelete.prop('disabled',false);
    btnItemAdd.prop('disabled',true);

    selectedItemRow = event.target.closest("tr");
    //getting the index of the selected customer
    //itemIndex = itemList.findIndex(itemList => itemList.iId === selectedItemRow.cells[0].textContent);
    itemIndex = findItem(selectedItemRow.cells[0].textContent);
    console.log(itemIndex)

    itemIdF.val(selectedItemRow.cells[0].textContent);
    itemDescF.val(selectedItemRow.cells[1].textContent);
    itemPF.val(selectedItemRow.cells[2].textContent);
    itemQtyF.val(selectedItemRow.cells[3].textContent);

});


function findItem(selectedItem) {
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].iId === selectedItem) {
            return i;
        }
    }

    return -1;
}

//Button delete function
btnItemUpdate.click(function (){

    if (confirm("Are you sure you want to Update this Item?")) {

        let iID = itemIdF.val();
        let itemDesc = itemDescF.val();
        let itemPrice = itemPF.val();
        let itemQty = itemQtyF.val();

        selectedItemRow.cells[0].textContent=iID;
        selectedItemRow.cells[1].textContent=itemDesc;
        selectedItemRow.cells[2].textContent=itemPrice;
        selectedItemRow.cells[3].textContent=itemQty;

        clearItemFields();

        incrementItemId(lastITr.find('td:first').text());
        itemIdF.val(itemId);

        //updating the selected customer from the list
        itemList[itemIndex].iId=iID;
        itemList[itemIndex].desc=itemDesc;
        itemList[itemIndex].unitP=itemPrice;
        itemList[itemIndex].qty=itemQty;

        console.log(itemList);

        btnItemUpdate.prop('disabled',true);
        btnItemDelete.prop('disabled',true);
        btnItemAdd.prop('disabled',false);
    }
});

btnItemDelete.click(function (){

    if (confirm("Are you sure you want to delete this Customer?")) {
        selectedItemRow.remove();

        //removing the selected customer from the list
        itemList.splice(itemIndex,1);
        console.log(itemList);

        clearItemFields();

        incrementItemId(lastITr.find('td:first').text());
        itemIdF.val(itemId);

        btnItemUpdate.prop('disabled',true);
        btnItemDelete.prop('disabled',true);
        btnItemAdd.prop('disabled',false);
    }

});

btnItemClear.click(function (){
    clearItemFields();
});

$('#Iid,#ItemDesc,#UPrice,#Qty').keyup(function (event){
    console.log(event.key)

    if (event.key ==='Tab'){
        event.preventDefault();
    }
});

/*
itemDescF.keyup(function (event){


    if (itemNameRegex.test(itemDescF.val())){

        itemDescF.css('border-color', '#dee2e6');

        if (event.key ==='Enter'){
            itemPF.focus();
        }

    }else {
        itemDescF.css('border-color', 'red');
    }

});

itemPF.keyup(function (event){
    if (itemPriceRegex.test(itemPF.val())){
        itemPF.css('border-color', '#dee2e6');
        if (event.key ==='Enter'){

            itemQtyF.focus();
        }
    }else {
        itemPF.css('border-color', 'red');
    }

});

itemQtyF.keyup(function (event){

    if (itemQuantityRegex.test(itemQtyF.val())){
        itemQtyF.css('border-color', '#dee2e6');

        if (event.key ==='Enter'){
            addItem();
        }
    }else {
        itemQtyF.css('border-color', 'red');
    }
});

function validateItemFields(){
    if (!itemNameRegex.test(itemDescF.val())){
        itemDescF.focus();
        itemDescF.css('border-color', 'red');
        return false;
    }
    if (!itemPriceRegex.test(itemPF.val())){
        cusAddressF.focus();
        cusAddressF.css('border-color', 'red');
        return false;
    }
    if (!itemQuantityRegex.test(itemQtyF.val())){
        cusContactF.focus();
        cusContactF.css('border-color', 'red');
        return false;
    }

    cusNameF.css('border-color', '#dee2e6');
    cusAddressF.css('border-color', '#dee2e6');
    cusContactF.css('border-color', '#dee2e6');
    return true;
}
*/
