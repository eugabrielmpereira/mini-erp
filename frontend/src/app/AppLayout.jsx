import { Link, Outlet } from 'react-router'

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-slate-800 p-4 text-white">
        <p className="mb-4 text-lg font-bold">Mini ERP</p>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-slate-50 p-6">
        <Outlet />
      </main>
    </div>
  )
}