import { useState } from 'react'

export function CartDrawer({ isOpen, onClose, cartItems, onRemoveItem }) {
  const [checkedOut, setCheckedOut] = useState(false)

  if (!isOpen) return null

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.qty || 1), 0)

  const handleCheckout = () => {
    setCheckedOut(true)
  }

  const handleReset = () => {
    setCheckedOut(false)
    onClose()
  }

  return (
    <div className="drawer-curtain" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div className="drawer-title">YOUR SHOPPING BAG</div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close cart drawer"
          >
            ✕
          </button>
        </div>

        {checkedOut ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div className="starburst-badge" style={{ margin: '0 auto 20px', width: '90px', height: '90px', fontSize: '1.4rem' }}>
              YES!
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', marginBottom: '10px' }}>
              ORDER DISPATCHED!
            </h3>
            <p style={{ fontSize: '1rem', fontWeight: '700', color: '#333', marginBottom: '24px', lineHeight: '1.6' }}>
              Your order confirmation and tracking number have been sent. Welcome to the POP STORE family!
            </p>
            <button
              type="button"
              className="pop-btn pop-btn-yellow"
              onClick={handleReset}
              style={{ width: '100%' }}
            >
              KEEP SHOPPING
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: '#999', marginBottom: '12px' }}>
              BAG IS EMPTY!
            </div>
            <p style={{ fontSize: '1rem', fontWeight: '700', color: '#555', marginBottom: '24px' }}>
              Add a piece from the limited series before it sells out.
            </p>
            <button
              type="button"
              className="pop-btn pop-btn-yellow"
              onClick={onClose}
              style={{ width: '100%' }}
            >
              BROWSE COLLECTION
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto' }}>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: '900', fontSize: '0.98rem', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {item.title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--pop-red)' }}>
                        ${item.price}
                      </span>
                      <span className="pop-tag-pill" style={{ backgroundColor: '#FFE800', fontSize: '0.7rem' }}>
                        QTY: {item.qty || 1}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    style={{ fontSize: '0.8rem', fontWeight: '900', color: '#FF1E27', textDecoration: 'underline' }}
                  >
                    REMOVE
                  </button>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: '20px', borderTop: 'var(--border-thick)', marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                <span style={{ fontWeight: '900', fontSize: '1.1rem' }}>SUBTOTAL:</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: 'var(--pop-red)' }}>
                  ${subtotal}
                </span>
              </div>

              <button
                type="button"
                className="pop-btn pop-btn-red"
                onClick={handleCheckout}
                style={{ width: '100%', padding: '16px 20px', fontSize: '1.1rem' }}
              >
                PROCEED TO CHECKOUT &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
