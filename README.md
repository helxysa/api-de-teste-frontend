
## API simulada simples construída com Express.js e Supabase para auxiliar no teste e desenvolvimento frontend.

## Tecnologias Utilizadas

- Express.js
- Supabase

## Como Começar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente:
   ```
   SUPABASE_URL=sua_url_supabase
   SUPABASE_KEY=sua_chave_supabase
   ```
4. Inicie o servidor: `npm run dev`


ou apenas ultilize na vercel: https://api-de-teste-frontend.vercel.app/


## Endpoints da API

```

router.get('/api/items', UserController.getAll)
router.post('/api/items', UserController.create)
router.put('/api/items/:id', UserController.update)
router.delete('/api/items/:id', UserController.delete)


```

## Contribuição

Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

MIT