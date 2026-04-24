import React, { useState } from 'react';
import './sidebar.css'; // استيراد ملف الشكل

function Sidebar() {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
<button 
  onClick={() => setIsOpen(true)}
  style={{ 
    background: 'transparent', // يجعل الخلفية شفافة تماماً
    border: 'none',            // يزيل الإطار الأسود
    cursor: 'pointer',         // يغير شكل الماوس عند الوقوف عليه
    padding: '0',              // يزيل أي مسافات داخلية تسبب المربع
    position: 'relative',      // لضبط مكان رقم السلة
    display: 'flex',
    alignItems: 'center',
    outline: 'none'            // يمنع ظهور إطار عند الضغط
  }}
>
  <span style={{ fontSize: '24px' }}>🛒</span>
  <span style={{ 
    position: 'absolute', 
    top: '-5px', 
    right: '-10px', 
    background: 'red', 
    color: 'white', 
    borderRadius: '50%', 
    width: '18px', 
    height: '18px', 
    fontSize: '11px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {quantity}
  </span>
</button>

      {/* خلفية التمويه */}
      {isOpen && <div className="cart-overlay" onClick={() => setIsOpen(false)}></div>}

      {/* السايد بار */}
      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>سلة المشتريات</h3>
          <button className="close-sidebar" onClick={() => setIsOpen(false)}>&times;</button>
        </div>

        <div className="sidebar-content">
          <div className="cart-item">
            <img src="https://via.placeholder.com/60" alt="product" />
            <div className="item-details">
              <h4>اسم المنتج</h4>
              <p>150 جنيه</p>
            </div>
            <div className="quantity-bar">
              <button onClick={decrease}>-</button>
              <span>{quantity}</span>
              <button onClick={increase}>+</button>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="total-box">
            <span>الإجمالي:</span>
            <strong>{150 * quantity} جنيه</strong>
          </div>
          <button className="checkout-btn">إتمام العملية</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;