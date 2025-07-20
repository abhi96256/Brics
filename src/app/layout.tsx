export const metadata = {
  title: 'Bricks',
  description: 'Bricks Website',
  icons: {
    icon: '/Lo.png',
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
