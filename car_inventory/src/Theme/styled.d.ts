import 'styled-components';
import { Theme } from '@mui/material/styles';


// overridding styled-components using the Theme module
// anywhere we are referecing theme in our styled components it will look @ OUR module

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}