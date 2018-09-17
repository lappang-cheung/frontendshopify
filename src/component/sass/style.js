import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'sans-serif'
  },
  'wrapper': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(2, 1fr)'
  },
  'wrapper header': {
    'gridColumnStart': '1',
    'gridColumnEnd': '3',
    'gridRowStart': '1',
    'gridRowEnd': '2',
    'padding': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#7433f1'
  },
  'wrapper header_title': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'textAlign': 'center',
    'color': '#ffffff'
  },
  'wrapper leftSide searchField': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(5, 1fr)',
    'paddingTop': [{ 'unit': 'em', 'value': 3 }],
    'gap': '20px'
  },
  'wrapper leftSide searchField input': {
    'gridColumnStart': '1',
    'gridColumnEnd': '4',
    'borderRadius': '4px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'grey' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }],
    'fontWeight': '400'
  },
  'wrapper leftSide searchField searchBtn': {
    'gridColumn': '4'
  },
  'wrapper leftSide table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'em', 'value': 3 }],
    'paddingLeft': [{ 'unit': 'em', 'value': 5 }]
  },
  'wrapper leftSide table tr': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(4, 1fr)',
    'textAlign': 'left'
  },
  'wrapper rightSide': {
    'backgroundColor': '#f3ecfe',
    'height': [{ 'unit': 'vh', 'value': 89 }]
  },
  'wrapper rightSide table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'em', 'value': 3 }],
    'paddingLeft': [{ 'unit': 'em', 'value': 5 }]
  },
  'wrapper rightSide table tr': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(4, 1fr)',
    'textAlign': 'left'
  },
  'searchBtn': {
    'display': 'inline-block',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '5px',
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none',
    'background': '#7433f1',
    'color': '#ffffff',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'cursor': 'pointer',
    'textAlign': 'center'
  },
  'disabled': {
    'visibility': 'hidden'
  },
  'active': {
    'visibility': 'visible'
  },
  'clean': {
    'textDecoration': 'none',
    'color': '#000000'
  },
  'bookmark': {
    'color': '#7433f1'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'sans-serif'
  },
  'wrapper': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(2, 1fr)'
  },
  'wrapper header': {
    'gridColumnStart': '1',
    'gridColumnEnd': '3',
    'gridRowStart': '1',
    'gridRowEnd': '2',
    'padding': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#7433f1'
  },
  'wrapper header_title': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'textAlign': 'center',
    'color': '#ffffff'
  },
  'wrapper leftSide searchField': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(5, 1fr)',
    'paddingTop': [{ 'unit': 'em', 'value': 3 }],
    'gap': '20px'
  },
  'wrapper leftSide searchField input': {
    'gridColumnStart': '1',
    'gridColumnEnd': '4',
    'borderRadius': '4px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'grey' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }],
    'fontWeight': '400'
  },
  'wrapper leftSide searchField searchBtn': {
    'gridColumn': '4'
  },
  'wrapper leftSide table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'em', 'value': 3 }],
    'paddingLeft': [{ 'unit': 'em', 'value': 5 }]
  },
  'wrapper leftSide table tr': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(4, 1fr)',
    'textAlign': 'left'
  },
  'wrapper rightSide': {
    'backgroundColor': '#f3ecfe',
    'height': [{ 'unit': 'vh', 'value': 89 }]
  },
  'wrapper rightSide table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingTop': [{ 'unit': 'em', 'value': 3 }],
    'paddingLeft': [{ 'unit': 'em', 'value': 5 }]
  },
  'wrapper rightSide table tr': {
    'display': 'grid',
    'gridTemplateColumns': 'repeat(4, 1fr)',
    'textAlign': 'left'
  },
  'searchBtn': {
    'display': 'inline-block',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '5px',
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none',
    'background': '#7433f1',
    'color': '#ffffff',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'cursor': 'pointer',
    'textAlign': 'center'
  },
  'disabled': {
    'visibility': 'hidden'
  },
  'active': {
    'visibility': 'visible'
  },
  'clean': {
    'textDecoration': 'none',
    'color': '#000000'
  },
  'bookmark': {
    'color': '#7433f1'
  }
});
