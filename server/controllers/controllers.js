import {signClientModel} from '../models/ClientSignModule.js';
import {signPublisherModel} from '../models/PublisherSignModel.js';
import multer from 'multer';
// import expressHandler from 'express-async-handler';
// import Image from './schema'


let pic;


export const insertSignUpPublisherDataFromFront = async (req, res) => {
    try {
        console.log('Publisher SignUp Data:', req.body);

        const { marketName, email, password , confirmPassword } = req.body;

        // Validate if required fields are present
        if (!marketName || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Create a new publisher document in MongoDB
        const newPublisher = await signPublisherModel.create({ marketName, email, password ,confirmPassword });

        res.status(201).json({ message: 'Publisher sign-up data saved successfully', publisher: newPublisher });
    } catch (error) {
        console.error('Error saving publisher sign-up data:', error);
        res.status(500).json({ message: 'Failed to save publisher sign-up data', error: error.message });
    }
};
export default insertSignUpPublisherDataFromFront;

export const insertSignInPublisherDataFromFront = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await signPublisherModel.findOne({ email });

        // If user not found or password doesn't match
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If credentials are correct, handle successful sign-in
        // For example, generate JWT token and send it back to frontend
        // Example:
        // const token = generateToken(user); // You need to implement generateToken function
        // res.json({ message: 'Sign in successful', token });
        res.status(200).json({ message: 'Sign in successful' });
    } catch (error) {
        console.error('Error signing in:', error.message);
        res.status(500).json({ message: 'Failed to sign in', error: error.message });
    }
};
export const insertSignUpClientDataFromFront = async(req, res) => {
    console.log(req.body._id)
    await signClientModel.insertMany(req.body)
}

export const fetchSignedPublisherData = async(req, res) => {
    const signedPublisherData = await signPublisherModel.find()
    res.json(signedPublisherData)
    console.log(signedPublisherData)

}

export const logPic = ((req, res) => {
    pic = req.body
    console.log('pic file from logPic controller => => '+ pic)
})

export const checkPic = ((req, res) => {
    res.send('awab hassan')
})

// export const insertPic = async(req, res) => {
//     await signPublisherModel.findOneAndUpdate(
//         {email: req.body.email},
//         {$push: {picture: req.body}},
//        {new: true}
//       )

//       const findUser = await signPublisherModel.findOne({email: req.body.email})
// }

export const insertPic = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('Request file:', req.file);

        const { email, marketName, password, confirmPassword } = req.body;
        const picturen = req.file.filename;
        console.log('File name:', picturen);

        if (!picturen) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const updatedUser = await signPublisherModel.findOneAndUpdate(
            { email },
            { $set: { picture: picturen, marketName, password, confirmPassword } },
            { new: true }
        );

        res.status(200).json({ message: 'Picture uploaded successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
