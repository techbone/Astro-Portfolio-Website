import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("blogPosts");
  return rss({
    title: "Pixelbook | Musa Muhammad Etudaye",
    description:
      "A technical blog by Musa Muhammad Etudaye about React, Rust, and the future of Frontend Development.",
    site: context.site,
    items: blog.map((post) => ({
      link: `/posts/${post.id}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      ...post.data,
    })),
    customData: `<language>en-us</language>`,
  });
}
