export const metadata = {
  title: 'Suporte — Auralab',
  description: 'Entre em contato com o suporte do Auralab. Estamos aqui para ajudar.',
}

export default function Suporte() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo">auralab</a>
        <div className="navbar-right">
          <a href="/" className="navbar-link">← Voltar ao site</a>
        </div>
      </nav>

      <main className="privacy-page">
        <h1>Suporte</h1>
        <p className="meta">
          Respondemos em até <strong style={{ color: 'var(--text-primary)' }}>24 horas</strong>.
          Escolha como prefere falar com a gente:
        </p>

        <div className="support-cards">

          {/* WhatsApp */}
          <a
            href="https://wa.me/5518996026528?text=Ol%C3%A1%20Z%C3%A9%20Victor%2C%20quero%20ter%20um%20suporte%20para%20o%20aplicativo%20Auralab"
            target="_blank"
            rel="noopener noreferrer"
            className="support-contact-card support-whatsapp"
          >
            <span className="support-card-icon">💬</span>
            <div className="support-card-body">
              <h3>WhatsApp</h3>
              <p>Resposta mais rápida. Clique para abrir a conversa.</p>
              <span className="support-card-action">Abrir WhatsApp →</span>
            </div>
          </a>

          {/* E-mail */}
          <a
            href="mailto:auralabsystem@gmail.com?subject=[Suporte Auralab]"
            className="support-contact-card support-email"
          >
            <span className="support-card-icon">✉️</span>
            <div className="support-card-body">
              <h3>E-mail</h3>
              <p>auralabsystem@gmail.com</p>
              <span className="support-card-action">Enviar e-mail →</span>
            </div>
          </a>

        </div>

        {/* Tópicos comuns */}
        <h2 style={{ marginTop: '52px', marginBottom: '20px', fontSize: '18px', color: 'var(--text-primary)' }}>
          Assuntos mais comuns
        </h2>

        <div className="support-topics">
          <div className="support-topic">
            <span>⚡</span>
            <div>
              <strong>Problemas técnicos</strong>
              <p>App travando, funcionalidades que não respondem ou erros inesperados.</p>
            </div>
          </div>
          <div className="support-topic">
            <span>💳</span>
            <div>
              <strong>Assinatura e pagamento</strong>
              <p>Dúvidas sobre cobrança, cancelamento ou reembolso da assinatura.</p>
            </div>
          </div>
          <div className="support-topic">
            <span>🔒</span>
            <div>
              <strong>Conta e privacidade</strong>
              <p>Recuperação de acesso, exclusão de dados ou configurações da conta.</p>
            </div>
          </div>
          <div className="support-topic">
            <span>⚔️</span>
            <div>
              <strong>Aura Points e gamificação</strong>
              <p>Points não computados, duelos, níveis ou Auraman.</p>
            </div>
          </div>
        </div>

        <p style={{ marginTop: '48px', fontSize: '13px', color: 'var(--text-secondary)', textAlign: 'center' }}>
          Para reembolsos, consulte nossa{' '}
          <a href="/reembolso" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
            Política de Reembolso
          </a>.
        </p>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-bottom">
            <span className="footer-copy">© 2024 Auralab. Todos os direitos reservados.</span>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="/privacidade" className="footer-domain" style={{ textDecoration: 'none' }}>Privacidade</a>
              <a href="/termos" className="footer-domain" style={{ textDecoration: 'none' }}>Termos</a>
              <a href="/reembolso" className="footer-domain" style={{ textDecoration: 'none' }}>Reembolso</a>
              <a href="/" className="footer-domain" style={{ textDecoration: 'none' }}>← Voltar</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
