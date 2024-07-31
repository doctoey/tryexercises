// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function dnaStrand(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    }
    if (dna[i] === "T") {
      result += "A";
    }
    if (dna[i] === "C") {
      result += "G";
    }
    if (dna[i] === "G") {
      result += "C";
    }
  }
  return result;
}

function dnaStrand(dna) {
  return dna
    .split("")
    .map((nucleotide) => {
      if (nucleotide === "A") return "T";
      if (nucleotide === "T") return "A";
      if (nucleotide === "C") return "G";
      if (nucleotide === "G") return "C";
    })
    .join("");
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// if (typeof dnaStrand != "function") dnaStrand = DNAStrand;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(dnaStrand("AAAA"), "TTTT", "String AAAA is");
//     assert.strictEqual(dnaStrand("ATTGC"), "TAACG", "String ATTGC is");
//     assert.strictEqual(dnaStrand("GTAT"), "CATA", "String GTAT is");
//   });
// });
