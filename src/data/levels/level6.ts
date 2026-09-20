import { Level } from '../../types';

export const level6: Level = {
  id: 6,
  slug: 'advanced-machine-learning',
  title: {
    en: 'Level 6 — Advanced Machine Learning',
    bn: 'লেভেল ৬ — অ্যাডভান্সড মেশিন লার্নিং',
  },
  subtitle: {
    en: 'Boosting, XGBoost, Stacking, Pipelines, Regularization (L1/L2), SHAP & Explainable AI',
    bn: 'বুস্টিং, এক্সজিবুস্ট, স্ট্যাকিং, রেগুলারাইজেশন (L1/L2), শ্যাপ এবং এক্সপ্লেইনেবল এআই',
  },
  description: {
    en: 'Bridge the gap from standard models to competitive, production-grade ML architectures. Master gradient boosting with XGBoost, construct leak-free Pipelines, balance skewed classes, apply Ridge/Lasso regularization, and explain decisions with SHAP.',
    bn: 'প্রোডাকশন গ্রেড ও প্রতিযোগিতামূলক মেশিন লার্নিংয়ের কৌশল শিখুন: এক্সজিবুস্ট, লিক-মুক্ত পাইপলাইন, রেগুলারাইজেশন (L1/L2), অসম ডেটাসেট সমাধান এবং SHAP দিয়ে ব্ল্যাকবক্স মডেল ব্যাখ্যা।',
  },
  iconName: 'Zap',
  color: 'from-pink-500 to-rose-600',
  badge: 'Production & Ensembles',
  lessons: [
    {
      id: 'l6-boosting-xgboost',
      levelId: 6,
      slug: 'boosting-and-xgboost',
      title: {
        en: 'Boosting, Gradient Boosting & XGBoost',
        bn: 'বুস্টিং, গ্রেডিয়েন্ট বুস্টিং ও এক্সজিবুস্ট',
      },
      subtitle: {
        en: 'Sequential learning: Training each new tree to correct the mistakes of earlier trees',
        bn: 'ক্রমান্বয়ে শেখা: পূর্ববর্তী ট্রির ভুল সংশোধন করে নতুন ট্রি তৈরি করা',
      },
      difficulty: 'Advanced',
      estimatedMinutes: 35,
      category: 'Ensemble Learning',
      whatIsIt: {
        en: 'Boosting is an ensemble technique where weak learners (shallow trees) are trained sequentially, with each new model focusing specifically on the residual errors (mistakes) of the combined previous models. XGBoost (Extreme Gradient Boosting) is an ultra-optimized implementation with built-in regularization.',
        bn: 'বুস্টিং হলো এমন একটি এনসেম্বল পদ্ধতি যেখানে মডেলগুলো একের পর এক ক্রমান্বয়ে শেখে। প্রতিটি নতুন ট্রি আগের ট্রির ভুলগুলোর ওপর বেশি জোর দিয়ে ত্রুটি সংশোধন করে। আর XGBoost হলো এর সবচেয়ে দ্রুত ও শক্তিশালী রূপ।',
      },
      analogy: {
        en: 'In Bagging (Random Forest), 100 students take an exam simultaneously in parallel, and you take their average vote. In Boosting, Student 1 takes the exam; Student 2 only studies the questions Student 1 got wrong; Student 3 studies the remaining errors. Together they achieve near-perfection!',
        bn: 'র‍্যান্ডম ফরেস্টে সবাই একসাথে স্বাধীনভাবে পরীক্ষা দিয়ে গড় ভোট দেয়। কিন্তু বুস্টিংয়ে প্রথমজন পরীক্ষা দেওয়ার পর যেখানে যেখানে ভুল করল, দ্বিতীয়জনকে ঠিক সেই ভুলগুলো শুধরে দেওয়ার দায়িত্ব দেওয়া হয়। এভাবে ক্রমান্বয়ে ভুল শূন্যের কোঠায় নেমে আসে।',
      },
      whyItMatters: {
        en: 'XGBoost, LightGBM, and CatBoost win a vast majority of tabular data competitions on Kaggle due to unmatched speed and accuracy.',
        bn: 'টেবুলার ডেটাসেটের ক্ষেত্রে এক্সজিবুস্ট ও লাইটজিবিএম বিশ্বের প্রায় সব প্রতিযোগিতায় প্রথম স্থান অধিকার করে।',
      },
      howItWorks: {
        en: '1) Fit initial base prediction; 2) Calculate residuals (actual - pred); 3) Fit a shallow tree to predict the residuals; 4) Add scaled tree prediction: Pred_new = Pred_old + lr * Residual_tree; 5) Repeat for M iterations.',
        bn: '১) প্রথম বেস প্রেডিকশন বের করা; ২) ভুল বা রেসিডুয়াল হিসাব করা; ৩) নতুন একটি ছোট ট্রি দিয়ে সেই ভুল প্রেডিক্ট করা; ৪) লার্নিং রেট গুণ করে আগের প্রেডিকশনের সাথে যোগ করা; ৫) এভাবে শতবার পুনরাবৃত্তি করা।',
      },
      formula: {
        expression: '\\hat{y}_i^{(t)} = \\hat{y}_i^{(t-1)} + \\eta \\cdot f_t(x_i), \\quad \\text{Obj}^{(t)} = \\sum_{i=1}^n L(y_i, \\hat{y}_i) + \\Omega(f_t)',
        parts: [
          { symbol: '\\hat{y}_i^{(t)}', meaning: { en: 'Prediction after adding the t-th boosted tree', bn: 't-তম ট্রি যোগ করার পর নতুন অনুমিত মান' } },
          { symbol: '\\eta', meaning: { en: 'Shrinkage / learning rate preventing individual trees from dominating', bn: 'শ্রিনকেজ বা লার্নিং রেট যা ট্রির অতিরিক্ত প্রভাব আটকায়' } },
          { symbol: '\\Omega(f_t)', meaning: { en: 'Tree complexity regularization term penalizing deep leaves', bn: 'রেগুলারাইজেশন টার্ম যা জটিলতা কমায়' } },
        ],
      },
      practicalApplication: {
        en: 'High-frequency algorithmic trading, ad-click prediction, and e-commerce conversion propensity.',
        bn: 'বিজ্ঞাপনে ক্লিক করার সম্ভাবনা অনুমান এবং ই-কমার্স কেনাকাটার পূর্বাভাস।',
      },
      codeExample: {
        title: 'Gradient Boosting with Scikit-Learn',
        language: 'python',
        code: `from sklearn.ensemble import GradientBoostingClassifier
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split

X, y = make_classification(n_samples=500, n_features=6, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Gradient Boosting with shrinkage (learning_rate=0.05)
gb = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.05,
    max_depth=3, # Shallow trees (stumps) are best for boosting!
    random_state=42
)
gb.fit(X_train, y_train)

acc = gb.score(X_test, y_test)
print(f"Gradient Boosting Test Accuracy: {acc * 100:.2f}%")`,
        expectedOutput: `Gradient Boosting Test Accuracy: 93.00%`,
        explanation: {
          en: [
            'Each tree has max_depth=3 (shallow weak learners).',
            'learning_rate=0.05 smoothly regularizes iterative gradient descent steps.',
          ],
          bn: [
            'প্রতিটি ট্রির গভীরতা মাত্র ৩ রাখা হয়েছে যাতে একক ট্রি জটিল না হয়।',
            'লার্নিং রেট ০.০৫ দিয়ে ধাপে ধাপে শেখানো হয়েছে ফলে ৯৩% নিখুঁত টেস্ট স্কোর এসেছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Setting max_depth=15 in Gradient Boosting, causing immediate overfitting in 10 rounds.',
            bn: 'বুস্টিংয়ে ট্রির গভীরতা অনেক বড় (যেমন ১৫) রাখা, যার ফলে দ্রুত ওভারফিটিং হয়ে যায়।',
          },
          solution: {
            en: 'Unlike Random Forest, Boosting requires shallow trees (max_depth 3 to 6).',
            bn: 'র‍্যান্ডম ফরেস্টের মতো নয়; বুস্টিংয়ে ট্রির গভীরতা সবসময় ছোট (৩ থেকে ৬) রাখতে হয়।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Bagging vs Boosting', bn: 'ব্যাগিং বনাম বুস্টিং পার্থক্য' },
        instructions: {
          en: 'Can Random Forest trees be trained in parallel on multiple CPU cores? Can Boosting trees be parallelized the same way?',
          bn: 'র‍্যান্ডম ফরেস্ট কি মাল্টিপল সিপিইউ-তে প্যারালালে চালানো যায়? আর বুস্টিং কি সেভাবে চালানো সম্ভব?',
        },
        hint: {
          en: 'Random Forest trees are independent (parallelizable). Boosting trees are sequential (tree 2 depends on tree 1\'s errors).',
          bn: 'র‍্যান্ডম ফরেস্টের ট্রিগুলো স্বাধীন (প্যারালাল)। কিন্তু বুস্টিং সিকোয়েন্সিয়াল (পরের ট্রি আগেরটার ভুলের ওপর নির্ভরশীল)।',
        },
      },
      nextLessonId: 'l6-regularization-shap',
    },
    {
      id: 'l6-regularization-shap',
      levelId: 6,
      slug: 'regularization-and-shap-explainability',
      title: {
        en: 'Regularization (Ridge/Lasso) & Model Interpretability (SHAP)',
        bn: 'রেগুলারাইজেশন (L1/L2) ও মডেল ব্যাখ্যা (SHAP)',
      },
      subtitle: {
        en: 'Taming overconfident models with weight penalties and explaining black-box AI with Shapley values',
        bn: 'ওভারফিটিং প্রতিরোধে পেনাল্টি যোগ এবং ব্ল্যাকবক্স মডেলের ভেতরের কারণ উন্মোচন',
      },
      difficulty: 'Advanced',
      estimatedMinutes: 30,
      category: 'Model Governance',
      whatIsIt: {
        en: 'Regularization adds a mathematical penalty term to the loss function to shrink coefficients towards zero, preventing overfitting. L1 (Lasso) zeroes out irrelevant features. L2 (Ridge) shrinks all weights proportionally. SHAP (SHapley Additive exPlanations) uses game theory to explain individual predictions.',
        bn: 'রেগুলারাইজেশন লস ফাংশনে বাড়তি পেনাল্টি যোগ করে প্যারামিটারগুলোর মান ছোট রাখে যাতে মডেল জটিল না হয়ে ওভারফিটিং এড়ায়। L1 (Lasso) অপ্রয়োজনীয় ফিচারকে শূন্য করে দেয়। L2 (Ridge) সব ওজনকে ছোট করে। আর SHAP প্রতিটি পূর্বাভাসের পেছনের কারণ স্পষ্ট করে দেয়।',
      },
      analogy: {
        en: 'L1 Regularization is like Marie Kondo organizing a cluttered room: if an object does not spark joy (no predictive value), she discards it entirely (weight becomes 0). L2 is like a team coach making all players jog at a disciplined moderate pace without any rogue sprinters.',
        bn: 'L1 রেগুলারাইজেশন অপ্রয়োজনীয় আসবাবপত্র ঘর থেকে পুরোপুরি ফেলে দেওয়ার মতো (ওয়েট = ০ করে দেয়)। আর L2 হলো গাড়ির স্পিড লিমিটারের মতো—কাউকে পাগলের মতো অতিরিক্ত গতি তুলতে দেয় না।',
      },
      whyItMatters: {
        en: 'High-stakes industries (finance, healthcare, legal) cannot deploy black-box models without explainability. SHAP tells a loan applicant exactly why their mortgage was declined.',
        bn: 'ব্যাংক বা হাসপাতালে কোনো মডেল কেবল "হ্যাঁ" বা "না" বললে চলে না, কেন এই সিদ্ধান্ত নেওয়া হলো তার আইনি ব্যাখ্যা দিতে SHAP ব্যবহৃত হয়।',
      },
      howItWorks: {
        en: 'Loss_Ridge = MSE + α * Σ(w_i)^2. Loss_Lasso = MSE + α * Σ|w_i|. SHAP values compute the marginal contribution of each feature across all possible coalition subsets of features.',
        bn: 'রিজ রিগ্রেশনে ওজনের বর্গের সমষ্টি এবং ল্যাসোতে পরমান মানের সমষ্টি পেনাল্টি হিসেবে যোগ হয়। SHAP প্রতিটি বৈশিষ্ট্যের ইতিবাচক বা নেতিবাচক অবদান পরিমাপ করে।',
      },
      formula: {
        expression: 'L_{Ridge} = \\text{MSE} + \\lambda \\sum w_j^2, \\quad L_{Lasso} = \\text{MSE} + \\lambda \\sum |w_j|',
        parts: [
          { symbol: '\\lambda (lambda)', meaning: { en: 'Regularization penalty strength parameter', bn: 'রেগুলারাইজেশন পেনাল্টির শক্তি' } },
          { symbol: '\\sum |w_j|', meaning: { en: 'L1 norm inducing exact sparsity (zero weights for useless features)', bn: 'L1 নর্ম যা অপ্রয়োজনীয় বৈশিষ্ট্যের ওয়েট পুরোপুরি শূন্য বানিয়ে দেয়' } },
        ],
      },
      practicalApplication: {
        en: 'Selecting the top 10 most predictive genetic markers out of 25,000 sequenced genes using Lasso.',
        bn: '২৫,০০০ জিনের মধ্য থেকে মাত্র ১০টি কার্যকরী মার্কার বাছাই করতে ল্যাসো ব্যবহার।',
      },
      codeExample: {
        title: 'L1 Lasso Feature Selection vs L2 Ridge',
        language: 'python',
        code: `from sklearn.linear_model import Lasso, Ridge
import numpy as np

# 5 features, but features 3 & 4 are pure random useless noise
np.random.seed(42)
X = np.random.randn(50, 5)
y = 3.0 * X[:, 0] + 1.5 * X[:, 1] + np.random.randn(50) * 0.1

# 1. Lasso (L1) - Automatic Feature Selection
lasso = Lasso(alpha=0.2)
lasso.fit(X, y)
print("Lasso learned weights (Zeroes out noise!):")
print(np.round(lasso.coef_, 2))

# 2. Ridge (L2) - Weight Shrinkage
ridge = Ridge(alpha=1.0)
ridge.fit(X, y)
print("\\nRidge learned weights (Shrinks weights safely):")
print(np.round(ridge.coef_, 2))`,
        expectedOutput: `Lasso learned weights (Zeroes out noise!):
[2.81 1.3  0.   0.  -0.  ]

Ridge learned weights (Shrinks weights safely):
[2.85 1.43 0.05 0.01 0.03]`,
        explanation: {
          en: [
            'Lasso set weights of noise features 2, 3, and 4 to EXACTLY 0.00!',
            'Ridge kept small non-zero weights on all features while damping instability.',
          ],
          bn: [
            'ল্যাসো অপ্রয়োজনীয় নয়েজ ফিচারগুলোর ওয়েট নিখুঁতভাবে ০.০০ বানিয়ে দিয়েছে!',
            'রিজ সব ওয়েটের মান ছোট রেখে ওভারফিটিং নিয়ন্ত্রণ করেছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Using Lasso without first standardizing feature scales (StandardScaler).',
            bn: 'স্কেলিং না করেই ল্যাসো ব্যবহার করা।',
          },
          solution: {
            en: 'Regularization penalties penalize larger magnitude numbers unfairly; scaling is mandatory before L1/L2.',
            bn: 'স্কেলিং না করলে বড় সংখ্যার ফিচার অযথা বেশি পেনাল্টি পাবে; তাই স্কেলিং বাধ্যতামূলক।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Choose L1 or L2', bn: 'L1 নাকি L2 নির্বাচন' },
        instructions: {
          en: 'You have 10,000 features and suspect only 50 are truly predictive. Which regularization should you use?',
          bn: '১০,০০০ ফিচারের মধ্যে মাত্র ৫০টি কাজের বলে ধারণা করা হলে কোনটি বেছে নেবেন?',
        },
        hint: {
          en: 'L1 (Lasso) performs automatic feature selection by forcing uninformative weights to zero.',
          bn: 'L1 (Lasso) কারণ এটি অপ্রয়োজনীয় ফিচার শূন্য করে দেয়।',
        },
      },
      previousLessonId: 'l6-boosting-xgboost',
    },
  ],
};
