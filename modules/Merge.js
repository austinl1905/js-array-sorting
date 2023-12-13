import Permutation from './Base.js';

class Merge extends Permutation
{

    sort()
    {
        if (this.array.length <= 1)
        {
            return this.array;
        }

        let middle = Math.ceil(this.array.length / 2);
        let leftHalf = this.array.slice(0, middle);
        let rightHalf = this.array.slice(middle);

        // console.log(leftHalf);
        // console.log(rightHalf);

        let leftSort = new Merge(leftHalf); // New instance of Merge class for left half
        let rightSort = new Merge(rightHalf); // New instance of Merge class for right half

        let sortedLeft = leftSort.sort(); // Call sort on left half
        let sortedRight = rightSort.sort(); // Call sort on right half

        return this.merge(sortedLeft, sortedRight); // Merge two halves
    }

    merge(left, right)
    {
        let finalArray = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Don't like while loops, but you kinda have to use them with recursion ... main loop for pushing elements to output

        while (leftIndex < left.length && rightIndex < right.length)
        {
            if (left[leftIndex] < right[rightIndex])
            {
              finalArray.push(left[leftIndex]);
              leftIndex++;
            }
            else
            {
              finalArray.push(right[rightIndex]);
              rightIndex++;
            }
        }

        // Add remaining elements after comparison loop

        while (leftIndex < left.length)
        {
            finalArray.push(left[leftIndex]);
            leftIndex++;
        }

        while (rightIndex < right.length)
        {
            finalArray.push(right[rightIndex]);
            rightIndex++;
        }

        this.array = finalArray;
        return this.array;
    }
}

export default Merge;