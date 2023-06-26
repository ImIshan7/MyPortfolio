/*
$("#txtCustomerID").keydown(function (event){
    let customerIdPattern = /^(C00-)[0-9]{1,3}$/;

    let cId = $("#txtCustomerID").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtCustomerID").css('border-color','green').blur();
            $("#txtCustomerName").focus();
        }else{
            $("#txtCustomerID").css('border-color','red').blur();
        }

    }
});

$("#txtCustomerName").keydown(function (event){
    let customerIdPattern = /^[a-zA-Z-' ]{2,50}$/;

    let cId = $("#txtCustomerName").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtCustomerName").css('border-color','green').blur();
            $("#txtCustomerAddress").focus();
        }else{
            $("#txtCustomerName").css('border-color','red').blur();
        }
    }
});

$("#txtCustomerAddress").keydown(function (event){
    let customerIdPattern = /^[0-9]{1,}[.]?[0-5]{1,2}$/;

    let cId = $("#txtCustomerAddress").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtCustomerAddress").css('border-color','green').blur();
            $("#txtCustomerContact").focus();
        }else{
            $("#txtCustomerAddress").css('border-color','red').blur();
        }

    }
});

$("#txtCustomerContact").keydown(function (event){
    let customerIdPattern = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

    let cId = $("#txtCustomerContact").val();

    if(event.key=="Enter"){
        if(customerIdPattern.test(cId)){
            $("#txtCustomerContact").css('border-color','green').blur();
            $("#addCustomer").focus();
        }else{
            $("#txtCustomerContact").css('border-color','red').blur();
        }

    }
});*/


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
}