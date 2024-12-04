import axios from 'axios';
import response from "../../Utils/ResponseHandler/ResponseHandler.js";
import { EnvConfig } from '../../Config/EnvConfigs.js';

const Tokenware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return response(res, 401, { message: "unauthorized request" });
    }
    
    const token = authHeader.split(' ')[1]; // Extract token (format: "Bearer <token>")
    if (!token) {
        return response(res,  401, { message: 'Invalid authorization format' });
    }
    
    try {
        const validationResponse = await axios.post(`${EnvConfig.AUTH_SERVICE_ROUTE}/service/validateToken`, { idToken:token });
        console.log(validationResponse)
        if (validationResponse.data.success) {
            req.user = validationResponse.data.data; // Pass user info to the next middleware
            return next();
        } else {
            return response(res,  401, { message: 'Token validation failed' });
        }
    } catch (error) {
        console.error(error.message)
        return response(res,  error.status || 500, { message: error.response.data.data.message || error.message || 'Token validation error' });
    }
};

export default Tokenware;
