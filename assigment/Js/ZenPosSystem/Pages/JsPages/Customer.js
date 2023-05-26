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

    //set 4 columns to the row
    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);

    //set the tr to the table body
    tBody.appendChild(tr);


});