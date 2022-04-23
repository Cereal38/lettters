
"""
Take 10 letters and a word
print "true" if it's possible to make the word using letters (1 time each)
else print "false"

Call example: python3 ABCEFGHIJK HELLO
"""

import sys


def checkWord(lettersList, word):

	result = "true"

	# Check len
	if len(word) > 10:
		
		print("false")
		return

	else:
		
		for i in range(len(word)):
			
			# Find pos of letter in letterList (-1 if not exist)
			posLetter = lettersList.find(word[i])
				
			if posLetter == -1:
				
				print("false")
				return

			else:
				
				# Remove letter from letterList
				lettersList = lettersList.replace(word[i], "", 1)
			
	print(result)


checkWord(sys.argv[1], sys.argv[2])

