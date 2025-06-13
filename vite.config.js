    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react' // If you are using React
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
      plugins: [
        react(), // If you are using React
        tailwindcss(),
      ],
    })
    