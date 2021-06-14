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

def getPrediction():

    url = "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=GBP"
    params = {
        'limit': "10"
    }

    headers = {
        'Content-Type': "application/x-www-form-urlencoded",
        'cache-control': "no-cache",
        'api_key': "499372a892c79cd63eeb10ff08957a0fb9983c0c8d7170f9f6fb3154c04f1f37"
    }
    response = requests.request("GET", url, params=params, headers=headers)

    apiData = json.loads(response.text)
    dataset = []

    for item in apiData["Data"]["Data"]:
        dataset.append(item["open"])

    dataset = numpy.array(dataset)
    dataset = dataset.reshape(-1, 1) #returns a numpy array

    scaler = MinMaxScaler(feature_range=(0, 1))
    dataset = scaler.fit_transform(dataset)

    # fix random seed for reproducibility
    numpy.random.seed(3)

    # convert an array of values into a dataset matrix
    def create_dataset(dataset, look_back=1):
        dataX, dataY = [], []
        for i in range(len(dataset)-look_back):
            a = dataset[i:(i+look_back), 0]
            dataX.append(a)
            dataY.append(dataset[i + look_back, 0])
        return numpy.array(dataX), numpy.array(dataY)

    # reshape into X=t and Y=t+1
    look_back = 10
    testX, testY = create_dataset(dataset, look_back)

    # reshape input to be [samples, time steps, features]
    testX = numpy.reshape(testX, (testX.shape[0], 1, testX.shape[1]))

    model = Sequential()
    model.add(LSTM(4, input_dim=look_back))
    model.add(Dense(1))
    model.compile(loss='mean_squared_error', optimizer='adam')

    model.load_weights('models/minute_model_weights')

    # make predictions
    result = []
    for i in range(10):
        testPredict = model.predict(testX)
        testX[0][0][:9] = testX[0][0][1:10]
        testX[0][0][9] = testPredict[0][0]
        result.append(testPredict[0][0])

    # invert predictions
    result = numpy.array(result).reshape(1, -1)
    testPredict = scaler.inverse_transform(result)

    return testPredict
