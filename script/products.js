const sendToWhatsApp = () => {
  if (cart.length === 0) {
    showNotification('El carrito está vacío');
    return;
  }

  const name = document.getElementById('customerName')?.value.trim();
  const phone = document.getElementById('customerPhone')?.value.trim();
  const deliveryOption = document.getElementById('deliveryOption')?.value;
  const address = document.getElementById('customerAddress')?.value.trim();

  if (!name || !phone) {
    showNotification('Completa tu nombre y teléfono');
    return;
  }

  // Construir mensaje
  let message = encodeURIComponent(`PEDIDO GESTOR I94\nCliente: ${name}\nTeléfono: ${phone}`);
  
  if (deliveryOption === 'mensajeria' && address) {
    message += encodeURIComponent(`\nOpción: Mensajería\nDirección: ${address}`);
  } else {
    message += encodeURIComponent('\nOpción: Recogida en tienda');
  }

  message += encodeURIComponent('\n\nProductos:');
  cart.forEach((item) => {
    message += encodeURIComponent(`\n${item.name} - Cantidad: ${item.quantity}`);
  });
  message += encodeURIComponent(`\n\nTotal: ₱${getTotalPrice()}`);

  window.open(`https://wa.me/5352663106?text=${message}`, '_blank');
  setCart([]);
  setShowCart(false);
  showNotification('Pedido enviado por WhatsApp');
};
