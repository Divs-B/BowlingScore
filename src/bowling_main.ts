interface frame {
    roll1: number
    roll2: number
    roll3?: number
    score: number
}

export class Bowling {

    divideInFrames(score: Array<number>) {
        const frames: Array<frame> = []
        score.forEach((scr: number, indx: number, array: Array<number>) => {
            let aFrame: frame = { roll1: 0, roll2: 0, score: 0 }
            if (indx % 2 === 0 && indx < score.length - 1) {
                indx === 18 ? frames.push({ roll1: scr, roll2: array[indx + 1], roll3: array[indx + 2], score: 0 }) : frames.push({ roll1: scr, roll2: array[indx + 1], score: 0 })
            }
        })
        return frames
    }

    isStrike(aFrame: frame): boolean {
        return aFrame.roll1 === 10
    }

    isSpare(aFrame: frame): boolean {
        return aFrame.roll1 + aFrame.roll2 === 10
    }

    public totalScore(input: Array<number>): number {
        const frames: Array<frame> = this.divideInFrames(input)
        let finalScore: number = 0

        frames.forEach((aFrame: frame, indx: number, array: Array<frame>) => {
            if (!this.isStrike(aFrame) && !this.isSpare(aFrame))
                aFrame.score = aFrame.roll1 + aFrame.roll2
            else if (this.isStrike(aFrame)) {
                if (indx != frames.length - 2) {//till 8th index
                    if (indx === frames.length - 1) //9th index                       
                        aFrame.score = 30
                    else
                        aFrame.score = frames[indx + 1].roll1 === 10 ? 10 + frames[indx + 1].roll1 + frames[indx + 2].roll1 : 10 + frames[indx + 1].roll1 + frames[indx + 1].roll2
                } else
                    aFrame.score = indx != frames.length - 1 ? 10 + frames[indx + 1].roll1 + frames[indx + 1].roll2 : aFrame.score = 30
            } else if (this.isSpare(aFrame)) {
                if (indx != frames.length - 1)//till 8th index
                    aFrame.score = 10 + frames[indx + 1].roll1
                else {//9th index
                    if (aFrame.roll3)
                        aFrame.score = aFrame.roll1 + aFrame.roll2 + aFrame.roll3
                }
            }
            finalScore += aFrame.score
        })
        return finalScore
    }
}
