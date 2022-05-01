const protectAPI = (handler) => {
    return async (req, res) => {
        if(req.headers['user-agent'] != 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)' & req.headers['sec-fetch-mode'] != 'cors') {
            return res.status(403).json({success: false, message: `Forbidden`});
        }
        return handler(req, res);
    }
}

export default protectAPI;