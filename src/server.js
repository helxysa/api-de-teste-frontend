import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import { router } from '../routes/routes.js'
app.use(router)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 50px; max-width: 1200px; margin: 0 auto; background-color: #1c1c1c; min-height: 100vh; color: white;">
            <h1 style="font-size: 4em; font-weight: 600; margin-bottom: 20px; background: linear-gradient(90deg, #fff 0%, #e0e0e0 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">API de Testes</h1>
            <p style="color: #a0a0a0; font-size: 1.4em; margin-bottom: 50px; max-width: 800px; margin-left: auto; margin-right: auto;">Esta é uma API de demonstração que suporta as seguintes operações:</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; padding: 20px;">
                <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <h3 style="color: #27ae60; font-size: 1.8em; margin-bottom: 15px;">GET</h3>
                    <p style="color: #888;">Buscar dados</p>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <h3 style="color: #2980b9; font-size: 1.8em; margin-bottom: 15px;">POST</h3>
                    <p style="color: #888;">Criar novos registros</p>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <h3 style="color: #c0392b; font-size: 1.8em; margin-bottom: 15px;">DELETE</h3>
                    <p style="color: #888;">Remover registros</p>
                </div>
                <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                    <h3 style="color: #8e44ad; font-size: 1.8em; margin-bottom: 15px;">UPDATE</h3>
                    <p style="color: #888;">Atualizar registros existentes</p>
                </div>
            </div>
            <a href="/routes" style="display: inline-block; margin-top: 50px; padding: 15px 40px; background: linear-gradient(90deg, #3498db, #2980b9); color: white; text-decoration: none; border-radius: 30px; font-weight: 500; font-size: 1.1em; transition: transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(52,152,219,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">Ver Todas as Rotas</a>
        </div>
    `)
})

app.get('/routes', (req, res) => {
    res.send(`
        <div style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 50px; max-width: 800px; margin: 50px auto;">
            <h1 style="color: #2c3e50; margin-bottom: 30px;">Rotas Disponíveis</h1>
            <div style="text-align: left; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #27ae60;">GET /api/items</h3>
                    <p style="color: #7f8c8d;">Retorna todos os itens</p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #2980b9;">POST /api/items</h3>
                    <p style="color: #7f8c8d;">Cria um novo item</p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #c0392b;">DELETE /api/items/:id</h3>
                    <p style="color: #7f8c8d;">Remove um item específico</p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h3 style="color: #8e44ad;">PUT /api/items/:id</h3>
                    <p style="color: #7f8c8d;">Atualiza um item específico</p>
                </div>
            </div>
            <a href="/" style="display: inline-block; margin-top: 30px; padding: 15px 30px; background-color: #3498db; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;">Voltar</a>
        </div>
    `)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})