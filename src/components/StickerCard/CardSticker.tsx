import { 
    TextField, PrimaryButton, Dialog, DialogType, DialogFooter, DefaultButton, 
    CommandBar, DirectionalHint, ICommandBarItemProps 
} from "@fluentui/react";
import { ICardStickerProps } from "@models/interfaces/IStickerCardProps";
import { useState, useEffect, useMemo, memo } from "react";
import { CardStickerWrapper } from "./styles";

const Sticker = ({ sticker, onChange, onChangeOrder, onDelete, isEditEnabled, stickerBgColor, renderedNow }: ICardStickerProps) => {
  const [editMode, setIsEditMode] = useState(isEditEnabled ? renderedNow : false);
  const [item, setItem] = useState(sticker);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => { setItem(sticker); }, [sticker]);
  useEffect(() => { onChange(item); }, [item]);

  const overflowItems = useMemo<ICommandBarItemProps[]>(() => {
    if (!isEditEnabled)
      return [];
    return [
      {
        key: "edit",
        text: "Editar",
        onClick: () => setIsEditMode(true),
        iconProps: { iconName: "Edit" },
      },
      {
        key: "up",
        text: "Mover para cima",
        onClick: () => onChangeOrder(item, "up"),
        iconProps: { iconName: "SortUp" },
      },
      {
        key: "down",
        text: "Mover para baixo",
        onClick: () => onChangeOrder(item, "down"),
        iconProps: { iconName: "SortDown" },
      },
      {
        key: "delete",
        text: "Deletar",
        onClick: () => setConfirmDelete(true),
        iconProps: { iconName: "Delete" },
      },
    ]
  }, [isEditEnabled, confirmDelete, editMode, item]);

  return (
    <CardStickerWrapper stickerBgColor={stickerBgColor}>
      {editMode ?
        (<TextField
          autoFocus={true}
          multiline rows={4}
          onChange={(_e, newValue) => setItem({ ...item, title: newValue })} value={item?.title}
          onFocus={() => { !editMode && setIsEditMode(true) }}
          onBlur={() => setIsEditMode(false)} />) : (<>
            <CommandBar
              styles={{ root: { backgroundColor: "transparent", padding: 0 } }}
              overflowButtonProps={{
                ariaLabel: "Mais ações",
                menuProps: {
                  items: [], // CommandBar will determine items rendered in overflow
                  isBeakVisible: true,
                  beakWidth: 20,
                  gapSpace: 10,
                  directionalHint: DirectionalHint.topCenter,
                  styles: { root: {background: 'transparent'} }
                },
                menuIconProps: {
                  iconName: "MoreVertical",
                  styles: { root: {background: 'transparent'} }
                },
                styles: { root: { backgroundColor: "transparent" } }
              }}
              items={[]}
              overflowItems={overflowItems}
              farItems={[]}
              ariaLabel="Use left and right arrow keys to navigate between commands" />
            <TextField
              className='not-editable'
              multiline
              styles={{root: {backgroundColor: stickerBgColor ?? '#feffb7'}, fieldGroup: {backgroundColor: stickerBgColor ?? '#feffb7'}}}
              rows={4}
              value={item?.title}
              readOnly={true}
              borderless={true}
            />
            <Dialog
              hidden={!confirmDelete}
              onDismiss={() => setConfirmDelete(false)}
              dialogContentProps={{
                type: DialogType.normal,
                title: "Deletar item",
                closeButtonAriaLabel: "Fechar",
                subText: "Tem certeza que deseja deletar esse item?",
              }}>
              <DialogFooter>
                <PrimaryButton text="Sim" onClick={() => {
                  onDelete(item);
                  setConfirmDelete(false)
                }} />
                <DefaultButton onClick={() => setConfirmDelete(false)} text="Não" />
              </DialogFooter>
            </Dialog></>)}
    </CardStickerWrapper>);
}
export default memo(Sticker);