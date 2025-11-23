import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <a className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-xl font-black">
              A
            </span>
            <span className="font-bold tracking-tight text-lg">API Hub</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/#features">
            <a className="hover:text-white transition-colors">Features</a>
          </Link>
          <Link href="/apis">
            <a className="hover:text-white transition-colors">All APIs</a>
          </Link>
          <Link href="/#getting-started">
            <a className="hover:text-white transition-colors">Getting Started</a>
          </Link>
          <Link href="/#changelog">
            <a className="hover:text-white transition-colors">Changelog</a>
          </Link>
          <Link href="/pricing">
            <a className="hover:text-white transition-colors">Pricing</a>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <a className="hidden md:inline-flex text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </a>
          </Link>
          <Link href="/apis">
            <a className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-sm font-medium transition-all shadow-lg shadow-indigo-500/20">
              Browse APIs
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
