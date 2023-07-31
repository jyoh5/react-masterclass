// https://styled-components.com/docs/api#typescript
// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    cardBgColor: string;
    cardTextColor: string;
    accentColor: string;
  }
}