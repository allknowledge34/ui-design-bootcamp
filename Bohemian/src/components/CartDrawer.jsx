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
    <div className="drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="boho-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: '600', color: 'var(--boho-walnut)' }}>
            YOUR BASKET
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close basket"
          >
            ✕
          </button>
        </div>

        {checkedOut ? (
          <div style={{ textAlign: 'center', padding: '36px 0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--boho-terracotta)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '1.4rem' }}>
              ✦
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--boho-walnut)', marginBottom: '8px' }}>
              ORDER DISPATCHED WITH CARE
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '24px' }}>
              Your order confirmation and artisan tracking details have been logged. Thank you for supporting slow craftsmanship!
            </p>
            <button
              type="button"
              className="boho-btn boho-btn-terracotta"
              onClick={handleReset}
              style={{ width: '100%' }}
            >
              RETURN TO ATELIER
            </button>
          </div>
        ) : cartItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--boho-walnut)', marginBottom: '10px' }}>
              YOUR BASKET IS EMPTY
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Discover our small-batch ceramics and handwoven textiles.
            </p>
            <button
              type="button"
              className="boho-btn boho-btn-terracotta"
              onClick={onClose}
            >
              BROWSE COLLECTION
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto', gap: '14px' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: '600', color: 'var(--boho-walnut)' }}>
                      {item.title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--boho-terracotta)' }}>
                        ${item.price}
                      </span>
                      <span className="boho-badge-pill" style={{ padding: '2px 8px', fontSize: '0.72rem' }}>
                        QTY: {item.qty || 1}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveItem(item.id)}
                    style={{ fontSize: '0.8rem', color: 'var(--boho-rust)', textDecoration: 'underline' }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-soft)', marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-muted)' }}>SUBTOTAL:</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '700', color: 'var(--boho-walnut)' }}>
                  ${subtotal}
                </span>
              </div>

              <button
                type="button"
                className="boho-btn boho-btn-terracotta"
                onClick={handleCheckout}
                style={{ width: '100%', padding: '14px 20px' }}
              >
                PROCEED TO DISPATCH &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
