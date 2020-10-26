Feature: Countdown 
Scenario: Counter is decreasing with each second 
	Given User Launch "Chrome" browser 
	When User opens URL "http://e.ggtimer.com/" 
	And User enters "25 Seconds" in input field 
	And User click on Go button 
	Then Counter should be decreased by 2 second with increment of 2 second 
	And close browser 
	
	
Scenario Outline: Counter Validation with different Data 
	Given User Launch "<browser>" browser 
	When User opens URL "http://e.ggtimer.com/" 
	And User enters "<time>" in input field 
	And User click on Go button 
	Then Counter should be decreased by <seconds> second with increment of <seconds> second 
	And close browser 
	
	Examples: 
		|time|seconds|browser|
		|30 Seconds|3|Chrome|
		|15 Seconds|3|Chrome|
		|8 Seconds|2|Chrome|
