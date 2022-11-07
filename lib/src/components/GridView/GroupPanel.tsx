
import { ChoiceGroup, DefaultButton, Panel, PrimaryButton } from '@fluentui/react';
import { useContext, memo } from 'react';
import { GroupPanelContext } from '@components/GridView/Contexts';

function GroupPanel() {
    const { isOpen, panelTitle, onApply, onCancel, onClose, options, selectedGroupKeys, setSelectedGroupKeys, top, footer } = useContext(GroupPanelContext);

    if (!isOpen) return null;
    return (
        <Panel
            isFooterAtBottom={true}
            onDismiss={onClose} isOpen={isOpen}
            onRenderFooter={_ => (<>
                {!!footer ? footer : null}
                <div style={{ padding: 20 }}>
                    <PrimaryButton onClick={() => onApply(selectedGroupKeys)} styles={{ root: { marginRight: 8 } }}>
                        Aplicar
                    </PrimaryButton>
                    <DefaultButton onClick={onCancel}>Cancelar</DefaultButton>
                </div></>)}>
            {!!top ? top : null}
            <h2>{panelTitle}</h2>
            <ChoiceGroup
                onChange={(_, opt) => {
                    const keyWithName = `${opt?.key};${opt?.text}` as const;
                    setSelectedGroupKeys(keyWithName);
                }}
                defaultSelectedKey={selectedGroupKeys?.split(';')?.[0] ?? undefined}
                options={[{ key: '@NONE', text: 'Nenhum' }, ...options]} />
        </Panel>
    );
}

export default memo(GroupPanel);