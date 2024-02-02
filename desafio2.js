let pointsRanked = points(91, 25)
let levelRanked = ""

function points(wins, defeats){
    points = wins - defeats
    return points
}

if(pointsRanked <= 10){
    levelRanked = "Iron"
}

else if(pointsRanked <= 20){
    levelRanked = "Bronze"
}

else if(pointsRanked <= 50){
    levelRanked = "Silver"
}

else if(pointsRanked <= 80){
    levelRanked = "Gold"
}

else if(pointsRanked <= 90){
    levelRanked = "Diamond"
}

else if(pointsRanked <= 100){
    levelRanked = "Legendary"
}

else{
    levelRanked = "Immortal"
}

console.log(`The Hero has a balance of ${pointsRanked} points and is at the level ${levelRanked}.`)