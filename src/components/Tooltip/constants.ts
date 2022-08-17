export enum TooltipDirection {
    BOTTOM_CENTER = 'bottom_center',
    BOTTOM_LEFT = 'bottom_left',
    BOTTOM_RIGHT = 'bottom_right',
    RIGHT = 'right',
    LEFT = 'left',
    TOP_LEFT = 'top_left',
    TOP_RIGHT = 'top_right',
    TOP_CENTER = 'top_center',
}

export type TooltipDirectionValues = `${Lowercase<keyof typeof TooltipDirection>}`;