// File: ProBono.ts

// 1. Define project-wide App Constants

const PROJECT_NAME = 'Project Pro Bono';
const PROJECT_DESCRIPTION = 'Supporting communities worldwide through access to legal services.';
const PROJECT_URL = 'http://www.projectprobono.org';

// 2. Set up Common Imports

import * as React from 'react';
import { View, Text } from 'react-native';

// 3. Create ProBono Class

class ProBono extends React.Component {
    render(){
        return (
            <View>
                <Text>{PROJECT_NAME}</Text>
                <Text>{PROJECT_DESCRIPTION}</Text>
                <Text>{PROJECT_URL}</Text>
            </View>
        );
    }
}

// 4. Create Web Page component

class WebPage extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <title>{PROJECT_NAME}</title>
                </head>
                <body>
                    <h1>{PROJECT_NAME}</h1>
                    <p>{PROJECT_DESCRIPTION}</p>
                    <a href={PROJECT_URL}>Learn More</a>
                </body>
            </html>
        );
    }
}

// 5. Create Database Schema

const ProBonoSchema = new Schema({
    name: String,
    description: String,
    url: String
});

// 6. Create Database Model

const ProBonoModel = mongoose.model('ProBono', ProBonoSchema);

// 7. Create Express Routes

const app = express();

// Routes

app.get('/', (req, res) => {
    ProBonoModel.find({}, (error, proBonos) => {
        if (error) throw error;
        res.status(200).json(proBonos);
    });
});

app.post('/', (req, res) => {
    const newProBono = new ProBonoModel({
        name: req.body.name,
        description: req.body.description,
        url: req.body.url
    });
    newProBono.save(err => {
        if (err) return handleError(err);
        res.send('ProBono created successfully');
    });
});

// 8. Create React-Native UI

class ProBonoUI extends React.Component {
    render(){
        return (
            <View>
                <Text>{PROJECT_NAME}</Text>
                <Text>{PROJECT_DESCRIPTION}</Text>
                <Text>{PROJECT_URL}</Text>
            </View>
        );
    }
}

// 9. Create Support Form

class SupportForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const data = {
            name: name,
            email: email,
            message: message
        }
        fetch('/support', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='email' placeholder='Email' />
                <textarea name='message'></textarea>
                <button type='submit'>Send</button>
            </form>
        );
    }
}

// 10. Create Donation Component

class Donation extends React.Component {
    handleDonate(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const amount = formData.get('amount');
        const data = {
            amount: amount
        }
        fetch('/donate', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    render(){
        return (
            <form onSubmit={this.handleDonate}>
                <input type='text' name='amount' placeholder='Amount' />
                <button type='submit'>Donate</button>
            </form>
        );
    }
}

// 11. Create Volunteer Sign-up Component

class VolunteerSignup extends React.Component {
    handleSignup(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const data = {
            name: name,
            email: email
        }
        fetch('/volunteer', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }

    render(){
        return (
            <form onSubmit={this.handleSignup}>
                <input type='text' name='name' placeholder='Name' />
                <input type='text' name='email' placeholder='Email' />
                <button type='submit'>Sign Up</button>
            </form>
        );
    }
}

// 12. Export Classes

export { ProBono, WebPage, ProBonoSchema, ProBonoModel, ProBonoUI, SupportForm, Donation, VolunteerSignup };