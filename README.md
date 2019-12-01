# NodeJs - API para candidatura de vagas

## Documentação Postman
	https://documenter.getpostman.com/view/1261739/SWDzeLgW

## Start

### 1. Install Node.JS latest version
### 2. Install PostgreSQL
### 3. Clone this repository
### 4. Install dependencies, just run in project folder: npm install

## Config

### modifique o nome do arquivo .env.example para .env e ajuste a configuração:
	PORT=3000
	DATABASE=postgres://postgres:password@localhost:5432/databasename
	SECRET=mysupersecret


## Init
	Ao iniciar o app.js, é criada as tabelas necessárias da API.

## Especificações de Utilização

### **Sign**

	Login:
		POST http://localhost:3000/login
		informar email e password.
		Exemplo: { "email": "admin", "password": "admin" }
		Result: Status 200 (OK) 
			Status 500 (Login inválido!)

### **Users**

	GET:
		GET http://localhost:3000/users
		Retorna a lista de usuários.
	
		GET http://localhost:3000/users/{id}
		Retorna usuário por ID.
	
	POST:
		POST http://localhost:3000/users/add
		Exemplo: { "name": "admin", "email": "admin", "password": "admin" }
			name = nome do usuarios;
			email = email do usuário (utilizado para login);
			password = senha do usuário para login;
		Result: Status 200 - OK 
			Status 400 - Erro
				
## **Candidates**
	
	GET:
		GET http://localhost:3000/candidates
		Retorna a lista de candidatos.
		
		GET http://localhost:3000/candidates/{id}
		Retorna candidato por ID.

	POST:
		POST http://localhost:3000/candidates/add
		Exemplo: { "name": "teste", "email": "teste@hotmail.com", "phone": "53999999999", "cpf": "00000000000" }				
			name: Nome do candidato;
			email: email do candidato;
			phone: telefone do candidato;
			cpf = CPF do candidato;
		Result: Status 200 - OK 
			Status 400 - Erro

## **Jobs**
	
	GET:
		GET http://localhost:3000/jobs
		Retorna a lista de vagas.
		
		GET http://localhost:3000/jobs/{id}
		Retorna vaga por ID.

	POST:
		POST http://localhost:3000/vagas/add
		Exemplo: { "company": "Nave", "title": "Back-End", "description": "TESTE" }				
			company: Nome da empresa;
			title: Titulo da vaga;
			description: descrição da vaga;
		Result: Status 200 - OK 
			Status 400 - Erro				

## **CandidateJob**
	
	GET:
		GET http://localhost:3000/candidatejob
		Retorna a lista de candidatos e suas vagas.
		
		GET http://localhost:3000/candidatejob/{id}
		Lista a relação do candidato e vaga por ID.

		GET http://localhost:3000/candidatejob/candidateId/{id}
		Lista relação do candidato e vaga por ID do candidato.

		GET http://localhost:3000/candidatejob/jobId/{id}
		Lista relação do candidato e vaga por ID da vaga.


	POST:
		POST http://localhost:3000/candidatejob/add
		Exemplo: { "candidateId": "b9c1db25-cf92-4854-9adf-590ad9b3af4f", "jobId": "92a23424-8858-4366-862b-d8243b66e113", "comment": "TESTE" }				
			candidateId: ID do candidato;
			jobId: ID da vaga;
			comment: comentarios sobre o candidato;
		Result: Status 200 - OK 
			Status 400 - Erro