export const generateExpences = () => {
  let data = [];
  for (let i = 0; i < 50; i++) {
    let rndm = Math.floor(Math.random() * 150) + 1;
    let onePoint = 0;
    let twoPoint = 0;
    if (rndm < 50) {
      onePoint = 0;
      twoPoint = 0;
    } else if (rndm > 50 && rndm <= 100) {
      onePoint = rndm - 50;
    } else if (rndm > 100) {
      twoPoint = Math.floor(rndm - 100) * 2 + 50;
    }
    let dayExpences = {
      day: i,
      spend: rndm,
      points: twoPoint + onePoint,
    };
    data.push(dayExpences);
  }
  let points = collectRewards(data);
  return { data, points };
};

const collectRewards = (obj) => {
  let points = obj.reduce((a, b) => {
    return a + b.points;
  }, 0);
  return points;
};
