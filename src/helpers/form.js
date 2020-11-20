module.exports = {
    success: (res, data) => {
        const resObject = {
            msg: 'Data Success',
            status: 200,
            data,
        };
        res.json(resObject)
    },
    error: (res, err) => {
        res.status(500).json(err)
    }
}