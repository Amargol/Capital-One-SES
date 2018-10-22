from pandas import DataFrame, read_csv
import pandas as pd 
from math import radians, sin, cos, acos
 
file = r'metro-bike-share-trip-data.csv'
df = pd.read_csv(file, nrows=10000)
# df = pd.read_csv(file)

def printCSV (st):
  v1 = ""
  v2 = ""
  for row in st:
    v1 = v1 + "\"" + str(row[0]) + "\"" + ", "
    v2 = v2 + str(row[1]) + ", "

  print(v1)
  print(v2)

def distance (slat, slon, elat, elon):
  dist = 6371.01 * acos(sin(slat)*sin(elat) + cos(slat)*cos(elat)*cos(slon - elon))
  return dist


# stations = {}

# for index, row in df.iterrows():
#   try: 
#     station = int(row["Starting Station ID"])
#     if station in stations:
#       stations[station] += 1
#     else:
#       stations[station] = 1
#   except:
#     print(index)

# st = sorted(stations.items(), key=lambda x: x[1], reverse=True)

# print()
# print()
# print("Starting Station ID Count:")
# printCSV(st)

# stations1 = {}

# for index, row in df.iterrows():
#   try: 
#     station = int(row["Ending Station ID"])
#     if station in stations1:
#       stations1[station] += 1
#     else:
#       stations1[station] = 1
#   except:
#     print(index)

# st1 = sorted(stations1.items(), key=lambda x: x[1], reverse=True)

# print()
# print()
# print("Ending Station ID Count:")
# printCSV(st1)

# discrepancy = {}
# numDays = 269

# for key, value in stations.items():
#   if key in stations:
#     numCheckedOut = int(stations[key])
#   else:
#     numCheckedOut = 0

#   if key in stations1:
#     numCheckedIn = int(stations1[key])
#   else:
#     numCheckedIn = 0

#   discrepancy[key] = round((numCheckedIn - numCheckedOut)/numDays,2)

# st2 = sorted(discrepancy.items(), key=lambda x: x[1])

# print()
# print()
# print("discrepancy:")
# printCSV(st2)


distanceSum = {}
typeCount = {}

for index, row in df.iterrows():
  try: 
    type = str(row["Passholder Type"])
    if not type == "Staff Annual":
      if type in distanceSum:
        distanceSum[type] = distanceSum[type] + float(distance(float(row["Starting Station Latitude"]), float(row["Starting Station Longitude"]), float(row["Ending Station Latitude"]), float(row["Ending Station Longitude"])))
        typeCount[type] = typeCount[type] + 1
      else:
        distanceSum[type] = float(distance(float(row["Starting Station Latitude"]), float(row["Starting Station Longitude"]), float(row["Ending Station Latitude"]), float(row["Ending Station Longitude"])))
        typeCount[type] = 1
  except:
    print(index)

averages = {}

for key, value in distanceSum.items():
  try:
    averages[key] = round(float(value)/float(typeCount[key]), 2)
  except:
    print(key, value)

st3 = sorted(averages.items(), key=lambda x: x[1])

print()
print()
print("Average Distance Travelled:")
printCSV(st3)

totalSum = 0
numTrials = 0

for key, value in distanceSum.items():
  totalSum += value
  numTrials += typeCount[key]

print()
print()
print("Total average", round(totalSum/numTrials, 2))