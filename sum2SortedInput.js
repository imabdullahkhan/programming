var twoSum = function(numbers, target) {
    let beg = 0, end = numbers.length - 1
    while (beg < end) {
        if (numbers[beg] + numbers[end] == target)
            return [beg + 1, end + 1]
        if (numbers[beg] == numbers[beg + 1] && numbers[beg] * 2 == target)
            return [beg + 1, beg + 2]
        if (numbers[end] == numbers[end - 1] && numbers[end] * 2 == target)
            return [end, end + 1]
        while (beg < end && numbers[beg] == numbers[beg + 1])
            beg++
        while (beg < end && numbers[end] == numbers[end - 1])
            end--
        if (numbers[beg] + numbers[end] > target)
            end--
        else 
            beg++
        
    }
};