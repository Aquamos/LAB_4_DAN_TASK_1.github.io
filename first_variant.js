let arrayLength = 0;

document.forms.publish.onsubmit = function() {
    arrayLength = Number(this.message.value);
    console.log(arrayLength)
    return false;
  };
  


let arr = [];
let maxIndex = 0, minIndex = 0, maxNum, minNum;


function createArr() {

    for (var i = 0; i < arrayLength; i++) {
        let rand = Math.round(Math.random() * arrayLength); 
        arr.push(rand);
    }
    console.log(arr);
}

function searchMax () {

    let max = arr[0];

    for (let i = 1; i < arrayLength; i++) {
        if ((arr[i] % 2 == 0) && (arr[i] > max)){
            max = arr[i];
            maxIndex = i;
        }
    }
    maxNum = max;
    console.log(max + " with index: " + maxIndex);
}

function searchMin () {

    let min = arr[0];

    for (let i = 1; i < arrayLength; i++) {
        if ((i % 2 == 0) && (arr[i] < min)){
            min = arr[i];
            minIndex = i;
        }
    }
    minNum = min;
    console.log(min + " with index: " + minIndex);
}

function swap() {
    arr[maxIndex] = minNum;
    arr[minIndex] = maxNum;
    console.log(arr);
}

function insertionSort () {
    for (let i = 1; i < arrayLength; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }

    console.log(arr);
}

window.onload = function () {
    document.getElementById('getResBtn').onclick = createArr;
    document.getElementById('showMaxBtn').onclick = searchMax;
    document.getElementById('showMinBtn').onclick = searchMin;
    document.getElementById('swapBtn').onclick = swap;
    document.getElementById('sortBtn').onclick = insertionSort;
};
