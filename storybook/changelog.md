# Changelog

#### [New Major Release v4!](#v4.0.0)

<details id="4.3.0">
<summary><b>v4.3.0 (Current)</b></summary>

- Fix a bug on `<LifecycleProgress>`, which in some cases depending on the `stages` length, if the number of visible items were 4, the last item would be cut off.
- Upgrade `bakutils-types` library to `1.2.0`, which introduces the following types: `RemoveFunctionsFrom`, `DeepPartialArray`, `DeepPartialObj` and removes `SetValuesByPath`.
- Added a new helper function which is always used: `sleep`.
- Introduced three new __*Experimental*__ helpers functions: `pipe`, `memoize` and `memoizeAsync`, which are not yet documented on storybook. (And since it's experimental, it could or could not be removed in the future).
</details>
<br/>

<details id="4.2.1">
<summary><b>v4.2.1</b></summary>

- Fix a bug on `<LifecycleProgress>`, which on very specific cases, where the `--lifecycle-grid-row-number` css variable was not being changed when needed.
</details>
<br/>

<details id="4.2.0">
<summary><b >v4.2.0</b></summary>

Does not export `IconButton.js` from `@fluentui/react` anymore, since `<LifecycleProgress>` does not uses it anymore.
Added `@fluentui/react-icons` as a decency to reduce the final bundle size, primary caused the Icon button problem, so the component only import the needed icons.

- This is potentially a breaking change, but since the component no longer uses icon button, `leftScrollButtonStyles` and `rightScrollButtonStyles` types have change to `CSSProperties` instead of `IButtonStyles`.
    - This is better, since it's easier to configure and more flexible. (And lighter)
- Some general fixes to `<LifecycleProgress>` styles, which does not affect the component usage.
</details>
<br/>

<details id="4.1.2">
<summary><b >v4.1.2</b></summary>

- Fixed a bug on `<LifecycleProgress>` which, when the stages we're empty or null, the component would fail to render.
    - Please note that when your `stages` array is empty, is up to you to handle the UI of the component, since it's not possible to know what you want to show in that case, and a default UI would be misleading.
</details>
<br/>

<details id="v4.1.0">
<summary><b >v4.1.0 - 4.1.1</b></summary>

*Please note that a proper general documentation on Storybook of the changes in v4 is still in progress.*

This version fixes the previous mentioned problems which the `style.css` was being imported on every file, now it's only imported on the component which is being used(`<LifecycleProgress>`, `<Tooltip>` and `<StickerCard>`).

Please note that if import one of these components only using `import {} from 'trentim-react-sdk'`, you'll need to import the `style.css` file as well, as the following example:

```ts
//Styles will not be applied
import { Tooltip } from 'trentim-react-sdk';
//Styles will be applied
import { Tooltip } from 'trentim-react-sdk';
import 'trentim-react-sdk/dist/style.css';
//Styles will be applied
import { Tooltip } from 'trentim-react-sdk/Tooltip';
```

- Fixed a huge problem which `react-dom` was being imported on every component that uses any of `@fluentui/react` components.
- The `fieldName` prop from `TColumn<T>` (which is the type of the `columns` prop from `<GridView>`) will have the same value from the `key` prop and doesn't need to be passed anymore.
</details>
<br/>

<details id="v4.0.1">
<summary><b >v4.0.1</b></summary>

- Marked `onRenderItemColumn` from `IGridView` as optional again.
</details>
<br/>
<details id="v4.0.0">
<summary><b >v4.0.0</b></summary>

Many new changes in this release, with new styles and behaviors for previous components, removal of previous deprecated functions and components, structure change, how to use the library, and more.

A fully new documentation of all the features on storybook will be available **as soon as possible**.

The library is now fully tree-shakable, so you can import only the functionalities you need, this can result on smaller bundle sizes.
You can also import everything from `trentim-react-sdk`, but this is not recommended since it can result on some side effects.

Every component can be individually imported, similar to how it was on v1. this means that you should import functionalities like this:

~~Note: There is a known problem where all the components are importing the `styles.css` as well, this will be fixed~~ (Fixed on 4.1.1)

```ts dark
import {IFrame} from 'trentim-react-sdk/IFrame';
import {ConditionalWrapper} from 'trentim-react-sdk/ConditionalWrapper';
import {Tooltip} from 'trentim-react-sdk/Tooltip';
import {GridView} from 'trentim-react-sdk/GridView';
import {StickerCard} from 'trentim-react-sdk/StickerCard';
import {LifecycleProgress} from 'trentim-react-sdk/LifecycleProgress';
import { /*Some hook*/ } from 'trentim-react-sdk/hooks';
import { /*Some utility function*/ } from 'trentim-react-sdk/helpers';
import { /*Some decorator*/ } from 'trentim-react-sdk/decorators';
//Prefer import type, since there's no implementation on this folder.
import type {/*A type or interface*/} from 'trentim-react-sdk/models';
```

#### Breaking Changes
- The library does not use `styled-components` anymore on it's components (`<LifecycleProgress>`, `<Tooltip>` and `<StickerCard>`), instead everything was remade to purely use only CSS (SASS) and JavaScript only. This change was made to reduce the bundle size of the library, and to make it more flexible to use on other projects, since `styled-components` is not our design of styling implementation.


- Removed all features marked as deprecated in previous versions, this includes:
    - `<Card>` component was removed, and all it's reference on the `<GridView/>` component, such as `renderAs` and other card related props. 
    - `<UploadButton>` component was removed, please use the `useFileUpload` hook instead if necessary.
    - `CacheHandler` class was removed, since it was deprecated and not used anymore.
    - `getMimeType` method from `ConverterOptions` and the references to `IMimeConverter` on the class was removed.
    - The `SPFxUtils` class was removed, **but** the method `registerLiveReload` is still available as a standalone function.
    - The `FileUtils` class was removed, **but all** the methods is still available as standalone functions, although none of they uses the references to `IMimeConverter` anymore.
    - The `Utils` class was removed, **but all** the methods is still available as standalone functions.
    - `useEscape`, `useRefWithCallback` and `useEvent` hooks were removed, none of them had a real use. (And `useEvent` is not supposed to be implemented by this library).
    - Many props from `<LifecycleProgress>` was removed/changed, please view the component docs for more info.
    - All the interfaces related to these removed features were removed as well.

    
    (See more about the standalone functions on `Helper` docs on Storybook.)

- Many visual changes were made for the `<LifecycleProgress>` component, resulting in a more modern and clean look.
    - The interface `ILifecycleProgressProps` was changed, please view the component docs for more info.
    - The component no longer uses scrolling feature (So no longer importing `useIsOverflow`), now the stages are changed by 
    clicking on the arrows on the sides of the component.
    - The component focus on our internal company design philosophy, this does not mean that it's not customizable.
- `onRenderCustomComponent` prop from `IGridView` was renamed to `onRenderCustomRow`.
- `classNames` prop from `IStickerCardProps` was marked as deprecated, and will be removed in the next major release.
</details>
<br/>

<details id="v3.4.3">
<summary><b >v3.4.3</b></summary>

- Fixed `<LifecycleProgress/>` `indicatorColor` background-color to not be applied on fluentui `<Icon/>` background.
</details>
<br/>

<details id="v3.4.2">
<summary><b >v3.4.2</b></summary>

- When the `<StickerCard/>` is rendered with `isEditModeEnabled={true}`, only the new added stickers are going to have the TextField opened by default, pre-loaded `stickers` from state doesn't have the TextField opened by default.
- Added a new **`readonly`** property to `IStickerItem<T>` named `renderedOnce` which is going to be set to `true` when the sticker is added for the first time, this property should not be changed, and `onBeforeAddSticker` will just ignore modifications on it.
- With that, `onBeforeAddSticker` signature ype now omits `renderedOnce` property.
</details>
<br/>

<details id="v3.4.1">
<summary><b >v3.4.1</b></summary>

- Fixed the style of `<LifecycleProgress>` stage when it's completed, increasing it's size and correcting it's color.
</details>
<br/>

<details id="v3.4.0">
<summary><b >v3.4.0</b></summary>

This release adds a new component `<StickerCard>`, which is going to be the only card component on the future, and making `<Card />` deprecated. And talking about depreciation, some features were also marked as deprecated, and will be removed in the next major release.
    
- Fixed the bug where the `<LifecycleProgress>` prop types was not being shown when using the component.
- Added a new component called `<StickerCard>`, please wait for our new Storybook page about this component with it's documentation.
    - Maybe there will be some tiny changes on the hotfix releases.
- `SPFxUtils` class has been marked as deprecated, due to the lack of real motive of being a separated class and the only thing used being the `registerLiveReload` method (Which is still going to exist as a isolated function).
- `Utils.getSearchParamsAsObject` now logs when an error occurs while parsing the search params.

For the moment there are not documentation for the new card component, but it will be added soon.
</details>
<br/>

<details id="v3.3.0">
<summary><b >v3.3.0</b></summary>

This is a minor release that focus on fixing the `<Tooltip>` component bugs related to it's direction, so now it basically works as expected.
- Added a optional property to `<Tooltip>` called `enableParentOverflow`, which is **not** recommended to be set to `true`, only if you **truly** need that to occurs.
- Added a better documentation and examples to the `Utils` class methods.
- The `fieldName` overwritten property from `<GridView>` has been marked as deprecated, and the component no longer uses it anywhere.
- Changed `<Tooltip>` z-index from `1` to `9999`.
- General fixes and changes to the `<Tooltip>` component.
</details>
<br/>

<details id="v3.2.0">
<summary><b >v3.2.0</b></summary>

- Reduced the bundle size of the package, removing the unnecessary flunetui components from the final bundle, and not being lazy loaded anymore.
- Added a new hook called `useFileUpload`, please read the documentation on the storybook page for more details.
- The `direction` property from the `Tooltip` component does not support an enum anymore, instead it uses the raw string literals. (Since it was the same values)
- Some functionalities has been marked as deprecated, since they are going to be removed in the next major version. These are the deprecated functionalities:
    - UploadButton - Use the new hook `useFileUpload` instead, it's way more generic and works with any element.
    - useEscape - This hook wasn't very useful.
    - useEvent - Since this is going to be a official React Hook in the future, with way more advanced logic, we won't provide an basic version anymore.
    - useRefWithCallback - This hook wasn't very useful and may be considered an 'anti-pattern'.
    - The property `renderAs` from `GridView` is also going to be marked, but since it is not optional, it's not marked as deprecated yet.
- The parameter `manifest` from `SPFxUtils.registerLiveReload` type is now an `IBaseManifest` interface.
- Fixed the missing option in `ICacheOptions` `dateType` property.
</details>
<br/>

<details id="v3.1.0">
<summary><b >v3.1.0</b></summary>

This versions is an extension of the previous version minor fixes that are were all focused on `<LifeCycleProgress>` tiny fixes related to dynamic height due to the scroll behavior.
The difference is that the property `textColor` from `ILifecycleProgressProps` has been removed in order to provide a full customization to the span element with `stageTextStyle`.
</details>
<br/>

<details id="v3.0.0">
<summary><b >v3.0.0</b></summary>

This new major version focus on some aspects from the last previous released component `<LifecycleProgress>`, breaking name changes from some API methods, a new React hook, new types and some fixes.
Please view the storybook for more details of the new added features.

##### Breaking Changes
- The class `WebpartUtils` has been renamed to `SPFxUtils`, since it makes more sense, and more functionalities focused on the SPFx implementation can be added. Although the name change, no method has been changed for now.
- The name of the method `getNestedObject` from `Utils` has been renamed to `getDeepValue`, to be more concise with the name of the other methods `getDeepKeys` and `setDeepValue`.
- The properties `columnsHeight`, `containerHeight`, `gridTemplateColumn` and `infoColumnMaxWidth` from `<LifecycleProgress>` component has been removed.

##### Changes and Additions
- The stages items from `<LifecycleProgress>` no longer use the column grid layout for it's second column, now it's a flex layout where the columns grows in just one direction/row, and with a scroll if necessary.
- The optional `leftColumnHeight`, `rightColumnHeight`, `infoColumnWidth`, `stageMinWidth` and `stageHeight` properties added to the `ILifecycleProgressProps` interface.
- Adaptable height of the `<LifecycleProgress>` when the scroll is necessary.
- Two new utility types have been added: `CSSSizeUnit` and `CSSNumberFormat`, which both are used internally on `ILifecycleProgressProps`.
- A new custom React hooks called `useIsOverflow` has been added. Which can be used to determine whether an element is being overflowed or not.
- Fixed the problem from the method `getSearchParamsAsObject` from the `Utils` class where the values of the keys were being lowercased instead of the actual keys.
</details>
<br/>

<details id="v2.3.1">
<summary><b >v2.3.1</b></summary>

- Fixed the dumbest mistake of `2.3.0`, where the method `getSearchParamsAsObject` didn't return.
</details>
<br/>

<details id="v2.3.0">
<summary><b >v2.3.0</b></summary>

- Added a new utility method `getSearchParamsAsObject` to the `Utils` class.
</details>
<br/>

<details id="v2.2.4">
<summary><b >v2.2.4</b></summary>

- Added a new property to the `<GridView>` component: `leftHeaderSpace` inside `headerOptions`, which is a `React.ReactNode` element that can be placed on the left side of the header, using the previous free space from the header.
</details>
<br/>

<details id="v2.2.3">
<summary><b >v2.2.3</b></summary>

- The same fix from the previous version, with the value also being changed to inactive indicators.
</details>
<br/>

<details id="v2.2.2">
<summary><b >v2.2.2</b></summary>

- Changed the size of the indicator from `LifecycleProgress` from 24px to 20px, removing the unnecessary border when the stage is not active.
</details>
<br/>

<details id="v2.2.1">
<summary><b >v2.2.1</b></summary>

- Fixed a bug, where the progress bar color from `LifecycleProgress` was using the `stageBgColor` property instead of the `indicatorColor` property.
</details>
<br/>

<details id="v2.2.0">
<summary><b >v2.2.0</b></summary>

- Fixed the `react` and `react-dom` dependencies to correctly use `^16.9.0` by default, which the core library uses, changing to the classic `jsxRuntime` on vite.
</details>
<br/>

<details id="v2.1.1">
<summary><b >v2.1.1</b></summary>

- Fixed how `LifecycleProgress` renders the keys from it's children.
</details>
<br/>

<details id="v2.1.0">
<summary><b >v2.1.0</b></summary>

- Created a new component called `LifecycleProgress`, in which it was used and implemented in a non-generic way internally in our company, and now is public and generic.
Please view the documentation for more information.
</details>
<br/>

<details id="v2.0.0">
<summary><b >v2.0.0</b></summary>

Although this is a major release, not many aspects from functionalities have changed.
The main goal of this release is to change the internal way of how the library is bundled and structured, 
changing from all the complicated and manual webpack4 configuration to a simple and easy to use configuration using `vite`, from both the library itself and the development/test environment.
With an easy to deploy, test and way faster build process, it will be a lot easier for us to maintain the library.

To import all the functionalities of the library, you only need to import from the library itself, and not the `dist` folder anymore:
```ts
    import {GridView, Utils} from 'trentim-react-sdk';
```

#### Changes:
- All the utilities types are now exported from the `bakutils-types` module, which is a separate package.
- All the imports now comes from `trentim-react-sdk` only.
- The way how files are bundled is now changed to use `vite` instead of `webpack4` boilerplate from `dyna-ts-react-module-boilerplate`.
- For now, the storybook documentation doesn't support automatically generated types from the components, but it will be re-added soon.
</details>
<br/>