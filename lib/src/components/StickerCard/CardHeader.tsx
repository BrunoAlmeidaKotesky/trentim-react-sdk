import type { ICardHeaderProps } from "@models/interfaces/IStickerCardProps";
import { CommandBar, ICommandBarItemProps } from "@fluentui/react/lib/CommandBar"
import { useCallback, useMemo } from "react";
import type { IButtonStyles } from "@fluentui/react/lib/Button";

export const CardHeader = (props: ICardHeaderProps) => {
  const fixedIconColor = useMemo(() => '#333!important', []);
  const buttonStyles = useMemo<IButtonStyles>(() => ({
    root: { background: '0 0', backgroundColor: 'transparent', color: fixedIconColor }, icon: { color: fixedIconColor }, labelDisabled: { color: fixedIconColor },
    rootHovered: {
      background: '0 0', backgroundColor: 'transparent'
    },
    rootPressed: {
      background: '0 0', backgroundColor: 'transparent'
    }
  }), []);

  const commandBarItems = useCallback((): ICommandBarItemProps[] => {
    const baseBarItems: ICommandBarItemProps[] = [{
      key: props.title,
      text: props.title,
      iconProps: { iconName: props.icon, color: fixedIconColor, styles: { root: { color: fixedIconColor } } },
      canCheck: false,
      disabled: true,
      buttonStyles
    }];
    if (props?.isEditModeEnabled) {
      baseBarItems.push({
        key: "addSticker",
        text: props.addTitle,
        ariaLabel: props.addTitle,
        iconOnly: true,
        iconProps: { iconName: "Add", style: { color: fixedIconColor } },
        buttonStyles,
        onClick: props.onAddSticker
      });
    }
    return baseBarItems;
  }, [props]);

  return (
    <div
      className={props?.className}
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