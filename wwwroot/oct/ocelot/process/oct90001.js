{
  "meta": {    
    "title": "Customer wants to make a cup of tea",
    "id": "oct90001",
    "ocelot": 1,
    "lastAuthor": "000000",
    "lastUpdate": 1500298931016,
    "version": 4,
    "filename": "oct90001.js"
  },
  "howto": [],
  "contacts": [],
  "links": [],
  "flow": {
    "1": {
      "type": "InstructionStanza",
      "text": 16,
      "next": ["2"],
      "stack": true
    },
    "2": {
      "type": "InstructionStanza",
      "text": 17,
      "next": ["4"],
      "stack": true
    },
    "3": {
      "type": "QuestionStanza",
      "text": 3,
      "answers": [4, 5],
      "next": ["5", "19"],
      "stack": false
    },
    "4": {
      "type": "InstructionStanza",
      "text": 18,
      "next": ["9"],
      "stack": true
    },
    "5": {
      "type": "QuestionStanza",
      "text": 6,
      "answers": [7, 8],
      "next": ["6", "15"],
      "stack": false
    },
    "6": {
      "type": "InstructionStanza",
      "text": 9,
      "next": ["12"],
      "stack": false
    },
    "7": {
      "type": "ImportantStanza",
      "text": 11,
      "next": ["10"],
      "stack": false
    },
    "8": {
      "type": "InstructionStanza",
      "text": 24,
      "next": ["21"],
      "stack": true
    },
    "9": {
      "type": "InstructionStanza",
      "text": 19,
      "next": ["end"],
      "stack": true
    },
    "10": {
      "type": "QuestionStanza",
      "text": 12,
      "answers": [13, 14],
      "next": ["14", "11"],
      "stack": false
    },
    "11": {
      "type": "QuestionStanza",
      "text": 20,
      "answers": [21, 22],
      "next": ["8", "24"],
      "stack": false
    },
    "12": {
      "type": "InstructionStanza",
      "text": 10,
      "next": ["7"],
      "stack": true
    },
    "14": {
      "type": "InstructionStanza",
      "text": 15,
      "next": ["1"],
      "stack": true
    },
    "15": {
      "type": "InstructionStanza",
      "text": 26,
      "next": ["16"],
      "stack": true
    },
    "16": {
      "type": "InstructionStanza",
      "text": 27,
      "next": ["end"],
      "stack": true
    },
    "19": {
      "type": "InstructionStanza",
      "text": 28,
      "next": ["20"],
      "stack": true
    },
    "20": {
      "type": "InstructionStanza",
      "text": 29,
      "next": ["end"],
      "stack": true
    },
    "21": {
      "type": "InstructionStanza",
      "text": 25,
      "next": ["end"],
      "stack": true
    },
    "22": {
      "type": "InstructionStanza",
      "text": 30,
      "next": ["23"],
      "stack": true
    },
    "23": {
      "type": "InstructionStanza",
      "text": 31,
      "next": ["end"],
      "stack": true
    },
    "24": {
      "type": "InstructionStanza",
      "text": 23,
      "next": ["6"],
      "stack": true
    },
    "start": {
      "type": "QuestionStanza",
      "text": 0,
      "answers": [1, 2],
      "next": ["3", "22"],
      "stack": true
    },
    "end": {
      "type": "EndStanza"
    }
  },
  "phrases": [
    ["Ask the customer if they have a tea bag", "Do you have a tea bag?"], "Yes - they do have a tea bag", "No - they do not have a tea bag", ["Ask the customer if they have a cup", "Do you have a cup?"], "yes - they do have a cup ", "no - they don’t have a cup", ["Ask the customer if they have water to fill the kettle", "Do you have water to fill your kettle?"], "yes - they have water to fill the kettle", "no - they don’t have water to fill the kettle", ["Tell the customer to turn the kettle on", "Turn your kettle on"],
    ["Tell the customer to wait up to 5 minutes for the water to boil", "Wait up to 5 minutes for the water to boil"], "The water in the kettle may be very hot", ["Ask the customer if the water has boiled", "Has the water boiled"], "yes - the water has boiled ", "no - the water hasn’t boiled", ["Tell the customer to add the tea bag to the cup", "Add the tea bag to the cup"],
    ["Tell the customer to pour the water from the kettle into the cup", "Pour the water from the kettle into the cup"],
    ["Tell the customer to wait 2 minutes for the tea to steep into the water", "Wait 2 minutes for the tea to steep into the water"],
    ["Tell the customer to add milk and sugar to taste", "Add milk and sugar to taste"],
    ["Tell the customer to check the temperature of the tea before drinking it", "Check the temperature of the tea before drinking it"],
    ["Tell the customer to check the kettle is plugged in", "Check the kettle is plugged in"], "Yes - The kettle was plugged in", "No - The kettle was not plugged in", ["Tell the customer to plug in the kettle", "Plug in the kettle"],
    ["Tell the customer to unplug the kettle", "Unplug the kettle"],
    ["Tell the customer to contact customer support for their kettle", "Contact customer support for your kettle"],
    ["Tell the customer they need to water to fill the kettle to make a cup of tea", "You need to water to fill the kettle to make a cup of tea"],
    ["Tell the customer to call back once they have water to fill the kettle", "Call back once you have water to fill the kettle"],
    ["Tell the customer they will need to find a cup", "You will need to find a cup"],
    ["Tell the customer call us back once they have a cup", "Call us back once you have a cup"],
    ["Tell the customer they need to get a tea bag ", "You need a tea bag."],
    ["Tell the customer to call us back once they have a tea bag", "Call us back once you have a tea bag"]
  ]
}
