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

def updateModel(period):

    url = "https://min-api.cryptocompare.com/data/v2/histo" + period + "?fsym=BTC&tsym=GBP"
    params = {
        'limit': "2000"
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
        for i in range(len(dataset)-look_back-1):
            a = dataset[i:(i+look_back), 0]
            dataX.append(a)
            dataY.append(dataset[i + look_back, 0])
        return numpy.array(dataX), numpy.array(dataY)

    # reshape into X=t and Y=t+1
    look_back = 10
    trainX, trainY = create_dataset(dataset, look_back)

    # reshape input to be [samples, time steps, features]
    trainX = numpy.reshape(trainX, (trainX.shape[0], 1, trainX.shape[1]))

    """ The network has a visible layer with 1 input, a hidden layer with
    4 LSTM blocks or neurons and an output layer that makes a single value
    prediction. The default sigmoid activation function is used for the
    LSTM blocks. The network is trained for 100 epochs and a batch size of
    1 is used."""

    # create and fit the LSTM network
    model = Sequential()
    model.add(LSTM(4, input_dim=look_back))
    model.add(Dense(1))
    model.compile(loss='mean_squared_error', optimizer='adam')
    model.fit(trainX, trainY, epochs=20, batch_size=1, verbose=2)

    model.save_weights('models/' + period + '_model_weights')

def run():
    updateModel("minute")
    print("=== Updating Minute Model Done ===\n")

    updateModel("hour")
    print("=== Updating Hour Model Done ===\n")

    updateModel("day")
    print("=== Updating Day Model Done ===\n")
