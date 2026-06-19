import './globals.css'

export const metadata = {
  title: 'Auralab — O clube da evolução real',
  description:
    'App iOS de evolução pessoal: treino, nutrição, financeiro e hábitos em um só lugar. Com gamificação real e Aura Points.',
  keywords: [
    'treino',
    'nutrição',
    'hábitos',
    'financeiro',
    'evolução pessoal',
    'app ios',
    'gamificação',
    'auralab',
  ],
  authors: [{ name: 'J. V. MENDES MOSANER LTDA' }],
  creator: 'Auralab',
  publisher: 'J. V. MENDES MOSANER LTDA',
  metadataBase: new URL('https://laboratorioaura.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Auralab — O clube da evolução real 🔥',
    description:
      'Treino, nutrição, financeiro e hábitos em um só app. Com gamificação real.',
    url: 'https://laboratorioaura.com.br',
    siteName: 'Auralab',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auralab — O clube da evolução real',
    description: 'App iOS de evolução pessoal com gamificação real.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
