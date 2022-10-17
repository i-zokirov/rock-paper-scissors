// All code should be written in this file.
let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType,
    playerTwoMoveOneType,
    playerTwoMoveThreeType,
    playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue,
    playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveTwoType,
    playerTwoMoveThreeValue;

function isValid(array) {
    const low = 1;
    const high = 99;
    for (let num of array) {
        if (num >= low && num <= high) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function isValidMoveType(array) {
    const validMoveTypes = ["rock", "paper", "scissors"];
    for (let str of array) {
        if (validMoveTypes.includes(str)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function setPlayerMoves(
    player,
    moveTypeOne,
    moveValueOne,
    moveTypeTwo,
    moveValueTwo,
    moveTypeThree,
    moveValueThree
) {
    const moveValues = [moveValueOne, moveValueTwo, moveValueThree];
    const moveTypes = [moveTypeOne, moveTypeTwo, moveTypeThree];
    const sum = moveValues.reduce((partialSum, a) => partialSum + a, 0);

    if (
        sum <= 99 &&
        moveTypeOne &&
        moveValueOne &&
        moveTypeTwo &&
        moveValueTwo &&
        moveTypeThree &&
        moveValueThree &&
        isValid(moveValues) &&
        isValidMoveType(moveTypes)
    )
        switch (player) {
            case "Player One":
                playerOneMoveOneType = moveTypeOne;
                playerOneMoveOneValue = moveValueOne;

                playerOneMoveTwoType = moveTypeTwo;
                playerOneMoveTwoValue = moveValueTwo;

                playerOneMoveThreeType = moveTypeThree;
                playerOneMoveThreeValue = moveValueThree;

                break;
            case "Player two":
                playerTwoMoveOneType = moveTypeOne;
                playerTwoMoveOneValue = moveValueOne;
                playerTwoMoveTwoType = moveTypeTwo;
                playerTwoMoveTwoValue = moveValueTwo;
                playerTwoMoveThreeType = moveTypeThree;
                playerTwoMoveThreeValue = moveValueThree;
                break;
            default:
                return;
        }
}

function rockPaperScissors(move1, move2) {
    if (move1 === "rock" && move2 === "scissors") return move1;
    else if (move1 === "rock" && move2 === "paper") return move2;
    else if (move1 === "paper" && move2 === "scissors") return move2;
    else if (move1 === "paper" && move2 === "rock") return move1;
    else if (move1 === "scissors" && move2 === "paper") return move1;
    else if (move1 === "scissors" && move2 === "rock") return move2;
}

function returnRoundWinner(
    playerOneMove,
    playerTwoMove,
    playerOneMoveValue,
    playerTwoMoveValue
) {
    if (
        playerOneMove &&
        playerTwoMove &&
        playerOneMoveValue &&
        playerTwoMoveValue
    ) {
        const playerOne = "Player One";
        const playerTwo = "Player Two";
        if (playerOneMove === playerTwoMove) {
            return playerOneMoveValue === playerTwoMoveValue
                ? "Tie"
                : playerOneMoveValue > playerTwoMoveValue
                ? playerOne
                : playerTwo;
        } else {
            const winnerMove = rockPaperScissors(playerOneMove, playerTwoMove);
            return winnerMove === playerOneMove ? playerOne : playerTwo;
        }
    } else {
        return null;
    }
}
function getRoundWinner(round) {
    let roundWinner;
    if (round) {
        switch (round) {
            case 1:
                roundWinner = returnRoundWinner(
                    playerOneMoveOneType,
                    playerTwoMoveOneType,
                    playerOneMoveOneValue,
                    playerTwoMoveOneValue
                );
                break;
            case 2:
                roundWinner = returnRoundWinner(
                    playerOneMoveTwoType,
                    playerTwoMoveTwoType,
                    playerOneMoveTwoValue,
                    playerTwoMoveTwoValue
                );
                break;
            case 3:
                roundWinner = returnRoundWinner(
                    playerOneMoveThreeType,
                    playerTwoMoveThreeType,
                    playerOneMoveThreeValue,
                    playerTwoMoveThreeValue
                );
                break;
            default:
                return null;
        }
    } else {
        return null;
    }
    return roundWinner;
}
function getGameWinner() {
    let playerOnePoints = 0;
    let playerTwoPoints = 0;

    for (let i = 1; i <= 3; i++) {
        const roundWinner = getRoundWinner(i);

        switch (roundWinner) {
            case "Player One":
                playerOnePoints += 1;
                break;
            case "Player Two":
                playerTwoPoints += 1;
                break;
            case "Tie":
                playerOnePoints += 1;
                playerTwoPoints += 1;
                break;
            default:
                return null;
        }
    }

    return playerOnePoints === playerTwoPoints
        ? "Tie"
        : playerOnePoints > playerTwoPoints
        ? "Player One"
        : "Player Two";
}
