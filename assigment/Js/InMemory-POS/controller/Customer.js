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

        case "ordersContent":
            localStorage.setItem("view", "ORDERS");
            break;

        case "orderContent":
            localStorage.setItem("view", "PLACEORDER");
            break;
    }
}

function setTheLastView() {
    let view = localStorage.getItem("view");
    switch (view) {
       /!* case "HOME":
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

        case "ORDERS":
            setView($("#ordersContent"));
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

$("#linkOrders").click(function () {
    setView($("#ordersContent"));
});

$("#linkplaceOrder").click(function () {
    setView($("#placOrderContent"));
});






$("#addCustomer").click(function (){
    let cusId=$("#txtCustomerID").val();
    let cusName=$("#txtCustomerName").val();
    let cusAddress=$("#txtCustomerAddress").val();
    let cusContact=$("#txtCustomerContact").val();

    /!*var customerObject={
        id:cusId,
        name:cusName,
        address:cusAddress,
        contact:cuscontact

    }*!/

    let newCustomer= Object.assign({},customerObject);
    newCustomer.id=cusId;
    newCustomer.name=cusName;
    newCustomer.address=cusAddress;
    newCustomer.contact=cusContact;

    customers.push(newCustomer);


    loadAllCustomers();
    loadAllCustomerId();
    bindRowClickEvents();
});



function bindRowClickEvents() {
    $("#tblCustomer>tr").click(function () {
        let customerid = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let contact = $(this).children(":eq(3)").text();

        $('#txtCustomerID').val(customerid);
        $('#txtCustomerName').val(name);
        $('#txtCustomerAddress').val(address);
        $('#txtCustomerContact').val(contact);

    });
}


function loadAllCustomers() {

    $("#tblCustomer").empty();

    for (var customer of customers) {
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contact}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}


$("#deleteCustomer").click(function (){

    let deleteId=$("#txtCustomerID").val();

    let option=confirm("Do you Sure?"+deleteId);
    if (option){
        if (deleteCustomer(deleteId)) {
            alert("Customer Deleted Successfully ");
            setTextfieldValues("", "", "", "");
        } else {
            alert("No such customer to delete");
        }
    }
});


$("#backCustomer").click(function (){
    $('#txtCustomerID').val("");
    $('#txtCustomerName').val("");
    $('#txtCustomerAddress').val("");
    $('#txtCustomerContact').val("");
});

$("#updateCustomer").click(function () {

    let customerID = $("#txtCustomerID").val();
    let response = updateCustomer(customerID);
    if (response) {
        alert("Customer Updated Successfully");
        setTextfieldValues("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});


$("#txtCustomerID").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedId = $("#txtCustomerID").val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            setTextfieldValues(customer.id, customer.name, customer.address, customer.contact);
        } else {
            alert("There is no cusotmer available for that " + typedId);
            setTextfieldValues("", "", "", "");
        }
    }
});

function deleteCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadAllCustomers();
        return true;
    } else {
        return false;
    }
}

function setTextfieldValues(id, name, address, contact) {
    bindRowClickEvents();
    $("#txtCustomerID").val(id);
    $("#txtCustomerName").val(name);
    $("#txtCustomerAddress").val(address);
    $("#txtCustomerContact").val(contact);
}


function searchCustomer(id) {
    for (let customer of customers) {
        if (customer.id == id) {
            return customer;
        }
    }
    return null;
}

function updateCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        customer.id = $("#txtCustomerID").val();
        customer.name = $("#txtCustomerName").val();
        customer.address = $("#txtCustomerAddress").val();
        customer.contact= $("#txtCustomerContact").val();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }

}



*/
let selectedCustomerRow;
let customerIndex;
let cusId;
let lastTr;

//customer fields
const cusIDF = $('#cid');
const cusNameF = $('#Name');
const cusAddressF = $('#Address');
const cusContactF = $('#contact');

//buttons
const btnAdd = $("#btnAdd");
const tblCustomers = $("#tblCustomers");
const btnUpdate = $("#btnUpdate");
const btnDelete = $("#btnDelete");
const btnClear = $("#btnClear");

//id increment
function incrementCusId(currentID) {
    if (currentID==='no'){
        cusId='C00-001';
    }else {
        let number =parseInt(currentID.slice(4), 10);
        number++;
        cusId = "C00-" + number.toString().padStart(3, "0");
        console.log(cusId);
    }
}




incrementCusId('no');
cusIDF.val(cusId);

function clearCustomerFields() {
    cusIDF.val("");
    cusNameF.val("");
    cusNameF.focus();
    cusAddressF.val("");
    cusContactF.val("");

}



btnUpdate.prop('disabled',true);
btnDelete.prop('disabled',true);


function addCustomer(){
    let cusID = cusIDF.val();
    let cusName = cusNameF.val();
    let cusAddress = cusAddressF.val();
    let cusContact = cusContactF.val();

    //adding the customer to the list and to the table
    customerList.push( new Customer(cusID,cusName,cusAddress,cusContact));
    addCustomersToTable()

    customerList[0].name;

    console.log(customerList);
    loadCustomerOptionIds();

    clearCustomerFields();

    btnUpdate.prop('disabled',false);
    btnDelete.prop('disabled',false);

    incrementCusId(lastTr.find('td:first').text());
    cusIDF.val(cusId);
}

function addCustomersToTable() {
    tblCustomers.empty();

    for (let customer of customerList) {
        let row = $('<tr> <td>'+ customer.cid +'</td> <td>'+ customer.name +'</td> <td>'+ customer.address +'</td> <td>'+ customer.contact +'</td> </tr>');
        tblCustomers.append(row);
        lastTr =row;
    }
}

//Button Add function
btnAdd.click(function (){

    if (validateFields()){
        addCustomer();
    }

});

tblCustomers.dblclick(function (event){

    btnUpdate.prop('disabled',false);
    btnDelete.prop('disabled',false);
    btnAdd.prop('disabled',true);

    selectedCustomerRow = event.target.closest("tr");

    //getting the index of the selected customer
    customerIndex=findCustomerIndex(selectedCustomerRow.cells[0].textContent);

    console.log(customerIndex)

    cusIDF.val(selectedCustomerRow.cells[0].textContent);
    cusNameF.val(selectedCustomerRow.cells[1].textContent);
    cusAddressF.val(selectedCustomerRow.cells[2].textContent);
    cusContactF.val(selectedCustomerRow.cells[3].textContent);

});


//searching for a customer
function findCustomerIndex(selectedCustomerId) {

    for (let i = 0; i < customerList.length; i++) {
        if (customerList[i].cid === selectedCustomerId) {
            return i;
        }
    }

    return -1;
}

//Button delete function
btnUpdate.click(function (){

    if (confirm("Are you sure you want to Update this Customer?")) {
        let cusID = cusIDF.val();
        let cusName = cusNameF.val();
        let cusAddress = cusAddressF.val();
        let cusContact = cusContactF.val();

        selectedCustomerRow.cells[0].textContent=cusID;
        selectedCustomerRow.cells[1].textContent=cusName;
        selectedCustomerRow.cells[2].textContent=cusAddress;
        selectedCustomerRow.cells[3].textContent=cusContact;

        clearCustomerFields();



        //updating the selected customer from the list
        customerList[customerIndex].cid=cusID;
        customerList[customerIndex].name=cusName;
        customerList[customerIndex].address=cusAddress;
        customerList[customerIndex].contact=cusContact;

        console.log(customerList);

        btnUpdate.prop('disabled',true);
        btnDelete.prop('disabled',true);
        btnAdd.prop('disabled',false);

        //getting the first td of the last tr and
        incrementCusId(lastTr.find('td:first').text());
        cusIDF.val(cusId);
    }
});

btnDelete.click(function (){

    if (confirm("Are you sure you want to delete this Customer?")) {
        selectedCustomerRow.remove();

        //removing the selected customer from the list
        customerList.splice(customerIndex,1);
        console.log(customerList);

        clearCustomerFields();

        btnUpdate.prop('disabled',true);
        btnDelete.prop('disabled',true);
        btnAdd.prop('disabled',false);

        incrementCusId(lastTr.find('td:first').text());
        cusIDF.val(cusId);
    }

});

btnClear.click(function (){
    clearCustomerFields();
});

$('#cid, #Name, #Address, #contact').keyup(function (event){
    console.log(event.key)

    if (event.key ==='Tab'){
        event.preventDefault();
    }
});

/*
cusNameF.keyup(function (event){


    if (/^[A-Za-z]+$/.test(cusNameF.val())){

        cusNameF.css('border-color', '#dee2e6');

        if (event.key ==='Enter'){
            cusAddressF.focus();
        }

    }else {
        cusNameF.css('border-color', 'red');
    }

});

cusAddressF.keyup(function (event){
    if (/^[A-Za-z\s.'-]+$/.test(cusAddressF.val())){
        cusAddressF.css('border-color', '#dee2e6');
        if (event.key ==='Enter'){

            cusContactF.focus();
        }
    }else {
        cusAddressF.css('border-color', 'red');
    }

});

cusContactF.keyup(function (event){

    if (/^(?:\+94|0)(?:\d{9}|\d{2}-\d{7})$/.test(cusContactF.val())){
        cusContactF.css('border-color', '#dee2e6');

        if (event.key ==='Enter'){
            addCustomer();
        }
    }else {
        cusContactF.css('border-color', 'red');
    }
});

function validateFields(){
    if (!/^[A-Za-z]+$/.test(cusNameF.val())){
        cusNameF.focus();
        cusNameF.css('border-color', 'red');
        return false;
    }
    if (!/^[A-Za-z\s.'-]+$/.test(cusAddressF.val())){
        cusAddressF.focus();
        cusAddressF.css('border-color', 'red');
        return false;
    }
    if (!/^(?:\+94|0)(?:\d{9}|\d{2}-\d{7})$/.test(cusContactF.val())){
        cusContactF.focus();
        cusContactF.css('border-color', 'red');
        return false;
    }

    cusNameF.css('border-color', '#dee2e6');
    cusAddressF.css('border-color', '#dee2e6');
    cusContactF.css('border-color', '#dee2e6');
    return true;
}*/
