'use client'

import { useEffect, useState } from 'react'

// itms-apps:// abre o App Store nativamente — funciona no TikTok, Instagram, etc.
const ITMS_URL = 'itms-apps://apps.apple.com/br/app/auralab/id6794130003'
const HTTPS_URL = 'https://apps.apple.com/br/app/auralab/id6794130003'

function isInAppBrowser() {
  if (typeof navigator === 'undefined') return false
  return /musical_ly|tiktok|instagram|fbav|fban|bytedance/i.test(navigator.userAgent)
}

function isIOS() {
  if (typeof navigator === 'undefined') return false
  return /iphone|ipad|ipod/i.test(navigator.userAgent)
}

export default function AppRedirect() {
  const [dots, setDots] = useState('.')
  const [inApp, setInApp] = useState(false)

  useEffect(() => {
    const inAppBrowser = isInAppBrowser()
    setInApp(inAppBrowser)

    // Só faz redirect automático fora do TikTok/Instagram (eles bloqueiam)
    if (!inAppBrowser) {
      const timer = setTimeout(() => {
        window.location.href = isIOS() ? ITMS_URL : HTTPS_URL
      }, 1200)
      return () => clearTimeout(timer)
    }

    const dotAnim = setInterval(() => {
      setDots(d => d.length >= 3 ? '.' : d + '.')
    }, 400)
    return () => clearInterval(dotAnim)
  }, [])

  return (
    <div className="app-redirect">
      <div className="app-redirect-logo">auralab</div>

      <h1 className="app-redirect-title">
        Seu próximo passo<br />começa no app.
      </h1>

      <p className="app-redirect-sub">
        {inApp
          ? 'Toque no botão abaixo para abrir o Auralab na App Store.'
          : 'Estamos abrindo a loja certa para o seu dispositivo. Se nada acontecer, toque no botão abaixo.'}
      </p>

      {!inApp && (
        <div className="app-redirect-loading">
          <span className="app-redirect-dot" />
          Abrindo a loja{dots}
        </div>
      )}

      {/* Botão principal — usa itms-apps:// para abrir App Store direto */}
      <a
        href={ITMS_URL}
        className="app-redirect-btn"
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

      {/* Fallback HTTPS caso itms-apps não funcione */}
      <a
        href={HTTPS_URL}
        className="app-redirect-fallback"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abrir no navegador →
      </a>
    </div>
  )
}
