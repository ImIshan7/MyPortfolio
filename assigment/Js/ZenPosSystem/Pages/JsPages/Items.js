document.getElementById("addItems").addEventListener("click", function () {

    let iid = document.getElementById("iid").value;
    let name = document.getElementById("Name").value;
    let price = document.getElementById("price").value;
    let qty = document.getElementById("qty").value;
    console.log(iid,name,price,qty);


    let tBody=document.getElementById("tblItems");


    let tr= document.createElement("tr");

    let col1= document.createElement("td");
    let col2= document.createElement("td");
    let col3= document.createElement("td");
    let col4= document.createElement("td");
    col1.textContent=iid;
    col2.textContent=name;
    col3.textContent=price;
    col4.textContent=qty;

    //set 4 columns to the row
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);

    //set the tr to the table body
    tBody.appendChild(tr);


});