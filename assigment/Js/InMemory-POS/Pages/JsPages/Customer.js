

var customers=[];

$("#addCustomer").click(function (){
    let cusId=$("#txtcid").val();
    let cusName=$("#txtName").val();
    let cusAddress=$("#txtAddress").val();
    let cusContact=$("#txtcontact").val();

    var customerObject={
        id:cusId,
        name:cusName,
        address:cusAddress,
        contact:cusContact

    }

    customers.push(customerObject);

    loadAllCustomers();

    bindRowClickEvents();

    loadAllCustomerId
});


function bindRowClickEvents() {

    $("#tblCustomer>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let contact = $(this).children(":eq(3)").text();

        $('#txtcid').val(id);
        $('#txtName').val(name);
        $('#txtAddress').val(address);
        $('#txtcontact').val(contact);

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

    let deleteId=$("#txtcid").val();

    let option=confirm("Do you Sure?"+deleteId);
    if (option){
        if (deleteCustomer(deleteId)) {
            alert("Customer Successfully Deleted..");
            setTextfieldValues("", "", "", "");
        } else {
            alert("No such customer to delete");
        }
    }
});

$("#updateCustomer").click(function () {
    let customerID = $("#txtcid").val();
    let response = updateCustomer(customerID);
    if (response) {
        alert("Customer Updated Successfully");
        setTextfieldValues("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});


$("#txtcid").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedId = $("#txtcid").val();
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

    $("#txtcid").val(id);
    $("#txtName").val(name);
    $("#txtAddress").val(address);
    $("#txtcontact").val(contact);
}



$("#backCustomer").click(function () {

    $("#txtcid").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");
    $("#txtcontact").val("");

});

function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.id == cusID) {
            return customer;
        }
    }
    return null;
}

function updateCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        customer.id = $("#txtcid").val();
        customer.name = $("#txtName").val();
        customer.address = $("#txtAddress").val();
        customer.contact = $("#txtcontact").val();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }

}


//disable tab
$("#txtcid,#txtName,#txtAddress,#txtcontact").keydown(function (e) {

    if (e.key == "Tab") {
        e.preventDefault();
    }
});



$("#txtcid").keydown(function (event){
    let customerIdPattern = /^(C00-)[0-9]{3}$/;

    let cId = $("#txtcid").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtcid").css('border-color','green').blur();
            $("#txtName").focus();
        }else{
            $("#txtcid").css('border-color','red').blur();
        }

    }
});

$("#txtName").keydown(function (event){
    let customerIdPattern = /^[a-zA-Z-' ]{2,50}$/;

    let cId = $("#txtName").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtName").css('border-color','green').blur();
            $("#txtAddress").focus();
        }else{
            $("#txtName").css('border-color','red').blur();
        }

    }
});

$("#txtAddress").keydown(function (event){
    let customerIdPattern = /^[a-zA-Z-' ]{2,50}$/;

    let cId = $("#txtAddress").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtAddress").css('border-color','green').blur();
            $("#txtcontact").focus();
        }else{
            $("#txtAddress").css('border-color','red').blur();
        }

    }
});


$("#txtcontact").keydown(function (event){
    let customerIdPattern = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

    let cId = $("#txtcontact").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtcontact").css('border-color','green').blur();
            $("#addCustomer").focus();
        }else{
            $("#txtcontact").css('border-color','red').blur();
        }

    }
});




$("#txtCustomerSalary").keydown(function (e) {
    if (e.key == "Enter") {
        //save customer
        $("#addCustomer").focus();

    }
});



