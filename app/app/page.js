'use client'

import { useEffect, useState } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/br/app/auralab/id6794130003'

export default function AppRedirect() {
  const [dots, setDots] = useState('.')

  useEffect(() => {
    // Redireciona automaticamente após 1.5s
    const redirect = setTimeout(() => {
      window.location.href = APP_STORE_URL
    }, 1500)

    // Anima os pontinhos
    const dotAnim = setInterval(() => {
      setDots(d => d.length >= 3 ? '.' : d + '.')
    }, 400)

    return () => {
      clearTimeout(redirect)
      clearInterval(dotAnim)
    }
  }, [])

  return (
    <div className="app-redirect">
      {/* Logo */}
      <div className="app-redirect-logo">auralab</div>

      {/* Headline */}
      <h1 className="app-redirect-title">
        Seu próximo passo<br />começa no app.
      </h1>

      {/* Subtítulo */}
      <p className="app-redirect-sub">
        Estamos abrindo a loja certa para o seu dispositivo.
        Se nada acontecer, escolha uma opção abaixo.
      </p>

      {/* Indicador de loading */}
      <div className="app-redirect-loading">
        <span className="app-redirect-dot" />
        Abrindo a loja{dots}
      </div>

      {/* Botão App Store */}
      <a
        href={APP_STORE_URL}
        className="app-redirect-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          className="apple-icon"
          viewBox="0 0 814 1000"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.1 269-317.1 70.6 0 129.5 46.4 174.3 46.4 42.7 0 109.6-49.1 188.3-49.1 30.3.1 108.2 5.9 164.8 76.8zm-120.4-198.8c28.3-34.1 48.5-81.3 48.5-128.5 0-6.5-.6-13.1-1.9-18.5-45.9 1.7-100.4 30.6-133.7 68.3-26 29-50.2 76.2-50.2 124.1 0 7.1 1.3 14.3 1.9 16.5 3.2.6 8.4 1.3 13.6 1.3 41 0 91.7-27.5 121.8-63.2z" />
        </svg>
        Baixar na App Store
      </a>
    </div>
  )
}
