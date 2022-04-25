
#!/bin/bash

# IMPORTANT : Give date as argument -> 1501 = 15 january

# Create a repo to stock result
mkdir resultLetters 2>/dev/null

# Create temp file to stock infos (Delete old one if needed)
rm tempLettersGenerator.tmp 2>/dev/null
touch tempLettersGenerator.tmp

# Create a result file with all infos needed (Delete old one)
rm resultLetters/resultLettersGenerator$1.txt 2>/dev/null
touch resultLetters/resultLettersGenerator$1.txt

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

python3 wordsFinder.py $lettersList >> tempLettersGenerator.tmp

# Send datas in result file (JSON format)
echo { >> resultLetters/resultLettersGenerator$1.txt

echo "	\"date\": \"$1\"," >> resultLetters/resultLettersGenerator$1.txt

echo -n "	\"letters\": [" >> resultLetters/resultLettersGenerator$1.txt

for (( i=1; i<=10; i++ ))
do
	
	echo -n "\"`sed -n $i\p tempLettersGenerator.tmp`\"" >> resultLetters/resultLettersGenerator$1.txt

	if (( $i != 10 ))
	then
		echo -n ", " >> resultLetters/resultLettersGenerator$1.txt
	fi
done

echo "]," >> resultLetters/resultLettersGenerator$1.txt

echo -n "	\"possibleWords\": [" >> resultLetters/resultLettersGenerator$1.txt

for (( i=11; i<=`wc -l tempLettersGenerator.tmp | cut -d " " -f1`; i++ ))
do
	
	echo -n "\"`sed -n $i\p tempLettersGenerator.tmp`\"" >> resultLetters/resultLettersGenerator$1.txt

	if (( $i != `wc -l tempLettersGenerator.tmp | cut -d " " -f1` ))
	then
		echo -n ", " >> resultLetters/resultLettersGenerator$1.txt
	fi
done


echo "]" >> resultLetters/resultLettersGenerator$1.txt

echo } >> resultLetters/resultLettersGenerator$1.txt

cat resultLetters/resultLettersGenerator$1.txt

# Delete temp file
rm tempLettersGenerator.tmp
