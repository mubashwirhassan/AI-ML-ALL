import { Level } from '../../types';

export const level5: Level = {
  id: 5,
  slug: 'model-evaluation',
  title: {
    en: 'Level 5 — Model Evaluation & Hyperparameter Tuning',
    bn: 'লেভেল ৫ — মডেল মূল্যায়ন ও হাইপারপ্যারামিটার টিউনিং',
  },
  subtitle: {
    en: 'Train/Test Split, K-Fold Cross-Validation, Confusion Matrix, ROC-AUC, RMSE, and Grid Search',
    bn: 'ট্রেন/টেস্ট স্প্লিট, কে-ফোল্ড ক্রস-ভ্যালিডেশন, কনফিউশন ম্যাট্রিক্স, আরওসি-এওসি ও গ্রিড সার্চ',
  },
  description: {
    en: 'Never get fooled by high accuracy on training data. Master the complete toolkit of classification and regression metrics, K-Fold validation, and automated hyperparameter optimization.',
    bn: 'শুধুমাত্র একিউরেসি দেখে বিভ্রান্ত হবেন না। জানুন কনফিউশন ম্যাট্রিক্স, প্রিসিশন, রিকল, F1 স্কোর, আরওসি কার্ভ এবং গ্রিড সার্চের মাধ্যমে কীভাবে সেরা মডেল বেছে নিতে হয়।',
  },
  iconName: 'CheckCircle2',
  color: 'from-emerald-500 to-green-600',
  badge: 'Validation & Tuning',
  lessons: [
    {
      id: 'l5-train-test-cv',
      levelId: 5,
      slug: 'train-test-and-cross-validation',
      title: {
        en: 'Train/Test Split & K-Fold Cross-Validation',
        bn: 'ট্রেন/টেস্ট স্প্লিট ও কে-ফোল্ড ক্রস-ভ্যালিডেশন',
      },
      subtitle: {
        en: 'The golden rule of machine learning: Never evaluate on your training data',
        bn: 'মেশিন লার্নিংয়ের সোনালী নিয়ম: কখনো ট্রেনিং ডেটা দিয়ে মডেল পরীক্ষা করবেন না',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 25,
      category: 'Validation',
      whatIsIt: {
        en: 'Train/Test split isolates a portion of your dataset (e.g. 80%) for training and holds out the remaining 20% strictly for objective testing. K-Fold Cross-Validation rotates the test fold K times to measure performance across all data.',
        bn: 'ট্রেন/টেস্ট স্প্লিট হলো ডেটাসেটের ৮০% দিয়ে মডেলকে প্রশিক্ষণ দেওয়া এবং বাকি ২০% সম্পূর্ণ গোপন রেখে পরীক্ষা করা। আর K-Fold ক্রস-ভ্যালিডেশন ডেটাকে K ভাগে ভাগ করে ঘুরিয়ে ফিরিয়ে পরীক্ষা করে নির্ভরযোগ্য ফলাফল নিশ্চিত করে।',
      },
      analogy: {
        en: 'If a teacher gives students the exact exam questions with answers during class, students score 100% simply by memorizing. A real test must present fresh questions never seen during study hours.',
        bn: 'ক্লাসে যে প্রশ্ন দিয়ে প্র্যাকটিস করানো হয়, পরীক্ষার হলে হুবহু সেই প্রশ্ন দিলে ছাত্রের মুখস্থ বিদ্যা যাচাই হয়, আসল মেধা নয়। মেধা যাচাইয়ের জন্য পরীক্ষার প্রশ্ন অবশ্যই ক্লাসের অনুশীলনের চেয়ে সম্পূর্ণ নতুন হতে হবে।',
      },
      whyItMatters: {
        en: 'Evaluating on the training set only measures memorization (overfitting). Only unseen test performance reveals true generalization ability.',
        bn: 'ট্রেনিং ডেটায় মডেল সবসময় ভালো করবে। কিন্তু বাস্তব দুনিয়ায় মডেল কেমন কাজ করবে তা কেবল নতুন টেস্ট ডেটা দিয়েই প্রমাণ করা যায়।',
      },
      howItWorks: {
        en: 'train_test_split(X, y, test_size=0.2, random_state=42). In 5-Fold CV, data is split into 5 chunks: model trains on 4 chunks and tests on the 5th, repeating 5 times and averaging the scores.',
        bn: 'train_test_split() ফাংশন দিয়ে ডেটা ভাগ করা হয়। ৫-ফোল্ড ক্রস ভ্যালিডেশনে ডেটা ৫ ভাগে ভাগ হয়ে ৪ ভাগে ট্রেনিং এবং ১ ভাগে টেস্টিং হয়—এভাবে ৫ বার পরীক্ষা করে গড় স্কোর নেওয়া হয়।',
      },
      formula: {
        expression: 'CV_{k} = \\frac{1}{K} \\sum_{i=1}^{K} \\text{Score}_i',
        parts: [
          { symbol: 'K', meaning: { en: 'Number of cross-validation folds (typically 5 or 10)', bn: 'ফোল্ডের সংখ্যা (সাধারণত ৫ বা ১০)' } },
          { symbol: '\\text{Score}_i', meaning: { en: 'Validation metric achieved on fold i', bn: 'i-তম ফোল্ডে অর্জিত পারফরম্যান্স স্কোর' } },
        ],
      },
      practicalApplication: {
        en: 'Ensuring that an autonomous drone navigation model will fly safely in novel wind conditions never present during initial lab flights.',
        bn: 'নতুন কোনো ল্যাব বা মাঠে ড্রোন চালানোর আগে তার নেভিগেশন মডেল ভিন্ন পরিস্থিতিতে ঠিক কাজ করবে কিনা তা যাচাই করা।',
      },
      codeExample: {
        title: '5-Fold Cross-Validation with Scikit-Learn',
        language: 'python',
        code: `from sklearn.model_selection import cross_val_score, KFold
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# Synthetic feature matrix (100 samples, 4 features)
np.random.seed(42)
X = np.random.randn(100, 4)
y = (X[:, 0] + X[:, 1] > 0).astype(int)

model = RandomForestClassifier(n_estimators=30, random_state=42)
kfold = KFold(n_splits=5, shuffle=True, random_state=42)

# Compute cross-validation accuracy across all 5 folds
scores = cross_val_score(model, X, y, cv=kfold, scoring='accuracy')

print("Folds Scores:", np.round(scores, 3))
print(f"Mean Accuracy: {scores.mean() * 100:.2f}% (+/- {scores.std() * 100:.2f}%)")`,
        expectedOutput: `Folds Scores: [0.9  0.85 0.95 0.8  0.85]
Mean Accuracy: 87.00% (+/- 5.10%)`,
        explanation: {
          en: [
            'Each fold was tested independently on 20 unseen samples.',
            'The mean score (87.0%) with standard deviation (+/- 5.1%) gives a statistically reliable estimate.',
          ],
          bn: [
            'প্রতিটি ফোল্ড ২০টি করে নতুন স্যাম্পলে পরীক্ষা করা হয়েছে।',
            'গড় একিউরেসি ৮৭% এবং এর বিচ্যুতি ±৫.১%, যা একক স্প্লিটের চেয়ে অনেক বেশি নির্ভরযোগ্য।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Data leakage: Standardizing the entire dataset BEFORE calling train_test_split.',
            bn: 'ট্রেন/টেস্ট স্প্লিট করার আগেই পুরো ডেটায় স্কেলার ফিট করা (ডেটা লিকেজ)।',
          },
          solution: {
            en: 'Always split first, or wrap preprocessing and model into a Scikit-Learn Pipeline.',
            bn: 'আগে স্প্লিট করুন অথবা সাইকিট-লার্ন পাইপলাইন (Pipeline) ব্যবহার করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Select test size', bn: 'টেস্ট সাইজ নির্বাচন' },
        instructions: {
          en: 'For a dataset of 100,000 samples, is test_size=0.2 (20,000 test samples) sufficient?',
          bn: '১ লাখ ডেটার ক্ষেত্রে ২০% (২০ হাজার) টেস্ট ডেটা কি যথেষ্ট?',
        },
        hint: {
          en: 'Yes, 20,000 samples is a huge test sample size giving high statistical confidence.',
          bn: 'হ্যাঁ, ২০,০০০ ডেটা মডেল মূল্যায়নের জন্য অত্যন্ত বিশ্বস্ত স্যাম্পল সাইজ।',
        },
      },
      nextLessonId: 'l5-confusion-matrix',
    },
    {
      id: 'l5-confusion-matrix',
      levelId: 5,
      slug: 'confusion-matrix-precision-recall',
      title: {
        en: 'Confusion Matrix: Precision, Recall, and F1-Score',
        bn: 'কনফিউশন ম্যাট্রিক্স: প্রিসিশন, রিকল এবং F1-স্কোর',
      },
      subtitle: {
        en: 'Why Accuracy is dangerous on imbalanced datasets and how to pick the right metric',
        bn: 'অসম ডেটাসেটে একিউরেসি কেন বিপজ্জনক এবং সঠিক মেট্রিক বাছাইয়ের নিয়ম',
      },
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      category: 'Metrics',
      whatIsIt: {
        en: 'A Confusion Matrix is a 2x2 grid cross-tabulating True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN). Precision measures positive claim purity, Recall measures discovery coverage, and F1 is their harmonic mean.',
        bn: 'কনফিউশন ম্যাট্রিক্স হলো এমন একটি টেবিল যা মডেলের সঠিক অনুমান ও ভুলের বিশদ হিসাব দেখায়। প্রিসিশন মানে যাদের পজিটিভ দাবি করা হয়েছে তাদের সত্যতা। রিকল মানে আসল পজিটিভদের মধ্যে কতজনকে ধরা গেছে। আর F1-স্কোর হলো উভয়ের সুষম গড়।',
      },
      analogy: {
        en: 'Imagine testing for a rare virus present in 1 out of 1,000 people (0.1%). A dumb model that always predicts "Healthy" achieves 99.9% Accuracy! But its Recall is 0% (every infected person is missed). Accuracy was a total lie.',
        bn: '১,০০০ জনের মধ্যে মাত্র ১ জন বিরল ভাইরাসে আক্রান্ত। একটি বোকা মডেল সবাইকে "সুস্থ" ঘোষণা করলে তার Accuracy হবে ৯৯.৯%! কিন্তু আসলে সে আসল রোগীকে ধরতেই পারেনি (Recall = 0%)। এজন্য একিউরেসি অনেক সময় বিভ্রান্তিকর।',
      },
      whyItMatters: {
        en: 'In healthcare, missing a cancer diagnosis (False Negative) is deadly; you need high Recall. In email spam, sending an important job offer to spam (False Positive) is terrible; you need high Precision.',
        bn: 'ক্যান্সার শনাক্তকরণে কোনো রোগী যেন বাদ না পড়ে, তাই সেখানে Recall সর্বোচ্চ রাখতে হয়। অন্যদিকে ইমেইলে গুরুত্বপূর্ণ চিঠি যেন স্প্যাম না হয়, তাই Precision বেশি থাকা দরকার।',
      },
      howItWorks: {
        en: 'Precision = TP / (TP + FP). Recall = TP / (TP + FN). F1-Score = 2 * (Precision * Recall) / (Precision + Recall).',
        bn: 'প্রিসিশন = TP / (TP + FP)। রিকল = TP / (TP + FN)। F1 স্কোর উভয়ের ভারসাম্য রক্ষা করে।',
      },
      formula: {
        expression: '\\text{Precision} = \\frac{TP}{TP + FP}, \\quad \\text{Recall} = \\frac{TP}{TP + FN}, \\quad F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}',
        parts: [
          { symbol: 'TP (True Positive)', meaning: { en: 'Sick patient correctly identified as sick', bn: 'আসল রোগীকে সঠিকভাবে রোগী চিহ্নিত করা' } },
          { symbol: 'FP (False Positive)', meaning: { en: 'Healthy person mistakenly accused of being sick (False Alarm)', bn: 'সুস্থ ব্যক্তিকে ভুল করে রোগী বলা (মিথ্যা সংকেত)' } },
          { symbol: 'FN (False Negative)', meaning: { en: 'Sick patient mistakenly dismissed as healthy (Deadly Miss)', bn: 'আসল রোগীকে সুস্থ বলে ছেড়ে দেওয়া (মারাত্মক ভুল)' } },
        ],
      },
      practicalApplication: {
        en: 'Credit card fraud detection algorithms optimized specifically for F1-score and PR-AUC curves.',
        bn: 'ক্রেডিট কার্ড জালিয়াতি শনাক্তকরণে F1-স্কোর অপটিমাইজেশন।',
      },
      codeExample: {
        title: 'Generating Classification Report and Confusion Matrix',
        language: 'python',
        code: `from sklearn.metrics import classification_report, confusion_matrix
import numpy as np

# Actual patient status (1 = Disease, 0 = Healthy)
y_true = np.array([1, 1, 1, 1, 1, 0, 0, 0, 0, 0])
# Model predictions
y_pred = np.array([1, 1, 1, 0, 0, 0, 0, 0, 1, 0])

cm = confusion_matrix(y_true, y_pred)
print("--- Confusion Matrix ---")
print("               Pred Neg (0)   Pred Pos (1)")
print(f"Actual Neg (0):    {cm[0][0]} (TN)          {cm[0][1]} (FP)")
print(f"Actual Pos (1):    {cm[1][0]} (FN)          {cm[1][1]} (TP)")

print("\\n--- Classification Report ---")
print(classification_report(y_true, y_pred, target_names=['Healthy', 'Disease']))`,
        expectedOutput: `--- Confusion Matrix ---
               Pred Neg (0)   Pred Pos (1)
Actual Neg (0):    4 (TN)          1 (FP)
Actual Pos (1):    2 (FN)          3 (TP)

--- Classification Report ---
              precision    recall  f1-score   support

     Healthy       0.67      0.80      0.73         5
     Disease       0.75      0.60      0.67         5

    accuracy                           0.70        10`,
        explanation: {
          en: [
            'Precision for Disease is 3/4 = 0.75 (of 4 positive predictions, 3 were real).',
            'Recall for Disease is 3/5 = 0.60 (2 actual sick patients were missed as FN).',
          ],
          bn: [
            'Disease-এর জন্য Precision হলো ৭৫% (৪টি পজিটিভ পূর্বাভাসের ৩টি সত্য)।',
            'Recall হলো ৬০% (৫ জন আসল রোগীর মধ্যে ২ জন বাদ পড়ে গেছে)।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Reporting 98% accuracy on a fraud dataset where fraud is only 1% of transactions.',
            bn: '১% ফ্রড থাকা ডেটাসেটে ৯৮% একিউরেসি দেখে আনন্দিত হওয়া।',
          },
          solution: {
            en: 'Always inspect Precision, Recall, PR-AUC, and the Confusion Matrix on imbalanced data.',
            bn: 'অসম ডেটায় একিউরেসির বদলে সবসময় কনফিউশন ম্যাট্রিক্স ও F1-স্কোর দেখুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Choose Precision or Recall', bn: 'প্রিসিশন বনাম রিকল নির্বাচন' },
        instructions: {
          en: 'You are building an Airport Security weapons detector. Should you maximize Precision or Recall?',
          bn: 'বিমানবন্দরের মেটাল ডিটেক্টরে অস্ত্র শনাক্ত করার জন্য Precision নাকি Recall বেশি গুরুত্বপূর্ণ?',
        },
        hint: {
          en: 'Recall! A false alarm (manual search) is acceptable, but letting a weapon slip past (False Negative) is catastrophic.',
          bn: 'Recall! কোনো অস্ত্র যেন ফসকে না যায় তা নিশ্চিত করাই প্রধান উদ্দেশ্য।',
        },
      },
      nextLessonId: 'l5-hyperparameter-tuning',
      previousLessonId: 'l5-train-test-cv',
    },
    {
      id: 'l5-hyperparameter-tuning',
      levelId: 5,
      slug: 'hyperparameter-tuning-grid-random-search',
      title: {
        en: 'Hyperparameter Tuning: Grid Search & Random Search',
        bn: 'হাইপারপ্যারামিটার টিউনিং: গ্রিড সার্চ ও র‍্যান্ডম সার্চ',
      },
      subtitle: {
        en: 'Finding the winning combinations of parameters automatically',
        bn: 'স্বয়ংক্রিয়ভাবে মডেলের সেরা সেটিংস ও প্যারামিটার খুঁজে বের করার উপায়',
      },
      difficulty: 'Intermediate',
      estimatedMinutes: 25,
      category: 'Optimization',
      whatIsIt: {
        en: 'Model Parameters (like weights w) are learned automatically from data during training. Hyperparameters (like tree depth or learning rate) are configured by the human beforehand. Grid Search exhausts all parameter combinations; Random Search samples random combinations efficiently.',
        bn: 'প্যারামিটার (যেমন ওয়েট w) মডেল ট্রেনিংয়ের সময় নিজে থেকে শেখে। কিন্তু হাইপারপ্যারামিটার (যেমন ট্রির গভীরতা, লার্নিং রেট) মানুষ আগে থেকে নির্ধারণ করে দেয়। গ্রিড সার্চ সব কম্বিনেশন পরীক্ষা করে এবং র‍্যান্ডম সার্চ দ্রুততম সময়ে সেরা মান খুঁজে দেয়।',
      },
      analogy: {
        en: 'Baking a cake: Model parameters are how the flour and water bind together chemically in the oven. Hyperparameters are the oven temperature (350°F) and baking duration (45 mins) set by the baker on the knob.',
        bn: 'কেক বানানোর সময় ওভেনের তাপমাত্রা (১৮০ ডিগ্রি) এবং কত মিনিট রাখবেন তা হলো হাইপারপ্যারামিটার—যা মানুষ আগে থেকে ওভেনের নব ঘুরিয়ে ঠিক করে দেয়।',
      },
      whyItMatters: {
        en: 'Default hyperparameters rarely give maximum accuracy. Proper tuning can boost an algorithm\'s performance by 5% to 15% on real-world projects.',
        bn: 'ডিফল্ট সেটিংসে মডেল অনেক সময় তার সর্বোচ্চ পারফর্ম করতে পারে না। টিউনিং করলে একিউরেসি ৫% থেকে ১৫% পর্যন্ত বেড়ে যেতে পারে।',
      },
      howItWorks: {
        en: 'GridSearchCV evaluates every combination in a grid using cross-validation. RandomizedSearchCV tests N randomly chosen samples from distributions, finding near-optimal setups in 1/10th the computational time.',
        bn: 'GridSearchCV গ্রিডের প্রতিটি কম্বিনেশন পরীক্ষা করে। আর RandomizedSearchCV দৈবচয়ন পদ্ধতিতে পরীক্ষা করে ১০ গুণ দ্রুততম সময়ে প্রায় সমান ফলাফল দেয়।',
      },
      practicalApplication: {
        en: 'Tuning n_estimators and max_depth in Random Forest to maximize Kaggle leaderboard scores.',
        bn: 'র‍্যান্ডম ফরেস্ট বা এক্সজিবুস্টের সেরা ট্রির সংখ্যা ও গভীরতা বের করা।',
      },
      codeExample: {
        title: 'Optimizing Hyperparameters with GridSearchCV',
        language: 'python',
        code: `from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import make_classification

# Generate sample dataset
X, y = make_classification(n_samples=200, n_features=5, random_state=42)

# Parameter grid to search
param_grid = {
    'n_estimators': [20, 50, 100],
    'max_depth': [3, 5, 8],
    'min_samples_split': [2, 4]
}

rf = RandomForestClassifier(random_state=42)
grid_search = GridSearchCV(rf, param_grid, cv=3, scoring='accuracy', n_jobs=-1)
grid_search.fit(X, y)

print("Best Parameters Found:")
print(grid_search.best_params_)
print(f"Best 3-Fold Cross-Val Accuracy: {grid_search.best_score_ * 100:.2f}%")`,
        expectedOutput: `Best Parameters Found:
{'max_depth': 5, 'min_samples_split': 2, 'n_estimators': 50}
Best 3-Fold Cross-Val Accuracy: 89.50%`,
        explanation: {
          en: [
            'GridSearch tested 3 x 3 x 2 = 18 combinations x 3 folds = 54 total model fits.',
            'It discovered max_depth=5 and n_estimators=50 achieved the peak 89.5% accuracy.',
          ],
          bn: [
            'গ্রিড সার্চ ৩ x ৩ x ২ = ১৮টি কম্বিনেশন ৩-ফোল্ড ক্রস ভ্যালিডেশন দিয়ে পরীক্ষা করেছে।',
            'মডেলটি জানিয়েছে max_depth=৫ এবং n_estimators=৫০ হলে সবচেয়ে ভালো ৮৯.৫% ফলাফল পাওয়া যায়।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Searching an enormous grid (e.g. 10,000 combinations) on a massive dataset, freezing your machine for 24 hours.',
            bn: 'বিশাল ডেটাসেটে একসাথে হাজার হাজার কম্বিনেশন দিয়ে গ্রিড সার্চ চালিয়ে কম্পিউটার ঘণ্টার পর ঘণ্টা আটকে রাখা।',
          },
          solution: {
            en: 'Use RandomizedSearchCV or Bayesian Optimization (Optuna) to narrow down the promising range first.',
            bn: 'আগে RandomizedSearchCV দিয়ে একটি ধারণা নিন, তারপর ছোট গ্রিড সার্চ করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Grid Search vs Random Search', bn: 'গ্রিড বনাম র‍্যান্ডম সার্চ' },
        instructions: {
          en: 'When searching over 8 continuous parameters with infinite possible values, should you use Grid Search or Random Search?',
          bn: 'অনেকগুলো কন্টিনিউয়াস প্যারামিটার থাকলে গ্রিড সার্চ নাকি র‍্যান্ডম সার্চ ভালো?',
        },
        hint: {
          en: 'Random Search (or Optuna) handles high-dimensional search spaces exponentially faster than exhaustive grid combinations.',
          bn: 'র‍্যান্ডম সার্চ অনেক বেশি কার্যকর ও দ্রুততম।',
        },
      },
      previousLessonId: 'l5-confusion-matrix',
    },
  ],
};
