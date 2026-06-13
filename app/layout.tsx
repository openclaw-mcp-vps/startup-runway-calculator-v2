import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Runway Calculator — Model Hiring, Revenue & Burn Rate',
  description: 'Advanced runway calculator that factors in planned hires, revenue growth, and burn rate changes. Built for startup founders and CFOs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="afd4d85e-51c5-412d-9a98-389870b5a8e9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
