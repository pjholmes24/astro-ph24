import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog') as CollectionEntry<"blog">[];

  return rss({
    title: 'PJ Holmes Blog',
    description: 'The latest posts from my Astro blog!',
    site: 'https://astro-pjholmes.netlify.app', // ✅ Update to match your actual deployed domain
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.slug}`,
    })),
  });
}
