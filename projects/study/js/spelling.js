let words = [
  {
    unit: 7,
    words: [
      {
        word: "bloom"
      },
      {
        word: "shampoo"
      },
      {
        word: "stool"
      },
      {
        word: "group"
      },
      {
        word: "bush"
      },
      {
        word: "raccoon"
      },
      {
        word: "roof"
      },
      {
        word: "choose"
      },
      {
        word: "cookbook"
      },
      {
        word: "put"
      },
      {
        word: "proof"
      },
      {
        word: "brook"
      },
      {
        word: "crooked"
      },
      {
        word: "hook"
      },
      {
        word: "soup"
      },
      {
        word: "childhood"
      },
      {
        word: "tool"
      },
      {
        word: "wool"
      },
      {
        word: "prove"
      },
      {
        word: "foolish"
      },
      {
        word: "booth"
      },
      {
        word: "groom"
      },
      {
        word: "cartoon"
      },
      {
        word: "bookstore"
      }
    ]
  }
]
function selectedUnitData(unit){
  let wordTemp = [];
  let unitWords = words.filter(obj => {
    return obj.unit === unit;
  });
  unitWords[0].words.forEach(word => {
    wordTemp.push([word.word]);
  });
  return wordTemp;
}
function defaultData(unit = ''){
  let wordTemp = [];
  if(unit){
    wordTemp = selectedUnitData(unit);
  }else {
    words.forEach(unit => {
      unit.words.forEach(word => {
        wordTemp.push([word.word]);
      })
    });
  }
  return wordTemp;
}
function getTableData(unit = ''){
  return {
    tableID: 'words' + unit,
    headers: ["Words"],
    rows: defaultData(unit)
  }
}
function getCardData(unit = ''){
  return {
    cardID: 'words' + unit,
    cards: defaultData(unit)
  }
}
function getDropdownData(unit = ''){
  let data = {
    dropdownID: "words",
    depth: unit,
    name: "All Spelling",
    menu: [
      {
        title: "Spell It",
        name: "Spelling",
        listener: "getCardData"
      },
      {
        title: "Table",
        name: "Words",
        listener: "getTableData"
      }
    ]
  }
  if(unit !== ''){
    data.name = "Spelling: " + unit;
    data.dropdownID += unit;
  }
  return data;
}
export  { getTableData, getDropdownData, getCardData };