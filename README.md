# 🌾 Agriculture Data Dashboard (AgroAnalises)

Um painel de monitoramento agrícola Full Stack que integra dados climáticos em tempo real com indicadores de produtividade, focado em auxiliar a tomada de decisão no campo (como janelas de pulverização e motores de crescimento).

---

## 🚀 Demonstração
- **Frontend (Live):** [https://agricultura-data-dashboard.vercel.app/](https://agricultura-data-dashboard.vercel.app/)
- **Backend (API):** [https://agricultura-data-dashboard.onrender.com/api](https://agricultura-data-dashboard.onrender.com/api)

---

## 🛠️ Tecnologias Utilizadas

### Frontend
* **React + Next.js 14:** Estrutura robusta para interface de usuário.
* **TypeScript:** Garantia de tipagem e segurança no código.
* **Tailwind CSS:** Estilização moderna e responsiva.
* **Recharts:** Visualização de dados dinâmica (Gráficos de área e barras).
* **Lucide React:** Conjunto de ícones minimalistas.
* **Framer Motion:** Animações suaves de Fade-In.

### Backend
* **Python + FastAPI:** API de alta performance e rápida resposta.
* **SQLite:** Banco de dados relacional para armazenamento de produção.
* **OpenWeather API:** Integração para dados meteorológicos globais.
* **Uvicorn:** Servidor ASGI para rodar a aplicação.

---

## 🏗️ Arquitetura do Sistema

O projeto utiliza uma arquitetura desacoplada, permitindo que o Frontend e o Backend escalem de forma independente.

1.  **Consumo de Dados:** O Backend processa requisições, consulta a API do OpenWeather e gerencia o banco de dados SQLite.
2.  **Segurança e Comunicação:** Implementação de **CORS** para permitir a comunicação entre domínios e uso de **Variáveis de Ambiente** para proteção de chaves de API.
3.  **Geolocalização:** O sistema identifica a posição do usuário para entregar dados climáticos locais, com fallback automático para Araraquara-SP.



---

## 🔧 Configuração e Instalação

### Pré-requisitos
* Node.js (v18+)
* Python (3.9+)
* Chave de API do OpenWeather

### Instalação (Local)

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SeuUsuario/agricultura-data-dashboard.git](https://github.com/SeuUsuario/agricultura-data-dashboard.git)
    ```

2.  **Configure o Backend:**
    ```bash
    cd backend_python
    pip install -r requirements.txt
    python main.py
    ```

3.  **Configure o Frontend:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

---

## 🌐 Deploy

O projeto está configurado para **CI/CD** (Integração e Entrega Contínua):
* **Frontend:** Hospedado na **Vercel**, com deploy automático a cada push no branch `main`.
* **Backend:** Hospedado no **Render**, utilizando contêineres para o serviço FastAPI.

---

🚀 Futuras Implementações (Roadmap)
O AgroAnalises está em constante evolução. As próximas etapas de desenvolvimento incluem:

🔐 Autenticação e Perfis: Implementação de sistema de login para que produtores possam salvar as coordenadas de suas propriedades e personalizar seus alertas.

🚜 Gestão de Insumos: Página dedicada ao controle de estoque e aplicação de defensivos/fertilizantes, auxiliando no cálculo de custo por hectare.

📊 Big Data Agrícola: Integração com APIs de dados governamentais (como IBGE/CONAB) para exibir:

Ranking de produção nacional e por região.

Análise de safra por tipo de cultura (Soja, Milho, Cana, etc.).

Histórico de preços de commodities em tempo real.

📱 Aplicativo Mobile: Versão nativa para Android e iOS para acesso facilitado no campo, mesmo com baixa conectividade.

🤖 IA Preditiva: Uso de Machine Learning para prever riscos de pragas baseando-se no histórico climático da região.

## 👩‍💻 Autora
**Alexandra Almeida**
* Software Developer apaixonada por soluções Full Stack e tecnologia aplicada.
* [GitHub](https://github.com/Alexandra-Almeida-DV) | [LinkedIn](https://www.linkedin.com/in/alexandra-almeida-b74404180/)
