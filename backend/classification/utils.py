from pypdf import PdfReader
import re
import pandas as pd
import joblib
from os import listdir
from os.path import isfile, join

def classify_text(input_text):
    sentences_svm = joblib.load('classification/svc_model_pipeline.joblib')
    
    pred = sentences_svm.predict([input_text])
    
    return pred