## Changelog

### v3.0.3
- Fixes for the height behavior of the `<LifecycleProgress>`.

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
