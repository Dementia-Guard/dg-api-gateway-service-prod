import HttpType from "../Constants/HttpTypes.js";

const response = (res,success, code, data) => {
    const status = HttpType.getStatus(code)
    const payLoad = {
        code,
        success,
        status,
        data
    }
    return res.status(code).json(payLoad);
}
export default response