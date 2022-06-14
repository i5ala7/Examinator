const router = require("express").Router();
let { User } = require('../models/users-model');
const bcrypt = require("bcrypt");
const Joi = require("joi");
const nodemailer = require('nodemailer')



router.route('/admin').post( async (req, res) => {
	try {
		
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email , role: "Admin"});
		if (!user)

			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		
			
		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
		
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
	
});

router.route('/teacher').post( async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email , role: "Teacher"});
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
		
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


router.route('/student').post( async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email , role: "Student"});
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.route('/observer').post( async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email , role: "Observer"});
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.route('/verify').post( async () => {
	try{
		let mailTransport = nodemailer.createTransport({
			service: 'hotmail',
			auth: {
				user : "salah.merouani13@outlook.com",
				pass: "Salah@1304",
			},
		});
		
		
		
		
		const details = {
			from: "salah.merouani13@outlook.com",
			to: "salah.merouani@univ-constantine2.dz",
			subject: "verify your login",
			html: '<p>Enter <b>7529</b> to verify your login </p>',
		};
		
		
		
		mailTransport.sendMail(details , (err)=> {
			if(err){
				console.log(err)
			}
			else {
				console.log('email sent seccessfully')
			}
		})



	}catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}

})






 const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
 		password: Joi.string().required().label("Password"),
 	});
 	return schema.validate(data);
 };




 

module.exports = router;
