/*
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
*/
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
