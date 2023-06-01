/*
document.getElementById("addCustomer").addEventListener("click", function () {

    let id = document.getElementById("cid").value;
    let name = document.getElementById("Name").value;
    let address = document.getElementById("Address").value;
    let contact = document.getElementById("contact").value;
    console.log(id,name,address,contact);


    let tBody=document.getElementById("tblCustomer");

    let tr= document.createElement("tr");

    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");
    col1.textContent=id;
    col2.textContent=name;
    col3.textContent=address;
    col4.textContent=contact;


    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);


    tBody.appendChild(tr);


});*/


/*
var customers=[];

$("#save").click(function (){
    let id=$("#txtcID").val();
    let name=$("#txtName").val();
    let address=$("#txtAddress").val();
    let contact=$("#txtContact").val();

    var customerObject={
        id:id,
        name:name,
        address:address,
        contact:contact

    }

    customers.push(customerObject);

    loadAllCustomers();

    bindRowClickEvents();
});


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

    });
}


function loadAllCustomers() {

    $("#tblCustomer").empty();

    for (var customer of customers) {
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contact}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}


$("#btnDelete").click(function (){

    let deleteId=$("#txtCustomerID").val();

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

$("#btnUpdate").click(function () {
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
    $("#txtCustomerID").val(id);
    $("#txtCustomerName").val(name);
    $("#txtCustomerAddress").val(address);
    $("#txtCustomerContact").val(contact);
}


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
*/



 var customerData =[];

 var id = document.getElementById("cid");
 var  name = document.querySelector("#Name");
 var address = document.querySelector("#Address");
 var  contact = document.querySelector("#contact");
 var addCustomer = document.querySelector("#addCustomer");
 var customerForm = document.querySelector("#customerForm");


addCustomer.onclick = function (e){
    e.preventDefault();
    regitrationData();
    getDataFromLocal();
    customerForm.reset('');

}

function regitrationData(){

    customerData.push({

        cid : id.value,
        Name : name.value,
        Address : address.value,
        contact : contact.value

    });

    var customerString = JSON.stringify(customerData);
    localStorage.setItem("customerData",customerString);
}

var customerDetails = document.querySelector("#customerDetails");

const getDataFromLocal = () => {
    customerData.forEach((data,index)=>{

        customerDetails.innerHTML +='';

    })
}
getDataFromLocal();