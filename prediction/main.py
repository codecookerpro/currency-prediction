#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from src import models
from src import database
from multiprocessing import Process
from time import sleep

def updateModel():
    while True:
        print("=== Update Model Every 10 Min ===")
        # models.run()
        sleep(900)

def updateDB():
    database.create()
    database.migrate()

if __name__ == '__main__':
    p1 = Process(target = updateModel)
    p1.start()
    p2 = Process(target = updateDB)
    p2.start()
