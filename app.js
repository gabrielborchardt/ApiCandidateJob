require("dotenv").config();

const app = require('./config/appConfig');
const login = require('./routes/loginRouter');
const users = require('./routes/userRouter');
const candidates = require('./routes/candidateRouter');
const jobs = require('./routes/jobRouter');
const candidateJob = require('./routes/candidateJobRouter');
const dbInit = require('./database/init.js')

//Acesso inicial
app.get('/', (req, res) =>{
    res.end('API OK');
})

//Rota de Login
app.use('/login', login);

//Rota de Usuarios
app.use('/users', users);

//Rota de Candidatos
app.use('/candidates', candidates);

//Rota das Vagas
app.use('/jobs', jobs)

//Rota das Candidaturas
app.use('/candidateJob', candidateJob)