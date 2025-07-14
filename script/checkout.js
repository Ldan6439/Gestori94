const toggleAddressField = () => {
  const addressField = document.getElementById('customerAddress');
  const deliveryOption = document.getElementById('deliveryOption').value;
  if (deliveryOption === 'mensajeria') {
    addressField.classList.remove('hidden');
  } else {
    addressField.classList.add('hidden');
  }
};
