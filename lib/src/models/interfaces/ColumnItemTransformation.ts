
export type DateColumnTransformation = {
    wrapper?: React.ComponentType<{ children: React.ReactNode }>;
    renderAs: 'date';
    locales: string[];
    formatOptions?: Intl.DateTimeFormatOptions;
};

export type NumberColumnTransformation = {
    wrapper?: React.ComponentType<{ children: React.ReactNode }>;
    renderAs: 'number';
    locales: string[];
    formatOptions?: Intl.NumberFormatOptions;
};

export type BooleanColumnTransformation = {
    wrapper?: React.ComponentType<{ children: React.ReactNode }>;
    renderAs: 'boolean';
    trueText: string;
    falseText: string;
    nullText: string;
};

export type CustomColumnTransformation = {
    wrapper?: React.ComponentType<{ children: React.ReactNode }>;
    renderAs: 'custom';
    mapFn: (value: unknown) => string;
};

/**
 * Transformations applied to column items.
 *
 * @example
 * ```tsx
 * //'date', Original: '2023-10-31T03:00:00.000Z, Output: '31/10/2023'
 * transformations: {
 *   renderAs: 'date',
 *   locales: ['pt-BR']
 * }
 * //'number', Original: 8, Output: 'R$ 8,00'
 * transformations: {
 *   renderAs: 'number',
 *   locales: ['pt-BR'],
 *   formatOptions: {
 *     style: 'currency',
 *     currency: 'BRL'
 *   }
 * }
 * //'boolean', Original: true, Output: 'Sim'
 * transformations: {
 *   renderAs: 'boolean',
 *   yesText: 'Sim',
 *   noText: 'Não',
 *   nullText: 'N/A'
 * }
 * //'custom', Original: 'My name', Output: <div style="color: red;">MY NAME</div>
 * transformations: {
 *   wrapper: ({children}) => <div style={{color: 'red'}}>{children}</div>,
 *   renderAs: 'custom',
 *   mapFn: (value) => (value as string).toUpperCase()
 * }
 * ```
 */
export type ColumnItemTransformation = DateColumnTransformation | NumberColumnTransformation | BooleanColumnTransformation | CustomColumnTransformation;