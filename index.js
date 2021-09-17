let container = document.createElement('div');
container.className = 'container';
container.innerHTML = `<h2 class="display-4 text-center">User Detials</h2>
<form >
    <div class="row d-flex justify-content-center mt-5 ">
        <div class="col-4 ">
          <input type="text" class="form-control" placeholder="First name" aria-label="First name" id="fname">
        </div>
        <div class="col-4">
          <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id="lname">
        </div>
        <div class="col-6 p-2">
            <input type="text" class="form-control" placeholder="Enter your Address"  id="add">
        </div>
        <div class="col-2 p-2">
            <input type="text" class="form-control" placeholder="Pincode" id="pin">
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-4">
            <select class="form-select" aria-label="Default select example" id="gender">
                <option selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
        </div>
        <div class="col-4">
           <select class="form-select" id="food">
               <option selected>Select Food</option>
               <option value="Biriyani">Biriyani</option>
               <option value="FrideRice">FrideRice</option>
               <option value="Noodles">Noodles</option>
               <option value="Burger">Burger</option>
               <option value="Doosa">Doosa</option>
           </select>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <div class="col-4 p-2">
            <input type="text" class="form-control" id="state" placeholder="Enter you State">
        </div>
        <div class="col-4 p-2">
            <input type="text" class="form-control" id="country" placeholder="Enter you Country">
        </div>
    </div>
    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-1  ">
            <input type="button" onclick="myFunction()" class="btn bg-primary" value="Submit"></div>
        <div class="col-1">
            <input type="reset" class="btn bg-danger" value="Clear">
        </div>
    </div>
</form>

<div class="row">
    <div class="col-12">
        <table class="table table-striped m-5">
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>PinCode</th>
                <th>Gender</th>
                <th>Food</th>
                <th>State</th>
                <th>Country</th>
            </tr>
          </table>
    </div>
</div>

`;

document.body.append(container)
 
 
 function myFunction(){
    let tbl = document.querySelector('.table');
    let row = tbl.insertRow();
    let col1 = row.insertCell();
    let col2 = row.insertCell();
    let col3 = row.insertCell();
    let col4 = row.insertCell();
    let col5 = row.insertCell();
    let col6 = row.insertCell();
    let col7 = row.insertCell();
    let col8 = row.insertCell();



   
    col1.innerHTML = document.getElementById('fname').value ;
    col2.innerHTML = document.getElementById('lname').value ;
    col3.innerHTML = document.getElementById('add').value ;
    col4.innerHTML = document.getElementById('pin').value ;
    col5.innerHTML = document.getElementById('gender').value ;
    col6.innerHTML = document.getElementById('food').value ;
    col7.innerHTML = document.getElementById('state').value ;
    col8.innerHTML = document.getElementById('country').value ;

}