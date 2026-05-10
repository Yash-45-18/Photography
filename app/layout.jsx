import './globals.css'

export const metadata = {
  title: 'Tanishq Photography | Wedding & Cinematography',
  description: 'Premium wedding photography and cinematography based in Kannnad Sambajinagar. Available worldwide.',
  keywords: 'wedding photography, cinematography, Sambajinagar, Maharashtra, pre-wedding shoot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
