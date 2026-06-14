/* ---------------------------------------------------------------------------
   Gera as páginas das aulas em src/aulas/ a partir do conteúdo-fonte em
   ../curso-gratuito/. Os .md de curso-gratuito continuam sendo a única fonte
   da verdade; aqui só adicionamos front matter e removemos o H1 duplicado
   (o título passa a vir do front matter, renderizado pelo layout).
--------------------------------------------------------------------------- */
const fs = require("fs");
const path = require("path");

const SRC = path.resolve(__dirname, "..", "..", "curso-gratuito");
const OUT = path.resolve(__dirname, "..", "src", "aulas");

const meta = {
  "00-curriculo.md": {
    order: 0,
    phase: "Visão geral",
    title: "Programa do curso",
    summary:
      "Como o mini-curso está organizado: os princípios do Service Design, o Double Diamond e o mapa das sete aulas.",
  },
  "01-o-que-e-service-design.md": {
    order: 1,
    phase: "Enquadramento",
    title: "O que é Service Design?",
    summary:
      "Definições, princípios e o processo do Double Diamond. Service Design comparado a UX, CX e Design Thinking.",
  },
  "02-pensamento-sistemico.md": {
    order: 2,
    phase: "Descobrir",
    title: "Pensamento Sistêmico",
    summary:
      "Sistemas, feedback loops, o modelo do iceberg, pontos de alavancagem (Meadows) e o framework Cynefin.",
  },
  "03-pesquisa-em-design.md": {
    order: 3,
    phase: "Descobrir → Definir",
    title: "Pesquisa e Descoberta",
    summary:
      "Pesquisa generativa, métodos de campo, personas e como transformar dados brutos em insights acionáveis.",
  },
  "04-mapeamento-de-stakeholders.md": {
    order: 4,
    phase: "Descobrir → Definir",
    title: "Stakeholders e Ecossistema de Valor",
    summary:
      "Mapas de stakeholders, mapa de ecossistema e as trocas de valor que sustentam (ou derrubam) um serviço.",
  },
  "05-service-blueprint.md": {
    order: 5,
    phase: "Definir → Desenvolver",
    title: "Jornadas e Service Blueprint",
    summary:
      "Customer journey map e service blueprint conectados, com a linha de visibilidade revelando pontos de falha.",
  },
  "06-jornadas-e-metaforas.md": {
    order: 6,
    phase: "Desenvolver → Entregar",
    title: "Prototipagem, Metáforas e Visão",
    summary:
      "Prototipar serviços (desktop walkthrough, bodystorming), jornadas comportamentais e metáforas para comunicar a visão.",
  },
  "07-recursos-e-proximos-passos.md": {
    order: 7,
    phase: "Síntese",
    title: "Capstone e próximos passos",
    summary:
      "Síntese dos artefatos, avaliação com os 15 princípios de Lou Downe, priorização e leituras recomendadas.",
  },
};

function escapeYaml(str) {
  return str.replace(/"/g, '\\"');
}

fs.mkdirSync(OUT, { recursive: true });

let count = 0;
for (const [file, m] of Object.entries(meta)) {
  const srcPath = path.join(SRC, file);
  if (!fs.existsSync(srcPath)) {
    console.warn(`! Arquivo-fonte ausente: ${file}`);
    continue;
  }
  let body = fs.readFileSync(srcPath, "utf8");

  // Remove o primeiro H1 (vira título no front matter)
  body = body.replace(/^#\s+.*\r?\n+/, "");

  const frontmatter =
    `---\n` +
    `order: ${m.order}\n` +
    `title: "${escapeYaml(m.title)}"\n` +
    `phase: "${escapeYaml(m.phase)}"\n` +
    `summary: "${escapeYaml(m.summary)}"\n` +
    `---\n\n`;

  fs.writeFileSync(path.join(OUT, file), frontmatter + body);
  count++;
}

console.log(`✓ ${count} aula(s) gerada(s) em ${path.relative(process.cwd(), OUT)}`);
