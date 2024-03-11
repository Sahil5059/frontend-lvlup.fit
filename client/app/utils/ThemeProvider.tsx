//imports
'use client';
import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types'; //beacuse we are using typescript

//3(a).light/dark-theme
export function ThemeProvider({ children, ...props }:ThemeProviderProps ){
    return <NextThemesProvider {...props}>
                { children }
           </NextThemesProvider>
}
//now, move to "../layout.tsx"