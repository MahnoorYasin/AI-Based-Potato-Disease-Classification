# 🥔AI-Based-Potato-Disease-Classification

## 📌 Overview

This project is a **full-stack web application** designed to detect **potato leaf diseases** using a trained **deep learning model**. The system is composed of a **Flask backend** (which handles image classification and model inference) and a **React frontend** (which provides a user-friendly interface for uploading leaf images and viewing results).

The primary goal is to assist farmers and agricultural researchers in **early and accurate identification** of common potato leaf diseases such as *Early Blight* and *Late Blight*.

---

## 🧠 Deep Learning Model

### ✅ Problem Statement

Classify an input image of a potato leaf into one of the following categories:

1. **Potato\_\_\_Early\_blight**
2. **Potato\_\_\_Late\_blight**
3. **Potato\_\_\_Healthy**

### 🧪 Techniques Used

* **Base Model**: [ResNet50](https://keras.io/api/applications/resnet/#resnet50-function) (pre-trained on ImageNet)

  * Fine-tuned with custom classifier layers

* **Transfer Learning**:

  * Used `include_top=False` to extract features using ResNet50
  * Added:

    * `GlobalAveragePooling2D`
    * `Dense` layer (activation: ReLU)
    * `Dropout` (for regularization)
    * `Dense` output layer (softmax for 3 classes)

* **Data Augmentation**:

  * Random flips, rotations, zooms to reduce overfitting

* **Training Optimizations**:

  * `EarlyStopping` and `ModelCheckpoint` callbacks
  * Adam optimizer
  * Categorical cross-entropy loss

### 📈 Performance Metrics

* Accuracy > 95% on validation data
* Balanced classification across all classes
* Capable of real-time prediction via REST API

---

## 🔧 Backend – Flask API

### 📂 Structure

```
backend/
│
├── app.py              # Main Flask application
├── utils.py            # Helper functions for preprocessing and prediction
└── model/
    └── potatoes.h5     # Trained Keras model
```

### 🔄 Core Functionalities

* Loads and caches the pre-trained model
* Accepts image input via `POST /predict`
* Processes and resizes images
* Predicts class label and confidence score
* Sends JSON response back to the frontend


### 📦 Key Dependencies

* `Flask`
* `Flask-CORS`
* `TensorFlow`
* `NumPy`
* `Pillow`

---

## 🎨 Frontend – React App

### 📂 Structure

```
frontend/
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │   └── footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Detect.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   └── Footer.css
│   ├── assets/
│   │   └── background.jpg
│   └── App.js
```

### 🧩 Components

* **Navbar**: Top navigation for switching between routes
* **Home Page**: Brief introduction to the tool
* **Detect Page**:

  * File upload interface
  * Shows predictions after API call
* **About Page**: Explains the purpose of the application and team details
* **Contact Page**: User contact form (optional extension)

### 🔌 Integration

* Uses `axios` or `fetch` to send uploaded image to Flask backend
* Parses JSON response and displays class name and confidence
* Styling done with pure CSS (can be upgraded to Tailwind or Material UI)

---

## 🛠️ Setup Instructions

### ✅ Backend Setup

1. Navigate to `backend/`:

   ```bash
   cd backend
   ```

2. Create virtual environment and activate:

   ```bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install flask flask-cors tensorflow pillow numpy
   ```

4. Run the server:

   ```bash
   python app.py
   ```

---

### ✅ Frontend Setup

1. Navigate to `frontend/`:

   ```bash
   cd frontend
   ```

2. Install React dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm start
   ```

Frontend will run on [http://localhost:3000](http://localhost:3000), and backend on [http://localhost:5000](http://localhost:5000).

---

## 🔍 Future Enhancements

* Add Grad-CAM heatmap overlay
* Add support for other crops like tomato, grape, corn
* Mobile responsive frontend
* Deploy on Render, Vercel, or HuggingFace Spaces
* Add multilingual support for farmers in rural regions
