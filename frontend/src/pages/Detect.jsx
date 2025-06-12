import React, { useState } from 'react';
import { FaUpload, FaSearch, FaSpinner, FaLeaf } from 'react-icons/fa';
import '../styles/App.css';

const Detect = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('No file selected');
    const [isDetecting, setIsDetecting] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            if (!selectedFile.type.match('image.*')) {
                setError('Please upload an image file (JPEG, PNG)');
                return;
            }
            setFile(selectedFile);
            setFileName(selectedFile.name);
            setResult(null);
            setError(null);
        }
    };

    const getRecommendations = (disease) => {
        const recommendations = {
            'Potato___Early_blight': [
                'Apply fungicides containing chlorothalonil or mancozeb',
                'Remove infected leaves to prevent spread',
                'Improve air circulation around plants',
                'Avoid overhead watering',
                'Rotate crops with non-solanaceous plants'
            ],
            'Potato___Late_blight': [
                'Apply copper-based fungicides',
                'Remove and destroy infected plants immediately',
                'Ensure proper field drainage',
                'Rotate crops annually',
                'Use resistant potato varieties when available'
            ],
            'Potato___healthy': [
                'Continue current care practices',
                'Monitor plants regularly for early signs of disease',
                'Maintain proper watering schedule',
                'Ensure balanced fertilization',
                'Practice crop rotation as preventive measure'
            ]
        };
        return recommendations[disease] || [
            'Consult with agricultural extension service',
            'Submit sample to plant pathology lab',
            'Monitor plant health regularly',
            'Review cultural practices and environmental conditions'
        ];
    };

    const handleDetect = async () => {
        if (!file) {
            setError('Please select an image first');
            return;
        }

        setIsDetecting(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch prediction from server');
            }

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setResult({
                disease: data.class_name.replace(/_/g, ' ').replace('Potato', '').trim(),
                confidence: `${(data.confidence * 100).toFixed(2)}%`,
                recommendations: getRecommendations(data.class_name)
            });

        } catch (err) {
            console.error('Detection error:', err);
            setError(err.message || 'Failed to detect disease. Please try again.');
        } finally {
            setIsDetecting(false);
        }
    };
    
    

    return (
        <div className="detection-container">
            <div className="detection-header">
                <h1><FaLeaf className="header-icon" /> Potato Disease Detection</h1>
                <p className="subtitle">Upload an image of a potato leaf to identify diseases and get treatment recommendations</p>
            </div>

            <div className="upload-area">
                <input
                    type="file"
                    id="fileInput"
                    className="file-input"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <label htmlFor="fileInput" className="file-label">
                    <FaUpload className="upload-icon" /> Choose Image
                </label>
                <p className="file-name">{fileName}</p>
                {file && (
                    <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className="preview-thumbnail"
                    />
                )}
            </div>

            <button
                className="detect-btn"
                onClick={handleDetect}
                disabled={!file || isDetecting}
            >
                {isDetecting ? (
                    <><FaSpinner className="spinner" /> Analyzing...</>
                ) : (
                    <><FaSearch /> Detect Disease</>
                )}
            </button>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {result && (
                <div className="result-area">
                    <h2>Detection Results</h2>
                    <div className="result-grid">
                        <div className="image-column">
                            <img
                                src={URL.createObjectURL(file)}
                                alt="Analyzed leaf"
                                className="preview-image"
                            />
                            <p className="image-caption">Uploaded leaf sample</p>
                        </div>
                        <div className="result-column">
                            <div className="result-card">
                                <h3>Diagnosis</h3>
                                <p className="disease-name">{result.disease}</p>
                                <div className="confidence-meter">
                                    <div className="meter-bar" style={{ width: result.confidence }}></div>
                                    <span>Confidence: {result.confidence}</span>
                                </div>
                            </div>

                            <div className="recommendations-card">
                                <h3>Recommendations</h3>
                                <ul>
                                    {result.recommendations.map((item, index) => (
                                        <li key={index}>
                                            <span className="recommendation-bullet">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Detect;