import { EmailTemplate } from '../emailService';

/**
 * Welcome email template for new waitlist subscribers
 * Uses the site's color scheme and styling
 */
export const welcomeEmailTemplate: EmailTemplate = {
  subject: 'Bem-vindo ao Curso de Programação Web Fullstack Tapajônico!',
  body: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bem-vindo ao Curso de Programação Web Fullstack Tapajônico</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          padding: 20px;
          color: #333333;
          margin: 0;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background-color: #ffffff;
          padding: 30px;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }
        h1 {
          color: #333333;
          margin-top: 0;
          font-size: 24px;
        }
        .gradient-text {
          background: linear-gradient(to right, #0066cc, #00b894);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline;
        }
        .highlight {
          background-color: rgba(0, 102, 204, 0.05);
          padding: 15px;
          border-radius: 8px;
          border-left: 4px solid #0066cc;
          margin: 20px 0;
        }
        a.button {
          display: inline-block;
          background-color: #0066cc;
          color: white !important;
          padding: 12px 24px;
          border-radius: 5px;
          text-decoration: none;
          margin-top: 20px;
          font-weight: bold;
          text-align: center;
        }
        a.button:hover {
          background-color: #004c99;
        }
        .social-links a {
          display: inline-block;
          margin-right: 10px;
          text-decoration: none;
          color: #0066cc;
        }
        .social-links a:hover {
          text-decoration: underline;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 8px;
        }
        p {
          margin: 10px 0;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e0e0e0;
          font-size: 14px;
          color: #666666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🎉 Bem-vindo, <span class="gradient-text">{name}</span>!</h1>
        <p>
          Obrigado por demonstrar interesse no nosso <strong>Curso de Programação Web Fullstack Tapajônico</strong>! É um prazer ter você com a gente.
        </p>
        <p>
          Agora você faz parte da nossa <strong>lista de espera</strong> e vai receber em primeira mão todas as novidades sobre:
        </p>
        <ul>
          <li>Abertura das inscrições</li>
          <li>Conteúdos e dicas exclusivas</li>
          <li>Materiais gratuitos</li>
          <li>Suporte e muito mais</li>
        </ul>
        
        <div class="highlight">
          <p>
            👉 <strong>Entre no nosso grupo do WhatsApp</strong> para receber atualizações direto no seu celular:
          </p>
          <p>
            <a href="https://chat.whatsapp.com/JHbzCKddAXPJOdLfmk874x" class="button">Entrar no grupo</a>
          </p>
        </div>
        
        <p>
          E aproveita para nos seguir nas redes sociais e ficar por dentro de tudo:
        </p>
        <div class="social-links">
          📸 <a href="https://www.instagram.com/cursoprogramacaostm/">@cursoprogramacaostm</a><br />
        </div>
        
        <p>
          Se tiver qualquer dúvida, é só responder este e-mail. Estamos por aqui! 😊
        </p>
        
        <div class="footer">
          <p>
            Um abraço,<br />
            <strong>Equipe Fullstack Tapajônico</strong>
          </p>
        </div>
      </div>
    </body>
    </html>
  `,
  name: 'welcome_template'
};