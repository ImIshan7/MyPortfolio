$("#txtCustomerID").keydown(function (event){
    let customerIdPattern = /^(C00-)[0-9]{3}$/;

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
});