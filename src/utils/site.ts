export const withBase = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Hong_Kong'
  }).format(date);

export const byNewest = <T extends { data: { date: Date } }>(entries: T[]) =>
  [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const publicOnly = <T extends { data: { draft: boolean } }>(entries: T[]) =>
  entries.filter((entry) => !entry.data.draft);
