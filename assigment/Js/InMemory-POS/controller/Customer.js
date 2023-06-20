
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
var customers=[];*/

/*$("#addCustomer").click(function () {

    saveCustomer();
});


function saveCustomer() {
    let cusId = $("#txtcid").val();
    if (searchCustomer(cusId.trim()) == undefined) {
        let cusName = $("#txtName").val();
        let cusAddress = $("#txtAddress").val();
        let cusContact = $("#txtcontact").val();


    let newCustomer= Object.assign({},customerObject);
    newCustomer.id=cusId;
    newCustomer.name=cusName;
    newCustomer.address=cusAddress;
    newCustomer.contact=cusContact;

    customers.push(newCustomer);

    clearCustomerInputFields();
    loadAllCustomers();
    loadAllCustomerId();
    bindRowClickEvents();

} else {
    alert("Customer already exits.!");
}

}


function bindRowClickEvents() {
    $("#tblCustomer>tr").click(function () {
        let Cusid = $(this).children(":eq(0)").text();
        let Cusname = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let contact = $(this).children(":eq(3)").text();

        $('#txtcid').val(Cusid);
        $('#txtName').val(Cusname);
        $('#txtAddress').val(address);
        $('#txtcontact').val(contact);

    });
}


function loadAllCustomers() {

    $("#tblCustomer").empty();

    for (var customer of customers) {
        var row = `<tr><td>${customer.customerid}</td><td>${customer.customername}</td><td>${customer.address}</td><td>${customer.contact}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}


$("#deleteCustomer").click(function (){

    let deleteId=$("#txtcid").val();

    let option=confirm("Do you Sure?"+deleteId);
    if (option){
        if (deleteCustomers(deleteId)) {
            alert("Customer Successfully Deleted..");
            setTextfieldValues("", "", "", "");
        } else {
            alert("No such customer to delete");
        }
    }
});

$("#updateCustomer").click(function () {
    let cusID = $("#txtcid").val();
    let response = updateCustomers(cusID);
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
            setTextfieldValues(customer.customerid, customer.customername, customer.address, customer.contact);
        } else {
            alert("There is no Customer available for that " + typedId);
            setTextfieldValues("", "", "", "");
        }
    }
});

function deleteCustomers(cusID) {
    let customer = searchCustomer(cusID);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadAllCustomers();
        return true;
    } else {
        return false;
    }
}

function setTextfieldValues(Cusid, Cusname, address, contact) {
    bindRowClickEvents();
    $("#txtcid").val(Cusid);
    $("#txtName").val(Cusname);
    $("#txtAddress").val(address);
    $("#txtcontact").val(contact);
}



$("#backCustomer").click(function (){

    $("#txtcid").val("");
    $("#txtName").val("");
    $("#txtAddress").val("");
    $("#txtcontact").val("");

});




function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.customerid == cusID) {
            return customer;
        }
    }
    return null;
}

function updateCustomers(cusID) {
    let customer = searchCustomer(cusID);
    if (customer != null) {
        customer.customerid = $("#txtcid").val();
        customer.customername = $("#txtName").val();
        customer.address = $("#txtAddress").val();
        customer.contact = $("#txtcontact").val();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }

}*/



/*var customers = [];*/

$("#addCustomer").click(function () {

    saveCustomer();
});


function saveCustomer() {

    let cusId = $("#txtCustomerID").val();
    if (searchCustomer(cusId.trim()) == undefined) {
        let cusName = $("#txtCustomerName").val();
        let cusAddress = $("#txtCustomerAddress").val();
        let cusContact = $("#txtCustomerContact").val();



        let newCustomer= Object.assign({},customerObject);
        newCustomer.id=cusId;
        newCustomer.name=cusName;
        newCustomer.address=cusAddress;
        newCustomer.contact=cusContact;

        customers.push(newCustomer);

        clearCustomerInputFields();
        loadAllCustomers();
        loadAllCustomerId();
        bindRowClickEvents();

    } else {
        alert("Customer already exits.!");
    }

}

function clearAllDataCustomer() {
    $('#txtCustomerID').val("");
    $('#txtCustomerName').val("");
    $('#txtCustomerAddress').val("");
    $('#txtCustomerContact').val("");
}



function bindRowClickEvents() {

    $("#tblCustomer>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let contact = $(this).children(":eq(3)").text();

        $('#txtCustomerID').val(id);
        $('#txtCustomerName').val(name);
        $('#txtCustomerAddress').val(address);
        $('#txtCustomerContact').val(contact);

        setCusButtonUpdate(2);
        $("#updateCustomer").attr('disabled', false);
    });
    $("#updateCustomer").attr('disabled', disabled);


}

function setCusButtonUpdate(values) {
    if (values > 1) {
        $("#updateCustomer").attr('disabled', true);
    } else {
        $("#updateCustomer").attr('disabled', disabled);
    }
}


function loadAllCustomers() {

    $("#tblCustomer").empty();

    for (var customer of customers) {
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contact}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}


$("#deleteCustomer").click(function () {

    let deleteId = $("#txtCustomerID").val();

    let option = confirm("Do you Sure?" + deleteId);
    if (option) {
        if (deleteCustomer(deleteId)) {
            alert("Customer Successfully Deleted..");
            setTextfieldValues("", "", "", "");
        } else {
            alert("No such customer to delete");
        }
    }
});


$("#backCustomer").click(function () {
    /* $('#txtCustomerID').val("");
     $('#txtCustomerName').val("");
     $('#txtCustomerAddress').val("");
     $('#txtCustomerContact').val("");*/
    clearAllDataCustomer();
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
        customer.contact = $("#txtCustomerContact").val();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }

}


function trCusSelector() {

    $("#tblCustomer>tr").click(function (){
        let id=$(this).children(':eq(0)').text();
        let name=$(this).children(':eq(1)').text();
        let address=$(this).children(':eq(2)').text();
        let contact=$(this).children(':eq(3)').text();

/*
        console.log(id+"  "+name+"  "+address+" "+contact);
*/

        $('#txtCustomerID').val(id);
        $('#txtCustomerName').val(name);
        $('#txtCustomerAddress').val(address);
        $('#txtCustomerContact').val(contact);



    });

}



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
    let customerIdPattern = /^[0-9]{1,}[.]?[0-5]{1,2}$/;

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