import type {
  FieldSchema,
  FormState,
  OptionItem,
} from '~/models/questionnaire/QuestionnaireClientModel';

/**
 * Normalise un texte pour la recherche et comparaison
 */
export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '')
    .trim();
};

/**
 * Vérifie si une valeur est considérée comme vide pour un champ
 */
export const isValueEmpty = (field: FieldSchema, value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (field.type === 'text' && value === '') return true;
  if (field.type === 'number' && (value === '' || value === undefined)) return true;
  if (field.type === 'checkbox' && field.multiple && Array.isArray(value) && value.length === 0)
    return true;
  return false;
};

/**
 * Ajoute un token et son label associé dans un Set
 */
export const addTokenWithLabel = (
  tokens: Set<string>,
  value: any,
  options: OptionItem[] = []
): void => {
  const normalizedValue = normalizeText(String(value));
  tokens.add(normalizedValue);

  const option = options.find((opt) => String(opt.value) === String(value));
  if (option?.label) {
    tokens.add(normalizeText(option.label));
  }
};

/**
 * Divise un tableau en chunks de taille donnée
 */
export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

/**
 * Vérifie si une string est un UUID valide
 */
export const isUuid = (value: string): boolean => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
};

/**
 * Humanise un nom d'événement
 */
export const humanizeEventName = (value?: string, fallback = 'Événement'): string => {
  if (!value) return fallback;
  return value.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};

/**
 * Calcule la plage de dates à partir des réponses
 */
export const computeDateRange = (answers: FormState): [string, string] => {
  if (answers.date_status === 'arretee') {
    const start = String(answers.date_debut || '');
    const end = String(answers.date_fin || answers.date_debut || '');
    return [start, end];
  }
  return ['', ''];
};

export const capitalizeFirst = (str: string) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
