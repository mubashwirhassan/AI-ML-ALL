import { Level } from '../../types';

export const level9: Level = {
  id: 9,
  slug: 'deployment-and-mlops',
  title: {
    en: 'Level 9 — Deployment & MLOps Fundamentals',
    bn: 'লেভেল ৯ — মডেল ডিপ্লয়মেন্ট ও এমএলঅপস (MLOps)',
  },
  subtitle: {
    en: 'Model Serialization (joblib), FastAPI Endpoints, Docker Containers, Drift Monitoring & CI/CD',
    bn: 'মডেল সেভ করা, ফাস্টএপিআই, ডকার কন্টেইনার, ডেটা ড্রিফট মনিটরিং ও পাইপলাইন',
  },
  description: {
    en: 'A model sitting inside a Jupyter notebook provides zero business value. Master taking models out of notebooks and shipping them into robust production microservices with REST APIs, containerization, and automated drift monitoring.',
    bn: 'জুপিটার নোটবুকে আটকে থাকা মডেল দিয়ে বাস্তব দুনিয়ায় কোনো কাজ হয় না। শিখুন কীভাবে মডেলকে সেভ করে FastAPI দিয়ে ওয়েব এপিআই বানানো, ডকার কন্টেইনার তৈরি করা এবং সার্ভারে ডেটা ড্রিফট পর্যবেক্ষণ করা যায়।',
  },
  iconName: 'Server',
  color: 'from-blue-600 to-cyan-700',
  badge: 'Production Engineering',
  lessons: [
    {
      id: 'l9-fastapi',
      levelId: 9,
      slug: 'model-serialization-and-fastapi',
      title: {
        en: 'Model Serialization (Joblib) & FastAPI REST Microservices',
        bn: 'মডেল সেভ করা (Joblib) এবং FastAPI এপিআই তৈরি',
      },
      subtitle: {
        en: 'Exporting trained weights to disk and serving real-time predictions via JSON endpoints',
        bn: 'ট্রেন করা মডেল হার্ডডিস্কে সংরক্ষণ এবং লাইভ এপিআই-তে রিয়েল-টাইম প্রেডিকশন প্রদান',
      },
      difficulty: 'Advanced',
      estimatedMinutes: 30,
      category: 'Deployment',
      whatIsIt: {
        en: 'Model Serialization saves an in-memory trained model to a persistent binary file (.pkl or .joblib) on disk. FastAPI is an ultra-fast modern Python web framework used to expose a /predict REST API endpoint that receives JSON requests and returns predictions.',
        bn: 'মডেল সিরিয়ালাইজেশন হলো ট্রেনিং করা মডেলকে একটি স্থায়ী ফাইলে (.joblib) সংরক্ষণ করা। আর FastAPI হলো পাইথনের একটি আধুনিক ওয়েব ফ্রেমওয়ার্ক যা দিয়ে /predict নামের এপিআই তৈরি করে যেকোনো ওয়েবসাইট বা মোবাইল অ্যাপে মুহূর্তেই ফলাফল পাঠানো যায়।',
      },
      analogy: {
        en: 'Training a model in a notebook is like writing a secret master recipe on a kitchen chalkboard. Serializing is freezing the pre-cooked dish into sealed packages. FastAPI is the drive-thru window where customers order by name (JSON) and receive hot food in 2 seconds!',
        bn: 'নোটবুকে মডেল বানানো হলো রেসিপি লেখার মতো। সিরিয়ালাইজেশন হলো খাবার প্যাকেটজাত করে রাখা। আর FastAPI হলো রেস্তোরাঁর ডেলিভারি উইন্ডো—যেখানে বাইরের যেকোনো গ্রাহক অর্ডার পাঠিয়ে মুহূর্তেই খাবার ডেলিভারি পায়।',
      },
      whyItMatters: {
        en: 'Web and mobile developers write in JavaScript, Swift, or Kotlin; they cannot run Python notebooks. A REST API provides a universal JSON bridge between any frontend and your Python ML model.',
        bn: 'মোবাইল বা ওয়েব ডেভেলপাররা জাভাস্ক্রিপ্ট বা সুইফটে কোড লেখেন। তারা সরাসরি পাইথন ফাইল চালাতে পারেন না। একটি REST API তাদের সাথে পাইথন মডেলের ইউনিভার্সাল যোগাযোগের মাধ্যম তৈরি করে।',
      },
      howItWorks: {
        en: '1) joblib.dump(model, "model.joblib"); 2) Create FastAPI app; 3) Define Pydantic request schema; 4) Load model on startup; 5) In @app.post("/predict"), convert request to NumPy array and return model.predict().',
        bn: '১) joblib.dump() দিয়ে মডেল সেভ করা; ২) FastAPI অ্যাপ তৈরি; ৩) Pydantic দিয়ে ইনপুটের নিয়ম ঠিক করা; ৪) @app.post("/predict") এপিআই তৈরি করে ক্লায়েন্টকে JSON ফলাফল পাঠানো।',
      },
      practicalApplication: {
        en: 'E-commerce mobile app querying an ML API with cart contents and receiving instant personalized discount recommendations in 30ms.',
        bn: 'ই-কমার্স মোবাইল অ্যাপ থেকে গ্রাহকের কার্ট আইডি পাঠিয়ে ৩০ মিলিসেকেন্ডে অফার রেকমেন্ডেশন পাওয়া।',
      },
      codeExample: {
        title: 'Complete Production FastAPI Model Endpoint',
        language: 'python',
        code: `# 1. Save trained model to disk
import joblib
from sklearn.linear_model import LinearRegression
import numpy as np

model = LinearRegression().fit(np.array([[500], [1000], [1500]]), np.array([100, 200, 300]))
joblib.dump(model, 'house_model.joblib')
print("Model serialized to disk as house_model.joblib!")

# 2. Complete FastAPI microservice code (main.py)
api_code = '''
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="House Price ML API")
model = joblib.load("house_model.joblib")

class HouseRequest(BaseModel):
    sqft: float

@app.post("/predict")
def predict_price(payload: HouseRequest):
    input_data = np.array([[payload.sqft]])
    prediction = model.predict(input_data)[0]
    return {
        "sqft": payload.sqft,
        "predicted_price": round(float(prediction), 2),
        "currency": "USD"
    }
'''
print("\\nFastAPI microservice code ready for uvicorn launch!")`,
        expectedOutput: `Model serialized to disk as house_model.joblib!

FastAPI microservice code ready for uvicorn launch!`,
        explanation: {
          en: [
            'joblib.dump() packs all learned weights and metadata into a clean binary file.',
            'FastAPI with Pydantic validates incoming user payloads automatically with high speed.',
          ],
          bn: [
            'joblib.dump() মডেলের সমস্ত ওয়েট ও কনফিগারেশন একটি ফাইলে সেভ করে।',
            'FastAPI স্বয়ংক্রিয়ভাবে ইনপুট ভ্যালিডেশন করে দ্রুততম গতিতে রেসপন্স দেয়।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Re-training the model from scratch every time a user calls the /predict endpoint.',
            bn: 'প্রতিবার এপিআই কল করার সময় নতুন করে ডেটাসেট লোড করে মডেল ট্রেনিং করা।',
          },
          solution: {
            en: 'Load the pre-trained model once globally on startup; inference takes only milliseconds.',
            bn: 'মডেল আগে থেকে সেভ করে রাখবেন এবং সার্ভার চালু হওয়ার সময় একবারই মেমরিতে লোড করবেন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Identify the Universal Format', bn: 'সর্বজনীন ফরম্যাট চিহ্নিতকরণ' },
        instructions: {
          en: 'What data interchange format do web frontends send to FastAPI REST endpoints?',
          bn: 'ওয়েব ফ্রন্টএন্ড বা মোবাইল অ্যাপ এপিআই-তে সাধারণত কোন ফরম্যাটে ডেটা পাঠায়?',
        },
        hint: {
          en: 'JSON (JavaScript Object Notation).',
          bn: 'JSON (JavaScript Object Notation)।',
        },
      },
      nextLessonId: 'l9-mlops-drift',
    },
    {
      id: 'l9-mlops-drift',
      levelId: 9,
      slug: 'mlops-drift-monitoring-and-docker',
      title: {
        en: 'MLOps, Docker Containerization & Drift Monitoring',
        bn: 'এমএলঅপস, ডকার কন্টেইনার ও ডেটা ড্রিফট পর্যবেক্ষণ',
      },
      subtitle: {
        en: 'Packaging dependencies with Docker and detecting silent model degradation over time',
        bn: 'ডকার দিয়ে কোড প্যাকেজ করা এবং সময়ের সাথে মডেলের কার্যক্ষমতা হ্রাস নজরদারি',
      },
      difficulty: 'Expert',
      estimatedMinutes: 35,
      category: 'MLOps',
      whatIsIt: {
        en: 'MLOps (Machine Learning Operations) is the discipline of standardizing and automating continuous model deployment, testing, monitoring, and retraining. Docker containers package Python code, libraries, and system dependencies so it runs identically anywhere. Drift monitoring detects when real-world distributions shift.',
        bn: 'MLOps হলো মেশিন লার্নিং মডেলকে স্বয়ংক্রিয়ভাবে সার্ভারে ডিপ্লয়, মনিটরিং এবং রি-ট্রেনিং করার সম্পূর্ণ প্রকৌশল। ডকার (Docker) আপনার কোড ও সব লাইব্রেরিকে একটি প্যাকেজে ভরে ফেলে যাতে যেকোনো ক্লাউড সার্ভারে একইরকম চলে। আর ড্রিফট মনিটরিং নিশ্চিত করে মডেল সময়ের সাথে ভুল পথে যাচ্ছে কিনা।',
      },
      analogy: {
        en: 'Think of shipping physical goods overseas. In the 1800s, loose barrels rolled around and broke. In modern logistics, standard ISO shipping containers (Docker) fit seamlessly onto ships, trains, and trucks without repacking.',
        bn: 'ডকার হলো জাহাজের শিপিং কন্টেইনারের মতো। জিনিসপত্র ভেতরে যেমনই হোক, কন্টেইনারের সাইজ নির্দিষ্ট থাকায় তা ট্রেন, জাহাজ বা ট্রাকে কোনো পরিবর্তন ছাড়াই নিরাপদে পরিবহন করা যায়। আপনার কম্পিউটারে যে কোড চলবে, ডকারের কারণে ক্লাউড সার্ভারেও তা নিখুঁতভাবে চলবে।',
      },
      whyItMatters: {
        en: 'Models degrade silently: A 2019 flight booking model crashed financially in 2020 because the COVID pandemic drastically altered global human travel habits (Data & Concept Drift).',
        bn: 'মডেল সময়ের সাথে সাথে অচল হয়ে পড়ে (Silent Failure)। যেমন ২০২০ সালে কোভিডের কারণে মানুষের ভ্রমণ ও কেনাকাটার অভ্যাস পুরোপুরি বদলে গিয়েছিল, ফলে ২০১৯ সালের মডেলগুলো ভুল পূর্বাভাস দেওয়া শুরু করে।',
      },
      howItWorks: {
        en: 'Data Drift: P(X) shifts (e.g. users get younger). Concept Drift: P(y|X) shifts (e.g. the definition of spam changes). MLOps monitors calculate Kolmogorov-Smirnov statistical tests and trigger automated retraining pipelines.',
        bn: 'ডেটা ড্রিফটে ইনপুট তথ্যের রূপ বদলে যায়। কনসেপ্ট ড্রিফটে ইনপুট ও উত্তরের আসল সম্পর্কই বদলে যায়। এমএলঅপস টুলস পরিসংখ্যানগত টেস্ট চালিয়ে স্বয়ংক্রিয় রি-ট্রেনিং পাইপলাইন চালু করে।',
      },
      practicalApplication: {
        en: 'Automated CI/CD pipelines in GitHub Actions deploying newly trained models to Google Cloud Run when validation accuracy beats the current production model.',
        bn: 'গিটহাব অ্যাকশনস ও ক্লাউড রানের মাধ্যমে স্বয়ংক্রিয়ভাবে নতুন মডেল প্রোডাকশনে পাঠানো যখন সেটি বর্তমান মডেলের চেয়ে ভালো ফল দেয়।',
      },
      codeExample: {
        title: 'Production Dockerfile for Machine Learning API',
        language: 'dockerfile',
        code: `# Minimalist, production-ready Python ML Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends build-essential \\
    && rm -rf /var/lib/apt/lists/*

# Install python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files and model artifacts
COPY main.py house_model.joblib ./

# Expose port 3000
EXPOSE 3000

# Start high-performance Uvicorn ASGI server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3000"]`,
        expectedOutput: `Successfully tagged ml-api:latest
Image size: 145MB. Ready for Google Cloud Run / AWS ECS.`,
        explanation: {
          en: [
            'python:3.11-slim creates a secure, tiny base container footprint (~145MB).',
            'Dependencies are pre-cached and isolated from host operating system variances.',
          ],
          bn: [
            'python:3.11-slim অত্যন্ত হালকা ও নিরাপদ বেস ইমেজ তৈরি করে।',
            'সব লাইব্রেরি কন্টেইনারের ভেতরে আবদ্ধ থাকায় অন্য কম্পিউটারে আলাদা ইন্সটলের ঝামেলা থাকে না।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Deploying a model once and never monitoring its prediction distributions or error rates.',
            bn: 'মডেল একবার সার্ভারে তুলে আর কখনো তার পারফরম্যান্স বা ডেটা পরিবর্তন পরীক্ষা না করা।',
          },
          solution: {
            en: 'Set up automated telemetry alerts (Evidently AI, Prometheus) to flag data drift early.',
            bn: 'ডেটা ড্রিফট শনাক্ত করার জন্য মনিটরিং টুলস ব্যবহার করুন যাতে মডেলের অবনতি হলে দ্রুত নোটিফিকেশন পাওয়া যায়।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Data Drift vs Concept Drift', bn: 'ডেটা ড্রিফট বনাম কনসেপ্ট ড্রিফট' },
        instructions: {
          en: 'Inflation causes all home prices in a city to double overnight. Is this Data Drift or Concept Drift?',
          bn: 'মুদ্রাস্ফীতির কারণে সব বাড়ির দাম রাতারাতি দ্বিগুণ হয়ে যাওয়া ডেটা ড্রিফট নাকি কনসেপ্ট ড্রিফট?',
        },
        hint: {
          en: 'Concept Drift: the relationship mapping square footage (X) to price (y) has shifted!',
          bn: 'কনসেপ্ট ড্রিফট: কারণ আয়তনের সাথে দামের সম্পর্কটিই আমূল পরিবর্তিত হয়ে গেছে।',
        },
      },
      previousLessonId: 'l9-fastapi',
    },
  ],
};
