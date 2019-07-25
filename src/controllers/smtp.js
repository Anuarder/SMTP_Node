const nodemailer = require('nodemailer');

module.exports = {
    async sendMessage(req, res) {
        try {
            let transporter = nodemailer.createTransport({
                pool: true,
                host: "smtp.yandex.ru",
                port: 465,
                secure: true,
                auth: {
                    user: "",
                    pass: ""
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            let message = {
                from: "",
                to: "",
                subject: req.body.subject,
                text: req.body.message,
                html: `<p>${req.body.message.toString()}</p>`
            };
            
            await transporter.sendMail(message);

            res.send({
                message: "Message has been sent"
            });
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },
    async sendPhone(req, res) {
        try {
            let transporter = nodemailer.createTransport({
                pool: true,
                host: "smtp.yandex.ru",
                port: 465,
                secure: true,
                auth: {
                    user: "admin@keocs.kz",
                    pass: "Cooldog0303$"
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            let message = {
                from: "",
                to: '',
                subject: 'Заявка на звонок',
                text: `Имя: ${req.body.name}, Телефон: ${req.body.phone}`,
                html: `<p>Имя: ${req.body.name}</p> Телефон: <a href="tel:${req.body.phone}">${req.body.phone}</a>`
            };
            
            await transporter.sendMail(message);

            res.send({
                message: "Message has been sent"
            });
        } catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    },
    async sayHello(req, res){
        try{
            res.send("<h1>All work</h1>");
        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
}
