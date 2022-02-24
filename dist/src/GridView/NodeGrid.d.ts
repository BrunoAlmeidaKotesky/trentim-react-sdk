import * as React from 'react';
import { IGroup } from '@fluentui/react/lib/DetailsList';
import type { INode, IRow } from '../models/interfaces/IGridView';
export interface IOuifrGroupedDetailsListState {
    groups?: IGroup[];
    items?: IRow[];
}
export default class OuifrGroupedDetailsList extends React.Component<{
    nodes: INode[];
}, IOuifrGroupedDetailsListState> {
    private readonly _columns;
    constructor(props: {
        nodes: INode[];
    });
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: {
        nodes: INode[];
    }): void;
    render(): React.ReactElement<{
        nodes: INode[];
    }>;
    private _onRenderGroupHeader;
    /**
     * Gets flat items array and groups array based on the hierarchy from the props
     */
    private _getItemsAndGroups;
    /**
     * Recursively process hierarchy's nodes to build groups and add items to the flat array
     */
    private _processNodes;
}
