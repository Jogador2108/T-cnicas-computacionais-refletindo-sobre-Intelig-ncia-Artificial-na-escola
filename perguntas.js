export const perguntas = {
  inicio: {
    enunciado: "Você é um(a) estudante que recebeu uma missão especial sobre Inteligência Artificial. Qual será sua primeira escolha?",
    alternativas: [
      {
        texto: "Explorar a biblioteca em busca de informações.",
        proxima: "biblioteca"
      },
      {
        texto: "Conversar com colegas sobre IA.",
        proxima: "colegas"
      }
    ]
  },

  biblioteca: {
    enunciado: "Na biblioteca, você encontra um livro misterioso sobre IA. O que faz?",
    alternativas: [
      {
        texto: "Ler o livro atentamente.",
        proxima: "livro"
      },
      {
        texto: "Ignorar e procurar no computador.",
        proxima: "computador"
      }
    ]
  },

  colegas: {
    enunciado: "Seus colegas falam sobre os riscos e benefícios da IA. Qual tema você escolhe para aprofundar?",
    alternativas: [
      {
        texto: "Benefícios.",
        proxima: "beneficios"
      },
      {
        texto: "Riscos.",
        proxima: "riscos"
      }
    ]
  },

  livro: {
    enunciado: "O livro fala sobre ética na Inteligência Artificial. O que você aprende?",
    alternativas: [
      {
        texto: "Que a ética é essencial para o uso da IA.",
        proxima: "final_positivo"
      },
      {
        texto: "Que a IA não precisa de regras.",
        proxima: "final_negativo"
      }
    ]
  },

  computador: {
    enunciado: "No computador, você encontra notícias atuais sobre IA. Qual assunto chama mais atenção?",
    alternativas: [
      {
        texto: "IA na saúde.",
        proxima: "final_saude"
      },
      {
        texto: "IA na educação.",
        proxima: "final_educacao"
      }
    ]
  },

  beneficios: {
    enunciado: "Os colegas explicam como a IA pode ajudar em diversas áreas. Qual delas você acha mais importante?",
    alternativas: [
      {
        texto: "Saúde.",
        proxima: "final_saude"
      },
      {
        texto: "Educação.",
        proxima: "final_educacao"
      }
    ]
  },

  riscos: {
    enunciado: "Você descobre que a IA pode gerar problemas se mal utilizada. Qual risco você considera mais grave?",
    alternativas: [
      {
        texto: "Perda de empregos.",
        proxima: "final_empregos"
      },
      {
        texto: "Manipulação de informações.",
        proxima: "final_fake"
      }
    ]
  },

  final_positivo: {
    enunciado: "Você conclui que a IA pode transformar o mundo de forma ética e responsável. Parabéns pela missão cumprida!",
    alternativas: []
  },

  final_negativo: {
    enunciado: "Sem ética, a IA pode trazer grandes problemas. Sua missão termina em alerta vermelho!",
    alternativas: []
  },

  final_saude: {
    enunciado: "Você descobre que a IA já ajuda médicos a salvar vidas. Sua missão foi um sucesso!",
    alternativas: []
  },

  final_educacao: {
    enunciado: "Você vê como a IA pode personalizar o aprendizado e ajudar estudantes. Sua missão foi concluída!",
    alternativas: []
  },

  final_empregos: {
    enunciado: "A IA substitui muitas profissões. Você percebeu o impacto social e agora reflete sobre soluções.",
    alternativas: []
  },

  final_fake: {
    enunciado: "Com a manipulação de informações, a IA gera fake news perigosas. Você alerta a todos sobre o risco.",
    alternativas: []
  }
};
