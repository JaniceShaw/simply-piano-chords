const chords = [
    {
        name: "C",
        type: "triad",
        root: "C",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "G", 1]],
        rightHand: [[4, "C", 1], [4, "E", 3], [4, "G", 5]]
    },
    {
        name: "Dm",
        type: "triad",
        root: "D",
        octStart: 3,
        octEnd: 4,
        leftHand: [[3, "D", 4]],
        rightHand: [[4, "D", 1], [4, "F", 3], [4, "A", 5]]
    },

];

function getChords() {
    var result;

    chords.map(c => {

        result =
            <Piano

                startOctave={c.octStart}
                endOctave={c.octEnd}
                selectedNotesLeft {c.leftHand}
                selectedNotesRight  {c.rightHand}
            />


        return result;
    }

    )


}
getChords();



