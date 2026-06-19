export const metadata = {
  title: 'Termos de Uso — Auralab',
  description: 'Termos de Uso do aplicativo Auralab, desenvolvido por J. V. MENDES MOSANER LTDA.',
}

export default function TermsOfUse() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo">auralab</a>
        <div className="navbar-right">
          <a href="/" className="navbar-link">← Voltar ao site</a>
        </div>
      </nav>

      <main className="privacy-page">
        <h1>Termos de Uso</h1>
        <p className="meta">
          Última atualização: junho de 2024 · J. V. MENDES MOSANER LTDA — CNPJ 47.553.379/0001-20
        </p>

        <p>
          Ao utilizar o aplicativo Auralab e o site laboratorioaura.com.br, você concorda
          com estes Termos de Uso. Leia-os atentamente antes de usar nossos serviços.
        </p>

        <h2>1. Sobre o Auralab</h2>
        <p>
          O Auralab é um aplicativo iOS de evolução pessoal que oferece funcionalidades de
          rastreamento de treinos, nutrição, finanças e hábitos, desenvolvido e operado por
          <strong> J. V. MENDES MOSANER LTDA</strong>, CNPJ 47.553.379/0001-20.
        </p>

        <h2>2. Uso permitido</h2>
        <p>Ao usar o Auralab, você concorda em:</p>
        <ul>
          <li>Fornecer informações verdadeiras e precisas no cadastro;</li>
          <li>Usar o aplicativo apenas para fins pessoais e legais;</li>
          <li>Não tentar acessar sistemas ou dados de outros usuários;</li>
          <li>Não usar o aplicativo para fins comerciais sem autorização prévia.</li>
        </ul>

        <h2>3. Conta do usuário</h2>
        <p>
          Você é responsável por manter a confidencialidade de suas credenciais de acesso.
          Notifique-nos imediatamente em caso de uso não autorizado da sua conta pelo e-mail{' '}
          <a href="mailto:contato@laboratorioaura.com.br">contato@laboratorioaura.com.br</a>.
        </p>

        <h2>4. Propriedade intelectual</h2>
        <p>
          Todo o conteúdo do Auralab, incluindo mas não limitado a textos, gráficos, logotipos,
          ícones, imagens, código-fonte e software, é de propriedade exclusiva de
          J. V. MENDES MOSANER LTDA ou de seus licenciantes e está protegido pelas leis
          brasileiras de propriedade intelectual.
        </p>

        <h2>5. Isenção de responsabilidade</h2>
        <p>
          O Auralab é uma ferramenta de suporte ao estilo de vida saudável e não substitui
          orientação médica, nutricional ou financeira profissional. Sempre consulte
          profissionais habilitados antes de iniciar qualquer programa de exercícios,
          dieta ou decisão financeira.
        </p>

        <h2>6. Disponibilidade do serviço</h2>
        <p>
          Nos reservamos o direito de modificar, suspender ou encerrar qualquer parte dos
          serviços a qualquer momento, com ou sem aviso prévio. Não somos responsáveis por
          eventuais interrupções ou indisponibilidades.
        </p>

        <h2>7. Limitação de responsabilidade</h2>
        <p>
          Na máxima extensão permitida pela lei aplicável, J. V. MENDES MOSANER LTDA não
          será responsável por danos indiretos, incidentais, especiais ou consequentes
          decorrentes do uso ou da impossibilidade de uso dos serviços.
        </p>

        <h2>8. Legislação aplicável</h2>
        <p>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer
          disputa será submetida ao foro da comarca de domicílio do usuário, conforme
          previsto no Código de Defesa do Consumidor.
        </p>

        <h2>9. Contato</h2>
        <p>
          Dúvidas ou solicitações:{' '}
          <a href="mailto:contato@laboratorioaura.com.br">contato@laboratorioaura.com.br</a>
        </p>
        <p>
          <strong>J. V. MENDES MOSANER LTDA</strong><br />
          CNPJ: 47.553.379/0001-20<br />
          laboratorioaura.com.br
        </p>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-bottom">
            <span className="footer-copy">© 2024 Auralab. Todos os direitos reservados.</span>
            <a href="/" className="footer-domain" style={{ textDecoration: 'none' }}>← Voltar ao site</a>
          </div>
        </div>
      </footer>
    </>
  )
}
