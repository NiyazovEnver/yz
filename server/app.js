const express = require('express');
const DB = require('./db');
const config = require('./config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const db = new DB("sqlitedb")
const app = express();
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)


router.post('/register', function(req, res) {
    db.insert([
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 8)
    ],
    function (err) {
        if (err) return res.status(500).send("There was a problem registering the user.")
        db.selectByEmail(req.body.email, (err,user) => {
            if (err) return res.status(500).send("There was a problem getting user")
            let token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token, user: user });
        });
    });
});

router.post('/register-admin', function(req, res) {
    db.insertAdmin([
        req.body.name,
        req.body.email,
        bcrypt.hashSync(req.body.password, 8),
        1
    ],
    function (err) {
        if (err) return res.status(500).send("There was a problem registering the user.")
        db.selectByEmail(req.body.email, (err,user) => {
            if (err) return res.status(500).send("There was a problem getting user")
            let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token, user: user });
        });
    });
});

router.post('/login', (req, res) => {
    db.selectByEmail(req.body.email, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.user_pass);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        let token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token, user: user });
    });
});

router.post('/addProjects', upload.array('img'), (req, res) => {
  // const fs = require('fs');
  // const file = fs.readFileSync(req.file.path);
  // debugger;
  console.log('saving file as ', req.file.path);
  db.insertProject([
      req.body.title,
      req.body.description,
      req.files.map(f => f.path).join(','),
    ],
    function (err) {
      console.log('Error', err)
      if (err) return res.status(500).send("Error");
      res.status(200).send("Ok")
      // db.selectProjects((err, projects) => {
      //     console.log(err, ' ', projects)
      //     if (err) return res.status(500).send("There was a problem getting project");
      //     res.status(200).send(projects);
      // });
    });
});

router.get('image/:image_id', (req, res) => {
  return res.sendFile(fs.readFileSync('../uploads/' + req.image_id));
});

// router.post('/addProjects', (req, res) => {
//   console.log(req);
//   console.log(req.body);
//     db.insertProject([
//         req.body.title,
//         req.body.description,
//         req.body.img
//
//     ],
//     function (err) {
//         console.log('Error', err)
//         if (err) return res.status(500).send("Error");
//         res.status(200).send("Ok")
//         // db.selectProjects((err, projects) => {
//         //     console.log(err, ' ', projects)
//         //     if (err) return res.status(500).send("There was a problem getting project");
//         //     res.status(200).send(projects);
//         // });
//     });
// })

router.get('/projects', (req, res) =>{
    db.selectProjects((err, projects) => {
        debugger;
        const fs = require('fs');
        if (err) return res.status(500).send("There was a problem getting project");
        for (const project of projects) {
          try {
            project.img = fs.readFileSync(project.img).toString('base64');
          } catch {
            console.warn(`Warning: couldn't read image ${project.img}`);
          }
        }
        res.status(200).send(projects);
    });
})

app.use(router)
app.use(express.urlencoded({extended: true}))
let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});
