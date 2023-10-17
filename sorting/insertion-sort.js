function InsertionSort(A) {
  for (let i = 1; i < A.length; i++) {
    const key = A[i]
    let j = i - 1

    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j]
      j = j - 1
    }

    A[j + 1] = key
  }
}

function NonIncreasingInsertionSort(A) {
  for (let i = 0; i < A.length; i++) {
    const key = A[i]
    let j = i - 1

    while (j >= 0 && A[j] < key) {
      A[j + 1] = A[j]
      j = j - 1
    }

    A[j + 1] = key
  }
}

exports.InsertionSort = InsertionSort;
exports.NonIncreasingInsertionSort = NonIncreasingInsertionSort;
