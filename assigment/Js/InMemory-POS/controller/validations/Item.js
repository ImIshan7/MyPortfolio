$("#txtItemId").keydown(function (event){
    let itemIdPattern = /^(I00-)[0-9]{1,3}$/;

    let iId = $("#txtItemId").val();

    if(event.key=="Enter"){
        if(itemIdPattern.test(iId)){
            $("#txtItemId").css('border-color','green').blur();
            $("#txtItemDescription").focus();
        }else{
            $("#txtItemId").css('border-color','red').blur();
        }

    }
});

$("#txtItemDescription").keydown(function (event){
    let itemIdPattern = /^[a-zA-Z-' ]{2,50}$/;

    let iId = $("#txtItemDescription").val();

    if(event.key=="Enter"){
        if(itemIdPattern.test(iId)){
            $("#txtItemDescription").css('border-color','green').blur();
            $("#txtItemUnitprice").focus();
        }else{
            $("#txtItemDescription").css('border-color','red').blur();
        }
    }
});

$("#txtItemUnitprice").keydown(function (event){
    let itemIdPattern = /^[0-9]{1,}[.]?[0-5]{1,2}$/;

    let iId = $("#txtItemUnitprice").val();

    if(event.key=="Enter"){
        if(itemIdPattern.test(iId)){
            $("#txtItemUnitprice").css('border-color','green').blur();
            $("#txtItemQty").focus();
        }else{
            $("#txtItemUnitprice").css('border-color','red').blur();
        }

    }
});

$("#txtItemQty").keydown(function (event){
    let itemIdPattern = /^[0-9]{1,}[.]?[0-3]{1,2}$/;

    let iId = $("#txtItemQty").val();

    if(event.key=="Enter"){
        if(itemIdPattern.test(iId)){
            $("#txtItemQty").css('border-color','green').blur();
            $("#addItems").focus();
        }else{
            $("#txtItemQty").css('border-color','red').blur();
        }

    }
});
