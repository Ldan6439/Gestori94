<div className="space-y-3 mb-4">
  <input 
    id="customerName" 
    type="text" 
    placeholder="Nombre completo" 
    className="w-full px-3 py-2 border rounded"
  />
  <input 
    id="customerPhone" 
    type="text" 
    placeholder="Teléfono (ej: 5352663106)" 
    className="w-full px-3 py-2 border rounded"
  />
  <select id="deliveryOption" onChange={toggleAddressField} className="w-full px-3 py-2 border rounded">
    <option value="recogida">Recogida en tienda</option>
    <option value="mensajeria">Mensajería</option>
  </select>
  <input 
    id="customerAddress" 
    type="text" 
    placeholder="Dirección de envío (opcional)" 
    className="w-full px-3 py-2 border rounded hidden"
  />
</div>
