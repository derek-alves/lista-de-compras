export interface CategoryTheme {
  name: string;
  icon: string;
  colorVar: string;
  tailwindClass: string;
}

export const CATEGORIES_THEME: Record<string, CategoryTheme> = {
  Limpeza: {
    name: 'Limpeza',
    icon: '🧼',
    colorVar: 'var(--c-limpeza)',
    tailwindClass: 'bg-cat-limpeza',
  },
  Higiene: {
    name: 'Higiene',
    icon: '🪥',
    colorVar: 'var(--c-higiene)',
    tailwindClass: 'bg-cat-higiene',
  },
  Mercearia: {
    name: 'Mercearia',
    icon: '🛒',
    colorVar: 'var(--c-mercearia)',
    tailwindClass: 'bg-cat-mercearia',
  },
  Padaria: {
    name: 'Padaria',
    icon: '🥖',
    colorVar: 'var(--c-padaria)',
    tailwindClass: 'bg-cat-padaria',
  },
  Congelados: {
    name: 'Congelados',
    icon: '🧊',
    colorVar: 'var(--c-congelados)',
    tailwindClass: 'bg-cat-congelados',
  },
  Carnes: {
    name: 'Carnes',
    icon: '🥩',
    colorVar: 'var(--c-carnes)',
    tailwindClass: 'bg-cat-carnes',
  },
  Frutas: {
    name: 'Frutas',
    icon: '🍎',
    colorVar: 'var(--c-frutas)',
    tailwindClass: 'bg-cat-frutas',
  },
  Legumes: {
    name: 'Legumes',
    icon: '🥕',
    colorVar: 'var(--c-legumes)',
    tailwindClass: 'bg-cat-legumes',
  },
  Bebidas: {
    name: 'Bebidas',
    icon: '🥤',
    colorVar: 'var(--c-bebidas)',
    tailwindClass: 'bg-cat-bebidas',
  },
  Laticínios: {
    name: 'Laticínios',
    icon: '🥛',
    colorVar: 'var(--c-laticinios)',
    tailwindClass: 'bg-cat-laticinios',
  },
};

/** Formata número para moeda brasileira (ex: 12.5 -> R$ 12,50) */
export function formatBRL(amount: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount || 0);
}

/** Formata string ISO YYYY-MM-DD para DD/MM/AAAA */
export function formatDateBR(isoDate?: string | Date): string {
  if (!isoDate) return '—';
  const d = typeof isoDate === 'string' ? new Date(isoDate) : isoDate;
  if (isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}

