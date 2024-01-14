import Link from 'next/link'
import { Button } from './ui/button'
import { Cart } from './cart'
import { SearchForm } from './search-form'
import LoginButton from './login-button'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Store
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <Cart />

        <div className="w-px h-4 bg-zinc-700"></div>

        <Link
          href="/cadastro"
          className="flex items-center gap-2 hover:undeline-none"
        >
          <Button className="flex w-full items-center justify-center rounded border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Cadastro de Produtos
          </Button>
        </Link>

        <LoginButton />
      </div>
    </div>
  )
}
