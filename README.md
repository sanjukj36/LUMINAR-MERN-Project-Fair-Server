 EXPRESS js Node Js Framework
 _____________________________

1. Create a folder for server
2. create Package.json file: 'npm init -y'( configuration file)
3. Update script in Package.json file as "start": "node index.js" instead of text
        "scripts": {
            "start": "node index.js"
        },
4. Install external package build server
    -express, cors (for sharing data ) , dotenv
        "npm i express cors dotenv"
5. Create .env file to add environment variable used for env process
6. Create .gitignore file to add files to be ignored
7. Create index.js file : define server
    - import express, cors, dotenv
    - create express server
        in index.js
        const pfServer = express()
    - use core in  
        in index.js
        const pfServer = express()
        pfServer.use(cors())
    - set up port 
        const PORT =3000 || process.env.PORT
    - Run the server to listen client request
        pfServer.listen(PORT,()=>{
            console.log(`project fair server started at port ${PORT}`);
        })
        - to resolve http request using express
            - express-server,httprequest(path,callback)
                    pfServer.get("/",(req,res)=>{
                    res.status(200).send(`<h1 style= "color:red"> Project Server started and waiting for client request!!! </h1>`)
                    })
        - to setup independent router for each request in express server
            - Create router folder create router.js inside it
             
             

8. To Run Server app: node.js /nodemon index.js
