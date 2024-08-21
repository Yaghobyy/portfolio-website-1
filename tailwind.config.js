tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto' :'repeat(auto-fit,minmax(200px,1fr))'
            },
            animation: {
                'spin_slow': 'spin 6s linear infinite',
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f',
            }
        }
    },
    darkMode: 'selector',
}