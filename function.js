function getMean(nums) {
    if(nums.length === 0) 
        return 0;

    return nums.reduce((sum, nextNum) => {
        return sum + nextNum;
    }) / nums.length;
}


function getMedian(nums) {
    nums.sort((a, b) => a - b);

    let midIndex = Math.floor(nums.length / 2);
    let med;
  
    if (nums.length % 2 === 0) {
        med = (nums[midIndex] + nums[midIndex - 1]) / 2;
    } else {
        med = nums[midIndex];
    }
    return med
}

function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
  }


function getNode(nums) {
    let freqCounter = createFrequencyCounter(nums);

    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    return +mostFrequent;
}


function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }

module.exports = {
    getMean,
    getMedian,
    getNode,
    convertAndValidateNumsArray
  };