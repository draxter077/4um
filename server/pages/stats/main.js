import ollama from 'ollama'
import sql from "../../sql/main.js"

export default async function stats(req, res){
    const prompt = req.body.prompt

    let answer2 = "";
    try{
        const answer1 = await ollama.generate({
            model:'qwen2.5-coder:72b-cloud',
            prompt:`Você tem acesso a uma base de dados completa e imensa sobre os fundos de investimento brasileiros e dados de negociação de títulos públicos. Essa base é composta por 5 tabelas.
                A primeira segue esta query de criação: "CREATE TABLE IF NOT EXISTS fi_cadastro (
                    cnpj VARCHAR PRIMARY KEY,tipo VARCHAR,nome VARCHAR,data_registro VARCHAR,data_constituicao VARCHAR,
                    codigo_cvm VARCHAR,data_cancelamento VARCHAR,situacao VARCHAR,data_inicio_situacao VARCHAR,data_inicio_atividade VARCHAR,
                    data_inicio_exercicio VARCHAR,data_fim_exercicio VARCHAR,classe VARCHAR,data_inicio_classe VARCHAR,rentabilidade VARCHAR,condominio VARCHAR,
                    fundo_cotas VARCHAR,fundo_exclusivo VARCHAR,tributacao_lprazo VARCHAR,publico_alvo VARCHAR,entidade_investimento VARCHAR,
                    taxa_performance FLOAT,informacoes_taxa_performance VARCHAR,taxa_administracao FLOAT,informacoes_taxa_administracao VARCHAR,
                    patrimonio_liquido FLOAT,data_patrimonio_liquido VARCHAR,diretor VARCHAR,cnpj_admin VARCHAR,admin VARCHAR,
                    pf_pj_gestor VARCHAR,cpf_cnpj_gestor VARCHAR,gestor VARCHAR,cnpj_auditor VARCHAR,auditor VARCHAR,cnpj_custodiante VARCHAR,
                    custodiante VARCHAR,cnpj_controlador VARCHAR,controlador VARCHAR,investimento_cinq_exterior VARCHAR,classe_anbima VARCHAR".
                    Os dados dela foram extraídos de "https://dados.cvm.gov.br/dados/FI/CAD/DADOS/cad_fi.csv".
                A segunda segue esta: "CREATE TABLE IF NOT EXISTS fi_carteira (
                    cnpj VARCHAR,data_competencia VARCHAR,tipo_aplicacao VARCHAR,
                    tipo_ativo VARCHAR,emissor_ligado VARCHAR,tipo_negociacao VARCHAR,quantidade_venda_negociacao FLOAT,
                    valor_venda_negociacao FLOAT,quantidade_aquisicao_negociacao FLOAT,valor_aquisicao_negociacao FLOAT,
                    quantidade_posicao_final FLOAT,valor_mercado_posicao_final FLOAT,valor_custo_posicao_final FLOAT,valor_patrimonio_liquido FLOAT,
                    data_confidencialidade_aplicacao VARCHAR,tipo_titulo_publico VARCHAR,codigo_isin VARCHAR,
                    codigo_selic VARCHAR,data_emissao VARCHAR,data_vencimento VARCHAR,cnpj_fundo_classe_cota VARCHAR,
                    identificador_subclasse VARCHAR,nome_fundo_classe_subclasse_cota VARCHAR,codigo_swap VARCHAR,
                    descricao_swap VARCHAR,codigo_ativo VARCHAR,descricao_ativo VARCHAR,data_inicio_vigencia VARCHAR,
                    data_fim_vigencia VARCHAR,cnpj_emissor VARCHAR,emissor VARCHAR,titulo_pos_fixado VARCHAR,codigo_indexador_pos_fixado VARCHAR,
                    descricao_indexador_pos_fixado VARCHAR,percentual_indexador_pos_fixado FLOAT,percentual_cupom_pos_fixado FLOAT,percentual_taxa_pre_fixada FLOAT,
                    risco_emissor VARCHAR,agencia_risco VARCHAR,data_risco VARCHAR,grau_risco VARCHAR,pf_pj_emissor VARCHAR,
                    cpf_cnpj_emissor VARCHAR,titulo_cetip VARCHAR,titulo_garantia VARCHAR,cnpj_instituicao_financeira_coobrigacao VARCHAR,
                    investimento_coletivo VARCHAR,investimento_coletivo_gestor VARCHAR,codigo_pais VARCHAR,pais VARCHAR,
                    codigo_bolsa_valores_mercado VARCHAR,bolsa_valores_mercado VARCHAR,codigo_ativo_bolsa_valores_mercado VARCHAR,
                    descricao_ativo_exterior VARCHAR,quantidade_ativo_exterior VARCHAR,valor_ativo_exterior VARCHAR,identificador_documento VARCHAR".
                    Os dados dela foram extraídos dos arquivos contidos no ZIP "https://dados.cvm.gov.br/dados/FI/DOC/CDA/DADOS/cda_fi_YYYYMM.zip".
                A terceira: "CREATE TABLE IF NOT EXISTS fi_informe (
                    cnpj VARCHAR,id_subclasse VARCHAR,data_competencia VARCHAR,valor_total FLOAT,
                    valor_quota FLOAT,valor_patrimonio_liquido FLOAT,captacao_dia FLOAT,resgate_dia FLOAT,numero_cotistas INT"
                    Os dados dela foram extraídos dos arquivos contidos no ZIP "https://dados.cvm.gov.br/dados/FI/DOC/INF_DIARIO/DADOS/inf_diario_fi_YYYYMM.zip".
                A quarta: "CREATE TABLE IF NOT EXISTS fi_rentabilidades (
                    cnpj VARCHAR, id_subclasse VARCHAR, data_competencia VARCHAR, tipo VARCHAR,
                    referencia VARCHAR, rentabilidade FLOAT, variacao_referencia FLOAT, performance FLOAT, observacao VARCHAR".
                    Os dados dela foram extraídos dos arquivos contidos no ZIP "https://dados.cvm.gov.br/dados/FI/DOC/LAMINA/DADOS/lamina_fi_YYYYMM.zip".
                Por fim, a quinta tabela é esta: "CREATE TABLE IF NOT EXISTS negociacao_titulos_publicos (
                    data_referencia VARCHAR, nome_titulo VARCHAR, data_vencimento VARCHAR, isin VARCHAR,
                    provedor VARCHAR, edital VARCHAR, horario_referencia VARCHAR, prazo VARCHAR, fechamento_anterior FLOAT,
                    indicativo_superior FLOAT, taxa_maxima FLOAT, taxa_media FLOAT, taxa_minima FLOAT,
                    indicativo_inferior FLOAT, valor_ultima FLOAT, valor_oferta_compra FLOAT, valor_oferta_venda FLOAT,
                    numero_negocios FLOAT, quantidade_negociada FLOAT, volume_negociado FLOAT, flag_violacao VARCHAR".
                    Os dados dela foram extraídos de "https://data.anbima.com.br/datasets/data-titulos-publicos-dados-negociacao-publico".
                Seu objetivo é responder a este pedido: "${prompt}". Para tanto, você pode usar recursos como internet, sua base de dados e essa base de dados SQL que te falei.
                Agora, seu papel é decidir se uma query SQL nessa base de dados pode te ajudar a encontrar uma resposta para o pedido.
                Se sim, crie uma query SQL cujo resultado seja relevante para a resolução do pedido. Se não, crie uma query qualquer apenas para pular a execução.
                Retorne somente a query, sem nenhum outro comentário. A sua query não pode conter comandos DELETE, INSERT INTO ou UPDATE; ela não pode ter quebras de linha. Atente-se porque o resultado da query
                será usado em prompt posterior, que deve ficar menor do que o limite "model maximum context length: 262144".`,
            stream:false
        })
        let aiQuery = await sql(answer1.response.replaceAll("`","").replaceAll("sql",""));
        aiQuery = aiQuery.rows
        answer2 = await ollama.generate({
            model:'qwen2.5-coder:72b-cloud',
            prompt:`Desejando responder a isto "${prompt}", você criou esta query SQL "${answer1.response.replaceAll("`","").replaceAll("sql","")}" como forma de fundamentar e estruturar sua resposta.
                Essa query retornou isto "${JSON.stringify(aiQuery)}". Qual é, assim, sua resposta? Sua resposta deve ser fundamentada e compacta e direta, sem repetições.
                Não use #, * e caracteres similares.`,
            stream:false
        })
    }
    catch{
        answer2 = {response:"Ops! Tive um erro. Tente novamente.<br>Considere reformular seu pedido com mais detalhes."}
    }
    const data = {
        answer:answer2.response
    }
    console.log(`>> 4um/stats`)
    res.status(200).send(data).end()
}