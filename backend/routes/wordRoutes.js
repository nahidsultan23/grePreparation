const express = require('express');
const router = express.Router();

router.patch('/input', (req, res) => {
    let resData = {
        success: false,
        errorMessages: {
            word: '',
            meaning: '',
            error: '',
        },
    };

    return res.json(resData);
});

module.exports = router;
