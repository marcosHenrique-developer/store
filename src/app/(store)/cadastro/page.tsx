'use client'

import { Product } from '@/data/types/products'
import dataProducts from '@/app/api/products/data.json'
import { FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function AddProduct() {
  const router = useRouter()
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const slug = data.title as string

    const dataProduct: Product = {
      id: dataProducts?.products?.length + 1,
      slug: slug?.replace(' ', '-') as string,
      image:
        'https://io.convertiez.com.br/m/lojasedmil/shop/products/images/1371/medium/fogao-itatiaia-electra-glass-5-bocas-com-acendimento-automatico-preto_9307.jpg',
      title: data?.title as string,
      price: data?.price as unknown as number,
      description: data?.description as string,
    }

    try {
      fetch('/api/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataProduct),
      })
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success('Produro adicionado 👍🏽!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
      router.push(`/`)
    } catch (err) {
      toast.error(`Nao foi possivel adicionar o produto${err}`, {
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
  }

  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="flex sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Cadastro de produto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="flex text-sm font-medium leading-6 text-white">
              Nome do produto
            </label>
          </div>
          <div className="flex w-[320px] items-center rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
            <Input
              defaultValue={''}
              id="title"
              name="title"
              type="name"
              required
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500 border-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex text-sm font-medium leading-6 text-white">
              Preço
            </label>
          </div>
          <div className="flex w-[320px] items-center rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
            <Input
              defaultValue={''}
              id="price"
              name="price"
              type="number"
              required
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500 border-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex text-sm font-medium leading-6 text-white">
              Descrição
            </label>
          </div>
          <div className="flex w-[320px] items-center rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
            <Input
              defaultValue={''}
              id="description"
              name="description"
              type="description"
              required
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500 border-none"
            />
          </div>

          <div>
            <Button
              type="submit"
              className="flex w-50 justify-center rounded bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Adicionar produto
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
