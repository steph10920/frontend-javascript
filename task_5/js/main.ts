// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  readonly _brand: 'major'; // branding
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  readonly _brand: 'minor'; // branding
}

// Sum function for MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major',
  };
}

// Sum function for MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor',
  };
}
