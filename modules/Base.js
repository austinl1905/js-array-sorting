class Permutation
{
    constructor(arr)
    {
        this.array = arr;
    }

    sort()
    {
        return 'Not implemented';
    }

    shuffle() // Fisher-Yates shuffling algorithm
    {
        for (let iterator = this.array.length - 1; iterator > 0; iterator--) // Start from the last element and count backwards
        {
            let randomIndex = Math.floor(Math.random() * (iterator + 1)); // Select a random index from 0 to the index of the iterator
            [this.array[iterator], this.array[randomIndex]] = [this.array[randomIndex], this.array[iterator]]; // Swap element of random index and iterator index
        }

        return this.array;
    }

    search(target)
    {
        for (let i = 0; i < this.array.length - 1; i++) // Check if array is sorted
        {
            if (this.array[i] > this.array[i + 1]) {
                return 0;
            }
        }

        let leftIndex = 0;
        let rightIndex = this.array.length - 1;
        let midpoint;

        while (rightIndex >= leftIndex) // Operations have to be done inside of the loop, which is why a while loop is necessary
        {
            midpoint = 1 + (Math.floor(rightIndex-leftIndex)/2) // Every iteration the new midpoint becomes the midpoint of the left or right subarray

            if (this.array[midpoint] == target)
            {
                return midpoint;
            }

            if (this.array[midpoint] > target) // If the midpoint is greater than the target, then the target is only present in the left subarray
            {
                rightIndex = midpoint - 1;
            }
            else // Else the target must be present in the right subarray
            {
                leftIndex = midpoint + 1;
            }
        }

        return 0; // If target is not present in array, return false
    }
}

export default Permutation;