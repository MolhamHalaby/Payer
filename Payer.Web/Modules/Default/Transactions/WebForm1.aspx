<html xmlns="http://www.w3.org/1999/xhtml"><head><title>

</title></head>
<body data-new-gr-c-s-check-loaded="14.1010.0" data-gr-ext-installed="">
    <div class="row g-3 align-items-center" style="margin-left: 40%; margin-top: 10%; block-size: 50px">
        
        <div class="col-auto">
            <label for="Name" class="col-form-label" style="margin-right: 10px">Name On Card:</label>
            <input type="text" id="inputCardHolderName" class="form-control">
        </div>
        
        <div class="col-auto" style="margin-top: 30px">
             <label for="ExpirationDate" class="col-form-label" style="margin-right: 10px;">ExpirationDate:</label>
      <select id="month" class="form-select">
           <option selected="">Month</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
      </select>
            <select id="year" class="form-select" style="margin-left:5px">
           <option selected="">Year</option>
          <option value="21">2021</option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
          <option value="26">2026</option>
          <option value="27">2027</option>
          </select>
        </div>
       
        <div class="col-auto" style="margin-top: 30px">
              <label for="CVV" class="col-form-label" style="margin-right: 10px; margin-left: 60px">CVV:</label>
               <input type="text" id="CVVNumber" class="form-control">
        </div>
       
        <div class="col-auto" style="margin-top: 30px">
            <label for="card number" class="col-form-label" style="margin-right: 10px; margin-left: 5px">Card Number:</label>
            <input type="text" id="CardNumber" class="form-control">
        </div>
      
        <div class="col-auto" style="margin-top: 30px">
            <label for="Email" class="col-form-label" style="margin-right: 10px; margin-left: 52px">Email:</label>
            <input type="email" id="Email" class="form-control">
        </div>

         <div class="col-auto" style="margin-top: 30px">
          <button type="button" class="pay" style="margin-left: 15%">Pay</button>
        </div>
</div>


<div class="betternet-wrapper"></div></body></html>