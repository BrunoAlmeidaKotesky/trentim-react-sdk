import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { GridViewListExample } from './GridViewListExample';
import { GridViewCardExample } from './GridViewCardExample';

let hmrUpdate: undefined | (() => void);
loadTheme({
  defaultFontStyle: { fontFamily: 'Roboto', fontWeight: 'regular' },
  fonts: {
    small: {
      fontSize: '12px',
    },
    medium: {
      fontSize: '16px',
    },
    large: {
      fontSize: '20px',
    },
    xLarge: {
      fontSize: '24px',
    },
  },
  palette: {
    themePrimary: '#27d6f2',
    themeLighterAlt: '#f6fdfe',
    themeLighter: '#dbf8fd',
    themeLight: '#bcf3fb',
    themeTertiary: '#7be7f7',
    themeSecondary: '#40dcf4',
    themeDarkAlt: '#23c2da',
    themeDark: '#1da3b8',
    themeDarker: '#167888',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#fff',
  },
});


initializeIcons();
const Demo = (): JSX.Element => {
  const [hotRefreshCounter, setHotRefreshCounter] = React.useState<number>(0);
  hmrUpdate = () => setHotRefreshCounter(hotRefreshCounter + 1);
  return (
    <div style={{
      width: '100%', height: '100vh',
      backgroundColor: '#85FFBD',
      backgroundImage: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'
    }}>
      <div style={{ display: "grid", placeItems: "center", margin: "0 auto", height: "100%" }}>
        <GridViewListExample/>
        <GridViewCardExample/>
      </div>
    </div>);
};

ReactDOM.render(<Demo />, document.getElementById('dyna-module-root'));

// Todo: fixme: callbacks are not called, only page refresh is taking place.
if (module?.hot) {
  module?.hot?.accept('../src', function () {
    console.log('Accepting the updated module under src');
    hmrUpdate && hmrUpdate();
  });
}