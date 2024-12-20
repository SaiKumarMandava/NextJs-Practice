import Link from 'next/link'


export default function DefaultMessages() {
  return (
    <div>
      <h1>Messages</h1>
      <Link href='/dashboard/archived'>Archive</Link>
    </div>
  )
}
