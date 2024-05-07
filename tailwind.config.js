/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors: {
            Body: '#F2F5F7',

            // Blue Shades
            PrimaryBlue: '#00A1FF',
            Blue1: '#006199',
            Blue2: '#0081CC',
            Blue3: '#33B4FF',
            Blue4: '#66C7FF',
            Blue5: '#2D88BD',

            // Black Shades
            Dark1: '#182021',
            Dark2: '#7B8889',

            // Grey Shades
            PrimaryGrey: '#BDC3C4',
            Grey1: '#DADEDF',
            Grey2: '#F2F2EF',

            // Cyan Shades
            PrimaryCyan: '#01CEA5',
            Cyan1: '#017C63',
            Cyan2: '#01A584',
            Cyan3: '#32D8B7',
            Cyan4: '#64E2C9',

            // Pink Shades
            PrimaryPink: '#FF40B3',
            Pink1: '#A22671',
            Pink2: '#D13392',
            Pink3: '#FF66C2',
            Pink4: '#FF8CD1',

            // Violet Shades
            PrimaryViolet: '#C24DFB',
            Violet1: '#7D2FA3',
            Violet2: '#9F3ECF',
            Violet3: '#CE71FC',
            Violet4: '#DA94FD',

            // Yellow Shades
            PrimaryYellow: '#FFD800',
            Yellow1: '#998200',
            Yellow2: '#CCAD00',
            Yellow3: '#FFE033',
            Yellow4: '#FFE866',
            Yellow5: '#FFDF2B',

            // Alert & Status
            PrimarySuccess: '#41B56F',
            PrimaryError: '#D86161',
            PrimaryDisabled: '#8A8A8A',
            SecondaryDisabled: '#D8D8D8',
            PrimaryDisBtn: '#879AC1',
            PrimaryInfo: '#9B59B6',
            PrimaryWarning: '#E2B84F',
            SecondaryWarning: '#E1934B',

            // Others
            DarkTan: '#988558',
            DarkOrange: '#FF8C00',
        },
        fontSize: {
            xs: '11px',
            sm: '12px',
            base1: '14px',
            base2: '16px',
            md: '18px',
            lg: '20px',
            xl: '22px',
            '2xl': '24px',
            '3xl': '28px',
            '4xl': '32px',
            '5xl': '36px',
            '6px': '45px',
            '7xl': '57px',
        },
        fontWeight: {
            light: 300,
            base: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        borderRadius: {
            none: '0px',
            sm: '5px',
            base: '10px',
            lg: '15px',
            xl: '20px',
            '2xl': '25px',
            '3xl': '30px',
        },
        padding: {
            none: '0px',
            sm: '5px',
            base: '10px',
            lg: '15px',
            xl: '20px',
            '2xl': '25px',
            '3xl': '30px',
        },
        margin: {
            none: '0px',
            sm: '5px',
            base: '10px',
            lg: '15px',
            xl: '20px',
            '2xl': '25px',
            '3xl': '30px',
        },
        screens: {
            md: '769px',
            lg: '1024px',
            xl: '1366px',
            '2xl': '1440px',
            base: '1920px',
        },
        width: {
            sm: '20px',
            md: '40px',
            lg: '80px',
            xl: '160px',
            '2xl': '320px',
        },
        height: {
            sm: '2px',
            md: '4px',
            lg: '8px',
            xl: '16px',
            '2xl': '32px',
            '3xl': '64px'
        }
    },
},
  plugins: [],
}


