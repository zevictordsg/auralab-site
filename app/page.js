export default function Home() {
  return (
    <>
      {/* ─── Navbar ─── */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">auralab</a>
        <div className="navbar-right">
          <a href="#features" className="navbar-link">Funcionalidades</a>
          <a href="#gamification" className="navbar-link">Aura Points</a>
          <a
            href="https://instagram.com/auralab.club"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            Entrar para o clube →
          </a>
        </div>
      </nav>

      <main>
        {/* ─── Hero ─── */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-content">
            {/* Text */}
            <div className="hero-text">
              <div className="hero-badge">
                <span className="dot" />
                Em breve para iOS
              </div>

              <h1 className="hero-title">
                Evolua de verdade.<br />
                <span className="gradient-text">Em um só lugar.</span>
              </h1>

              <p className="hero-subtitle">
                Treino, nutrição, financeiro e hábitos reunidos em um app.
                Com gamificação real e Aura Points para você nunca parar de crescer.
              </p>

              <div className="hero-actions">
                <a
                  href="https://instagram.com/auralab.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  🔥 Entrar para o clube
                </a>
                <a href="#features" className="btn-secondary">
                  Ver funcionalidades
                </a>
              </div>

              <p className="hero-note">Disponível em breve · iOS</p>
            </div>

            {/* Mascot */}
            <div className="hero-visual">
              <div className="hero-mascot-wrap">
                <img
                  src="/images/aurahalter3.png"
                  alt="Auraman treinando"
                  className="hero-mascot"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stats Bar ─── */}
        <div className="stats-bar">
          <div className="stats-inner">
            <div className="stat-item">
              <strong>4 pilares</strong> de evolução pessoal
            </div>
            <div className="stat-dot" aria-hidden="true" />
            <div className="stat-item">
              <strong>1 app</strong> para tudo
            </div>
            <div className="stat-dot" aria-hidden="true" />
            <div className="stat-item">
              <strong>Aura Points</strong> — gamificação real
            </div>
            <div className="stat-dot" aria-hidden="true" />
            <div className="stat-item">
              <strong>100%</strong> premium · iOS
            </div>
          </div>
        </div>

        {/* ─── Pillars ─── */}
        <section id="features" className="pillars">
          <div className="section-inner">
            <div className="section-tag">⚡ Funcionalidades</div>
            <h2 className="section-title">
              Evolução em 4 frentes.{' '}
              <span className="gradient-text">Simultâneas.</span>
            </h2>
            <p className="section-subtitle">
              Chega de 4 apps diferentes. O Auralab centraliza tudo que importa para sua performance — com visual de clube premium.
            </p>

            <div className="pillars-grid">

              {/* Treino */}
              <div className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-wrap">🏋️</div>
                  <img
                    src="/images/aurahalter3.png"
                    alt="Auraman treinando"
                    className="pillar-mascot"
                  />
                </div>
                <h3 className="pillar-title">Treino</h3>
                <p className="pillar-desc">
                  Registre exercícios, acompanhe cargas, volume e records pessoais. Veja sua evolução semana a semana com histórico detalhado e gráficos de progresso.
                </p>
                <div className="pillar-pills">
                  <span className="pill">Histórico completo</span>
                  <span className="pill">PRs automáticos</span>
                  <span className="pill">Volume por músculo</span>
                  <span className="pill">Séries e repetições</span>
                </div>
              </div>

              {/* Nutrição */}
              <div className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-wrap">🥗</div>
                  <img
                    src="/images/cafeaura3.png"
                    alt="Auraman tomando café"
                    className="pillar-mascot"
                  />
                </div>
                <h3 className="pillar-title">Nutrição</h3>
                <p className="pillar-desc">
                  Log de refeições com contagem precisa de macronutrientes e calorias. Defina metas diárias e acompanhe seu progresso nutricional em tempo real.
                </p>
                <div className="pillar-pills">
                  <span className="pill">Macros detalhados</span>
                  <span className="pill">Metas personalizadas</span>
                  <span className="pill">Banco de alimentos</span>
                  <span className="pill">Refeições salvas</span>
                </div>
              </div>

              {/* Financeiro */}
              <div className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-wrap">💰</div>
                  <img
                    src="/images/mandin3.png"
                    alt="Auraman com dinheiro"
                    className="pillar-mascot"
                  />
                </div>
                <h3 className="pillar-title">Financeiro</h3>
                <p className="pillar-desc">
                  Controle gastos, receitas, patrimônio líquido e faturas de cartão. Com Open Finance integrado para sincronização automática com suas contas.
                </p>
                <div className="pillar-pills">
                  <span className="pill">Open Finance</span>
                  <span className="pill">Faturas de cartão</span>
                  <span className="pill">Patrimônio líquido</span>
                  <span className="pill">Categorias de gastos</span>
                </div>
              </div>

              {/* Hábitos */}
              <div className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-wrap">🔁</div>
                  <img
                    src="/images/auracardio3.png"
                    alt="Auraman na bike"
                    className="pillar-mascot"
                  />
                </div>
                <h3 className="pillar-title">Hábitos</h3>
                <p className="pillar-desc">
                  Crie e rastreie hábitos personalizados com streaks, sistema de frequência e freeze. Construa consistência real e mantenha sua rotina em dia.
                </p>
                <div className="pillar-pills">
                  <span className="pill">Streaks</span>
                  <span className="pill">Freeze disponível</span>
                  <span className="pill">Frequência customizável</span>
                  <span className="pill">Histórico visual</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── Aura Points ─── */}
        <section id="gamification" className="aura-section">
          <div className="aura-section-bg" aria-hidden="true" />
          <div className="section-inner">

            <div className="aura-header">
              <span className="aura-icon">⚡</span>
              <div className="section-tag" style={{ display: 'inline-flex' }}>Sistema de Gamificação</div>
              <h2 className="section-title">
                Ganhe Aura Points.{' '}
                <span className="gradient-text-amber">Suba de nível.</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Cada treino registrado, refeição logada e hábito cumprido gera Aura Points. Evolua seu Auraman, suba no ranking e desafie outros atletas da sua região.
              </p>
            </div>

            <div className="levels-row">
              <div className="level-badge">
                <span className="level-emoji">🌱</span>
                <span className="level-name">Iniciante</span>
                <span className="level-num">Nível 1</span>
              </div>
              <div className="level-badge current">
                <span className="level-emoji">🗡️</span>
                <span className="level-name">Caçador</span>
                <span className="level-num">Nível 2</span>
              </div>
              <div className="level-badge">
                <span className="level-emoji">⚔️</span>
                <span className="level-name">Guerreiro</span>
                <span className="level-num">Nível 3</span>
              </div>
              <div className="level-badge">
                <span className="level-emoji">🔮</span>
                <span className="level-name">Sábio</span>
                <span className="level-num">Nível 4</span>
              </div>
              <div className="level-badge locked" aria-label="Nível bloqueado">
                <span className="level-emoji">🔒</span>
                <span className="level-name">???</span>
                <span className="level-num">Em breve</span>
              </div>
            </div>

            <div className="aura-features">
              <div className="aura-feat">
                <span className="aura-feat-icon">⚡</span>
                <h3 className="aura-feat-title">Aura Points</h3>
                <p className="aura-feat-desc">
                  Ganhe XP completando treinos, logando refeições e mantendo hábitos. Cada ação conta para sua evolução.
                </p>
              </div>
              <div className="aura-feat">
                <span className="aura-feat-icon">🏆</span>
                <h3 className="aura-feat-title">Competição local</h3>
                <p className="aura-feat-desc">
                  Rankings só com pessoas do mesmo nível. Duelos 1:1 — o "Duelo Anabólico" — para desafiar quem está na sua área.
                </p>
              </div>
              <div className="aura-feat">
                <span className="aura-feat-icon">🎭</span>
                <h3 className="aura-feat-title">Auraman</h3>
                <p className="aura-feat-desc">
                  Seu personagem único evolui com acessórios cosméticos conforme você sobe de nível. Mostre quem você é.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Manifesto ─── */}
        <section className="manifesto">
          <div className="manifesto-bg" aria-hidden="true" />
          <div className="manifesto-inner">
            <div>
              <blockquote>
                "Não é sobre fazer mais.<br />
                É sobre evoluir de verdade."
              </blockquote>
              <cite>— A filosofia do Auralab</cite>
            </div>
            <img
              src="/images/feedback3.png"
              alt="Auraman pensativo"
              className="manifesto-mascot"
            />
          </div>
        </section>

        {/* ─── CTA Final ─── */}
        <section className="cta-section">
          <div className="cta-section-bg" aria-hidden="true" />
          <div className="cta-inner">

            <div className="cta-mascot-wrap">
              <img
                src="/images/auraman3.png"
                alt="Auraman com estrela"
                className="cta-mascot"
              />
            </div>

            <div className="cta-text">
              <div className="section-tag">🔥 Early Access</div>
              <h2 className="cta-title">
                O Auralab está chegando.<br />
                <span className="gradient-text">Entra para o clube.</span>
              </h2>
              <p className="cta-sub">
                Siga no Instagram e seja um dos primeiros a testar o GPS da sua melhor versão. O clube da evolução real te espera.
              </p>
              <div className="cta-actions">
                <a
                  href="https://instagram.com/auralab.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '16px', padding: '15px 36px' }}
                >
                  Seguir @auralab.club
                </a>
                <span className="cta-disclaimer">Disponível em breve · iOS · App gratuito</span>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-logo">auralab</span>
              <p className="footer-tagline">O clube da evolução real. 🔥</p>
              <div className="footer-legal">
                J. V. MENDES MOSANER LTDA<br />
                CNPJ: 47.553.379/0001-20<br />
                contato@laboratorioaura.com.br
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-col">
                <h4>Produto</h4>
                <ul>
                  <li><a href="#features">Funcionalidades</a></li>
                  <li><a href="#gamification">Aura Points</a></li>
                  <li><a href="https://instagram.com/auralab.club" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <ul>
                  <li><a href="/privacidade">Política de Privacidade</a></li>
                  <li><a href="/termos">Termos de Uso</a></li>
                  <li><a href="mailto:contato@laboratorioaura.com.br">Contato</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">© 2024 Auralab. Todos os direitos reservados.</span>
            <span className="footer-domain">laboratorioaura.com.br</span>
          </div>
        </div>
      </footer>
    </>
  )
}
