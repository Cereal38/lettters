
#!/bin/bash

# IMPORTANT : Give date as argument -> 1501 = 15 january

# Create temp file to stock infos (Delete old one if needed)
rm tempLettersGenerator.tmp 2>/dev/null
touch tempLettersGenerator.tmp

# Create a result file with all infos needed (Delete old one)
rm resultLettersGenerator.txt 2>/dev/null
touch resultLettersGenerator.txt

lenFrequencies=`wc -l lettersFrequencies.txt | cut -d " " -f1`

# Generate 10 randoms letters
lettersList=""
for (( i=0; i<10; i++ ))
do
	
	# Generate and stock letters in temp file and in a variable
	randomIndex=`echo $((1 + $RANDOM % $lenFrequencies))`
	letter=`sed -n $randomIndex\p lettersFrequencies.txt`

	lettersList+=$letter
	echo $letter >> tempLettersGenerator.tmp
done


lenAllWords=`wc -l allWords.txt | cut -d " " -f1`

# Check all words and save them if it's possible to make them using our 10 letters
GREEN='\033[0;32m'
RED='\033[0;31m'
NOCOLOR='\033[0m'

for (( i=1; i<=lenAllWords; i++ ))
do
	
	word=`sed -n $i\p allWords.txt`

	possible=`python3 checkWord.py $lettersList $word`

	if [ $possible = "true" ]
	then
		#echo -e "${GREEN}$word${NOCOLOR}"
		echo $word >> resultLettersGenerator.txt
	#else
		#echo -e "${RED}$word${NOCOLOR}"
	fi

		
done

# Send datas in result file (JSON format)
echo { >> resultLettersGenerator.txt

echo "	\"date\": \"$1\"," >> resultLettersGenerator.txt

echo -n "	\"letters\": [" >> resultLettersGenerator.txt

for (( i=1; i<=10; i++ ))
do
	
	echo -n "'`sed -n $i\p tempLettersGenerator.tmp`'" >> resultLettersGenerator.txt

	if (( $i != 10 ))
	then
		echo -n ", " >> resultLettersGenerator.txt
	fi
done

echo "]," >> resultLettersGenerator.txt

echo -n "	\"possibleWords\": [" >> resultLettersGenerator.txt

echo "]" >> resultLettersGenerator.txt

echo } >> resultLettersGenerator.txt

cat resultLettersGenerator.txt

# Delete temp file
rm tempLettersGenerator.tmp
