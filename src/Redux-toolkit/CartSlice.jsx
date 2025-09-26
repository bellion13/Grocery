import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      
      // Chỉ thêm nếu item chưa có trong cart
      if (!existingItem) {
        state.totalQuantity++
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          category: newItem.category,
          quantity: 1,
          totalPrice: newItem.price
        })
        state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)
      }
      // Nếu item đã có thì không làm gì cả
    },
    
    removeItem: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity
        state.items = state.items.filter(item => item.id !== id)
        state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)
      }
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const existingItem = state.items.find(item => item.id === id)
      
      if (existingItem) {
        const difference = quantity - existingItem.quantity
        state.totalQuantity += difference
        existingItem.quantity = quantity
        existingItem.totalPrice = existingItem.price * quantity
        state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0)
      }
    },
    
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
    }
  }
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer