
import csv
results = []
# opening the CSV file
with open('out.csv', mode ='r')as file:
   
  # reading the CSV file
  csvFile = csv.reader(file)
 
  # displaying the contents of the CSV file
  for lines in csvFile:
        results.append(lines)
##        print(lines)



##import csv
##
##results = []
##with open('out.csv', newline='') as inputfile:
##    for row in csv.reader(inputfile):
##        results.append(row[0])
##
##print(results)
