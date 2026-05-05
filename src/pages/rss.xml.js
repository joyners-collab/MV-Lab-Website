import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

export async function GET(context) {
  const news = (await getCollection('news'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${SITE.name} — News`,
    description: 'News and updates from the MV Lab.',
    site: context.site,
    items: news.map((item) => ({
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.summary ?? '',
      link: item.data.link ?? `/news/`,
    })),
    customData: '<language>en-us</language>',
  });
}
