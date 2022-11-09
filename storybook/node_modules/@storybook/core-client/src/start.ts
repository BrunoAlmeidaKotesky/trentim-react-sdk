/* eslint-disable @typescript-eslint/naming-convention */
import global from 'global';
import { ClientApi } from '@storybook/client-api';
import { PreviewWeb } from '@storybook/preview-web';
import type {
  AnyFramework,
  ArgsStoryFn,
  Loadable,
  Path,
  Store_WebProjectAnnotations,
} from '@storybook/types';
import { createChannel } from '@storybook/channel-postmessage';
import { addons } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';

import { executeLoadableForChanges } from './executeLoadable';

const { window: globalWindow, FEATURES } = global;

const removedApi = (name: string) => () => {
  throw new Error(`@storybook/client-api:${name} was removed in storyStoreV7.`);
};

interface CoreClient_RendererImplementation<TFramework extends AnyFramework> {
  decorateStory?: Store_WebProjectAnnotations<TFramework>['applyDecorators'];
  render?: ArgsStoryFn<TFramework>;
}

interface CoreClient_ClientAPIFacade {
  /* deprecated */
  storiesOf: (...args: any[]) => never;
  /* deprecated */
  raw: (...args: any[]) => never;
}

interface CoreClient_StartReturnValue<TFramework extends AnyFramework> {
  /* deprecated */
  forceReRender: () => void;
  /* deprecated */
  configure: any;
  /* deprecated */
  clientApi: ClientApi<TFramework> | CoreClient_ClientAPIFacade;
}

export function start<TFramework extends AnyFramework>(
  renderToDOM: Store_WebProjectAnnotations<TFramework>['renderToDOM'],
  { decorateStory, render }: CoreClient_RendererImplementation<TFramework> = {}
): CoreClient_StartReturnValue<TFramework> {
  if (globalWindow) {
    // To enable user code to detect if it is running in Storybook
    globalWindow.IS_STORYBOOK = true;
  }

  if (FEATURES?.storyStoreV7) {
    return {
      forceReRender: removedApi('forceReRender'),
      configure: removedApi('configure'),
      clientApi: {
        storiesOf: removedApi('clientApi.storiesOf'),
        raw: removedApi('raw'),
      },
    };
  }

  const channel = createChannel({ page: 'preview' });
  addons.setChannel(channel);

  const clientApi = new ClientApi<TFramework>();
  const preview = new PreviewWeb<TFramework>();
  let initialized = false;

  const importFn = (path: Path) => clientApi.importFn(path);
  function onStoriesChanged() {
    const storyIndex = clientApi.getStoryIndex();
    preview.onStoriesChanged({ storyIndex, importFn });
  }

  // These two bits are a bit ugly, but due to dependencies, `ClientApi` cannot have
  // direct reference to `PreviewWeb`, so we need to patch in bits
  clientApi.onImportFnChanged = onStoriesChanged;
  clientApi.storyStore = preview.storyStore;

  if (globalWindow) {
    globalWindow.__STORYBOOK_CLIENT_API__ = clientApi;
    globalWindow.__STORYBOOK_ADDONS_CHANNEL__ = channel;
    // eslint-disable-next-line no-underscore-dangle
    globalWindow.__STORYBOOK_PREVIEW__ = preview;
    globalWindow.__STORYBOOK_STORY_STORE__ = preview.storyStore;
  }

  return {
    forceReRender: () => channel.emit(FORCE_RE_RENDER),

    clientApi,
    // This gets called each time the user calls configure (i.e. once per HMR)
    // The first time, it constructs the preview, subsequently it updates it
    configure(
      framework: string,
      loadable: Loadable,
      m?: NodeModule,
      disableBackwardCompatibility = true
    ) {
      if (disableBackwardCompatibility) {
        throw new Error('unexpected configure() call');
      }

      clientApi.addParameters({ framework });

      // We need to run the `executeLoadableForChanges` function *inside* the `getProjectAnnotations
      // function in case it throws. So we also need to process its output there also
      const getProjectAnnotations = () => {
        const { added, removed } = executeLoadableForChanges(loadable, m);
        // eslint-disable-next-line no-underscore-dangle
        clientApi._loadAddedExports();

        Array.from(added.entries()).forEach(([fileName, fileExports]) =>
          clientApi.facade.addStoriesFromExports(fileName, fileExports)
        );

        Array.from(removed.entries()).forEach(([fileName]) =>
          clientApi.facade.clearFilenameExports(fileName)
        );

        return {
          render,
          ...clientApi.facade.projectAnnotations,
          renderToDOM,
          applyDecorators: decorateStory,
        };
      };

      if (!initialized) {
        preview.initialize({
          getStoryIndex: () => clientApi.getStoryIndex(),
          importFn,
          getProjectAnnotations,
        });
        initialized = true;
      } else {
        // TODO -- why don't we care about the new annotations?
        getProjectAnnotations();
        onStoriesChanged();
      }
    },
  };
}
