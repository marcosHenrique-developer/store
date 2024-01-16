'use client'

import { useState } from 'react'
import { useCart } from '@/context/create-context'
import { ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import Drawer from '@mui/material/Drawer'
import { ThemeProvider, createTheme } from '@mui/material'
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from '@/components/ui/drawer'

type Anchor = 'left' | 'right'

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgb(9 9 11)',
        },
      },
    },
  },
})
export function Cart() {
  const { items } = useCart()

  const [state, setState] = useState({
    right: false,
    left: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>
        <ShoppingBag className="h-4 w-4 mr-1" />
        <span className="text-sm">Cart ({items?.length})</span>
      </Button>
      <ThemeProvider theme={theme}>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
        >
          {items?.length ? (
            items.map((cart) => {
              return (
                <div
                  key={cart.product.id}
                  className="flex flex-col justify-center gap-1 w-[320px] items-center text-zinc-50 my-1 bg-zinc-900 rounded-2xl"
                >
                  <span className="text-m text-zinc-400">
                    {cart.product.title}
                  </span>
                  <Image
                    src={cart.product.image}
                    width={100}
                    height={100}
                    quality={100}
                    alt=""
                  />
                  <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
                    {cart.product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>

                  <span className="text-sm text-zinc-900 rounded-full bg-zinc-400 px-5 py-2.5 font-semibold mb-2">
                    Quantidade do produto: {cart.quantity}
                  </span>
                </div>
              )
            })
          ) : (
            <div className="w-[320px] text-center">
              <p className="mt-6 text-slate-600">Carrinho vazio!</p>
            </div>
          )}
        </Drawer>
      </ThemeProvider>
    </div>
  )

  // Antigo Drawer bottom
  // return (
  //   <div className="flex items-center gap-4">
  //     <Drawer>
  //       <DrawerTrigger className="flex flex-row gap-1">
  //         <ShoppingBag className="h-4 w-4" />
  //         <span className="text-sm">Cart ({items?.length})</span>
  //       </DrawerTrigger>
  //       <DrawerContent className="bg-zinc-950 text-zinc-50">
  //         <div className="grid max-h-[860px] grid-cols-4 grid-rows-2 gap-4">
  //           {items?.length ? (
  //             items.map((cart) => {
  //               return (
  //                 <div
  //                   key={cart.product.id}
  //                   className="col-span-1 row-span-3 flex flex-col justify-center items-center gap-2 bg-zinc-900 rounded-full"
  //                 >
  //                   <span className="text-sm text-zinc-400">
  //                     {cart.product.title}
  //                   </span>
  //                   <Image
  //                     src={cart.product.image}
  //                     className="group-hover:scale-105 transition-transform duration-500"
  //                     width={100}
  //                     height={100}
  //                     quality={100}
  //                     alt=""
  //                   />
  //                   <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
  //                     {cart.product.price.toLocaleString('pt-BR', {
  //                       style: 'currency',
  //                       currency: 'BRL',
  //                       minimumFractionDigits: 0,
  //                       maximumFractionDigits: 0,
  //                     })}
  //                   </span>

  //                   <span className="text-sm text-zinc-900 rounded-full bg-zinc-400 px-5 py-2.5 font-semibold">
  //                     Qtds do produto: {cart.quantity}
  //                   </span>
  //                 </div>
  //               )
  //             })
  //           ) : (
  //             <DrawerHeader>
  //               <DrawerTitle>Carrinho vazio</DrawerTitle>
  //               <DrawerDescription>
  //                 Ops... parece que voce nao tem nada no carrinho
  //               </DrawerDescription>
  //             </DrawerHeader>
  //           )}
  //         </div>

  //         <DrawerFooter>
  //           <DrawerClose>
  //             <Button
  //               className="rounded border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  //               variant="outline"
  //             >
  //               Fechar
  //             </Button>
  //           </DrawerClose>
  //         </DrawerFooter>
  //       </DrawerContent>
  //     </Drawer>
  //   </div>
  // )
}
