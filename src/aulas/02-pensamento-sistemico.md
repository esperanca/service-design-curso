---
order: 2
title: "Pensamento Sistêmico"
phase: "Descobrir"
summary: "Sistemas, feedback loops, o modelo do iceberg, pontos de alavancagem (Meadows) e o framework Cynefin."
---

**Duração sugerida:** 1h30
**Pré-requisitos:** Aula 1
**Fase no Double Diamond:** Descobrir

## Objetivos de aprendizagem

Ao final desta aula, o participante será capaz de:

- Explicar o que é um sistema e por que serviços são sistemas
- Reconhecer feedback loops (de reforço e de equilíbrio)
- Usar o modelo do iceberg para enxergar abaixo dos eventos
- Identificar pontos de alavancagem (*leverage points*) para intervir
- Usar o framework Cynefin para classificar um problema

## 1. Por que pensamento sistêmico em Service Design?

Na Aula 1 vimos que um serviço é composto por múltiplos atores, processos e touchpoints interligados. Quando mexemos em uma parte do serviço, isso quase sempre afeta outras — às vezes de forma inesperada. **Pensamento sistêmico** é a habilidade de ver essas conexões antes de agir. Ele se conecta diretamente ao princípio **holístico** da Aula 1.

[[People/Donella Meadows]], no livro *Thinking in Systems: A Primer*, define um sistema como um conjunto de elementos interconectados, organizados de forma a produzir um padrão de comportamento ao longo do tempo. Os três componentes básicos são:

- **Elementos** — as "peças" do sistema (pessoas, equipamentos, regras);
- **Conexões** — como as peças se relacionam e influenciam umas às outras;
- **Propósito ou função** — o que o sistema realmente faz (que pode ser diferente do que ele *diz* fazer).

> "Viver com sucesso em um mundo de sistemas exige de nós mais do que a capacidade de calcular. Exige nossa humanidade plena — nossa racionalidade, nossa capacidade de separar o verdadeiro do falso, nossa intuição, nossa compaixão, nossa visão e nossa moralidade." — Donella Meadows (tradução)

Outro autor de referência é **Peter Senge**, que em *The Fifth Discipline* (A Quinta Disciplina) popularizou o pensamento sistêmico no mundo das organizações. Para Senge, a maior dificuldade não é técnica: é que tendemos a culpar pessoas ("o atendente foi ruim") quando o problema está na **estrutura do sistema** que molda o comportamento dessas pessoas.

## 2. O modelo do iceberg: enxergar abaixo da superfície

Uma ferramenta clássica do pensamento sistêmico é o **modelo do iceberg**, que organiza a realidade em quatro níveis de profundidade. Quanto mais fundo agimos, maior o impacto duradouro:

| Nível | Pergunta | Exemplo num serviço |
|---|---|---|
| **Eventos** (o que vemos) | O que aconteceu? | "Um cliente reclamou do atraso hoje" |
| **Padrões** (tendências) | Isso vem acontecendo? | "Atrasos sobem toda sexta à noite" |
| **Estruturas** (o que causa os padrões) | O que sustenta isso? | "A escala de equipe não considera o pico de sexta" |
| **Modelos mentais** (crenças) | O que fazemos acreditar nisso? | "Achamos que cliente de sexta não se importa com horário" |

A maioria das organizações reage apenas no nível dos **eventos** (apagar incêndios). Service designers buscam as **estruturas** e os **modelos mentais**, porque é ali que a mudança é real e sustentável.

## 3. Feedback loops

Um conceito central de Meadows é o **feedback loop** (laço de retroalimentação) — quando o resultado de uma ação volta a influenciar a própria ação:

- **Loop de reforço** — quanto mais de A, mais de B, que gera mais de A; um ciclo que se acelera (ex.: quanto mais reclamações sem resposta, mais clientes insatisfeitos compartilham isso, gerando mais reclamações);
- **Loop de equilíbrio** — o sistema busca um equilíbrio, corrigindo desvios (ex.: uma fila que cresce aciona a abertura de mais caixas, que reduz a fila).

Identificar esses loops ajuda a entender por que certos problemas "voltam sempre" — em geral porque ninguém tratou o loop que os alimenta, apenas o sintoma pontual.

## 4. Pontos de alavancagem (leverage points)

Talvez a contribuição mais valiosa de Meadows para quem desenha serviços seja a ideia de **pontos de alavancagem**: lugares dentro de um sistema onde uma pequena mudança pode produzir um grande efeito. Ela listou doze, dos menos para os mais poderosos. Para nosso nível introdutório, basta reter a hierarquia geral:

- **Alavancas fracas (mas fáceis):** mexer em números e parâmetros — preços, tamanhos de buffer, metas de tempo. Mudam pouco a estrutura.
- **Alavancas médias:** mudar a estrutura de fluxos de informação e as **regras** do sistema (quem tem acesso a qual informação, quais incentivos existem). Frequentemente, dar a informação certa à pessoa certa muda tudo.
- **Alavancas fortes (mas difíceis):** mudar os **objetivos** do sistema e, no topo, os **paradigmas/modelos mentais** que sustentam esses objetivos.

A lição prática: muita energia se gasta nas alavancas fracas (ajustar um número) quando o ganho real estaria em mudar uma regra de negócio, um fluxo de informação ou uma crença organizacional.

## 5. Cynefin: que tipo de problema é esse?

[Dave Snowden](https://en.wikipedia.org/wiki/Cynefin_framework) criou o **Cynefin** (palavra galesa que remete a "habitat") para ajudar a identificar que tipo de contexto enfrentamos — e, portanto, que abordagem usar:

| Domínio | Características | Abordagem |
|---|---|---|
| **Claro** | Causa e efeito óbvios, soluções conhecidas | Aplicar boas práticas / checklists |
| **Complicado** | Causa e efeito existem, mas exigem expertise | Analisar e aplicar conhecimento especializado |
| **Complexo** | Causa e efeito só são visíveis em retrospecto | Experimentar, sentir e responder |
| **Caótico** | Sem relação causa-efeito perceptível; crise | Agir para estabilizar, depois sentir e responder |

**Por que isso importa:** muitos problemas de serviço são tratados como "complicados" (basta um especialista resolver) quando, na verdade, são "complexos" (envolvem comportamento humano e contextos variáveis). Isso explica por que abordagens baseadas em experimentação e prototipagem funcionam melhor do que planejamento totalmente antecipado — e por que o Double Diamond é iterativo.

## 6. Seis conceitos fundamentais

[Leyla Acaroglu](https://medium.com/disruptive-design/tools-for-systems-thinkers-the-6-fundamental-concepts-of-systems-thinking-379cdac3dc6a) resume o pensamento sistêmico em seis conceitos: **interconectividade, síntese, emergência, feedback loops, causalidade e mapeamento de sistemas**. Os dois últimos viram a atividade desta aula.

## Atividade prática (30-40 min)

**Mapeie um sistema simples** relacionado ao serviço escolhido na Aula 1 (ou um problema dele, ex.: "clientes desistem da compra no checkout").

1. No centro do quadro, escreva o **comportamento recorrente** que quer entender.
2. Ao redor, liste os **fatores que o influenciam** — pessoas, processos, políticas, tecnologia, incentivos.
3. Desenhe **setas** conectando os fatores. Pergunte: "o que causa o quê?" e "esse efeito volta a influenciar a causa?".
4. Identifique pelo menos **um feedback loop** (de reforço ou de equilíbrio).
5. Aplique o **modelo do iceberg**: qual é o evento, o padrão, a estrutura e o modelo mental por trás do problema?
6. Aponte **um ponto de alavancagem**: onde uma pequena mudança teria grande efeito? Tente apontar algo além de "ajustar um número".
7. Classifique o problema com o **Cynefin**.

**Discussão em grupo:** o mapa ficou "emaranhado"? Isso costuma ser bom sinal — significa que vocês estão vendo a complexidade real, em vez de uma versão simplificada demais.

## Para casa / leitura complementar

- *Thinking in Systems: A Primer* — Donella Meadows
- *Leverage Points: Places to Intervene in a System* — ensaio de Donella Meadows (disponível no site do Donella Meadows Project)
- *The Fifth Discipline* (A Quinta Disciplina) — Peter Senge
- [Tools for Systems Thinkers — Leyla Acaroglu](https://medium.com/disruptive-design/tools-for-systems-thinkers-the-6-fundamental-concepts-of-systems-thinking-379cdac3dc6a)
- Vídeo: Donella Meadows sobre visão e esperança em sistemas (ver [[Articles/Telegram]])
- [Miro — System Mapping Toolkit](https://miro.com/miroverse/system-mapping-toolkit/)

---

Aula anterior: [O que é Service Design?](01-o-que-e-service-design.md) · Próxima aula: [Pesquisa e Descoberta](03-pesquisa-em-design.md)
