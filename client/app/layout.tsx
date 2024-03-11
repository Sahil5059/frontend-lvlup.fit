//imports
import "./globals.css";
import { ThemeProvider } from './utils/ThemeProvider';

//3(b).light/dark-theme
export default function RootLayout({ children }:Readonly<{ children:React.ReactNode }>){
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          { children }
        </ThemeProvider>
      </body>
    </html>
  )
}
//now, move to "../../tailwind.config.ts"
