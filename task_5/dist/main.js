"use strict";
// Sum function for MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'major',
    };
}
// Sum function for MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'minor',
    };
}
