import * as React from 'react';
import { lazy, useContext, useMemo, Suspense } from 'react';
import { GroupPanelContext } from './Contexts';

function GroupPanel() {
    const {isOpen, panelTitle, onApply, onCancel, onClose, options, selectedGroupKeys, setSelectedGroupKeys} = useContext(GroupPanelContext);
    const [FluentPanel, PrimaryButton, DefaultButton, RadioButton] = useMemo(() => {
        const Panel = lazy(() => import('@fluentui/react/lib/Panel').then(({ Panel }) => ({ default: Panel })));
        const PrimaryButton = lazy(() => import('@fluentui/react/lib/Button').then(({ PrimaryButton }) => ({ default: PrimaryButton })));
        const DefaultButton = lazy(() => import('@fluentui/react/lib/Button').then(({ DefaultButton }) => ({ default: DefaultButton })));
        const RadioButton = lazy(() => import('@fluentui/react/lib/ChoiceGroup').then(({ ChoiceGroup }) => ({ default: ChoiceGroup })));
        return [Panel, PrimaryButton, DefaultButton, RadioButton];
    }, []);

    if(!isOpen) return null;
    return (
        <Suspense fallback={<div>...</div>}>
            <FluentPanel
                isFooterAtBottom={true}
                onDismiss={onClose} isOpen={isOpen}
                onRenderFooter={_ => (<div style={{padding: 20}}>
                    <Suspense fallback={'...'}>
                        <PrimaryButton onClick={() => onApply(selectedGroupKeys)} styles={{root: {marginRight: 8}}}>
                            Aplicar
                        </PrimaryButton>
                    </Suspense>
                    <Suspense fallback={'...'}>
                        <DefaultButton onClick={onCancel}>Cancelar</DefaultButton>
                    </Suspense>
                  </div>)}>
                <h2>{panelTitle}</h2>
                <Suspense fallback={'...'}>
                    <RadioButton
                        onChange={(_, opt) => {
                            const copyMap = new Map(selectedGroupKeys);
                            if(!copyMap.has(opt?.key))
                                copyMap.set(opt.key, opt.text);
                            else
                                copyMap.delete(opt.key);
                            setSelectedGroupKeys(copyMap);
                        }}
                        options={options}/>
                </Suspense>
            </FluentPanel>
        </Suspense>
    );
}

export default React.memo(GroupPanel);