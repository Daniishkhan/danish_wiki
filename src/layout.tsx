import './globals.css'

export const metadata = {
  title: 'Danish Khan - Software Engineer',
  description: 'Personal resume website of Danish Khan, a software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body className="scanline">{children}</body>
    </html>
  )
}

