const json_server=require('json-server')
const cors=require('cors')


const smServer=json_server.create()
const middleware=json_server.defaults()
const routes=json_server.router('data.json')

smServer.use(cors())
smServer.use(middleware)
smServer.use(routes)

const PORT=8000
smServer.listen(PORT,()=>{
    console.log(`__smServer started at port ${PORT}__`);
    
})