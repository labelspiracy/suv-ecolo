import React from 'react';
import './globals.css'

export const metadata = {
    title: 'Meilleur SUV écolo',
    description: 'Trouvez le SUV le plus écologique pour vos besoins'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
