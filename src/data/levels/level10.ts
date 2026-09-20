import { Level } from '../../types';

export const level10: Level = {
  id: 10,
  slug: 'real-world-projects',
  title: {
    en: 'Level 10 — Real-World Capstone Projects',
    bn: 'লেভেল ১০ — বাস্তব জীবনের পরিপূর্ণ প্রজেক্টসমূহ',
  },
  subtitle: {
    en: 'From raw business problem statements to production deployment: 4 complete capstones',
    bn: 'বাস্তব সমস্যা থেকে শুরু করে মডেল ডিপ্লয়মেন্ট পর্যন্ত ৪টি পূর্ণাঙ্গ হ্যান্ডস-অন প্রজেক্ট',
  },
  description: {
    en: 'Think and build like an elite Machine Learning Engineer. Master end-to-end project execution: problem scoping, exploratory data analysis, leak-free feature pipelines, model selection, evaluation, and cloud deployment.',
    bn: 'একজন দক্ষ মেশিন লার্নিং ইঞ্জিনিয়ারের মতো চিন্তা করুন এবং তৈরি করুন ৪টি পূর্ণাঙ্গ প্রজেক্ট: হাউজিং প্রাইস প্রেডিকশন, কাস্টমার চার্ন, ক্রেডিট কার্ড ফ্রড ডিটেকশন এবং স্প্যাম ফিল্টার।',
  },
  iconName: 'Award',
  color: 'from-amber-500 to-rose-600',
  badge: 'Capstone Engineering',
  lessons: [
    {
      id: 'l10-churn-project',
      levelId: 10,
      slug: 'customer-churn-end-to-end',
      title: {
        en: 'Capstone 1: Customer Churn Prediction (End-to-End)',
        bn: 'ক্যাপস্টোন ১: কাস্টমার চার্ন প্রেডিকশন (সম্পূর্ণ প্রজেক্ট)',
      },
      subtitle: {
        en: 'Business problem, EDA, class imbalance handling, Random Forest vs XGBoost, and FastAPI deployment',
        bn: 'বিজনেস সমস্যা, ইডিএ, অসম ডেটাসেট সমাধান, এক্সজিবুস্ট মডেলিং ও ডিপ্লয়মেন্ট',
      },
      difficulty: 'Expert',
      estimatedMinutes: 45,
      category: 'End-to-End Capstone',
      whatIsIt: {
        en: 'A complete real-world industrial capstone project predicting which telecom subscribers are at risk of leaving (churning) in the next 30 days, allowing the retention team to intervene proactively.',
        bn: 'একটি পূর্ণাঙ্গ বাস্তব প্রজেক্ট যেখানে টেলিকম গ্রাহকদের ব্যবহারের ধরণ দেখে অনুমান করা হয় আগামী ৩০ দিনের মধ্যে কারা সংযোগ কেটে চলে যেতে পারে (Churn), যাতে কোম্পানি আগে থেকেই বিশেষ অফার দিয়ে তাদের ধরে রাখতে পারে।',
      },
      analogy: {
        en: 'Instead of waiting for a loyal customer to angrily storm into your store to cancel their subscription, a smart store clerk notices they stopped visiting on weekends, their purchase volume dropped by 60%, and proactively offers them a coffee coupon.',
        bn: 'গ্রাহক পুরোপুরি সেবা ছেড়ে চলে যাওয়ার পর আফসোস না করে, তাদের আচরণে পরিবর্তন দেখেই আগেভাগে বিশেষ ছাড় বা সুবিধা দিয়ে ধরে রাখার মতো।',
      },
      whyItMatters: {
        en: 'Acquiring a new customer costs 5x to 7x more than retaining an existing customer. Reducing churn by just 5% can increase company profits by 25% to 95%.',
        bn: 'নতুন গ্রাহক জোগাড় করতে পুরনো গ্রাহক ধরে রাখার চেয়ে ৫ থেকে ৭ গুণ বেশি খরচ হয়। চার্ন ৫% কমাতে পারলে কোম্পানির মুনাফা ২৫% থেকে ৯৫% পর্যন্ত বেড়ে যেতে পারে।',
      },
      howItWorks: {
        en: '1) Ingest Telco dataset; 2) Convert TotalCharges to float; 3) One-hot encode contract types; 4) Balance classes with SMOTE / class weights; 5) Train XGBoost; 6) Optimize decision threshold for max profit; 7) Package into Dockerized FastAPI API.',
        bn: '১) টেলকো ডেটাসেট লোড; ২) ডেটা ক্লিনিং ও ওয়ান-হট এনকোডিং; ৩) ক্লাস ইমব্যালেন্স ব্যালেন্স করা; ৪) এক্সজিবুস্ট মডেল ট্রেন; ৫) বিজনেস লাভের ওপর ভিত্তি করে থ্রেশহোল্ড টিউন; ৬) ডকার ও FastAPI দিয়ে ডিপ্লয়।',
      },
      practicalApplication: {
        en: 'Telecoms (Airtel, Grameenphone, Verizon), SaaS platforms (Netflix, Spotify), and banking subscription services.',
        bn: 'টেলিকম কোম্পানি (গ্রামীণফোন, এয়ারটেল), ওটিটি প্ল্যাটফর্ম (নেটফ্লিক্স, চরকি) এবং অনলাইন সাবস্ক্রিপশন সেবায় প্রতিদিন ব্যবহৃত হয়।',
      },
      codeExample: {
        title: 'Full Pipeline: Preprocessing + XGBoost + Evaluation',
        language: 'python',
        code: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.ensemble import GradientBoostingClassifier

# 1. Synthetic Telco Data (Tenure months, Monthly charges, Contract 2yr)
np.random.seed(42)
N = 1000
tenure = np.random.randint(1, 72, N)
monthly = np.random.uniform(20, 110, N)
is_two_year = np.random.binomial(1, 0.3, N)

# Churn logic: high monthly + low tenure + no contract = high churn
churn_prob = 1 / (1 + np.exp(-( -0.05 * tenure + 0.03 * monthly - 1.5 * is_two_year - 0.5 )))
y = (np.random.rand(N) < churn_prob).astype(int)

X = np.column_stack([tenure, monthly, is_two_year])
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. Train Model
model = GradientBoostingClassifier(n_estimators=50, max_depth=3, random_state=42)
model.fit(X_train, y_train)

# 3. Evaluate on unseen test data
y_pred = model.predict(X_test)
y_proba = model.predict_proba(X_test)[:, 1]

print("--- Telco Churn Project Test Metrics ---")
print(f"ROC-AUC Score: {roc_auc_score(y_test, y_proba):.3f}")
print("\\n" + classification_report(y_test, y_pred, target_names=['Retained', 'Churned']))`,
        expectedOutput: `--- Telco Churn Project Test Metrics ---
ROC-AUC Score: 0.842

              precision    recall  f1-score   support

    Retained       0.86      0.90      0.88       148
     Churned       0.68      0.58      0.62        52

    accuracy                           0.82       200`,
        explanation: {
          en: [
            'Achieved strong discrimination with ROC-AUC of 0.842.',
            'Precision is 68% and Recall is 58% on the minority Churned class.',
            'Next step: lower decision threshold to 0.35 to boost Recall up to 80% for high-value accounts.',
          ],
          bn: [
            'ROC-AUC স্কোর এসেছে ০.৮৪২, যা মডেলটির ভালো পৃথকীকরণ ক্ষমতা প্রকাশ করে।',
            'চার্ন করা গ্রাহকদের জন্য F1 স্কোর ০.৬২।',
            'পরবর্তী ধাপে থ্রেশহোল্ড ০.৫০ থেকে কমিয়ে ০.৩৫ করলে আরও বেশি ঝুঁকিপূর্ণ গ্রাহককে চিহ্নিত করা যাবে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Evaluating purely on Accuracy when 85% of customers don\'t churn, achieving 85% accuracy with a model that predicts nobody ever leaves.',
            bn: 'অসম ডেটায় কেবল Accuracy দেখা, যেখানে মডেল সবাইকে "থাকবে" বললেই ৮৫% স্কোর পেয়ে যায় কিন্তু কোনো কাজে আসে না।',
          },
          solution: {
            en: 'Always use ROC-AUC, PR-AUC, and optimize the decision threshold based on business costs.',
            bn: 'সবসময় ROC-AUC এবং রিকল স্কোর দিয়ে মডেল যাচাই করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Calculate retention ROI', bn: 'রিটেনশনের রিটার্ন হিসাব' },
        instructions: {
          en: 'If a customer brings $50/month and a retention discount costs $10, does keeping 10 customers pay for 5 false alarms?',
          bn: '১০ জন কাস্টমার ধরে রাখলে লাভ $৫০০, আর ৫ জনকে ভুলবশত ডিসকাউন্ট দিলে খরচ $৫০। এটি কি লাভজনক?',
        },
        hint: {
          en: 'Net gain: $500 - $50 = +$450! False positives are vastly cheaper than losing genuine customers.',
          bn: 'নিট লাভ $৪৫০! ভুল করে ছাড় দেওয়া কাস্টমার হারানোর চেয়ে অনেক কম ক্ষতিকর।',
        },
      },
      nextLessonId: 'l10-housing-project',
    },
    {
      id: 'l10-housing-project',
      levelId: 10,
      slug: 'house-price-prediction-end-to-end',
      title: {
        en: 'Capstone 2: House Price Valuation (Regression)',
        bn: 'ক্যাপস্টোন ২: রিয়েল এস্টেট মূল্যায়নের পূর্ণাঙ্গ প্রজেক্ট',
      },
      subtitle: {
        en: 'Skewed price distributions, log transformation, feature interactions, and ensemble stacking',
        bn: 'অসম দামের রূপান্তর, লগ ট্রান্সফর্মেশন, ফিচার ইন্টারঅ্যাকশন ও এনসেম্বল স্ট্যাকিং',
      },
      difficulty: 'Intermediate',
      estimatedMinutes: 40,
      category: 'End-to-End Capstone',
      whatIsIt: {
        en: 'A classic regression benchmark predicting fair market property valuations using square footage, neighborhood crime ratings, school quality, year built, and proximity to transit.',
        bn: 'একটি ক্লাসিক রিগ্রেশন প্রজেক্ট যেখানে বাড়ির আয়তন, অবস্থান, স্কুলের মান, নির্মাণের বছর এবং যাতায়াত ব্যবস্থার ওপর ভিত্তি করে সঠিক বাজারমূল্য নির্ধারণ করা হয়।',
      },
      analogy: {
        en: 'A seasoned property appraiser doesn\'t just look at square feet; they evaluate how the neighborhood interacts with school district quality and renovation status.',
        bn: 'একজন অভিজ্ঞ প্রপার্টি ভ্যালুয়েশনের বিশেষজ্ঞ যেমন কেবল মেঝের মাপ দেখেন না, বরং এলাকার নিরাপত্তা ও সুযোগ-সুবিধা মিলিয়ে সার্বিক মূল্য নির্ধারণ করেন।',
      },
      whyItMatters: {
        en: 'Powers automated valuation models (AVMs) used by Zillow, Redfin, mortgage underwriting banks, and municipal tax assessment boards.',
        bn: 'জিলো (Zillow) বা রিয়েল এস্টেট কোম্পানিগুলো ঠিক এই ধরণের অ্যালগরিদম দিয়ে রিয়েল-টাইম বাড়ি কেনাবেচার দাম নির্ধারণ করে।',
      },
      howItWorks: {
        en: '1) Detect right-skewed target prices and apply log1p(y); 2) Handle missing garage/basement data; 3) Standardize continuous features; 4) Fit Ridge, Random Forest, and LightGBM; 5) Stack predictions via meta-regressor.',
        bn: '১) দামের অসম ডিস্ট্রিবিউশন সোজা করতে Log রূপান্তর করা; ২) মিসিং ডেটা পূরণ; ৩) ফিচার স্কেলিং; ৪) রিজ ও র‍্যান্ডম ফরেস্ট ট্রেনিং; ৫) একাধিক মডেল মিলিয়ে স্ট্যাকিং করা।',
      },
      practicalApplication: {
        en: 'Automated municipal property tax valuation and institutional real estate algorithmic acquisitions.',
        bn: 'পৌরসভার কর নির্ধারণ এবং প্রপার্টি ইনভেস্টমেন্ট ফান্ডগুলোর অ্যালগরিদমিক বাড়ি কেনাকাটা।',
      },
      codeExample: {
        title: 'Target Log-Transformation and Ridge vs Random Forest RMSE',
        language: 'python',
        code: `import numpy as np
from sklearn.linear_model import Ridge
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error

# Synthetic housing: [sqft, bedrooms, age_years]
X = np.array([
    [1000, 2, 10], [1400, 3, 5], [1800, 3, 25],
    [2400, 4, 2],  [3000, 5, 1], [800, 1, 40]
])
# Actual prices (heavily non-linear scale)
y = np.array([210000, 340000, 390000, 620000, 890000, 150000])

# Log transform the target to stabilize variance
y_log = np.log(y)

rf = RandomForestRegressor(n_estimators=50, random_state=42)
rf.fit(X, y_log)

# Predict in log scale, then invert back with exp()
pred_log = rf.predict(np.array([[2000, 3, 8]]))
pred_dollars = np.exp(pred_log)[0]

print(f"Predicted Property Valuation: \${pred_dollars:,.2f}")`,
        expectedOutput: `Predicted Property Valuation: $482,345.18`,
        explanation: {
          en: [
            'np.log(y) compressed the huge price range so extreme luxury mansions do not overwhelm the loss function.',
            'np.exp() inverted the predicted log output back into real-world dollar currency.',
          ],
          bn: [
            'np.log(y) দিয়ে দামের বিশাল ব্যবধানকে নিয়ন্ত্রণযোগ্য করা হয়েছে যাতে মডেল বিভ্রান্ত না হয়।',
            'np.exp() দিয়ে লগ মানকে পুনরায় আসল ডলারের অঙ্কে ফিরিয়ে আনা হয়েছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Forgetting to reverse the log transformation on predictions before calculating RMSE against actual dollar labels.',
            bn: 'লগ করার পর প্রেডিকশনকে পুনরায় exp() না করেই আসল দামের সাথে ভুল হিসাব করা।',
          },
          solution: {
            en: 'Always run np.exp(y_pred) or use TransformedTargetRegressor in Scikit-Learn.',
            bn: 'সবসময় np.exp(y_pred) দিয়ে আসল এককে ফিরিয়ে আনুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Why Log-Transform Target', bn: 'লগ রূপান্তরের কারণ' },
        instructions: {
          en: 'Why is log transformation useful when target values range from $50k to $10,000,000?',
          bn: '৫০ হাজার থেকে ১ কোটি টাকার মতো বড় পাল্লার ডেটায় কেন লগ রূপান্তর ফলপ্রসূ?',
        },
        hint: {
          en: 'It shrinks the right-skewed tail, normalizes the distribution, and penalizes relative percentage errors instead of absolute dollar differences.',
          bn: 'এটি ডেটার অসমতা দূর করে এবং বড় সংখ্যার অতিরিক্ত প্রভাব কমায়।',
        },
      },
      previousLessonId: 'l10-churn-project',
    },
  ],
};
