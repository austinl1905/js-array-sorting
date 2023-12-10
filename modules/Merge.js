import Algorithm from './Base.js';

class Merge extends Algorithm
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

        console.log(leftHalf);
        console.log(rightHalf);

        let leftSort = new Merge(leftHalf);
        let rightSort = new Merge(rightHalf);

        let sortedLeft = leftSort.sort();
        let sortedRight = rightSort.sort();

        return this.merge(sortedLeft, sortedRight);
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

        return finalArray;
    }
}

export default Merge;