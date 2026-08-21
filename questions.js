window.QUESTIONS = [
  {
    "id": 1,
    "level": 1,
    "skill": "Saída e sequência",
    "prompt": "Observe o programa. O que será exibido no console?",
    "code": "let pontos = 6;\npontos = pontos + 4;\nconsole.log(pontos);",
    "options": [
      "6",
      "10",
      "64",
      "pontos"
    ],
    "answer": 1,
    "explanation": "A variável começa com 6 e recebe mais 4, totalizando 10."
  },
  {
    "id": 2,
    "level": 1,
    "skill": "Tipos de dados",
    "prompt": "Qual alternativa representa corretamente o tipo do valor armazenado em aluno?",
    "code": "let aluno = \"Marina\";",
    "options": [
      "number",
      "boolean",
      "string",
      "undefined"
    ],
    "answer": 2,
    "explanation": "Textos entre aspas são valores do tipo string."
  },
  {
    "id": 3,
    "level": 1,
    "skill": "Operadores aritméticos",
    "prompt": "Respeitando a ordem das operações, qual valor será atribuído a resultado?",
    "code": "let resultado = 8 + 3 * 2;",
    "options": [
      "22",
      "16",
      "14",
      "11"
    ],
    "answer": 2,
    "explanation": "A multiplicação ocorre antes da soma: 3 × 2 = 6; 8 + 6 = 14."
  },
  {
    "id": 4,
    "level": 1,
    "skill": "Concatenação",
    "prompt": "O operador + também pode unir textos. Qual será a saída?",
    "code": "let turma = \"1A\";\nconsole.log(\"Turma \" + turma);",
    "options": [
      "Turma turma",
      "Turma 1A",
      "1A Turma",
      "Erro"
    ],
    "answer": 1,
    "explanation": "O texto é concatenado ao conteúdo da variável: 1A."
  },
  {
    "id": 5,
    "level": 1,
    "skill": "Atribuição",
    "prompt": "Depois da execução das três linhas, qual é o valor final de caixa?",
    "code": "let caixa = 20;\ncaixa = caixa - 7;\ncaixa = caixa + 2;",
    "options": [
      "11",
      "13",
      "15",
      "29"
    ],
    "answer": 2,
    "explanation": "20 − 7 = 13 e 13 + 2 = 15."
  },
  {
    "id": 6,
    "level": 1,
    "skill": "Resto da divisão",
    "prompt": "O operador % devolve o resto de uma divisão inteira. Qual será o resultado?",
    "code": "console.log(17 % 5);",
    "options": [
      "2",
      "3",
      "3,4",
      "12"
    ],
    "answer": 0,
    "explanation": "17 dividido por 5 deixa resto 2."
  },
  {
    "id": 7,
    "level": 1,
    "skill": "Booleanos",
    "prompt": "Qual valor será armazenado em verificacao?",
    "code": "let verificacao = 12 > 9;",
    "options": [
      "\"12 > 9\"",
      "9",
      "false",
      "true"
    ],
    "answer": 3,
    "explanation": "A comparação é verdadeira, portanto o resultado booleano é true."
  },
  {
    "id": 8,
    "level": 1,
    "skill": "Atualização de variável",
    "prompt": "Uma pontuação é atualizada com o operador +=. Qual será a saída?",
    "code": "let pontos = 5;\npontos += 3;\nconsole.log(pontos);",
    "options": [
      "3",
      "5",
      "8",
      "53"
    ],
    "answer": 2,
    "explanation": "pontos += 3 equivale a pontos = pontos + 3."
  },
  {
    "id": 9,
    "level": 1,
    "skill": "Conversão implícita",
    "prompt": "Considere que um dos valores está entre aspas. O que o programa exibe?",
    "code": "let a = \"4\";\nlet b = 2;\nconsole.log(a + b);",
    "options": [
      "6",
      "42",
      "8",
      "Erro"
    ],
    "answer": 1,
    "explanation": "Como a é string, o + concatena os valores e produz '42'."
  },
  {
    "id": 10,
    "level": 1,
    "skill": "Depuração",
    "prompt": "Um estudante queria criar uma variável chamada idade. Qual linha contém erro de sintaxe?",
    "options": [
      "let idade = 15;",
      "let idade;",
      "idade = 15;",
      "let idade 15;"
    ],
    "answer": 3,
    "explanation": "Na declaração com valor, é necessário usar o sinal de atribuição (=)."
  },
  {
    "id": 11,
    "level": 2,
    "skill": "Condicional simples",
    "prompt": "Qual mensagem será exibida?",
    "code": "let nota = 7;\nif (nota >= 6) {\n  console.log(\"Aprovado\");\n} else {\n  console.log(\"Recuperação\");\n}",
    "options": [
      "Aprovado",
      "Recuperação",
      "7",
      "Nada"
    ],
    "answer": 0,
    "explanation": "7 é maior ou igual a 6, então o bloco if é executado."
  },
  {
    "id": 12,
    "level": 2,
    "skill": "Operador lógico E",
    "prompt": "Para receber certificado, as duas condições precisam ser verdadeiras. Qual é a saída?",
    "code": "let nota = 85;\nlet presenca = 70;\nif (nota >= 80 && presenca >= 75) {\n  console.log(\"Certificado\");\n} else {\n  console.log(\"Pendente\");\n}",
    "options": [
      "Certificado",
      "Pendente",
      "true",
      "85"
    ],
    "answer": 1,
    "explanation": "A presença não atende ao critério. Com &&, ambas precisam ser verdadeiras."
  },
  {
    "id": 13,
    "level": 2,
    "skill": "Laço for",
    "prompt": "Quantas vezes a palavra TOFAS será exibida?",
    "code": "for (let i = 0; i < 4; i++) {\n  console.log(\"TOFAS\");\n}",
    "options": [
      "3",
      "4",
      "5",
      "Infinitas"
    ],
    "answer": 1,
    "explanation": "O laço executa para i = 0, 1, 2 e 3: quatro vezes."
  },
  {
    "id": 14,
    "level": 2,
    "skill": "Acumulador",
    "prompt": "Qual valor será mostrado ao final do laço?",
    "code": "let soma = 0;\nfor (let i = 1; i <= 3; i++) {\n  soma = soma + i;\n}\nconsole.log(soma);",
    "options": [
      "3",
      "5",
      "6",
      "7"
    ],
    "answer": 2,
    "explanation": "O acumulador recebe 1 + 2 + 3, resultando em 6."
  },
  {
    "id": 15,
    "level": 2,
    "skill": "Paridade",
    "prompt": "O programa classifica um número usando o resto da divisão. Qual é a saída?",
    "code": "let n = 18;\nif (n % 2 === 0) {\n  console.log(\"par\");\n} else {\n  console.log(\"ímpar\");\n}",
    "options": [
      "par",
      "ímpar",
      "0",
      "18"
    ],
    "answer": 0,
    "explanation": "18 dividido por 2 tem resto 0, logo é par."
  },
  {
    "id": 16,
    "level": 2,
    "skill": "Condições encadeadas",
    "prompt": "Qual classificação o programa apresenta?",
    "code": "let pontos = 72;\nif (pontos >= 90) {\n  console.log(\"ouro\");\n} else if (pontos >= 70) {\n  console.log(\"prata\");\n} else {\n  console.log(\"bronze\");\n}",
    "options": [
      "ouro",
      "prata",
      "bronze",
      "ouro e prata"
    ],
    "answer": 1,
    "explanation": "72 não alcança 90, mas alcança 70; apenas 'prata' é executado."
  },
  {
    "id": 17,
    "level": 2,
    "skill": "Laço while",
    "prompt": "Qual sequência é exibida?",
    "code": "let x = 3;\nwhile (x > 0) {\n  console.log(x);\n  x--;\n}",
    "options": [
      "0, 1, 2",
      "1, 2, 3",
      "3, 2, 1",
      "3, 2, 1, 0"
    ],
    "answer": 2,
    "explanation": "Quando x chega a 0, a condição é falsa e o laço termina."
  },
  {
    "id": 18,
    "level": 2,
    "skill": "Operador OU",
    "prompt": "A entrada é permitida se pelo menos uma condição for verdadeira. Qual é a saída?",
    "code": "let professor = false;\nlet estudante = true;\nif (professor || estudante) {\n  console.log(\"Entrada permitida\");\n} else {\n  console.log(\"Entrada negada\");\n}",
    "options": [
      "Entrada permitida",
      "Entrada negada",
      "false",
      "Erro"
    ],
    "answer": 0,
    "explanation": "Com ||, basta uma condição verdadeira. estudante vale true."
  },
  {
    "id": 19,
    "level": 2,
    "skill": "Contagem com passo",
    "prompt": "Quais valores serão exibidos?",
    "code": "for (let i = 2; i <= 8; i += 2) {\n  console.log(i);\n}",
    "options": [
      "2, 3, 4, 5, 6, 7, 8",
      "2, 4, 6, 8",
      "0, 2, 4, 6, 8",
      "2, 4, 6"
    ],
    "answer": 1,
    "explanation": "O contador começa em 2 e aumenta de 2 em 2 até 8."
  },
  {
    "id": 20,
    "level": 2,
    "skill": "Depuração de laços",
    "prompt": "O programador queria que o laço terminasse. Qual alteração corrige o problema?",
    "code": "let contador = 1;\nwhile (contador <= 5) {\n  console.log(contador);\n}",
    "options": [
      "Trocar while por if",
      "Adicionar contador++ dentro do laço",
      "Retirar console.log",
      "Trocar 5 por 1"
    ],
    "answer": 1,
    "explanation": "Sem atualizar contador, a condição permanece verdadeira e o laço é infinito."
  },
  {
    "id": 21,
    "level": 3,
    "skill": "Funções",
    "prompt": "Qual valor é exibido após a chamada da função?",
    "code": "function dobro(valor) {\n  return valor * 2;\n}\nconsole.log(dobro(7));",
    "options": [
      "7",
      "9",
      "14",
      "77"
    ],
    "answer": 2,
    "explanation": "A função recebe 7 e devolve 7 × 2 = 14."
  },
  {
    "id": 22,
    "level": 3,
    "skill": "Vetores e índices",
    "prompt": "Em JavaScript, os índices começam em zero. Qual item será mostrado?",
    "code": "let cores = [\"azul\", \"verde\", \"amarelo\"];\nconsole.log(cores[1]);",
    "options": [
      "azul",
      "verde",
      "amarelo",
      "1"
    ],
    "answer": 1,
    "explanation": "O índice 0 é azul e o índice 1 é verde."
  },
  {
    "id": 23,
    "level": 3,
    "skill": "Tamanho de vetor",
    "prompt": "Depois das operações, qual será o valor de lista.length?",
    "code": "let lista = [3, 6];\nlista.push(9);\nlista.push(12);\nconsole.log(lista.length);",
    "options": [
      "2",
      "3",
      "4",
      "12"
    ],
    "answer": 2,
    "explanation": "Dois elementos foram adicionados aos dois existentes, totalizando quatro."
  },
  {
    "id": 24,
    "level": 3,
    "skill": "Percurso de vetor",
    "prompt": "Qual será o valor de total?",
    "code": "let valores = [2, 4, 6];\nlet total = 0;\nfor (let i = 0; i < valores.length; i++) {\n  total += valores[i];\n}\nconsole.log(total);",
    "options": [
      "6",
      "10",
      "12",
      "24"
    ],
    "answer": 2,
    "explanation": "O laço soma 2 + 4 + 6, resultando em 12."
  },
  {
    "id": 25,
    "level": 3,
    "skill": "Escopo e parâmetros",
    "prompt": "Qual mensagem será retornada pela função?",
    "code": "function faixa(idade) {\n  if (idade >= 18) return \"adulto\";\n  if (idade >= 12) return \"adolescente\";\n  return \"criança\";\n}\nconsole.log(faixa(15));",
    "options": [
      "adulto",
      "adolescente",
      "criança",
      "15"
    ],
    "answer": 1,
    "explanation": "15 não atende à primeira condição, mas atende a idade >= 12."
  },
  {
    "id": 26,
    "level": 3,
    "skill": "Laços aninhados",
    "prompt": "Quantas vezes o símbolo * será exibido?",
    "code": "for (let linha = 1; linha <= 2; linha++) {\n  for (let coluna = 1; coluna <= 3; coluna++) {\n    console.log(\"*\");\n  }\n}",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "answer": 3,
    "explanation": "O laço externo executa 2 vezes e o interno 3 vezes: 2 × 3 = 6."
  },
  {
    "id": 27,
    "level": 3,
    "skill": "Busca em vetor",
    "prompt": "Qual valor será exibido?",
    "code": "let numeros = [5, 12, 7, 20];\nlet maiores = 0;\nfor (let n of numeros) {\n  if (n > 10) maiores++;\n}\nconsole.log(maiores);",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Somente 12 e 20 são maiores que 10, então o contador vale 2."
  },
  {
    "id": 28,
    "level": 3,
    "skill": "Transformação de dados",
    "prompt": "Qual será o conteúdo de saida?",
    "code": "let entrada = [1, 2, 3];\nlet saida = [];\nfor (let n of entrada) {\n  saida.push(n * n);\n}\nconsole.log(saida);",
    "options": [
      "[1, 2, 3]",
      "[2, 4, 6]",
      "[1, 4, 9]",
      "[1, 8, 27]"
    ],
    "answer": 2,
    "explanation": "Cada número é multiplicado por ele mesmo: 1², 2² e 3²."
  },
  {
    "id": 29,
    "level": 3,
    "skill": "Algoritmo combinado",
    "prompt": "O programa calcula uma média e toma uma decisão. Qual será a saída?",
    "code": "let notas = [6, 8, 7];\nlet soma = 0;\nfor (let nota of notas) soma += nota;\nlet media = soma / notas.length;\nconsole.log(media >= 7 ? \"atingiu\" : \"não atingiu\");",
    "options": [
      "atingiu",
      "não atingiu",
      "21",
      "6"
    ],
    "answer": 0,
    "explanation": "A média é (6 + 8 + 7) ÷ 3 = 7, portanto atingiu o critério."
  },
  {
    "id": 30,
    "level": 3,
    "skill": "Depuração de função",
    "prompt": "A função deveria devolver a soma de dois números, mas o resultado é undefined. Qual correção é necessária?",
    "code": "function somar(a, b) {\n  a + b;\n}\nlet resultado = somar(4, 5);",
    "options": [
      "Substituir function por let",
      "Adicionar return antes de a + b",
      "Retirar os parâmetros",
      "Trocar + por ==="
    ],
    "answer": 1,
    "explanation": "Uma função precisa usar return para devolver o resultado da expressão."
  }
];
