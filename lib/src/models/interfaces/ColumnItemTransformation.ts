
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
    renderAs: 'custom';
    mapFn: (value: unknown) => React.ReactNode;
};

export type ColumnItemTransformation = DateColumnTransformation | NumberColumnTransformation | BooleanColumnTransformation | CustomColumnTransformation;