export const metadata = {
  title: 'Política de Reembolso — Auralab',
  description:
    'Política de Reembolso do aplicativo Auralab. Saiba como solicitar reembolso de compras e assinaturas.',
}

export default function RefundPolicy() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar-logo">auralab</a>
        <div className="navbar-right">
          <a href="/" className="navbar-link">← Voltar ao site</a>
        </div>
      </nav>

      <main className="privacy-page">
        <h1>Política de Reembolso</h1>
        <p className="meta">
          Última atualização: junho de 2024 &nbsp;·&nbsp; Versão 1.0<br />
          J. V. MENDES MOSANER LTDA — CNPJ 47.553.379/0001-20
        </p>

        <p>
          Esta Política de Reembolso descreve as condições sob as quais o <strong>Auralab</strong>
          — desenvolvido pela <strong>J. V. MENDES MOSANER LTDA</strong>, CNPJ 47.553.379/0001-20
          — processa solicitações de reembolso de compras e assinaturas realizadas por meio
          do aplicativo para iOS.
        </p>

        <h2>1. Processamento de pagamentos pela Apple</h2>
        <p>
          Todas as compras realizadas no Auralab — incluindo assinaturas premium, compras
          avulsas e quaisquer futuros itens pagos — são processadas exclusivamente pela
          <strong> Apple App Store</strong>. Isso significa que:
        </p>
        <ul>
          <li>O Auralab <strong>não armazena</strong> dados do seu cartão de crédito ou forma de pagamento;</li>
          <li>As transações financeiras são gerenciadas integralmente pela Apple;</li>
          <li>A fatura de qualquer compra aparecerá como <strong>"Apple"</strong> no extrato do seu cartão ou banco;</li>
          <li>Reembolsos são, em regra, processados diretamente pela Apple ao método de pagamento original.</li>
        </ul>

        <h2>2. Como solicitar reembolso pela Apple</h2>
        <p>
          A maneira mais rápida e direta de solicitar reembolso é através dos canais oficiais
          da Apple:
        </p>

        <h2>2.1 Pelo site da Apple (recomendado)</h2>
        <ul>
          <li>Acesse <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>;</li>
          <li>Entre com seu ID Apple;</li>
          <li>Localize a compra do Auralab na lista de transações;</li>
          <li>Selecione <strong>"Solicitar reembolso"</strong> e escolha o motivo;</li>
          <li>Aguarde a análise da Apple (normalmente 1 a 5 dias úteis).</li>
        </ul>

        <h2>2.2 Pelo iPhone</h2>
        <ul>
          <li>Abra o app <strong>App Store</strong>;</li>
          <li>Toque no seu foto de perfil (canto superior direito);</li>
          <li>Toque em <strong>"Adquiridos"</strong> → localize o Auralab;</li>
          <li>Role para baixo e toque em <strong>"Denunciar um problema"</strong>;</li>
          <li>Selecione o motivo e envie a solicitação.</li>
        </ul>

        <h2>2.3 Pelo iTunes/Finder no Mac</h2>
        <ul>
          <li>Abra o <strong>Finder</strong> e clique no seu nome de usuário;</li>
          <li>Clique em <strong>"Ver informações da Conta"</strong>;</li>
          <li>Role até <strong>"Histórico de Compras"</strong> e clique em <strong>"Ver tudo"</strong>;</li>
          <li>Ao lado da compra, clique em <strong>"Denunciar um problema"</strong>.</li>
        </ul>

        <h2>3. Prazo para solicitação</h2>
        <p>
          A Apple geralmente aceita solicitações de reembolso em até <strong>90 dias</strong>
          após a data da compra. Solicitações fora desse prazo estão sujeitas à análise
          discricionária da Apple e podem ser indeferidas.
        </p>
        <p>
          Recomendamos solicitar o reembolso o quanto antes após identificar qualquer
          problema com a compra.
        </p>

        <h2>4. Cancelamento de assinaturas</h2>
        <p>
          Para evitar a cobrança do próximo ciclo de uma assinatura Auralab, o cancelamento
          deve ser realizado com pelo menos <strong>24 horas de antecedência</strong> do
          término do período vigente. Para cancelar:
        </p>
        <ul>
          <li>Acesse <strong>Configurações do iPhone → [seu nome] → Assinaturas</strong>;</li>
          <li>Localize <strong>Auralab</strong> na lista;</li>
          <li>Toque em <strong>"Cancelar Assinatura"</strong> e confirme.</li>
        </ul>
        <p>
          Após o cancelamento, você continuará tendo acesso às funcionalidades premium
          até o fim do período já pago. O cancelamento não gera reembolso automático
          do período em curso — para reembolso, siga as instruções da Seção 2.
        </p>

        <h2>5. Política de reembolso do Auralab</h2>
        <p>
          Embora o processamento de pagamentos seja responsabilidade da Apple, o Auralab
          adota a seguinte postura em relação a reembolsos:
        </p>

        <h2>5.1 Reembolso garantido</h2>
        <p>Apoiamos ativamente o reembolso nos seguintes casos:</p>
        <ul>
          <li><strong>Cobrança duplicada</strong> pelo mesmo período ou item;</li>
          <li><strong>Acesso não funcionando</strong> após pagamento confirmado (funcionalidade premium indisponível);</li>
          <li><strong>Compra não autorizada</strong> por menores ou terceiros sem consentimento;</li>
          <li><strong>Falha técnica grave</strong> que impeça o uso do serviço por período superior a 72 horas consecutivas.</li>
        </ul>

        <h2>5.2 Reembolso a critério da Apple</h2>
        <p>Nos demais casos, a decisão de reembolso é da Apple, incluindo:</p>
        <ul>
          <li>Insatisfação com o app após uso regular;</li>
          <li>Esquecimento de cancelamento antes da renovação;</li>
          <li>Compra por engano (após período de avaliação gratuito, se disponível);</li>
          <li>Mudança de ideia após a compra.</li>
        </ul>

        <h2>6. Período de avaliação gratuita</h2>
        <p>
          Quando o Auralab oferecer períodos de avaliação gratuita (trial), você não será
          cobrado durante esse período. A cobrança da assinatura só ocorre após o término
          do trial, caso não haja cancelamento prévio. Certifique-se de cancelar com pelo
          menos <strong>24 horas de antecedência</strong> ao fim do trial para não ser cobrado.
        </p>

        <h2>7. Suporte do Auralab para casos de reembolso</h2>
        <p>
          Se você tiver dificuldades em obter reembolso diretamente pela Apple ou se
          identificar uma cobrança indevida, entre em contato conosco. Faremos o possível
          para intermediar a situação junto à Apple:
        </p>
        <p>
          <strong>E-mail:</strong>{' '}
          <a href="mailto:contato@laboratorioaura.com.br">contato@laboratorioaura.com.br</a><br />
          <strong>Assunto:</strong> [REEMBOLSO] + descrição do problema<br />
          <strong>Prazo de resposta:</strong> até 3 dias úteis
        </p>
        <p>
          Inclua na mensagem: e-mail cadastrado no Auralab, data aproximada da compra e
          descrição do problema.
        </p>

        <h2>8. Direitos do consumidor</h2>
        <p>
          Esta política não prejudica os direitos garantidos pelo{' '}
          <strong>Código de Defesa do Consumidor (Lei nº 8.078/1990)</strong>. Em particular,
          compras realizadas exclusivamente pela internet podem ter direito de arrependimento
          de <strong>7 dias corridos</strong> a partir da data da compra, conforme o Art. 49 do CDC.
        </p>
        <p>
          Para exercer o direito de arrependimento, entre em contato pelo e-mail acima
          dentro do prazo de 7 dias.
        </p>

        <h2>9. Aura Points e itens virtuais</h2>
        <p>
          Os <strong>Aura Points</strong> são moeda virtual do Auralab sem valor monetário.
          Itens, conquistas e cosméticos do Auraman obtidos por meio de Aura Points ou
          progressão no app <strong>não são reembolsáveis</strong> em dinheiro, pois não
          representam compras financeiras.
        </p>
        <p>
          Em caso de encerramento do app ou da conta, Aura Points acumulados não serão
          convertidos em dinheiro ou crédito.
        </p>

        <h2>10. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta Política de Reembolso periodicamente. Alterações relevantes
          serão comunicadas no app ou por e-mail com antecedência razoável.
        </p>

        <h2>11. Contato</h2>
        <p>
          <strong>J. V. MENDES MOSANER LTDA</strong><br />
          CNPJ: 47.553.379/0001-20<br />
          E-mail: <a href="mailto:contato@laboratorioaura.com.br">contato@laboratorioaura.com.br</a><br />
          Site: laboratorioaura.com.br
        </p>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-bottom">
            <span className="footer-copy">© 2024 Auralab. Todos os direitos reservados.</span>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="/privacidade" className="footer-domain" style={{ textDecoration: 'none' }}>Privacidade</a>
              <a href="/termos" className="footer-domain" style={{ textDecoration: 'none' }}>Termos</a>
              <a href="/" className="footer-domain" style={{ textDecoration: 'none' }}>← Voltar</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
