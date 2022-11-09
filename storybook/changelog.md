## Changelog

### v.3.4.3
- Fixed `<LifecycleProgress/>` `indicatorColor` background-color to not be applied on fluentui `<Icon/>` background.

### v3.4.2
- When the `<StickerCard/>` is rendered with `isEditModeEnabled={true}`, only the new added stickers are going to have the TextField opened by default, pre-loaded `stickers` from state doesn't have the TextField opened by default.
- Added a new **`readonly`** property to `IStickerItem<T>` named `renderedOnce` which is going to be set to `true` when the sticker is added for the first time, this property should not be changed, and `onBeforeAddSticker` will just ignore modifications on it.
- With that, `onBeforeAddSticker` signature ype now omits `renderedOnce` property.

### v3.4.1
- Fixed the style of `<LifecycleProgress>` stage when it's completed, increasing it's size and correcting it's color.

### v3.4.0
This release adds a new component `<StickerCard>`, which is going to be the only card component on the future, and making `<Card />` deprecated. And talking about depreciation, some features were also marked as deprecated, and will be removed in the next major release.
    
- Fixed the bug where the `<LifecycleProgress>` prop types was not being shown when using the component.
- Added a new component called `<StickerCard>`, please wait for our new Storybook page about this component with it's documentation.
    - Maybe there will be some tiny changes on the hotfix releases.
- `SPFxUtils` class has been marked as deprecated, due to the lack of real motive of being a separated class and the only thing used being the `registerLiveReload` method (Which is still going to exist as a isolated function).
- `Utils.getSearchParamsAsObject` now logs when an error occurs while parsing the search params.

For the moment there are not documentation for the new card component, but it will be added soon.

### v3.3.0
This is a minor release that focus on fixing the `<Tooltip>` component bugs related to it's direction, so now it basically works as expected.
- Added a optional property to `<Tooltip>` called `enableParentOverflow`, which is **not** recommended to be set to `true`, only if you **truly** need that to occurs.
- Added a better documentation and examples to the `Utils` class methods.
- The `fieldName` overwritten property from `<GridView>` has been marked as deprecated, and the component no longer uses it anywhere.
- Changed `<Tooltip>` z-index from `1` to `9999`.
- General fixes and changes to the `<Tooltip>` component.

### v3.2.0
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

### v3.1.0
This versions is an extension of the previous version minor fixes that are were all focused on `<LifeCycleProgress>` tiny fixes related to dynamic height due to the scroll behaviour.
The difference is that the property `textColor` from `ILifecycleProgressProps` has been removed in order to provide a full customization to the span element with `stageTextStyle`.

### v3.0.0
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

### v2.3.1
- Fixed the dumbest mistake of `2.3.0`, where the method `getSearchParamsAsObject` didn't return.

### v2.3.0
- Added a new utility method `getSearchParamsAsObject` to the `Utils` class.

### v2.2.4
- Added a new property to the `<GridView>` component: `leftHeaderSpace` inside `headerOptions`, which is a `React.ReactNode` element that can be placed on the left side of the header, using the previous free space from the header.

### v2.2.3
- The same fix from the previous version, with the value also being changed to inactive indicators.

### v2.2.2
- Changed the size of the indicator from `LifecycleProgress` from 24px to 20px, removing the unnecessary border when the stage is not active.

### v2.2.1
- Fixed a bug, where the progress bar color from `LifecycleProgress` was using the `stageBgColor` property instead of the `indicatorColor` property.

### v2.2.0
Fixed the `react` and `react-dom` dependencies to correctly use `^16.9.0` by default, which the core library uses, changing to the classic `jsxRuntime` on vite.

### v2.1.1
- Fixed how `LifecycleProgress` renders the keys from it's children.

### v2.1.0
- Created a new component called `LifecycleProgress`, in which it was used and implemented in a non-generic way internally in our company, and now is public and generic.
Please view the documentation for more information.

### v2.0.0
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
- For now, the storybook documentation doesnt support automatically generated types from the components, but it will be re-added soon.

### v1.5.0 & v1.5.1
- Just internal changes from some tests, nothing changed on behaviour.

### v1.4.6
- Fixed problem from `1.4.5` for real 😅

### v1.4.5

- Fixed `GridView` not working due to undefined values being passed to `Utils.getDeepValue`

### v1.4.4

- Added the first change log.
- Documentation for the `Decorators`, `Utils` and `FileUtils` added.
- `Utils` class method types changed:
    - `getDeepKeys` and `getDeepValue` now have an advanced type inference for the given and returned paths.
    - `getDeepValue` second parameter changed from a `string[]` to a `string`, which by default it's type is inferred from the base object.