'use client'

import { Button } from '@/components/ui/button'
import { useCart } from '@/context/create-context'
import { Product } from '@/data/types/products'
import { ShoppingBag } from 'lucide-react'
import { toast } from 'react-toastify'

export interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(product)
    toast.success('Produro adicionado no carrinho👍🏽!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  return (
    <Button
      onClick={handleAddProductToCart}
      className="flex h-8 items-center justify-center rounded-full bg-indigo-600 px-4 font-semibold hover:bg-indigo-700"
    >
      <ShoppingBag className="h-4 w-4" />
    </Button>
  )
}
