"""
import library
"""
import numpy
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error
import requests
import json


currentMinVal = ()
currentHourVal = ()
currentDayVal = ()

def getPrediction():

    options = [
        "minute",
        "hour",
        "day"
    ]

    params = {
        'limit': "9"
    }

    headers = {
        'Content-Type': "application/x-www-form-urlencoded",
        'cache-control': "no-cache",
        'api_key': "499372a892c79cd63eeb10ff08957a0fb9983c0c8d7170f9f6fb3154c04f1f37"
    }

    look_back = 10

    model = Sequential()
    model.add(LSTM(4, input_dim=look_back))
    model.add(Dense(1))
    model.compile(loss='mean_squared_error', optimizer='adam')

    res = []

    for option in options:
        url = "https://min-api.cryptocompare.com/data/v2/histo" + option + "?fsym=BTC&tsym=GBP"

        response = requests.request("GET", url, params=params, headers=headers)

        apiData = json.loads(response.text)
        
        dataset = []
        times = []
        initTime = 0
        pnext = 0

        for item in apiData["Data"]["Data"]:
            dataset.append(item["open"])
            initTime = item["time"]

        if option == "minute":
            pnext = 10
            currentMinVal = (initTime, dataset[9])
            for i in range(pnext):
                times.append(initTime + 60 * (i + 1))
        elif option == "hour":
            pnext = 12
            currentHourVal = (initTime, dataset[9])
            for i in range(pnext):
                times.append(initTime + 3600 * (i + 1))
        else:
            pnext = 365
            currentDayVal = (initTime, dataset[9])
            for i in range(pnext):
                times.append(initTime + 86400 * (i + 1))

        dataset = numpy.array(dataset)
        dataset = dataset.reshape(-1, 1) #returns a numpy array

        scaler = MinMaxScaler(feature_range=(0, 1))
        dataset = scaler.fit_transform(dataset)

        # fix random seed for reproducibility
        numpy.random.seed(3)

        testX = numpy.array(dataset)
        # reshape input to be [samples, time steps, features]
        testX = numpy.reshape(testX, (1, 1, look_back))

        model.load_weights('models/minute_model_weights')

        # make predictions
        result = []
        for i in range(pnext):
            testPredict = model.predict(testX)
            testX[0][0][:9] = testX[0][0][1:10]
            testX[0][0][9] = testPredict[0][0]
            result.append(testPredict[0][0])

        # invert predictions
        result = numpy.array(result).reshape(1, -1)
        predict = scaler.inverse_transform(result).flatten()

        for i in range(pnext):
            res.append((times[i], predict[i], predict[i]))

    return res

def getCurrent():
    res = [
        currentMinVal, 
        currentHourVal, 
        currentDayVal
    ]
    return res
