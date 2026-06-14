---
order: 5
title: "Jornadas e Service Blueprint"
phase: "Definir → Desenvolver"
summary: "Customer journey map e service blueprint conectados, com a linha de visibilidade revelando pontos de falha."
---

**Duração sugerida:** 1h30 (ou 2h, se possível)
**Pré-requisitos:** Aulas 1 a 4
**Fase no Double Diamond:** Definir → Desenvolver

## Objetivos de aprendizagem

Ao final desta aula, o participante será capaz de:

- Diferenciar um Customer Journey Map de um Service Blueprint
- Construir uma jornada do cliente baseada em evidências
- Identificar as camadas (*lanes*) do blueprint e a linha de visibilidade
- Conectar jornada e blueprint para revelar pontos de falha

## 1. Dois mapas complementares

O autor **James Kalbach**, no livro *Mapping Experiences*, agrupa journey maps, service blueprints e mapas de experiência sob a ideia de **alinhamento (alignment diagrams)**: artefatos que colocam, lado a lado, a experiência das pessoas e o que a organização faz para sustentá-la. A diferença entre as duas ferramentas desta aula está no foco:

| | Customer Journey Map | Service Blueprint |
|---|---|---|
| **Foco** | A experiência vivida pelo cliente | A experiência *mais* a operação que a sustenta |
| **Olhar** | "De fora para dentro" (o cliente) | "Dos dois lados" (cliente + bastidores) |
| **Mostra emoções?** | Sim, é o centro dele | Pode mostrar, mas o foco são processos |
| **Quando usar** | Para entender e comunicar a experiência | Para diagnosticar e desenhar a operação |

Na prática, eles se complementam: a jornada mostra **o quê** o cliente vive; o blueprint mostra **como** a organização entrega isso.

## 2. Customer Journey Map

Um journey map representa a experiência do cliente como uma **sequência de etapas no tempo** (o princípio **sequencial** da Aula 1). Para cada etapa, ele costuma registrar:

- **Ações** — o que o cliente faz;
- **Touchpoints** — onde ele interage com o serviço;
- **Pensamentos** — o que passa pela cabeça dele;
- **Emoções** — a "curva de humor" ao longo da jornada;
- **Dores e oportunidades** — onde há fricção e onde há espaço para melhorar.

Use os insights e a persona da Aula 3 como base: uma jornada sem pesquisa por trás é apenas a suposição da equipe sobre como acham que o cliente se comporta.

## 3. A origem do Service Blueprint

O **Service Blueprint** foi descrito por [[People/Lynn Shostack]] no artigo da Harvard Business Review de 1984, *["Designing Services That Deliver"](https://hbr.org/1984/01/designing-services-that-deliver)*. A ideia central era poderosa: assim como produtos físicos têm plantas de fabricação, serviços também poderiam — e deveriam — ser explicitamente desenhados, em vez de simplesmente "acontecerem".

> "Um blueprint é mais preciso do que definições verbais e menos sujeito a má interpretação. Ele ilustra o princípio de W. Edwards Deming de que os trabalhadores nunca devem ser culpados por falhas em um processo. O desenho do processo é responsabilidade da gestão." — Lynn Shostack (tradução)
>
> "Um service blueprint permite que uma empresa teste suas premissas no papel e resolva os problemas de forma completa."

Essa última frase é decisiva: o blueprint permite encontrar problemas **antes** que cheguem ao cliente. No papel, corrigir um processo é muito mais barato do que depois de implementado.

## 4. Anatomia de um Blueprint

Um blueprint clássico se organiza em **lanes horizontais**, ao longo de um eixo de tempo (esquerda → direita = início → fim do serviço):

1. **Evidências físicas** — objetos tangíveis em cada etapa (recibo, app, placa, uniforme, e-mail);
2. **Ações do cliente** — o que o cliente faz, passo a passo (vem direto do journey map);
3. **— Linha de interação —** — onde cliente e serviço se tocam;
4. **Ações de linha de frente (*frontstage*)** — o que funcionários visíveis ao cliente fazem;
5. **— Linha de visibilidade —** — a fronteira entre o que o cliente vê e o que não vê;
6. **Ações de bastidor (*backstage*)** — o que funcionários fazem fora da vista do cliente;
7. **— Linha de interação interna —**;
8. **Processos de suporte** — sistemas, tecnologia, fornecedores e políticas que viabilizam todo o resto.

A **linha de visibilidade** é o elemento mais importante a entender de primeira: tudo abaixo dela é invisível para o cliente, mas afeta diretamente a qualidade do que ele vê acima. Muitos problemas de experiência nascem em processos abaixo da linha que ninguém jamais desenhou de forma explícita — e isso retoma o **modelo do iceberg** da Aula 2: o que o cliente vê (evento) é só a ponta de uma estrutura submersa.

## Atividade prática (50 min)

**Construa uma jornada e um blueprint conectados** para um serviço de poucos passos (ex.: pedir um café, fazer check-in em um voo, devolver um produto, marcar uma consulta online).

1. **Jornada (parte de cima):** liste **5 a 8 etapas** no eixo do tempo. Para cada uma, anote a ação do cliente, o touchpoint e uma emoção (😀 / 😐 / 😟).
2. **Blueprint (parte de baixo):** sob cada etapa, preencha:
   - o que a **linha de frente** faz para apoiá-la;
   - quais **processos de suporte** (sistemas, estoque, políticas) são necessários.
3. Trace a **linha de visibilidade** separando o que o cliente vê do que não vê.
4. Marque com ⚠️ as etapas em que algo pode dar errado (pontos de falha).
5. Para um ponto de falha, escreva uma frase sobre **de onde vem o problema** — em geral estará em uma lane abaixo da linha de visibilidade.

**Discussão em grupo:** algum ponto de falha tem origem em um processo que o cliente nunca veria? Isso ajuda a explicar por que, às vezes, "a pessoa errada" recebe a reclamação (o atendente, quando o problema é do sistema ou da política)?

## Para casa / leitura complementar

- [[Tools/Service Blueprint]] (nota original do curso)
- *Mapping Experiences* — James Kalbach
- *Orchestrating Experiences* — Chris Risdon, Patrick Quattlebaum (ver [[Recommended books]])
- [Service Design Tools — Service Blueprint](https://servicedesigntools.org/tools/service-blueprint)
- Artigo original: [Designing Services That Deliver — Lynn Shostack, HBR 1984](https://hbr.org/1984/01/designing-services-that-deliver)

---

Aula anterior: [Stakeholders e Ecossistema de Valor](04-mapeamento-de-stakeholders.md) · Próxima aula: [Prototipagem, Metáforas e Visão](06-jornadas-e-metaforas.md)
