import { Level } from '../../types';

export const level3: Level = {
  id: 3,
  slug: 'data-analysis',
  title: {
    en: 'Level 3 — Data Analysis & Preprocessing',
    bn: 'লেভেল ৩ — ডেটা অ্যানালাইসিস ও প্রিপ্রসেসিং',
  },
  subtitle: {
    en: 'NumPy, Pandas, Matplotlib, Seaborn, Missing Values, Outliers, EDA, and Feature Engineering',
    bn: 'নামপাই, প্যান্ডাস, ডেটা ক্লিনিং, মিসিং ভ্যালু, ভিজ্যুয়ালাইজেশন ও ফিচার ইঞ্জিনিয়ারিং',
  },
  description: {
    en: 'Turn messy real-world CSV files into pristine numeric matrices ready for training. Master missing value imputation, outlier detection, data distribution inspection, and feature transformation.',
    bn: 'বাস্তব জীবনের অগোছালো ও ত্রুটিপূর্ণ ডেটাকে কীভাবে বিশ্লেষণ, পরিষ্কার, ভিজ্যুয়ালাইজ এবং মডেলের উপযোগী সংখ্যায় রূপান্তর করতে হয় তা হাতে-কলমে শিখুন।',
  },
  iconName: 'BarChart3',
  color: 'from-cyan-500 to-blue-600',
  badge: 'Data Wrangling',
  lessons: [
    {
      id: 'l3-numpy-pandas',
      levelId: 3,
      slug: 'numpy-and-pandas-mastery',
      title: {
        en: 'NumPy & Pandas: High-Speed Tabular Manipulation',
        bn: 'নামপাই ও প্যান্ডাস: দ্রুত ডেটা পরিচালনা',
      },
      subtitle: {
        en: 'Vectorized arrays, DataFrames, indexing, filtering, and aggregation',
        bn: 'ভেক্টরাইজড অ্যারে, ডেটাফ্রেম, ফিল্টারিং ও গ্রুপিং টেকনিক',
      },
      difficulty: 'Beginner',
      estimatedMinutes: 25,
      category: 'Data Libraries',
      whatIsIt: {
        en: 'NumPy provides lightning-fast C-backed numerical arrays. Pandas builds on NumPy to provide DataFrames—spreadsheet-like tables with named columns, fast grouping, and slicing.',
        bn: 'NumPy হলো সি ভাষায় অপটিমাইজ করা সুপার-ফাস্ট ম্যাট্রিক্স কম্পিউটেশনের লাইব্রেরি। আর Pandas হলো এক্সেল স্প্রেডশিটের মতো সারি-কলাম বিশিষ্ট DataFrame নিয়ে কাজ করার প্রধান লাইব্রেরি।',
      },
      analogy: {
        en: 'Python lists are like single sheets of loose paper in a binder. NumPy is an industrial high-speed laminator. Pandas is a complete relational database with named folder tabs running right inside your RAM.',
        bn: 'পাইথন লিস্ট হলো আলগা খাতার পাতার মতো। আর প্যান্ডাস হলো স্বয়ংক্রিয় এক্সেল শিট— যেখানে কলামের নাম ধরে এক ক্লিকেই লক্ষ লক্ষ সারির হিসাব করে ফেলা যায়।',
      },
      whyItMatters: {
        en: 'Writing raw Python for loops over 1,000,000 records takes 5 seconds; NumPy vectorization does it in 0.04 seconds (100x faster).',
        bn: 'সাধারণ পাইথনে ১০ লাখ সংখ্যার ওপর লুপ চালালে ৫ সেকেন্ড লাগে, কিন্তু নামপাই বা প্যান্ডাসে ভেক্টরাইজড অপারেশনে সেটি ০.০৪ সেকেন্ডেই শেষ হয়ে যায়।',
      },
      howItWorks: {
        en: 'pd.read_csv() ingests data into memory. df.head() previews the top 5 rows. df.describe() computes count, mean, std, min, quartiles, and max.',
        bn: 'pd.read_csv() দিয়ে ফাইল লোড করা হয়, df.head() দিয়ে শুরুর ৫টি রো এবং df.describe() দিয়ে সব পরিসংখ্যান এক নজরে দেখা যায়।',
      },
      practicalApplication: {
        en: 'Filtering out inactive customers and calculating the average transaction value per city.',
        bn: 'নির্দিষ্ট শহরের ক্রেতাদের আলাদা করা এবং তাদের গড় খরচের পরিমাণ বের করা।',
      },
      codeExample: {
        title: 'Loading, Filtering, and Summarizing Data with Pandas',
        language: 'python',
        code: `import pandas as pd
import numpy as np

# Creating a sample housing DataFrame
data = {
    'city': ['Dhaka', 'Chittagong', 'Dhaka', 'Sylhet', 'Dhaka'],
    'sqft': [1200, 950, 1600, 1100, np.nan], # Missing value!
    'price_usd': [85000, 60000, 120000, 75000, 90000]
}

df = pd.DataFrame(data)
print("--- Missing Values Count ---")
print(df.isnull().sum())

# Mean square footage in Dhaka
dhaka_avg = df[df['city'] == 'Dhaka']['sqft'].mean()
print(f"\\nAvg Sqft in Dhaka (ignoring NaN): {dhaka_avg:.0f} sqft")`,
        expectedOutput: `--- Missing Values Count ---
city         0
sqft         1
price_usd    0
dtype: int64

Avg Sqft in Dhaka (ignoring NaN): 1400 sqft`,
        explanation: {
          en: [
            'df.isnull().sum() instantly audits all columns for empty cells.',
            'df[\'city\'] == \'Dhaka\' creates a boolean mask for row filtering.',
          ],
          bn: [
            'df.isnull().sum() দিয়ে কোন কলামে কয়টি মিসিং ভ্যালু আছে তা দেখা যায়।',
            'শর্ত দিয়ে নির্দিষ্ট শহরের ডেটা ফিল্টার করে গড় বের করা হয়েছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Iterating through DataFrame rows with for i in range(len(df)): or df.iterrows().',
            bn: 'প্যান্ডাস ডেটাফ্রেমে সাধারণ for লুপ চালানো।',
          },
          solution: {
            en: 'Always use vectorized column operations: df["price_k"] = df["price"] / 1000 instead of looping.',
            bn: 'লুপ না চালিয়ে সরাসরি কলামভিত্তিক ভেক্টরাইজড অপারেশন ব্যবহার করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Inspect DataFrame', bn: 'ডেটাফ্রেম পর্যবেক্ষণ' },
        instructions: {
          en: 'Which pandas method displays basic statistical percentiles (25%, 50%, 75%)?',
          bn: 'কোন প্যান্ডাস মেথড দিয়ে গড়, ন্যূনতম ও শতকরা পার্সেন্টাইল দেখা যায়?',
        },
        hint: {
          en: 'df.describe()',
          bn: 'df.describe() মেথড।',
        },
      },
      nextLessonId: 'l3-cleaning-eda',
    },
    {
      id: 'l3-cleaning-eda',
      levelId: 3,
      slug: 'data-cleaning-and-eda',
      title: {
        en: 'Data Cleaning, Missing Values, Outliers & EDA',
        bn: 'ডেটা ক্লিনিং, মিসিং ভ্যালু, আউটলায়ার ও ইডিএ',
      },
      subtitle: {
        en: 'Imputation strategies, IQR boxplots, duplicate removal, and visual correlation heatmaps',
        bn: 'মিসিং ভ্যালু পূরণ, অস্বাভাবিক মান শনাক্তকরণ এবং কোরিলেশন হিটম্যাপ',
      },
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      category: 'Data Wrangling',
      whatIsIt: {
        en: 'Data Cleaning is the systematic resolution of missing, duplicated, corrupt, or outlying values. Exploratory Data Analysis (EDA) investigates distributions and correlations using charts like histograms and heatmaps.',
        bn: 'ডেটা ক্লিনিং হলো ডেটাসেটের অসম্পূর্ণ মান পূরণ, ডুপ্লিকেট বাদ দেওয়া এবং অস্বাভাবিক মান (Outliers) ঠিক করা। আর EDA হলো বিভিন্ন গ্রাফের সাহায্যে ডেটার ভেতরের গোপন চরিত্র ও সম্পর্ক উন্মোচন করা।',
      },
      analogy: {
        en: 'Cleaning raw data is like washing and peeling fresh vegetables before cooking a gourmet meal. If you throw unwashed muddy potatoes into a pan, even a 3-star Michelin chef cannot make a good soup.',
        bn: 'রান্না করার আগে শাকসবজি ধুয়ে পরিষ্কার করার মতো। ময়লা সবজি দিয়ে রান্না করলে যত দক্ষ রাঁধুনীই হোক না কেন, খাবার সুস্বাদু হবে না। ডেটা পরিষ্কার না করে মডেল বানালে ফল সবসময় খারাপ হবে।',
      },
      whyItMatters: {
        en: 'Scikit-Learn algorithms (like Logistic Regression, SVM) will throw immediate errors if passed a single NaN (Not a Number) value.',
        bn: 'ডেটাসেটে একটিমাত্র নাল (NaN) মান থাকলেও সাইকিট-লার্নের অধিকাংশ অ্যালগরিদম সরাসরি এরর দিয়ে ক্র্যাশ করে।',
      },
      howItWorks: {
        en: 'For missing values: SimpleImputer (median for skewed numbers, mode for categories). For outliers: Interquartile Range (IQR = Q3 - Q1), flagging points beyond Q3 + 1.5*IQR.',
        bn: 'মিসিং সংখ্যার জন্য মিডিয়ান এবং ক্যাটাগরির জন্য মোড দিয়ে পূরণ করা হয়। অস্বাভাবিক মান খুঁজতে IQR মেথড ব্যবহার করা হয়।',
      },
      formula: {
        expression: 'IQR = Q_3 - Q_1, \\quad Outliers: x < (Q_1 - 1.5 \\cdot IQR) \\; \\text{or} \\; x > (Q_3 + 1.5 \\cdot IQR)',
        parts: [
          { symbol: 'Q_1', meaning: { en: 'First quartile (25th percentile of sorted data)', bn: '২৫তম পার্সেন্টাইল মান' } },
          { symbol: 'Q_3', meaning: { en: 'Third quartile (75th percentile of sorted data)', bn: '৭৫তম পার্সেন্টাইল মান' } },
          { symbol: 'IQR', meaning: { en: 'Interquartile range containing central 50% of values', bn: 'মধ্যবর্তী ৫০% ডেটার বিস্তৃতি' } },
        ],
      },
      practicalApplication: {
        en: 'Detecting sensor malfunction spikes where a thermometer records 999°C, and imputing missing customer ages with median age.',
        bn: 'থার্মোমিটারে ভুলবশত ৯৯৯ ডিগ্রি আসা রিডিং বাদ দেওয়া এবং মিসিং বয়স মধ্যক দিয়ে পূরণ করা।',
      },
      codeExample: {
        title: 'Imputing Missing Values with Scikit-Learn',
        language: 'python',
        code: `import numpy as np
from sklearn.impute import SimpleImputer

# Feature matrix with missing values (np.nan)
X_raw = np.array([
    [25.0, 50000.0],
    [np.nan, 54000.0],  # Missing age
    [28.0, np.nan],     # Missing salary
    [35.0, 95000.0]
])

# Impute numerical features using the median
imputer = SimpleImputer(strategy='median')
X_clean = imputer.fit_transform(X_raw)

print("--- Cleaned Feature Matrix (No NaNs) ---")
print(np.round(X_clean, 1))`,
        expectedOutput: `--- Cleaned Feature Matrix (No NaNs) ---
[[   25.  50000.]
 [   28.  54000.]
 [   28.  54000.]
 [   35.  95000.]]`,
        explanation: {
          en: [
            'SimpleImputer calculated the median of age (28.0) and salary (54000.0).',
            'Missing values were seamlessly substituted without dropping valuable rows.',
          ],
          bn: [
            'ইম্পিউটার বয়সের মিডিয়ান (২৮.০) ও বেতনের মিডিয়ান (৫৪০০০.০) বের করেছে।',
            'কোনো রো মুছে না ফেলেই মিসিং মানগুলো পূরণ করা হয়েছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Dropping all rows containing any missing value using df.dropna() without checking.',
            bn: 'কিছু না ভেবেই df.dropna() দিয়ে সব মিসিং রো মুছে ফেলা।',
          },
          solution: {
            en: 'If 40% of rows have a missing field, dropping them destroys 40% of your precious training data! Impute instead.',
            bn: 'এতে ডেটাসেটের সিংহভাগ হারিয়ে যেতে পারে। মুছে ফেলার আগে ইম্পিউটেশন বা পূরণ করার কথা বিবেচনা করুন।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Choose Imputation Strategy', bn: 'ইম্পিউটেশন পদ্ধতি নির্বাচন' },
        instructions: {
          en: 'For a column with extreme salary outliers, should you impute using Mean or Median?',
          bn: 'বেতনের চরম আউটলায়ার সম্বলিত কলামে মিসিং ভ্যালু পূরণে গড় নাকি মধ্যক বেশি নিরাপদ?',
        },
        hint: {
          en: 'Median is robust to outliers; Mean gets distorted.',
          bn: 'মধ্যক (Median) আউটলায়ারে প্রভাবিত হয় না।',
        },
      },
      nextLessonId: 'l3-feature-engineering',
      previousLessonId: 'l3-numpy-pandas',
    },
    {
      id: 'l3-feature-engineering',
      levelId: 3,
      slug: 'feature-engineering-and-scaling',
      title: {
        en: 'Feature Engineering, Encoding & Feature Scaling',
        bn: 'ফিচার ইঞ্জিনিয়ারিং, ওয়ান-হট এনকোডিং ও স্কেলিং',
      },
      subtitle: {
        en: 'One-Hot Encoding, StandardScaler, MinMaxScaler, and creating informative interaction ratios',
        bn: 'টেক্সট ক্যাটাগরিকে সংখ্যায় রূপান্তর এবং স্ট্যান্ডার্ড স্কেলিংয়ের নিয়ম',
      },
      difficulty: 'Intermediate',
      estimatedMinutes: 30,
      category: 'Feature Engineering',
      whatIsIt: {
        en: 'Feature Engineering creates new predictor variables from raw data. Encoding converts text categories into binary indicators. Feature Scaling ensures all variables have comparable magnitudes so distance-based algorithms operate fairly.',
        bn: 'ফিচার ইঞ্জিনিয়ারিং হলো কাঁচা তথ্য থেকে নতুন অর্থপূর্ণ বৈশিষ্ট্য তৈরি করা। ওয়ান-হট এনকোডিং টেক্সটকে বাইনারি কলামে রূপান্তর করে। আর স্কেলিং সব সংখ্যাকে একই পাল্লার (যেমন ০ থেকে ১) মধ্যে নিয়ে আসে।',
      },
      analogy: {
        en: 'If a dataset has "Income" in dollars ($100,000) and "Number of Bedrooms" (3), distance algorithms like KNN will think Income is 30,000x more important just because the number is bigger! Scaling levels the playing field so every feature gets equal respect.',
        bn: 'যদি ডেটাসেটে বেতন (১,০০,০০০ টাকা) এবং ঘরের সংখ্যা (৩) থাকে, তবে অ্যালগরিদম ভাববে বেতন ৩৩,০০০ গুণ বেশি গুরুত্বপূর্ণ কারণ সংখ্যাটি বড়! স্কেলিং সব বৈশিষ্ট্যকে সমান পাল্লায় এনে এই অবিচার দূর করে।',
      },
      whyItMatters: {
        en: 'Algorithms like KNN, SVM, Logistic Regression, and Neural Networks with Gradient Descent fail or converge painfully slowly without feature scaling.',
        bn: 'স্কেলিং না করলে KNN, SVM বা গ্রেডিয়েন্ট ডিসেন্ট অপটিমাইজার অনেক ধীরগতিতে কাজ করে এবং ভুল প্রেডিকশন দেয়।',
      },
      howItWorks: {
        en: 'StandardScaler scales data to mean=0 and variance=1: z = (x - μ) / σ. MinMaxScaler squashes numbers into range [0, 1]: (x - min) / (max - min). OneHotEncoder turns ["Red", "Blue"] into separate columns.',
        bn: 'স্ট্যান্ডার্ড স্কেলার ডেটার গড় শূন্য এবং ভ্যারিয়েন্স এক করে দেয়: z = (x - μ) / σ। মিন-ম্যাক্স স্কেলার সব মানকে ০ থেকে ১ এর মাঝে নিয়ে আসে।',
      },
      formula: {
        expression: 'z = \\frac{x - \\mu}{\\sigma}, \\quad x_{norm} = \\frac{x - x_{min}}{x_{max} - x_{min}}',
        parts: [
          { symbol: 'z', meaning: { en: 'Standardized z-score (mean = 0, standard deviation = 1)', bn: 'স্ট্যান্ডার্ডাইজড z-স্কোর' } },
          { symbol: '\\mu', meaning: { en: 'Mean of the feature column across training samples', bn: 'কলামের গড় মান' } },
          { symbol: '\\sigma', meaning: { en: 'Standard deviation of the feature column', bn: 'কলামের পরিমিত ব্যবধান' } },
        ],
      },
      practicalApplication: {
        en: 'Extracting "DayOfWeek" and "IsWeekend" from timestamp strings to improve ride-sharing surge pricing models.',
        bn: 'উবারের মতো অ্যাপে তারিখ থেকে "আজ কি ছুটির দিন?" নামের নতুন কলাম বানিয়ে চাহিদা অনুমান করা।',
      },
      codeExample: {
        title: 'One-Hot Encoding & StandardScaler Pipeline',
        language: 'python',
        code: `import pandas as pd
from sklearn.preprocessing import StandardScaler

df = pd.DataFrame({
    'city': ['Dhaka', 'Chittagong', 'Dhaka'],
    'sqft': [1200, 800, 2400]
})

# 1. One-Hot Encoding categorical 'city'
encoded_df = pd.get_dummies(df, columns=['city'], drop_first=True, dtype=int)
print("--- After One-Hot Encoding ---")
print(encoded_df)

# 2. Scaling the 'sqft' column
scaler = StandardScaler()
encoded_df['sqft_scaled'] = scaler.fit_transform(encoded_df[['sqft']])
print("\\n--- After StandardScaler (Mean 0, Std 1) ---")
print(encoded_df[['sqft', 'sqft_scaled']])`,
        expectedOutput: `--- After One-Hot Encoding ---
   sqft  city_Dhaka
0  1200           1
1   800           0
2  2400           1

--- After StandardScaler (Mean 0, Std 1) ---
   sqft  sqft_scaled
0  1200    -0.408248
1   800    -1.020621
2  2400     1.428869`,
        explanation: {
          en: [
            'pd.get_dummies converted the text strings into numeric flags.',
            'StandardScaler converted square footage into standard deviations from the mean.',
          ],
          bn: [
            'get_dummies টেক্সট কলামকে ১ ও ০ এর বাইনারি কলামে রূপান্তর করেছে।',
            'StandardScaler আয়তনকে গড় থেকে দূরত্বের z-স্কোরে রূপান্তর করেছে।',
          ],
        },
      },
      commonMistakes: [
        {
          mistake: {
            en: 'Fitting the scaler on the entire dataset before doing train/test split (Data Leakage).',
            bn: 'ট্রেন/টেস্ট স্প্লিট করার আগেই পুরো ডেটার ওপর স্কেলার fit করা (ডেটা লিকেজ)।',
          },
          solution: {
            en: 'Always fit the scaler on the training set ONLY: scaler.fit(X_train), then transform both X_train and X_test.',
            bn: 'সবসময় শুধু ট্রেনিং ডেটায় fit করতে হবে, টেস্ট ডেটায় কেবল transform করতে হবে।',
          },
        },
      ],
      practiceTask: {
        title: { en: 'Spot the distance-sensitive algorithm', bn: 'স্কেলিং সংবেদনশীল মডেল' },
        instructions: {
          en: 'Does a Decision Tree require feature scaling? What about KNN?',
          bn: 'ডিসিশন ট্রির জন্য কি স্কেলিং প্রয়োজন? নাকি KNN-এর জন্য?',
        },
        hint: {
          en: 'Decision Trees split on single features and are scale-invariant. KNN uses Euclidean distance and strictly requires scaling!',
          bn: 'ডিসিশন ট্রিতে স্কেলিং লাগে না, কিন্তু দূরত্বের কারণে KNN-এ স্কেলিং বাধ্যতামূলক।',
        },
      },
      previousLessonId: 'l3-cleaning-eda',
    },
  ],
};
