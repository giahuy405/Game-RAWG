import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
    config,
    colors: {
        gray: {
            50: '#def0ff',
            100: "#afd0ff",
            200: "#7db0ff",
            300: "#4b91ff",
            400: "#1a71ff",
            500: "#0058e6",
            600: "#0044b4",
            700: "#003182",
            800: "#001d51",
            900: "#000a21"
        }
    }
})

export default theme