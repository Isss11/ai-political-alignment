from pypdf import PdfReader
import pandas as pd
import joblib

def classify_text(input_text):
    sentences_svm = joblib.load('backend/classification/svc_model_pipeline.joblib')
    
    pred = sentences_svm.predict([input_text])
    
    return pred