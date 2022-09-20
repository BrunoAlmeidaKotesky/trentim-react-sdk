import type { ICardHeaderProps } from "@models/interfaces/ICanvasCardProps";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react/lib/CommandBar"
import { useCallback } from "react";

export const CardHeader = (props: ICardHeaderProps) => {

  const commandBarItems = useCallback((): ICommandBarItemProps[] => {
    const baseBarItems: ICommandBarItemProps[] = [{
      key: props.title,
      text: props.title,
      iconProps: { iconName: props.icon, color: 'rgb(51, 51, 51)', styles: { root: {color: 'rgb(51, 51, 51)'}} },
      canCheck: false,
      disabled: true,
      buttonStyles: { root: { background: '0 0', backgroundColor: 'transparent', color: 'rgb(51, 51, 51)' }, icon: { color: 'rgb(51, 51, 51)' } }
    }];
    if (props?.isEditModeEnabled) {
      baseBarItems.push({
        key: "addSticker",
        text: props.addTitle,
        ariaLabel: props.addTitle,
        iconOnly: true,
        iconProps: { iconName: "Add", style: {color: 'rgb(51, 51, 51)'} },
        buttonStyles: {
          root: { background: '0 0', backgroundColor: 'transparent', color: 'rgb(51, 51, 51)' }, icon: { color: 'rgb(51, 51, 51)'},
          rootHovered: {
            background: '0 0', backgroundColor: 'transparent'
          },
          rootPressed: {
            background: '0 0', backgroundColor: 'transparent'
          }
        },
        onClick: props.onAddSticker
      });
    }
    return baseBarItems;
  }, [props]);

  return (
    <div
      className='canvasCard-Header'
      style={{ backgroundColor: props.backgroundColor }}>
      <CommandBar
        styles={{
          root: {
            padding: '0 12px',
            background: '0 0',
            height: '40px'
          },
          primarySet: { justifyContent: 'space-between' }
        }}
        items={commandBarItems()} />
    </div>
  )
}