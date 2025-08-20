export const perguntas = {
  inicio: {
    enunciado: "Você é um(a) estudante escolhido(a) para uma missão sobre Inteligência Artificial. Como deseja começar?",
    alternativas: [
      { texto: "Pesquisar em livros e artigos.", proxima: "livros" },
      { texto: "Investigar notícias atuais.", proxima: "noticias" },
      { texto: "Conversar com especialistas.", proxima: "especialistas" }
    ]
  },

  // --- CAMINHO LIVROS ---
  livros: {
    enunciado: "Você encontra um livro antigo que fala sobre ética na IA. O que deseja fazer?",
    alternativas: [
      { texto: "Ler sobre ética.", proxima: "etica" },
      { texto: "Ler sobre programação da IA.", proxima: "programacao" },
      { texto: "Fechar o livro e procurar outro material.", proxima: "noticias" }
    ]
  },

  etica: {
    enunciado: "O livro fala sobre dilemas éticos. Qual tema mais te chama atenção?",
    alternativas: [
      { texto: "Responsabilidade dos programadores.", proxima: "final_etica1" },
      { texto: "Impacto da IA na sociedade.", proxima: "final_etica2" },
      { texto: "Privacidade e vigilância.", proxima: "final_etica3" }
    ]
  },

  programacao: {
    enunciado: "Você aprende como a IA é treinada. O que decide explorar?",
    alternativas: [
      { texto: "Banco de dados enviesados.", proxima: "final_prog1" },
      { texto: "Algoritmos de aprendizado.", proxima: "final_prog2" },
      { texto: "Uso militar da IA.", proxima: "final_prog3" }
    ]
  },

  // --- CAMINHO NOTÍCIAS ---
  noticias: {
    enunciado: "Nas notícias, você vê reportagens sobre IA. O que chama atenção?",
    alternativas: [
      { texto: "IA na saúde.", proxima: "saude" },
      { texto: "IA na educação.", proxima: "educacao" },
      { texto: "IA no trabalho.", proxima: "trabalho" }
    ]
  },

  saude: {
    enunciado: "Descobre que IA auxilia diagnósticos médicos. Qual conclusão?",
    alternativas: [
      { texto: "IA salva vidas.", proxima: "final_saude1" },
      { texto: "IA pode errar diagnósticos.", proxima: "final_saude2" },
      { texto: "IA substitui médicos.", proxima: "final_saude3" }
    ]
  },

  educacao: {
    enunciado: "Na educação, a IA personaliza ensino. Qual visão você adota?",
    alternativas: [
      { texto: "Grande avanço para alunos.", proxima: "final_edu1" },
      { texto: "Risco de substituir professores.", proxima: "final_edu2" },
      { texto: "Pode aumentar desigualdade.", proxima: "final_edu3" }
    ]
  },

  trabalho: {
    enunciado: "No trabalho, IA substitui e cria empregos. Como você reage?",
    alternativas: [
      { texto: "Inovação traz oportunidades.", proxima: "final_trab1" },
      { texto: "Desemprego aumenta.", proxima: "final_trab2" },
      { texto: "Empregos mudam radicalmente.", proxima: "final_trab3" }
    ]
  },

  // --- CAMINHO ESPECIALISTAS ---
  especialistas: {
    enunciado: "Um especialista te pergunta: o que mais te preocupa na IA?",
    alternativas: [
      { texto: "Fake news e manipulação.", proxima: "fakenews" },
      { texto: "Vigilância em massa.", proxima: "vigilancia" },
      { texto: "Controle humano sobre a IA.", proxima: "controle" }
    ]
  },

  fakenews: {
    enunciado: "Descobre que a IA já cria fake news perigosas. O que faz?",
    alternativas: [
      { texto: "Alertar autoridades.", proxima: "final_fake1" },
      { texto: "Criar campanhas de conscientização.", proxima: "final_fake2" },
      { texto: "Ignorar o problema.", proxima: "final_fake3" }
    ]
  },

  vigilancia: {
    enunciado: "Governos usam IA para vigiar cidadãos. Qual posição você toma?",
    alternativas: [
      { texto: "Aceitar pelo bem da segurança.", proxima: "final_vig1" },
      { texto: "Resistir e defender privacidade.", proxima: "final_vig2" },
      { texto: "Propor regulamentação equilibrada.", proxima: "final_vig3" }
    ]
  },

  controle: {
    enunciado: "Especialistas discutem se a IA deve ter limites rígidos. O que você acha?",
    alternativas: [
      { texto: "IA deve sempre obedecer humanos.", proxima: "final_cont1" },
      { texto: "IA pode ser independente.", proxima: "final_cont2" },
      { texto: "Equilíbrio entre autonomia e controle.", proxima: "final_cont3" }
    ]
  },

  // --- FINAIS (30 NO TOTAL) ---
  final_etica1: { enunciado: "Você percebeu que programadores têm grande responsabilidade sobre a IA. Sua missão termina com reflexão ética!", alternativas: [] },
  final_etica2: { enunciado: "Você entendeu que a IA pode transformar positivamente a sociedade, se usada com responsabilidade.", alternativas: [] },
  final_etica3: { enunciado: "Você alertou sobre riscos de vigilância e falta de privacidade.", alternativas: [] },

  final_prog1: { enunciado: "Dados enviesados levam a IA a ser injusta. Sua missão alerta sobre esse perigo!", alternativas: [] },
  final_prog2: { enunciado: "Você conclui que algoritmos podem evoluir de forma impressionante.", alternativas: [] },
  final_prog3: { enunciado: "Você descobriu o uso militar da IA e refletiu sobre os riscos de guerras automatizadas.", alternativas: [] },

  final_saude1: { enunciado: "A IA ajuda médicos a salvar milhares de vidas. Final positivo!", alternativas: [] },
  final_saude2: { enunciado: "Erros de IA em diagnósticos podem ser fatais. Final de alerta!", alternativas: [] },
  final_saude3: { enunciado: "Médicos perdem espaço para máquinas. Final sombrio.", alternativas: [] },

  final_edu1: { enunciado: "A IA transforma a educação em algo acessível e eficiente. Final brilhante!", alternativas: [] },
  final_edu2: { enunciado: "Professores são substituídos, gerando crise educacional. Final preocupante.", alternativas: [] },
  final_edu3: { enunciado: "A IA aumenta desigualdade entre escolas ricas e pobres. Final reflexivo.", alternativas: [] },

  final_trab1: { enunciado: "A inovação cria novos empregos incríveis. Final otimista!", alternativas: [] },
  final_trab2: { enunciado: "Milhões ficam desempregados. Final negativo.", alternativas: [] },
  final_trab3: { enunciado: "O mercado de trabalho se transforma completamente. Final neutro-reflexivo.", alternativas: [] },

  final_fake1: { enunciado: "Você conseguiu barrar fake news com políticas públicas. Final heróico!", alternativas: [] },
  final_fake2: { enunciado: "Sua campanha conscientiza milhões. Final inspirador!", alternativas: [] },
  final_fake3: { enunciado: "Ignorar causou caos social. Final trágico.", alternativas: [] },

  final_vig1: { enunciado: "A vigilância trouxe segurança, mas custou a liberdade. Final ambíguo.", alternativas: [] },
  final_vig2: { enunciado: "Você defendeu a privacidade e inspirou resistência global. Final libertador!", alternativas: [] },
  final_vig3: { enunciado: "Com regulamentação, você encontrou equilíbrio. Final equilibrado.", alternativas: [] },

  final_cont1: { enunciado: "A IA obedece sempre humanos. Final conservador.", alternativas: [] },
  final_cont2: { enunciado: "A IA se torna independente. Final de futuro incerto.", alternativas: [] },
  final_cont3: { enunciado: "Você defendeu equilíbrio entre controle e autonomia. Final sábio.", alternativas: [] }
};
