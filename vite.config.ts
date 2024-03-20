import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'    //this comes from types/node package

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: "@", replacement: path.resolve(__dirname, "src")}]  //it will do the @ at the path from wherever we are importing
    // then in the tsconfig.json m jake paths wali field add krni hoti h
  }
})
