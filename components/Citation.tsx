import { sources } from '@/data/sources';
export function Citation({id}:{id:string}) { const source=sources.find(s=>s.id===id); return source ? <a className="cite" href={source.url} target="_blank" rel="noreferrer" aria-label={`Source: ${source.title}`}>[{sources.indexOf(source)+1}]</a> : null; }
