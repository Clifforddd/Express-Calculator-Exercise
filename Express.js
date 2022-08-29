const express = require('express');
const { convertAndValidateNumsArray, getMode, getMean, getMedian } = require('./function');


const app = express();


app.get('/mean', (req, res) => {
    let numsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsStrings);

    let result = {
      operation: "mean",
      result: getMean(nums)
    }
    console.log(result)
    return res.send(result);
}); 

app.get('/median', (req, res) => {
    let numsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsStrings);

    let result = {
        operation: "median",
        result: findMedian(nums)
      }
    
      return res.send(result);
});

app.get('/mode', (req, res) => {
    let numsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsStrings);
    
    let result = {
        operation: "mode",
        result: findMode(nums)
      }
    
      return res.send(result);
});




app.listen(3000, function () {
    console.log('App on port 3000');
})
  