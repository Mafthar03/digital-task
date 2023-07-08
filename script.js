document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateCost();
  });
  
  function calculateCost() {
    const roomType = document.getElementById('room-type').value;
    const totalDays = parseInt(document.getElementById('total-days').value);
    const totalPersons = parseInt(document.getElementById('total-persons').value);
    const amenities = getSelectedAmenities();
    const advancePayment = parseInt(document.getElementById('advance-payment').value);
    const roomRate = getRoomRate(roomType, amenities);
    const additionalCharges = getAdditionalCharges(totalPersons);
    const totalCost = roomRate * totalDays + additionalCharges;
  
    displayCostDetails(roomRate, additionalCharges, totalCost);
  }
  
  function getSelectedAmenities() {
    const amenities = [];
    const checkboxes = document.getElementsByName('amenities');
  
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        amenities.push(checkboxes[i].value);
      }
    }
  
    return amenities;
  }
  
  function getRoomRate(roomType, amenities) {
    let roomRate = 0;
  
    if (roomType === 'deluxe') {
      roomRate += 2500;
    } else if (roomType === 'suite') {
      roomRate += 4000;
    }
  
    for (let i = 0; i < amenities.length; i++) {
      if (amenities[i] === 'AC') {
        roomRate += 1000;
      } else if (amenities[i] === 'Locker') {
        roomRate += 300;
      }
    }
  
    return roomRate;
  }
  
  function getAdditionalCharges(totalPersons) {
    const maxPersons = 2;
    const perPersonCharge = 1000;
    let additionalCharges = 0;
  
    if (totalPersons > maxPersons) {
      additionalCharges = perPersonCharge * (totalPersons - maxPersons);
    }
  
    return additionalCharges;
  }
  
  function displayCostDetails(roomRate, additionalCharges, totalCost) {
    document.getElementById('room-rate').textContent = 'Room Rate: Rs. ' + roomRate;
    document.getElementById('additional-charges').textContent = 'Additional Charges: Rs. ' + additionalCharges;
    document.getElementById('total-cost').textContent = 'Total Cost: Rs. ' + totalCost;
  
    document.getElementById('cost-details').style.display = 'block';
  }
  