import Algorithm from './Base.js';

class Bubble extends Algorithm
{
    sort()
    {
        let n = this.array.length;

        for (let item in this.array)
        {
            for (let i = 0; i < n - item - 1; i++ )
            {
                if (this.array[i] > this.array[i + 1])
                {
                    [this.array[i], this.array[i + 1]] = [this.array[i + 1], this.array[i]];
                }
            }
        }

        return this.array;
    }
}

export default Bubble;