import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <UserButton afterSignOutUrl="/"/> */}



      <div>
        <Link href={'/dashboard'}>GO to Dashboard</Link>
      </div>
    </main>
  )
}
