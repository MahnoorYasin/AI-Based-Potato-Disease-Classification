# File: backend/utils.py

import numpy as np
from PIL import Image

def preprocess_image(img: Image.Image, target_size=(224, 224)) -> np.ndarray:
    """
    Preprocess the input PIL image for prediction.
    Resizes, normalizes and reshapes the image as required by the model.

    Args:
        img (PIL.Image.Image): The input image.
        target_size (tuple): The size to resize the image to.

    Returns:
        np.ndarray: Preprocessed image ready for model prediction.
    """
    img = img.resize(target_size)
    img_array = np.array(img) / 255.0  # Normalize
    if img_array.ndim == 2:
        # Convert grayscale to RGB
        img_array = np.stack((img_array,) * 3, axis=-1)
    return np.expand_dims(img_array, axis=0)

def get_prediction(model, processed_img: np.ndarray, class_names: list) -> dict:
    """
    Run prediction on the preprocessed image and return class and confidence.

    Args:
        model (tf.keras.Model): Trained Keras model.
        processed_img (np.ndarray): Preprocessed image.
        class_names (list): List of class labels.

    Returns:
        dict: Prediction result with class and confidence.
    """
    prediction = model.predict(processed_img)
    predicted_class = class_names[np.argmax(prediction)]
    confidence = float(np.max(prediction))
    return {
        'class_name': predicted_class,
        'confidence': confidence
    }
