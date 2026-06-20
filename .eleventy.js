const markdownIt = require("markdown-it");
const { HtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // src/aulas/ é gerado (fora do git), mas precisa entrar no build
  eleventyConfig.setUseGitIgnore(false);

  // Copia o CSS como está
  eleventyConfig.addPassthroughCopy("src/css");

  // Markdown: HTML bruto desabilitado (blindagem contra XSS — o conteúdo não
  // usa tags HTML; tabelas, citações e código continuam funcionando)
  const md = markdownIt({ html: false, linkify: false, typographer: true });
  eleventyConfig.setLibrary("md", md);

  // Coleção das aulas, ordenada pelo campo `order` do front matter
  eleventyConfig.addCollection("aula", (api) =>
    api.getFilteredByTag("aula").sort((a, b) => a.data.order - b.data.order)
  );

  // Número com dois dígitos: 1 -> "01"
  eleventyConfig.addFilter("pad2", (n) => String(n).padStart(2, "0"));

  // Limpa sintaxe do digital garden e converte links entre aulas
  eleventyConfig.addTransform("clean-links", (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    let out = content;
    // [[Caminho/Nome|Rótulo]] -> Rótulo
    out = out.replace(/\[\[([^\]|\\]+)\\?\|([^\]]+)\]\]/g, "$2");
    // [[Caminho/Nome]] -> Nome (último segmento)
    out = out.replace(/\[\[([^\]]+)\]\]/g, (_m, p1) => p1.split("/").pop());
    // Links entre aulas: 02-pensamento-sistemico.md -> /aulas/pensamento-sistemico/
    out = out.replace(
      /href="(?:\.\/)?\d{2}-([a-z0-9-]+)\.md"/g,
      'href="/aulas/$1/"'
    );
    return out;
  });

  // Reescreve URLs absolutas (/css, /aulas...) com o pathPrefix.
  // Adicionado DEPOIS do clean-links para que os links /aulas/ já existam.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
