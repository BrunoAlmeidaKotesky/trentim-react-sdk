import * as React from 'react';
import { DetailsList, IGroup, IColumn, CollapseAllVisibility, IDetailsGroupDividerProps } from '@fluentui/react/lib/DetailsList';
import { IRenderFunction } from '@fluentui/react/lib/Utilities';
import type { INode, IRow } from '../../models/interfaces/IGridView';

export interface IOuifrGroupedDetailsListState {
    groups?: IGroup[];
    items?: IRow[];
}

export default class OuifrGroupedDetailsList extends React.Component<{nodes: INode[]}, IOuifrGroupedDetailsListState> {

    private readonly _columns: IColumn[] = [
        {
            key: 'title',
            name: 'Nome do Arquivo',
            fieldName: 'title',
            minWidth: 200,
            maxWidth: 400
        },
        {
            key: 'status',
            name: 'Status',
            fieldName: 'status',
            minWidth: 100,
            maxWidth: 200
        }
    ];

    constructor(props: {nodes: INode[]}) {
        super(props);
        this.state = {};
    }

    public componentDidMount() {
        this._getItemsAndGroups(this.props);
    }

    public componentWillReceiveProps(nextProps: {nodes: INode[]}) {
        this._getItemsAndGroups(nextProps);
    }

    public render(): React.ReactElement<{nodes: INode[]}> {

        const {
            items,
            groups
        } = this.state;

        return (
            <div>
                <DetailsList
                    columns={this._columns}
                    items={items || []}
                    groups={groups}
                    groupProps={{
                        onRenderHeader: this._onRenderGroupHeader,
                        isAllGroupsCollapsed: groups ? groups.filter(gr => !gr.isCollapsed).length === 0 : true,
                        collapseAllVisibility: CollapseAllVisibility.visible
                    }}
                />
            </div>
        );
    }

    private _onRenderGroupHeader = (props: IDetailsGroupDividerProps, _defaultRender?: IRenderFunction<IDetailsGroupDividerProps>): JSX.Element => {
        // for fake groups - return empty element
        if (!props.group!.data) {
            return <></>;
        }

        // default rendering for "real" groups
        return _defaultRender(props);
    }

    /**
     * Gets flat items array and groups array based on the hierarchy from the props
     */
    private _getItemsAndGroups = (props: {nodes: INode[]}): void => {
        const nodes = props.nodes;
        const items: IRow[] = [];
        const groups: IGroup[] = [];

        // processing all the nodes recursively
        this._processNodes(nodes, groups, items, 0);

        // setting the state
        this.setState({
            groups: groups,
            items: items
        });
    }

    /**
     * Recursively process hierarchy's nodes to build groups and add items to the flat array
     */
    private _processNodes = (nodeItems: INode[] | undefined, groups: IGroup[], items: IRow[], level: number): void => {
        // end of recursion
        if (!nodeItems || !nodeItems.length) {
            return;
        }

        // processing current level of the tree
        nodeItems.forEach(nodeItem => {
            const newGroup: IGroup = {
                key: nodeItem.key,
                name: nodeItem.title,
                startIndex: items.length,
                count: 0,
                children: [],
                level: level, // level is incremented on each call of the recursion
                data: nodeItem // storing initial INode instance in the group's data
            };

            groups.push(newGroup);
            if (nodeItem.items && nodeItem.items.length) {

                // adding fake group with no data
                if (nodeItem.children && nodeItem.children.length) {
                    newGroup.children!.push({
                        key: `${nodeItem.key}-fake`,
                        name: '',
                        startIndex: items.length,
                        count: nodeItem.items.length,
                        level: level
                    });
                }

                // adding items to the flat array
                items.push(...nodeItem.items);
            }

            // processing child nodes
            this._processNodes(nodeItem.children, newGroup.children!, items, level + 1);

            // current group count is a sum of group's leaf items and leaf items in all child nodes
            newGroup.count = items.length - newGroup.startIndex;
        });
    }
}
