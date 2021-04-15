// Returns a random DNA base
const returnRandBase = (dnaBases=['A', 'T', 'C', 'G']) => {
  return dnaBases[Math.floor(Math.random() * dnaBases.length)] 
}

const deleteBaseFromStand = (base, standArr) =>{
  let baseIndex = standArr.indexOf(base);
  standArr.splice(baseIndex, 1);
  return standArr;
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (pAequorNum, dnaArr) => {
  return {
    specimenNum: pAequorNum,
    dna: dnaArr,
    mutate(){
      let mutatedDnaArr = [];
      dnaArr.forEach(item => {
        let dnaBases=['A', 'T', 'C', 'G'];
        mutatedDnaArr.push(returnRandBase(deleteBaseFromStand(item, dnaBases)));
      });
      return mutatedDnaArr;
    },
    compareDNA(pAequorObjDnaProp){
      let statusCompare = 0;
      for(let i = 0; i < dnaArr.length; i++){
        if(dnaArr[i] === pAequorObjDnaProp[i])
          statusCompare++;
      }
      let result = (statusCompare*100)/15;
      console.log(`pAequor have ${result} % the same DNA compare to tested one`);
    },
    willLikelySurvive(){
      let survivalStatus = 0;
      dnaArr.forEach(base =>{
        if(base === 'C' || base === 'G')
          survivalStatus++;
      });
      survivalStatus = (survivalStatus*100)/15;
      if(survivalStatus >= 60)
        return true;
      return false;
    }
  };
};
);



