import csv

with open('out.csv') as csvfile:
    readCSV = csv.reader(csvfile, delimiter=',')
    countrys = []
   
    for row in readCSV:
        country = row[0]
       
        countrys.append(country)
        

print(countrys)
  
