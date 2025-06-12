from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io

app = Flask(__name__)
CORS(app)

# Update model path if necessary
model = load_model('D:/Potato_Disease_Classification/backend/model/potatoes.h5')
class_names = ['Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy']

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file found'}), 400

    file = request.files['file']
    print("Received file:", file.filename)

    try:
        img = Image.open(io.BytesIO(file.read())).convert('RGB')
        img = img.resize((256, 256))
        img_array = tf.keras.preprocessing.image.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0) / 255.0

        predictions = model.predict(img_array)
        predicted_class = np.argmax(predictions[0])
        confidence = float(np.max(predictions[0]))

        return jsonify({
            'class_name': class_names[predicted_class],
            'confidence': confidence
        })

    except Exception as e:
        print(f"Error processing the file: {e}")
        return jsonify({'error': 'Error processing the file', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
