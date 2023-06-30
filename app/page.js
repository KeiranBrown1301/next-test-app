import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl items-center font-mono text-sm lg:flex">
        <h1 className="p-24"><Link href="/form">Form Page</Link></h1>
        <h1 className="p-24"><Link href="/tictactoe">Tic Tac Toe</Link></h1>
      </div>
    </main>
  )
}
