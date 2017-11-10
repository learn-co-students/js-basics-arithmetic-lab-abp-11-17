const oldID = Math.floor(Math.random() * 100) + 1;

const ages = [26, 21, 49, 83, 99, 53, 74, 94, 40, 56];

const currentAge = ages[Math.floor(Math.random() * ages.length)];

const currentAgeIsInteger = Number.isInteger(currentAge);

const spyOnNumberIsInteger = sinon.stub(Number, 'isInteger').returns(currentAgeIsInteger);

const randNum = Math.random();

const spyOnMathRandom = sinon.stub(Math, 'random').returns(randNum);
