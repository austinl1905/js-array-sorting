import Permutation from './Base.js';

class Bubble extends Permutation
{
    sort()
    {
        let n = this.array.length;

        for (let pass = 0; pass < n; pass++) // One pass per index of the array
        {
            for (let item = 0; item < n - pass - 1; item++) // Compare each selected index
            {
                if (this.array[item] > this.array[item + 1])
                {
                    [this.array[item], this.array[item + 1]] = [this.array[item + 1], this.array[item]];
                }
            }
        }

        return this.array;
    }
}

export default Bubble;