import { CSSProperties } from "react";
import type { ColumnKey, TColumn } from "trentim-react-sdk";
import { GridView, ConditionalWrapper } from "trentim-react-sdk";

type Row = {
  Id: number;
  name: string;
  description: string;
  type: string;
  default?: string;
  required: boolean;
  typeLink?: string;
};
interface ITypesTableProps {
  rows: Row[];
  hiddenCols?: ColumnKey<Row>[];
  leftHeaderSpace?: React.ReactElement;
}

export const TypesTable = ({ rows, hiddenCols, leftHeaderSpace }: ITypesTableProps) => {
  const columns: TColumn<Row>[] = [
    {key: 'Id', name: '', hideColumn: true, minWidth: 0, isResizable: true},
    {key: 'name', name: 'Name', minWidth: 100, fieldName: 'name', isResizable: true, hideColumn: hiddenCols?.includes('name')},
    {key: 'description', name: 'Description', minWidth: 300, fieldName: 'description', isResizable: true, hideColumn: hiddenCols?.includes('description')},
    {key: 'type', name: 'Type', minWidth: 180, fieldName: 'type', isResizable: true, hideColumn: hiddenCols?.includes('type')},
    {key: 'default', name: 'Default', minWidth: 100, fieldName: 'default', isResizable: true, hideColumn: hiddenCols?.includes('default')},
    {key: 'required', name: 'Required', minWidth: 100, fieldName: 'required', isResizable: true, hideColumn: hiddenCols?.includes('required')},
    {key: 'typeLink', name: '', minWidth: 0, hideColumn: true, isResizable: true},
  ]

  const mountStyles = (isReq: boolean, hasLink: boolean): Record<string, Partial<CSSProperties>> => ({
    required: {
      fontWeight: 600, color: isReq ? '#3773f3' : 'red', textTransform: 'capitalize'
    },
    type: {
      lineHeight: '1',
      margin: '0px 2px',
      padding: '3px 5px',
      whiteSpace: 'nowrap',
      borderRadius: '3px',
      fontSize: '13px',
      border: '1px solid rgb(236, 244, 249)',
      color: 'rgba(46, 52, 56, 0.9)',
      backgroundColor: 'rgb(247, 250, 252)',
      cursor: hasLink ? 'pointer' : 'default'
    }
  });

  const createLink = (link: string): string => {
    let href = link;
    if(link?.includes('?path=/docs/'))
      href = `http://localhost:6006/${link}`
    return href
  }

  return (
    <GridView
      columns={columns}
      rows={rows}
      headerOptions={{
        enableFilter: false, enableGrouping: false, enableSearch: false,
        leftHeaderSpace
      }}
      onRenderItemColumn={(it, _idx, col) => {
        switch (col?.key) {
          case 'name':
            return <span style={{ fontWeight: 600 }}>{it?.name}</span>;
          case 'required':
            return <span style={mountStyles(it!?.required, !!it?.typeLink).required}>{it?.[col.key].toString()}</span>
          case 'type': 
            return (
            <ConditionalWrapper condition={!!it?.typeLink} wrapper={child => {
              const href = createLink(it?.typeLink);
              return <a
                rel="noopener noreferrer" target='_blank'
                style={{textDecoration: 'none'}} 
                href={href}>
                {child}
              </a>
            }}>
              <span style={mountStyles(false, !!it?.typeLink).type}>{it?.[col.key]}</span>
            </ConditionalWrapper>)
          default: return <span>{it?.[col!?.key]}</span>
        }
      }}
    />
  );
};
