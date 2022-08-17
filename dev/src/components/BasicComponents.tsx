import {Tooltip, IFrame, UploadButton} from 'trentim-react-sdk';

export default function BaseComponents() {

    return (
        <div>
            <Tooltip content="Tooltip" direction='top_right'>
            <IFrame src="https://www.google.com" />
            <UploadButton accepts={['image/png']} buttonLabel={'Clicar'} onChange={() => {}}/>
            </Tooltip>
        </div>
    );
}