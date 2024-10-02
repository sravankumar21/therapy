import numpy as np
import pickle
import random
import json
from keras.models import load_model

# Load the model and data
model = load_model('chatbot_model.h5')
intents = json.loads(open('merged_dataset_intents.json').read())
words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))

# Function to clean up the sentence (simple tokenization without NLTK)
def clean_up_sentence(sentence):
    # Tokenize by splitting the sentence into words
    sentence_words = sentence.lower().split()
    return sentence_words

# Create bag of words array for the sentence
def bow(sentence, words, show_details=True):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for s in sentence_words:
        for i, w in enumerate(words):
            if w == s:
                bag[i] = 1
                if show_details:
                    print(f"Found in bag: {w}")
    return np.array(bag)

# Predict the class of the sentence
def predict_class(sentence, model):
    p = bow(sentence, words, show_details=False)
    res = model.predict(np.array([p]))[0]
    ERROR_THRESHOLD = 0.25
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    return return_list

# Get the appropriate response based on the predicted intent
def getResponse(ints, intents_json):
    tag = ints[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result

# Generate the chatbot response based on the message
def chatbot_response(msg):
    ints = predict_class(msg, model)
    print(msg, ints)
    try:
        if float(ints[0]['probability']) > 0.79:  # Confidence threshold
            print("Accepted by probability")
            res = getResponse(ints, intents)
        elif len(ints) == 1:
            print("Accepted by scarcity")
            res = getResponse(ints, intents)
        else:
            print("Rejected")
            res = "Sorry, I couldn't process it. Could you rephrase?"
    except:
        print("Exception occurred")
        res = "Sorry, I couldn't process it. Could you rephrase?"
    return res
