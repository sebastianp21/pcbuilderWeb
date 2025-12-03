import './Waybar.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'

export default  function Waybar() {
    const [cart, setCart] = useState(() => {
        try {
            const raw = JSON.parse(localStorage.getItem('cart') || '[]')
            return Array.isArray(raw) ? raw : []
        } catch (e) {
            return []
        }
    })
    const [open, setOpen] = useState(false)

    useEffect(() => {
        function onStorage(e) {
            if (e.key === 'cart') {
                try {
                    const parsed = JSON.parse(e.newValue || '[]')
                    setCart(Array.isArray(parsed) ? parsed : [])
                } catch (_) {
                    setCart([])
                }
            }
        }
        window.addEventListener('storage', onStorage)
        return () => window.removeEventListener('storage', onStorage)
    }, [])

    function toggleOpen() {
        setOpen(v => !v)
    }

    const totalCount = cart.reduce((s, it) => s + (it.qty || 0), 0)

    return (
        <>
            <div className='NavigationHeader'>
                <div className='NavNameDiv'>
                    <Link to="/">
                    <h2 className='NavName'>PcBuilder</h2>
                    </Link>
                </div>

                <div className='SearchBar'>

                    <div className='BarOptionDiv'>
                        <Link to="/build">
                        <h2 className='BarOption'>🛠️ Build</h2>
                        </Link>
                    </div>

                    <div className='BarOptionDiv'>
                        <Link to="/products">
                        <h2 className='BarOption'>Products</h2>
                        </Link>
                    </div>

                    <div className='BarOptionDiv'>
                        <h2 className='BarOption'> Guide</h2>
                    </div>

                    <div className='BarOptionDiv CartWrapper'>
                        <button className='CartIcon' type='button' onClick={toggleOpen} aria-expanded={open} aria-label='Cart'>
                            🛒
                            {totalCount > 0 && <span className='CartBadge'>{totalCount}</span>}
                        </button>
                        {open && (
                            <div className='CartDropdown' role='menu'>
                                {cart.length === 0 ? (
                                    <div className='CartEmpty'>Cart is empty</div>
                                ) : (
                                    cart.map(item => (
                                        <div key={item.id} className='CartItem'>
                                            <div className='CartItemName'>{item.name}</div>
                                            <div className='CartItemQty'>x{item.qty}</div>
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
    
}