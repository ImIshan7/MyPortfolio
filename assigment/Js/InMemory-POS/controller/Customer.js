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
