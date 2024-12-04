import { Colors } from './types'

const white = '#FFFFFF'
const black = '#000000'

function colors(darkMode: boolean): Colors {
  return {
    darkMode,
    // base
    white,
    black,

    // backgrounds / greys
    neutral8: darkMode ? '#191A22' : '#FCFCFD',
    neutral7: darkMode ? '#21222C' : '#E2E4EA',
    neutral6: darkMode ? '#313341' : '#9EA3B2',
    neutral5: darkMode ? '#444855' : '#72788C',
    neutral4: darkMode ? '#72788C' : '#444855',
    neutral3: darkMode ? '#9EA3B2' : '#313341',
    neutral2: darkMode ? '#E2E4EA' : '#21222C',
    neutral1: darkMode ? '#FCFCFD' : '#191A22',

    //primary colors
    primary1: '#04E89B',
    primary2: '#4FEFB9',

    // secondary colors
    secondary1: '#3E86FF',
    secondary2: '#34B2FF',
    secondary3: '#27DAF7',
    secondary4: '#16E1CA',

    // other
    yellow1: '#FFC634',
    red1: '#FF3E6C',
    green1: '#04E89B',

    modalBG: darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.6)',
  }
}

export default colors
