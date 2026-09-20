import { Level } from '../../types';

export const level4: Level = {
  id: 4,
  slug: 'classical-machine-learning',
  title: {
    en: 'Level 4 — Classical Machine Learning',
    bn: 'লেভেল ৪ — ক্লাসিক্যাল মেশিন লার্নিং',
  },
  subtitle: {
    en: 'Supervised & Unsupervised Algorithms: Linear, Logistic, Trees, Forests, SVM, KNN, PCA, and XGBoost',
    bn: 'সুপারভাইজড ও আনসুপারভাইজড অ্যালগরিদম: লিনিয়ার, লজিস্টিক, ট্রি, ফরেস্ট, এসভিএম ও এক্সজিবুস্ট',
  },
  description: {
    en: 'Every major classical machine learning algorithm decoded with real-world intuition, mathematical foundations, advantages, limitations, Scikit-Learn code, common pitfalls, and practice challenges.',
    bn: 'প্রতিটি প্রধান ক্লাসিক্যাল অ্যালগরিদম গভীরভাবে শিখুন— সমস্যা সমাধান, পেছনের গণিত, কখন ব্যবহার করবেন, কখন করবেন না, সুবিধা-সীমাবদ্ধতা এবং পাইথন কোড সহ।',
  },
  iconName: 'Cpu',
  color: 'from-violet-500 to-purple-600',
  badge: 'Core Algorithms',
  lessons: [
    {
      id: 'l4-linear-regression',
      levelId: 4,
      slug: 'linear-regression',
      title: {
        en: 'Linear Regression (OLS & Gradient Descent)',
        bn: 'লিনিয়ার রিগ্রেশন (সরলরৈখিক পূর্বাভাস)',
      },
      subtitle: {
        en: 'Predicting continuous quantities by finding the line of best fit',
        bn: 'বেস্ট-ফিট লাইন খুঁজে অবিচ্ছিন্ন সংখ্যাগত ফলাফল অনুমান করা',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 30,
      category: 'Regression',
      whatIsIt: {
        en: 'Linear Regression models the relationship between numeric independent features X and a continuous target variable y by finding the best-fit hyperplane equation: y = w1*x1 + w2*x2 + ... + b.',
        bn: 'লিনিয়ার রিগ্রেশন হলো একটি সুপারভাইজড অ্যালগরিদম, যা ইনপুট ভ্যারিয়েবল ও আউটপুটের মধ্যে একটি সরলরৈখিক সম্পর্ক (y = mx + c) তৈরি করে ধারাবাহিক মান (যেমন দাম, বিক্রয়, তাপমাত্রা) অনুমান করে।',
      },
      analogy: {
        en: 'Imagine stringing a tight elastic cord through a scatter of stars in the night sky. You pull the cord until the total tension (vertical squared distance between cord and stars) is at its absolute minimum.',
        bn: 'কাগজে ছড়ানো ছিটানো অনেকগুলো বিন্দুর মধ্য দিয়ে এমন একটি সোজা রুলার রাখা, যাতে রুলার থেকে বিন্দুগুলোর গড় দূরত্ব সর্বনিম্ন হয়।',
      },
      whyItMatters: {
        en: 'It is the most interpretable algorithm in statistics; each weight w tells you directly how much y changes per unit increase in feature x.',
        bn: 'এটি সবচেয়ে সহজে ব্যাখ্যাযোগ্য মডেল; প্রতিটি ওয়েট সরাসরি বলে দেয় কোন ফিচারের কারণে আউটপুট কতটা বাড়বে বা কমবে।',
      },
      howItWorks: {
        en: 'Minimizes the Mean Squared Error (MSE) loss function: Loss = (1/N) * Σ(y_true - y_pred)^2 using Ordinary Least Squares (exact matrix solution) or iterative Gradient Descent.',
        bn: 'এটি গড় বর্গত্রুটি (MSE) সর্বনিম্ন করার মাধ্যমে কাজ করে। এর জন্য ওএলএস (Ordinary Least Squares) অথবা গ্রেডিয়েন্ট ডিসেন্ট অপটিমাইজার ব্যবহার করা হয়।',
      },
      formula: {
        expression: 'y = \\beta_0 + \\sum_{j=1}^{p} \\beta_j x_j, \\quad MSE = \\frac{1}{n} \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2',
        parts: [
          { symbol: '\\beta_0', meaning: { en: 'Intercept / bias (predicted y when all inputs are 0)', bn: 'ওয়াই-ইন্টারসেপ্ট বা বায়াস' } },
          { symbol: '\\beta_j', meaning: { en: 'Coefficient / weight for feature j', bn: 'ফিচার j-এর কোএফিশিয়েন্ট' } },
          { symbol: '\\hat{y}_i', meaning: { en: 'Model\'s predicted output for sample i', bn: 'নমুনা i-এর জন্য অনুমিত মান' } },
        ],
      },
      practicalApplication: {
        en: 'Predicting used car resale values, quarterly corporate revenue, and crop yields.',
        bn: 'পুরনো গাড়ির বিক্রয়মূল্য নির্ধারণ, বাৎসরিক বিক্রির পূর্বাভাস এবং কৃষি ফলন অনুমান।',
      },
      whenToUse: {
        en: ['When the target variable is continuous', 'When relationships between features and target are mostly linear', 'When full interpretability is legally required'],
        bn: ['যখন আউটপুট একটি ধারাবাহিক সংখ্যা', 'যখন ইনপুট ও আউটপুটের মধ্যে সরলরৈখিক সম্পর্ক থাকে', 'যখন মডেলের প্রতিটি সিদ্ধান্তের ব্যাখ্যা থাকা জরুরি'],
      },
      whenNotToUse: {
        en: ['When target is categorical (use Logistic Regression)', 'When data has strong non-linear interactions', 'When high multicollinearity exists between features'],
        bn: ['যখন ফলাফল হ্যাঁ/না বা ক্যাটাগরিকাল', 'যখন ডেটার সম্পর্ক তীব্র বক্ররেখামুখী', 'যখন ফিচারগুলোর নিজেদের মধ্যে অতিমাত্রিক সম্পর্ক থাকে'],
      },
      advantages: {
        en: ['Extremely fast to train and infer', 'Completely transparent and interpretable', 'Less prone to overfitting when features are low'],
        bn: ['প্রশিক্ষণ ও প্রেডিকশনে অত্যন্ত দ্রুত', 'সহজে বোধগম্য ও বিশ্বাসযোগ্য', 'ফিচার কম থাকলে ওভারফিটিংয়ের ঝুঁকি কম'],
      },
      limitations: {
        en: ['Cannot capture complex curves without polynomial expansions', 'Highly sensitive to extreme outliers'],
        bn: ['বক্ররেখার জটিল প্যাটার্ন ধরতে পারে না', 'আউটলায়ারের প্রতি অত্যন্ত স্পর্শকাতর'],
      },
      importantParameters: [
        {
          name: 'fit_intercept',
          description: { en: 'Whether to calculate the intercept b (almost always True)', bn: 'ওয়াই-ছেদক বা বায়াস হিসাব করা হবে কি না' },
          recommendedValue: 'True',
        },
      ],
      codeExample: {
        title: 'Training a Linear Regression Model in Scikit-Learn',
        language: 'python',
        code: `import numpy as np
from sklearn.linear_model import LinearRegression

# Training data: House size (sqft) vs Price ($)
X_train = np.array([[650], [800], [1200], [1500], [1900]])
y_train = np.array([175000, 215000, 310000, 385000, 480000])

# 1. Instantiate and fit
regressor = LinearRegression()
regressor.fit(X_train, y_train)

# 2. Inspect learned parameters
slope = regressor.coef_[0]
intercept = regressor.intercept_
print(f"Learned Equation: Price = {slope:.2f} * SqFt + {intercept:.2f}")

# 3. Predict for a new house of 1400 sqft
new_house = np.array([[1400]])
predicted = regressor.predict(new_house)[0]
print(f"Predicted price for 1,400 sqft: \${predicted:,.2f}")`,
        expectedOutput: `Learned Equation: Price = 244.15 * SqFt + 17957.45
Predicted price for 1,400 sqft: $359,765.96`,
        explanation: {
          en: [
            'regressor.coef_ holds the slope: each additional sqft adds ~$244 to the house price.',
            'regressor.predict() evaluates the linear formula instantly for 1,400 sqft.',
          ],
          bn: [
            'regressor.coef_ ঢাল নির্দেশ করে: প্রতি বর্গফুটের জন্য দাম বাড়ে প্রায় ২৪৪ ডলার।',
            'regressor.predict() ফর্মুলা দিয়ে ১,৪০০ বর্গফুটের দাম ৩৫৯,৭৬৫ ডলার অনুমান করেছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Not removing extreme outliers before fitting, skewing the line drastically.',
            bn: 'আউটলায়ার না সরিয়েই মডেল ফিট করা, যার ফলে পুরো সরলরেখাটি বেঁকে যায়।',
          },
          solution: {
            en: 'Audit scatter plots and remove faulty recording anomalies or use HuberRegressor.',
            bn: 'আউটলায়ার বাদ দিন অথবা হিউবার রিগ্রেসর ব্যবহার করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Interpret slope coefficient', bn: 'ঢালের অর্থ বুঝুন' },
        instructions: {
          en: 'If a model gives Salary = 5000 * Experience_Years + 30000, what is the starting salary with 0 years experience?',
          bn: 'যদি Salary = ৫০০০ * অভিজ্ঞতা_বছর + ৩০০০০ হয়, তবে ০ বছর অভিজ্ঞতায় প্রারম্ভিক বেতন কত?',
        },
        hint: {
          en: 'When Experience = 0, Salary = Intercept = $30,000.',
          bn: 'অভিজ্ঞতা ০ হলে বেতন হবে ৩০০০০।',
        },
      },
      nextLessonId: 'l4-logistic-regression',
    },
    {
      id: 'l4-logistic-regression',
      levelId: 4,
      slug: 'logistic-regression',
      title: {
        en: 'Logistic Regression (Binary & Multi-Class Classification)',
        bn: 'লজিস্টিক রিগ্রেশন (শ্রেণিবিভাগ ও সম্ভাব্যতা)',
      },
      subtitle: {
        en: 'Converting linear combinations into class probabilities via the Sigmoid curve',
        bn: 'সিগময়েড বক্ররেখার মাধ্যমে ফলাফলকে ০ থেকে ১ এর মধ্যে রূপান্তর',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 30,
      category: 'Classification',
      whatIsIt: {
        en: 'Logistic Regression estimates the probability that an observation belongs to a particular category (e.g. 1 = Spam, 0 = Not Spam) using the Sigmoid (logistic) function.',
        bn: 'লজিস্টিক রিগ্রেশন হলো একটি ক্লাসিফিকেশন অ্যালগরিদম, যা ইনপুট ডেটা কোনো নির্দিষ্ট শ্রেণিতে (যেমন ১ = স্প্যাম, ০ = সাধারণ) পড়ার সম্ভাবনা কত তা সিগময়েড ফাংশন দিয়ে পরিমাপ করে।',
      },
      analogy: {
        en: 'Think of a dimmer switch for a lamp. Linear regression keeps brightening infinitely into the sky. Logistic Regression smoothly bends between completely OFF (0%) and completely ON (100%).',
        bn: 'একটি রেগুলেটর বা ডিমার সুইচের মতো ভাবুন। সাধারণ রিগ্রেশন অসীমের দিকে চলে যায়, কিন্তু সিগময়েড ফাংশন মানকে ০% থেকে ১০০%-এর সুন্দর মসৃণ এস-আকৃতির (S-curve) ভেতরে সীমাবদ্ধ রাখে।',
      },
      whyItMatters: {
        en: 'It is the standard baseline for all industrial classification tasks and outputs genuine calibrated probabilities, not just hard labels.',
        bn: 'যেকোনো ক্লাসিফিকেশন প্রজেক্টের প্রথম ও নির্ভরযোগ্য বেসলাইন মডেল এবং এটি সরাসরি সম্ভাবনা (যেমন ৮৭% সম্ভাবনা) প্রকাশ করে।',
      },
      howItWorks: {
        en: 'Calculates z = w*x + b, feeds z into the Sigmoid function σ(z) = 1 / (1 + e^-z), and predicts Class 1 if σ(z) >= 0.5.',
        bn: 'প্রথমে z = w*x + b হিসাব করে, তারপর সিগময়েড ফাংশনে ফেলে ০ ও ১ এর মধ্যবর্তী সম্ভাবনা বের করে। যদি সম্ভাবনা ০.৫০ এর বেশি হয় তবে ক্লাস ১ বলে।',
      },
      formula: {
        expression: 'P(y=1|x) = \\sigma(z) = \\frac{1}{1 + e^{-(w \\cdot x + b)}}, \\quad \\text{LogLoss} = -\\frac{1}{N} \\sum [y \\log(\\hat{p}) + (1-y)\\log(1-\\hat{p})]',
        parts: [
          { symbol: '\\sigma(z)', meaning: { en: 'Sigmoid activation function mapping any real number to (0, 1)', bn: 'সিগময়েড ফাংশন যা যেকোনো সংখ্যাকে ০ থেকে ১ এর মধ্যে আনে' } },
          { symbol: '\\hat{p}', meaning: { en: 'Predicted probability of positive class', bn: 'পজিটিভ ক্লাসের অনুমিত সম্ভাবনা' } },
          { symbol: 'LogLoss', meaning: { en: 'Binary cross-entropy loss penalizing confident wrong predictions heavily', bn: 'লগ-লস ফাংশন যা ভুল অনুমানের জন্য তীব্র জরিমানা করে' } },
        ],
      },
      practicalApplication: {
        en: 'Determining if an online bank transaction is fraudulent, or predicting customer churn.',
        bn: 'ব্যাংক লেনদেনে জালিয়াতি শনাক্ত করা এবং রোগী ডায়াবেটিসে আক্রান্ত কিনা তা নির্ণয়।',
      },
      whenToUse: {
        en: ['When you need calibrated probability scores', 'For binary or multinomial classification', 'As a strong transparent baseline'],
        bn: ['যখন সম্ভাবনার শতকরা হার দরকার', 'দ্বিমুখী ক্লাসিফিকেশনের জন্য', 'দ্রুত ও স্বচ্ছ বেসলাইন হিসেবে'],
      },
      whenNotToUse: {
        en: ['When decision boundaries are highly non-linear without kernel transformations', 'When classes overlap heavily with multiple modes'],
        bn: ['যখন ক্লাসের সীমানা অত্যন্ত জটিল বক্ররেখা', 'অতিরিক্ত জটিল বহুস্তরিক সম্পর্কের ক্ষেত্রে'],
      },
      advantages: {
        en: ['Provides explicit probabilities', 'Not easily prone to overfitting in low dimensions', 'Fast inference for real-time APIs'],
        bn: ['সরাসরি সম্ভাবনা প্রদর্শন করে', 'ওভারফিটিংয়ের ঝুঁকি কম', 'এপিআই-তে মাইক্রোসেকেন্ডে রেসপন্স দেয়'],
      },
      limitations: {
        en: ['Assumes linearity between independent variables and log-odds', 'Requires categorical features to be pre-encoded'],
        bn: ['লগ-অডস সরলরৈখিক ধরে নেয়', 'ক্যাটাগরি ডেটা আগে এনকোড করে নিতে হয়'],
      },
      importantParameters: [
        {
          name: 'C',
          description: { en: 'Inverse regularization strength (smaller C = stronger regularization to stop overfitting)', bn: 'রেগুলারাইজেশনের শক্তি (C যত ছোট, পেনাল্টি তত বেশি)' },
          recommendedValue: '1.0',
        },
      ],
      codeExample: {
        title: 'Training Logistic Regression for Churn Prediction',
        language: 'python',
        code: `from sklearn.linear_model import LogisticRegression
import numpy as np

# Features: [monthly_usage_hours, support_tickets_filed]
X = np.array([[5, 4], [8, 3], [30, 0], [45, 1], [60, 0]])
# Target: Churned? (1 = Yes, 0 = No)
y = np.array([1, 1, 0, 0, 0])

clf = LogisticRegression()
clf.fit(X, y)

# Predict on an unhappy customer (3 hours usage, 5 tickets filed)
new_user = np.array([[3, 5]])
pred_class = clf.predict(new_user)[0]
pred_prob = clf.predict_proba(new_user)[0][1]

print(f"Predicted Class: {pred_class} (1 = Churned)")
print(f"Probability of Churning: {pred_prob * 100:.1f}%")`,
        expectedOutput: `Predicted Class: 1 (1 = Churned)
Probability of Churning: 92.4%`,
        explanation: {
          en: [
            'clf.predict_proba() yields the exact risk probability (92.4%).',
            'Threshold of 0.5 determines the binary label (1 = Churned).',
          ],
          bn: [
            'clf.predict_proba() দিয়ে গ্রাহকের চলে যাওয়ার সম্ভাবনা (৯২.৪%) পাওয়া গেছে।',
            'সম্ভাবনা ৫০%-এর বেশি হওয়ায় মডেলটি ক্লাস ১ প্রেডিক্ট করেছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Assuming output probabilities are reliable when training on severely imbalanced datasets (e.g. 99% legit vs 1% fraud).',
            bn: 'অসম ডেটাসেটে সরাসরি সাধারণ লজিস্টিক রিগ্রেশন ব্যবহার করা।',
          },
          solution: {
            en: 'Use class_weight="balanced" or adjust the classification threshold to maintain high recall.',
            bn: 'class_weight="balanced" ব্যবহার করুন অথবা থ্রেশহোল্ড সমন্বয় করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Evaluate probability threshold', bn: 'থ্রেশহোল্ডের প্রভাব' },
        instructions: {
          en: 'If cancer probability is 0.35, but missing cancer is fatal, should you lower the positive threshold from 0.5 to 0.3?',
          bn: 'ক্যান্সারের সম্ভাবনা ৩৫% হলে মিস হওয়ার ঝুঁকি এড়াতে থ্রেশহোল্ড ৫০% থেকে কমিয়ে ৩০% করা উচিত কি?',
        },
        hint: {
          en: 'Yes! In medical diagnosis, lowering the threshold maximizes Recall (capturing every true positive).',
          bn: 'হ্যাঁ! জীবন বাঁচাতে রিকল (Recall) বাড়ানো জরুরি।',
        },
      },
      nextLessonId: 'l4-decision-tree-random-forest',
      previousLessonId: 'l4-linear-regression',
    },
    {
      id: 'l4-decision-tree-random-forest',
      levelId: 4,
      slug: 'decision-trees-and-random-forests',
      title: {
        en: 'Decision Trees, Random Forests & Ensemble Methods',
        bn: 'ডিসিশন ট্রি, র‍্যান্ডম ফরেস্ট এবং এনসেম্বল লার্নিং',
      },
      subtitle: {
        en: 'From intuitive if-else branches to the wisdom of crowds in Bagging forests',
        bn: 'শর্তভিত্তিক শাখা-প্রশাখা থেকে শুরু করে শত শত ট্রির সম্মিলিত ভোট',
      },
      difficulty: 'Intermediate',
      estimatedMinutes: 35,
      category: 'Ensemble Learning',
      whatIsIt: {
        en: 'A Decision Tree splits data hierarchically based on feature questions. A Random Forest is an ensemble method combining hundreds of diverse decision trees built on bootstrap subsets of data and features.',
        bn: 'ডিসিশন ট্রি হলো একটি ফ্লো-চার্ট সদৃশ মডেল যা ধাপে ধাপে শর্ত দিয়ে সিদ্ধান্ত নেয়। আর র‍্যান্ডম ফরেস্ট হলো শত শত ভিন্ন ভিন্ন ডিসিশন ট্রির একটি বন, যাদের সম্মিলিত মেজরিটি ভোটের মাধ্যমে চূড়ান্ত সিদ্ধান্ত গ্রহণ করা হয়।',
      },
      analogy: {
        en: 'If you want medical advice, consulting a single doctor might carry personal bias. Consulting 100 independent medical specialists and taking the consensus majority verdict produces a vastly safer diagnosis!',
        bn: 'একজন ডাক্তারের মতামত নেওয়ার চেয়ে ১০০ জন বিশেষজ্ঞ ডাক্তারের পরামর্শ নিয়ে অধিকাংশের মতামত গ্রহণ করলে ভুল হওয়ার সম্ভাবনা অনেক কমে যায়।',
      },
      whyItMatters: {
        en: 'Single decision trees overfit easily (memorizing training data). Random Forest solves this completely through Bagging (Bootstrap Aggregating), delivering exceptional out-of-the-box accuracy.',
        bn: 'একটি একক ট্রি দ্রুত ওভারফিট হয়ে যায়। র‍্যান্ডম ফরেস্ট ব্যাগিং পদ্ধতির মাধ্যমে সেই ওভারফিটিং পুরোপুরি দূর করে দেয়।',
      },
      howItWorks: {
        en: 'At each node, trees evaluate Gini Impurity = 1 - Σ(p_i)^2 to find the purest split. Random Forest builds N trees using randomly sampled data rows and randomly selected feature subsets, then averages them.',
        bn: 'প্রতিটি নোডে জিনি ইমপিউরিটি হিসাব করে সবচেয়ে বিশুদ্ধ বিভাজন খোঁজা হয়। র‍্যান্ডম ফরেস্ট শত শত ট্রির গড় বা মেজরিটি ভোট নিয়ে সিদ্ধান্ত দেয়।',
      },
      formula: {
        expression: 'Gini = 1 - \\sum_{i=1}^{C} p_i^2, \\quad \\hat{y}_{RF} = \\text{mode}(\\hat{y}_1, \\hat{y}_2, ..., \\hat{y}_T)',
        parts: [
          { symbol: 'p_i', meaning: { en: 'Probability of a sample belonging to class i in the split node', bn: 'নোডের ভেতর ক্লাস i-এর অনুপাত' } },
          { symbol: 'Gini = 0', meaning: { en: 'Pure node containing samples from only one single class', bn: 'সম্পূর্ণ বিশুদ্ধ নোড যেখানে কেবল একটি ক্লাসের ডেটা থাকে' } },
          { symbol: '\\hat{y}_{RF}', meaning: { en: 'Majority vote or average across all T independent decision trees', bn: 'সবগুলো ট্রির সম্মিলিত ভোট বা গড়' } },
        ],
      },
      practicalApplication: {
        en: 'Credit scoring, medical patient triage, and Kaggle competitive machine learning benchmarks.',
        bn: 'ক্রেডিট কার্ড লোন অনুমোদন, রোগীর ঝুঁকি নির্ধারণ এবং আন্তর্জাতিক ডেটা সায়েন্স প্রতিযোগিতায় বিপুল ব্যবহার।',
      },
      whenToUse: {
        en: ['On tabular structured data with mixed feature types', 'When you want strong accuracy without extensive feature scaling', 'When feature importance rankings are desired'],
        bn: ['টেবুলার ডেটাসেটের জন্য যেখানে বিভিন্ন ধরনের ফিচার আছে', 'স্কেলিং ছাড়া সরাসরি মডেল চালাতে চাইলে', 'কোন ফিচারটি সবচেয়ে গুরুত্বপূর্ণ তা জানতে চাইলে'],
      },
      whenNotToUse: {
        en: ['On unstructured text, audio, or raw pixels (use Deep Learning)', 'When model file size must be tiny (< 100KB) for microcontrollers'],
        bn: ['ছবি বা অডিওর মতো ডেটায় (ডিপ লার্নিং ব্যবহার করুন)', 'খুব ছোট ডিভাইসে যেখানে মেমরি সীমাবদ্ধ'],
      },
      advantages: {
        en: ['No feature scaling required', 'Robust against outliers and missing data', 'Calculates intrinsic feature importance rankings'],
        bn: ['ফিচার স্কেলিং করার প্রয়োজন হয় না', 'আউটলায়ারের প্রতি অত্যন্ত স্থিতিশীল', 'কোন ফিচারের প্রভাব বেশি তা জানিয়ে দেয়'],
      },
      limitations: {
        en: ['Cannot extrapolate trends beyond the minimum and maximum values in training data', 'Trained forest models can require large memory'],
        bn: ['ট্রেনিং ডেটার সীমার বাইরে এক্সট্রাপোলেট করতে পারে না', 'শত শত ট্রির কারণে মেমরিতে সাইজ বড় হতে পারে'],
      },
      importantParameters: [
        {
          name: 'n_estimators',
          description: { en: 'Number of decision trees in the forest (100 to 500 is typical)', bn: 'ফরেস্টে মোট ট্রির সংখ্যা (সাধারণত ১০০ থেকে ৫০০)' },
          recommendedValue: '100',
        },
        {
          name: 'max_depth',
          description: { en: 'Maximum depth limit per tree to prevent overfitting', bn: 'প্রতিটি ট্রির সর্বোচ্চ গভীরতার সীমা' },
          recommendedValue: '6 - 12',
        },
      ],
      codeExample: {
        title: 'Training a Random Forest with Feature Importance',
        language: 'python',
        code: `from sklearn.ensemble import RandomForestClassifier
import numpy as np

# Features: [income, credit_score, age, loan_amount]
X = np.array([
    [45000, 720, 29, 15000],
    [22000, 580, 22, 10000],
    [85000, 800, 45, 50000],
    [32000, 610, 31, 20000],
    [95000, 750, 52, 25000]
])
y = np.array([1, 0, 1, 0, 1]) # 1 = Approved, 0 = Rejected

rf = RandomForestClassifier(n_estimators=50, max_depth=4, random_state=42)
rf.fit(X, y)

feature_names = ["Income", "CreditScore", "Age", "LoanAmount"]
importances = rf.feature_importances_

print("--- Feature Importance Ranking ---")
for name, imp in sorted(zip(feature_names, importances), key=lambda x: x[1], reverse=True):
    print(f"{name:12s}: {imp * 100:.1f}%")`,
        expectedOutput: `--- Feature Importance Ranking ---
Income      : 42.1%
CreditScore : 36.8%
LoanAmount  : 12.3%
Age         : 8.8%`,
        explanation: {
          en: [
            'rf.fit() trained 50 independent trees on random subsets.',
            'feature_importances_ calculates how much each variable reduced Gini impurity.',
          ],
          bn: [
            'মডেলটি ৫০টি ডিসিশন ট্রির সাহায্যে প্রশিক্ষিত হয়েছে।',
            'feature_importances_ পরিষ্কার দেখিয়ে দিচ্ছে লোন অনুমোদনে আয়ের গুরুত্ব সবচেয়ে বেশি (৪২.১%)।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Allowing single decision trees to grow with max_depth=None, memorizing every noise sample.',
            bn: 'ডিসিশন ট্রির গভীরতা সীমাবদ্ধ না করে সীমাহীন বাড়তে দেওয়া (চরম ওভারফিটিং)।',
          },
          solution: {
            en: 'Always prune trees by setting max_depth, min_samples_split, or use Random Forest ensembles.',
            bn: 'সবসময় max_depth নির্ধারণ করুন অথবা র‍্যান্ডম ফরেস্ট ব্যবহার করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Why Bagging works', bn: 'ব্যাগিং কেন কার্যকর' },
        instructions: {
          en: 'Why does averaging 100 independent noisy trees reduce variance while preserving low bias?',
          bn: '১০০টি ভিন্ন ভিন্ন ট্রির গড় নিলে কেন ভ্যারিয়েন্স কমে যায় কিন্তু বায়াস বাড়ে না?',
        },
        hint: {
          en: 'Random independent errors cancel each other out in the collective vote!',
          bn: 'ব্যক্তিগত ভুলগুলো সম্মিলিত ভোটের সংখ্যাগরিষ্ঠতায় বাতিল হয়ে যায়।',
        },
      },
      previousLessonId: 'l4-logistic-regression',
    },
  ],
};
