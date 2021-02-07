let states = [
  {
    region: "Northeast",
    states: [
      {
        state: "Vermont",
        abbr: "VT",
        capitol: "Montpelier"
      },
      {
        state: "Massachusetts",
        abbr: "MA",
        capitol: "Boston"
      },
      {
        state: "Rhode Island",
        abbr: "RI",
        capitol: "Providence "
      },
      {
        state: "Connecticut",
        abbr: "CT",
        capitol: "Hartford "
      },
      {
        state: "New York",
        abbr: "NY",
        capitol: "Albany "
      },
      {
        state: "New Jersey",
        abbr: "NJ",
        capitol: "Trenton  "
      },
      {
        state: "Pennsylvania",
        abbr: "PA",
        capitol: "Harrisburg"
      },
      {
        state: "Delaware",
        abbr: "DE",
        capitol: "Dover"
      },
      {
        state: "Maryland",
        abbr: "MD",
        capitol: "Annapolis"
      }
    ]
  },
  {
    region: "Southeast",
    states: [
      {
        state: "West Virginia",
        abbr: "WV",
        capitol: "Charleston"
      },
      {
        state: "Virginia",
        abbr: "VA",
        capitol: "Richmond"
      },
      {
        state: "Kentucky",
        abbr: "KY",
        capitol: "Frankfort "
      },
      {
        state: "North Carolina",
        abbr: "NC",
        capitol: "Raleigh"
      },
      {
        state: "Tennessee",
        abbr: "TN",
        capitol: "Nashville"
      },
      {
        state: "South Carolina",
        abbr: "SC",
        capitol: "Columbia"
      },
      {
        state: "Georgia",
        abbr: "GA",
        capitol: "Atlanta"
      },
      {
        state: "Alabama",
        abbr: "AL",
        capitol: "Montgomery"
      },
      {
        state: "Mississippi",
        abbr: "MS",
        capitol: "Jackson"
      },
      {
        state: "Arkansas",
        abbr: "AR",
        capitol: "Little Rock"
      },
      {
        state: "Louisiana",
        abbr: "LA",
        capitol: "Baton Rouge"
      },
      {
        state: "Florida",
        abbr: "FL",
        capitol: "Tallahassee"
      }
    ]
  },
  {
    region: "Midwest",
    states: [
      {
        state: "Minnesota",
        abbr: "MN",
        capitol: "St. Paul"
      },
      {
        state: "North Dakota",
        abbr: "ND",
        capitol: "Bismarck"
      },
      {
        state: "South Dakota",
        abbr: "SD",
        capitol: "Pierre"
      },
      {
        state: "Nebraska",
        abbr: "NE",
        capitol: "Lincoln"
      },
      {
        state: "Kansas",
        abbr: "KS",
        capitol: "Topeka"
      },
      {
        state: "Iowa",
        abbr: "IA",
        capitol: "Des Moines"
      },
      {
        state: "Missouri",
        abbr: "MO",
        capitol: "Jefferson City"
      },
      {
        state: "Wisconsin",
        abbr: "WI",
        capitol: "Madison"
      },
      {
        state: "Illinois",
        abbr: "IL",
        capitol: "Springfield"
      },
      {
        state: "Indiana",
        abbr: "IN",
        capitol: "Indianapolis"
      },
      {
        state: "Michigan",
        abbr: "MI",
        capitol: "Lansing"
      },
      {
        state: "Ohio",
        abbr: "OH",
        capitol: "Columbus"
      }
    ]
  }
];

function selectedRegionData(region){
  let stateTemp = [];
  let regionalStates = states.filter(obj => {
    return obj.region === region;
  });
  regionalStates[0].states.forEach(state => {
    stateTemp.push([state.state, state.abbr, state.capitol]);
  });
  return stateTemp;
}
function getTableData(region = ''){
  let stateTemp = [];
  if(region){
    stateTemp = selectedRegionData(region);
  }else {
      states.forEach(region => {
        region.states.forEach(state => {
          stateTemp.push([state.state, state.abbr, state.capitol]);
        })
      });
    }
  return {
    tableID: 'states' + region,
    headers: ["State", "Abbr", "Capitol"],
    rows: stateTemp
  }
}

function getDropdownData(region = ''){
  let data = {
    dropdownID: "states",
    depth: region,
    name: "All States",
    menu: [
      {
        title: "Table",
        name: "States",
        listener: "getTableData"
      }
    ]
  }
  if(region !== ''){
    data.name = region + " States ";
    data.dropdownID += region;
  }
  return data;
}
export  { getTableData, getDropdownData };