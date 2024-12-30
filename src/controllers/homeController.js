const getHompage = (reg, res) => {
    res.send('Hello this is homepage')
}

const getAbc = (reg, res) => {
    res.send('check ABC')
}

const getCuongdeptrai = (reg, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHompage, getAbc,getCuongdeptrai
}

