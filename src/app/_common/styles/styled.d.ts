import 'styled-components';
import { Color } from './theme/color';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
  }
}
