module.exports = {
    success: (res, data) => {
        const resObject = {
            status: 200,
            msg: 'Data Succsess',
            data
        };
        res.json(resObject)
    },
    error: (res, err) => {
        res.status(500).json(err)
    }
}