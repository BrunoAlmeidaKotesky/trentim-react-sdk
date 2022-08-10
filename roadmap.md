
## Trentim React SDK futures releases roadmap

This new page is intended to introduce the new features and bug fixes we are in fact going to implement on the most recent newer versions.

#### V.4.0.0
- Fix the limitation on `<GridView>` where you can't filter items and group them at the same time correctly.
- Major general improvements and changes on `<GridView>` API.
    - Removal of some properties of the interface.
    - Addition of new features.
    - General review from all the functionalities, rethink of how of the them work internally and what can be removed and changed.
    - _Maybe renaming the component and making the `<Card>` of the component injectable as a plugin._
- Fix the `<Tooltip>` component position, being sure that it always appears on the correct chosen side regardless of the wrapper size.
- Add the functionalities to the `SPFxUtils` class and change the behavior of the existing ones.
- Removal of some hooks and methods in general that are rarely needed. E.g (`useEvent`, `useRefWithCallback`, some methods of `FileUtils` and more...).
- Introduction of new features, like new React components, useful hooks and utility methods.
- ~~Making the documentation more readable and easier.~~ Can be done before this version is released.