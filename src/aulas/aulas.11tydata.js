module.exports = {
  layout: "aula.njk",
  tags: "aula",
  eleventyComputed: {
    // /aulas/02-pensamento-sistemico.md -> /aulas/pensamento-sistemico/
    permalink: (data) =>
      `/aulas/${data.page.fileSlug.replace(/^\d+-/, "")}/index.html`,
  },
};
