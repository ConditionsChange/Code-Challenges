function solve(a0, a1, a2, b0, b1, b2) {
    
    let Alice = 0;
    let Bob = 0;
    
    if (a0 > b0){
        Alice++
    }
    else if (b0 > a0){
        Bob++
    }
    
    if (a1 > b1){
        Alice++
    }
    else if (b1 > a1){
        Bob++
    }
    
    if (a2 > b2){
        Alice++
    }
    else if (b2 > a2){
        Bob++
    }

    return [Alice, Bob]
}

const a = [5, 6, 7]
const b = [3, 6, 10]

const result = solve(a[0], a[1], a[2], b[0], b[1], b[2])

console.log(result.join(" "))