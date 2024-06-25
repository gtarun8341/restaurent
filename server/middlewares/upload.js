import { signPublisherModel } from '../models/PublisherSignModel.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename for each upload
    }
});
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
            callback(null, true);
        } else {
            console.log('Only jpg, jpeg and png files are supported');
            callback(null, false);
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2 // 2 MB
    }
});

export default upload;
