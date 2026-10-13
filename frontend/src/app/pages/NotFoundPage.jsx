import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Página não encontrada</h1>
      <Link to="/" className="text-blue-600 hover:underline">Voltar ao início</Link>
    </div>
  )
}