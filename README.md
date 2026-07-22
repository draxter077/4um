# Desafio do Programa de Estágio

Este projeto consiste em uma solução completa para automação de ingestão, armazenamento, disponibilização via API e visualização web dos dados de Fundos de Investimento da CVM e ANBIMA.

# REQUISITOS
Para rodar a aplicação do zero, o ambiente exige apenas a instalação do Node.js (versão 18 ou superior), do pgAdmin, do navegador web Firefox e do Ollama.

# PASSO A PASSO
O primeiro passo para a execução envolve abrir o pgAdmin, criar um novo banco de dados (`quatroum`) e anotar as credenciais de acesso local. Em seguida, na pasta do ETL, instale as dependências com `npm install`, altere seus credencias PG no sql.js e execute o comando `node main.js`. Este script criará automaticamente a estrutura de tabelas (`fi_cadastro`, `fi_informe` e `fi_carteira`) e fará a extração dos arquivos ZIP da CVM e o web scraping da ANBIMA, o tratamento e a inserção dos dados em lotes otimizados de forma transparente.

Para a camada de API, navegue até a pasta do backend, instale as dependências, altere suas credenciais e inicie o servidor rodando `node index.js`, disponibilizando os endpoints em `http://localhost:5001`. Como recomendação, uso o Ngrok para disponibilização total, como ele já está disponível em `https://ace-chimp-merry.ngrok-free.app/4um"`.

O frontend está hospedado em produção na Vercel e pode ser acessado pelo link publicado [`https://4um.ph.net.br`], mas também pode ser executado localmente abrindo o arquivo `index.html` diretamente no Firefox ou via servidor estático, garantindo que as chamadas da API apontem para a URL do seu backend.

# SUSTENTABILIDADE DO PIPELINE
Garantir a sustentabilidade e a confiabilidade de longo prazo deste pipeline de dados exige atenção constante.

Sobre atualização recorrente e orquestração, o processo é automatizado por meio de rotinas agendadas, utilizando comandos SQL idempotentes com `ON CONFLICT DO NOTHING` ou tabelas de staging para garantir que execuções repetidas não dupliquem registros nem sobrecarreguem o banco.

Sobre qualidade e integridade dos dados, a aplicação realiza a sanitização de caracteres especiais, o tratamento rigoroso de valores nulos ou ausentes, a validação referencial da tabela `fi_cadastro` antes da inserção dos históricos e o isolamento de exceções por lote via blocos `try/catch`, impedindo que um registro malformatado aborte o processamento dos demais milhares de itens.

Como em todo projeto de pipeline e web scraping, é necessária a avaliação rotineira do formato dos dados enviados pelo CVM e o layout da página web da ANBIMA, antecipando-se a alterações que podem inviabilizar o projeto. Após essas percepções, a atualização do código é o único passo aceitável.

Por fim, a arquitetura é totalmente desacoplada e pronta para a nuvem, permitindo containerizar o ambiente de ingestão via Docker, utilizar bancos PostgreSQL gerenciados, hospedar a API Express em instâncias cloud e manter o frontend na Vercel.