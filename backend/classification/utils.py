from pypdf import PdfReader
import re
import pandas as pd
import joblib
import time

def classify_text(input_text):
    sentences_svm = joblib.load('classification/svc_model_pipeline.joblib')
    
    # FIXME: Remove after done testing
    time.sleep(5)
    
    pred = sentences_svm.predict([input_text])
    
    return pred