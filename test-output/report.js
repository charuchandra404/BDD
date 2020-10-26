$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Countdown.feature");
formatter.feature({
  "line": 1,
  "name": "Countdown",
  "description": "",
  "id": "countdown",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Counter is decreasing with each second",
  "description": "",
  "id": "countdown;counter-is-decreasing-with-each-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User Launch \"Chrome\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User opens URL \"http://e.ggtimer.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters \"25 Seconds\" in input field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Counter should be decreased by 2 second with increment of 2 second",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 13
    }
  ],
  "location": "Steps.user_Launch_browser(String)"
});
formatter.result({
  "duration": 3806761300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://e.ggtimer.com/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4394528900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25 Seconds",
      "offset": 13
    }
  ],
  "location": "Steps.user_enters_in_input_field(String)"
});
formatter.result({
  "duration": 333133200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Go_button()"
});
formatter.result({
  "duration": 5599606900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "Steps.counter_should_be_decreased_by_second_with_increment_of_second(int,int)"
});
formatter.result({
  "duration": 22086626500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 688336800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Counter Validation with different Data",
  "description": "",
  "id": "countdown;counter-validation-with-different-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User Launch \"\u003cbrowser\u003e\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User opens URL \"http://e.ggtimer.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003ctime\u003e\" in input field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Counter should be decreased by \u003cseconds\u003e second with increment of \u003cseconds\u003e second",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "countdown;counter-validation-with-different-data;",
  "rows": [
    {
      "cells": [
        "time",
        "seconds",
        "browser"
      ],
      "line": 20,
      "id": "countdown;counter-validation-with-different-data;;1"
    },
    {
      "cells": [
        "30 Seconds",
        "3",
        "Chrome"
      ],
      "line": 21,
      "id": "countdown;counter-validation-with-different-data;;2"
    },
    {
      "cells": [
        "15 Seconds",
        "3",
        "Chrome"
      ],
      "line": 22,
      "id": "countdown;counter-validation-with-different-data;;3"
    },
    {
      "cells": [
        "8 Seconds",
        "2",
        "Chrome"
      ],
      "line": 23,
      "id": "countdown;counter-validation-with-different-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Counter Validation with different Data",
  "description": "",
  "id": "countdown;counter-validation-with-different-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User Launch \"Chrome\" browser",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User opens URL \"http://e.ggtimer.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"30 Seconds\" in input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Counter should be decreased by 3 second with increment of 3 second",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 13
    }
  ],
  "location": "Steps.user_Launch_browser(String)"
});
formatter.result({
  "duration": 3274874000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://e.ggtimer.com/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4352541000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30 Seconds",
      "offset": 13
    }
  ],
  "location": "Steps.user_enters_in_input_field(String)"
});
formatter.result({
  "duration": 301280100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Go_button()"
});
formatter.result({
  "duration": 5469260400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    },
    {
      "val": "3",
      "offset": 58
    }
  ],
  "location": "Steps.counter_should_be_decreased_by_second_with_increment_of_second(int,int)"
});
formatter.result({
  "duration": 26965883500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 669450700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Counter Validation with different Data",
  "description": "",
  "id": "countdown;counter-validation-with-different-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User Launch \"Chrome\" browser",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User opens URL \"http://e.ggtimer.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"15 Seconds\" in input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Counter should be decreased by 3 second with increment of 3 second",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 13
    }
  ],
  "location": "Steps.user_Launch_browser(String)"
});
formatter.result({
  "duration": 3200983300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://e.ggtimer.com/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4252127300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15 Seconds",
      "offset": 13
    }
  ],
  "location": "Steps.user_enters_in_input_field(String)"
});
formatter.result({
  "duration": 153718700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Go_button()"
});
formatter.result({
  "duration": 4942658200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    },
    {
      "val": "3",
      "offset": 58
    }
  ],
  "location": "Steps.counter_should_be_decreased_by_second_with_increment_of_second(int,int)"
});
formatter.result({
  "duration": 12765732500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 782241600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Counter Validation with different Data",
  "description": "",
  "id": "countdown;counter-validation-with-different-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User Launch \"Chrome\" browser",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User opens URL \"http://e.ggtimer.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"8 Seconds\" in input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Counter should be decreased by 2 second with increment of 2 second",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 13
    }
  ],
  "location": "Steps.user_Launch_browser(String)"
});
formatter.result({
  "duration": 3213355500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://e.ggtimer.com/",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 4357991000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8 Seconds",
      "offset": 13
    }
  ],
  "location": "Steps.user_enters_in_input_field(String)"
});
formatter.result({
  "duration": 80381200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Go_button()"
});
formatter.result({
  "duration": 5032552500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    },
    {
      "val": "2",
      "offset": 58
    }
  ],
  "location": "Steps.counter_should_be_decreased_by_second_with_increment_of_second(int,int)"
});
formatter.result({
  "duration": 5648724500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 646825400,
  "status": "passed"
});
});