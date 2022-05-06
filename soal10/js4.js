function calculate_sum(a, N)
{
     
    // m = N / a;

    // sum = m * (m + 1) / 2;
 
    // ans = a * sum;
 
    // return ans;
    let sum = 0;
    for (let i = a; i <= N; i+=a) {
        sum+= i;
        
    }
    return sum
}

console.log(calculate_sum(4,24)); 





