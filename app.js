import express from "express";
const api = express ();
api.use(express.json())

api.get('/ola', (req,resp) => 
resp.send('Olá mundo !!!!')
);


api.get('/mensagem/apre', (req,resp) =>

    resp.send('Olá sejam bem vindos ao treino de api do Tukis')
);

api.get('/v2/mensagem/apre', (req,resp) =>
resp.send('Olá, você está na segunda versão da api')
);

api.get('/mensagem/ocupado', (req,resp) =>(
    resp.send('Olá, você está na API do tukis, mas estou ocupado no momento')
));

api.get('/mensagem/ocupado/mensagem', (req,resp) =>(
    resp.send('Olá, você está na API do tukis, mas estou ocupado no momento, deixe uma mensagem no email: XXX')
));


//PARÂMETRO DE ROTA

api.get('/calculo/soma/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let soma = n1 + n2;

    resp.send({
        soma: soma
    })

})

api.get('/calculo/subtrair/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let sub = n1 - n2;

    resp.send({
        resultado: sub
    })
});

api.get('/calculo/multiplicar/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let mult = n1 * n2;

    resp.send({
        resultado: mult
    }) 
});


api.get('/calculo/dividir/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let divi = n1 / n2;

    resp.send({
        resultado: divi
    })
});

//PARÂMETRO DE QUERY

api.get('/calculo/somar2', (req,resp) => {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);

    let sum = n1 + n2;
    
    resp.send({
        resultado: sum
    })
});
//nesse caso nós escreveriamos o endereço da seguinte forma:
// http://localhost:5010/calculo/somar?n1=...&n2=...


//'??' significa que caso a pessoa não colocar nada, ou seja, a resposta for indefinida, aparecerá outra coisa 
api.get("/pessoa/tu", (req,resp) => {
    let pessoa = req.query.eu ?? 'pessoa';

    resp.send('olá ' + pessoa + ' tudo bem?')
});
//nesse caso nós escreveriamos o endereço da seguinte forma:
// http://localhost:5010/pessoa/tu?eu=...


api.get('/calculo/subtrair2', (req,resp) => {
    let n1 = req.query.n1;
    let n2 = req.query.n2;

    let sub = n1 - n2;

    resp.send({
        resultado: sub
    })
});

//PARÂMETROS DE CORPO
//O parâmetro de corpo não funciona com com o get mas sim com o post, pois passa um objeto e não um valor específico
//ao informar o nome do objeto é necessário as aspas para funcionar no formato JSON
//e é necessário colocar lá em cima a seguine frase para habilitar a leitura do body : api.use(express.json())

api.post('/calcular/media', (req,resp) => {
    let n1 = req.body.n1;
    let n2 = req.body.n2;
    let n3 = req.body.n3;

    let media = (n1 + n2 + n3) / 3;

    resp.send({
        resultado : media
    })
})

//{
// "n1": 6,
// "n2":7,
// "n3":8
//}

api.post('/pessoa/infos', (req,resp) => {
    let nome = req.body.nome;
    let idade = req.body.idade;

    resp.send('Olá ' +nome + ',legal saber que você tem ' + idade + 'anos');
})




api.listen(5010, () => console.log('API Subiu com sucesso!!!'));




