function tipCalculator(){
  // Declare Variables using the id attribute tied to the html inputs
    var billAmount = document.getElementById('billAmount').value;
    var serviceQuality = document.getElementById('serviceQuality').value;
    var guests = document.getElementById('guests').value;

  // Declare Variables for our tip and bill total logic
    var tipTotal = billAmount * serviceQuality;
    var billTotal = Number(tipTotal) + Number(billAmount);

  // More than one guest logic
    var tipEach = tipTotal / guests;
    var billEach = billAmount / guests;
    var billPerPerson = Number(tipEach) + Number(billEach);
   
  //  This is where we will display our values 
    $('#tip').html(`$${tipTotal.toFixed(2)}`)
    $('#billTotal').html(`$${billTotal.toFixed(2)}`)
    
    guests <= 1 ? $('#billPerPerson').html(`$${billTotal.toFixed(2)}`) : $('#billPerPerson').html(`$${billPerPerson.toFixed(2)}`);
}
  
// calculate button 
document.getElementById('calculate').onclick = function(){
  // here we'll call our calculator function
  tipCalculator()
};

// function for clearing calculator
function clearCalculator(){
  $('#billAmount').val('')
  $('#serviceQuality option:first').prop('selected',true);
  $('#guests').val('')
  $('#tip').html('')
  $('#billTotal').html('')
  $('#billPerPerson').html('')
}

// clear button
document.getElementById('clear').onclick = function(){
  // here we'll call our clear function
  clearCalculator()
};

